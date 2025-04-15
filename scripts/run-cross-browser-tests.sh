#!/bin/bash

# Cross-browser Testing Script
# This script runs Playwright tests across multiple browsers and device configurations
# to ensure cross-browser and mobile compatibility

set -e # Exit on error

# Print header
echo "=================================="
echo "HD Trade Services Cross-Browser Test Runner"
echo "=================================="
echo "Running tests across multiple browsers and devices"
echo ""

# Ensure dependencies are installed
echo "Checking Playwright installation..."
if ! npx playwright --version &> /dev/null; then
  echo "Installing Playwright..."
  npm install -D @playwright/test
  npx playwright install
fi

# Create output directory for results
RESULTS_DIR="test-results/cross-browser/$(date +%Y-%m-%d_%H-%M-%S)"
mkdir -p "$RESULTS_DIR"

# Function to run tests on a specific configuration
run_test() {
  local name=$1
  local project=$2
  local test_file=$3

  echo "Running tests on $name..."
  
  if [ -z "$test_file" ]; then
    # Run all tests for the specified project
    npx playwright test --project="$project" --reporter=html,line
  else
    # Run specific test file for the specified project
    npx playwright test "$test_file" --project="$project" --reporter=html,line
  fi
  
  # Copy results to dated folder
  if [ -d "playwright-report" ]; then
    mkdir -p "$RESULTS_DIR/$name"
    cp -r playwright-report/* "$RESULTS_DIR/$name/"
  fi
  
  echo "Tests completed for $name"
  echo ""
}

# Function to run specific compatibility tests
run_compatibility_tests() {
  echo "Running cross-browser compatibility tests..."
  
  # Run cross-browser tests on all browsers
  npx playwright test tests/e2e/cross-browser-compatibility.spec.ts --project=chromium --project=firefox --project=webkit --reporter=html,line
  
  # Copy results
  if [ -d "playwright-report" ]; then
    mkdir -p "$RESULTS_DIR/cross-browser-compatibility"
    cp -r playwright-report/* "$RESULTS_DIR/cross-browser-compatibility/"
  fi
  
  echo "Cross-browser compatibility tests completed"
  echo ""
}

# Function to run mobile-specific tests
run_mobile_tests() {
  echo "Running mobile responsiveness tests..."
  
  # Run mobile tests on mobile configurations
  npx playwright test tests/e2e/mobile-responsiveness.spec.ts --project=mobile-chrome --project=mobile-safari --reporter=html,line
  
  # Copy results
  if [ -d "playwright-report" ]; then
    mkdir -p "$RESULTS_DIR/mobile-responsiveness"
    cp -r playwright-report/* "$RESULTS_DIR/mobile-responsiveness/"
  fi
  
  echo "Mobile responsiveness tests completed"
  echo ""
}

# Function to run Google Maps tests
run_maps_tests() {
  echo "Running Google Maps tests..."
  
  # Run Google Maps tests on all configurations
  npx playwright test tests/e2e/google-maps.spec.ts --reporter=html,line
  
  # Copy results
  if [ -d "playwright-report" ]; then
    mkdir -p "$RESULTS_DIR/google-maps"
    cp -r playwright-report/* "$RESULTS_DIR/google-maps/"
  fi
  
  echo "Google Maps tests completed"
  echo ""
}

# Parse command line arguments
TEST_TYPE="all"
if [ $# -gt 0 ]; then
  TEST_TYPE=$1
fi

case $TEST_TYPE in
  "all")
    # Run all tests on all configurations
    run_compatibility_tests
    run_mobile_tests
    run_maps_tests
    ;;
  "desktop")
    # Run tests on desktop browsers only
    run_test "chromium" "chromium"
    run_test "firefox" "firefox"
    run_test "webkit" "webkit"
    ;;
  "mobile")
    # Run tests on mobile configurations only
    run_mobile_tests
    ;;
  "compatibility")
    # Run just the cross-browser compatibility tests
    run_compatibility_tests
    ;;
  "maps")
    # Run just the Google Maps tests
    run_maps_tests
    ;;
  *)
    echo "Unknown test type: $TEST_TYPE"
    echo "Usage: $0 [all|desktop|mobile|compatibility|maps]"
    exit 1
    ;;
esac

# Generate combined report
echo "Generating combined report..."
npx playwright merge-reports "$RESULTS_DIR" --reporter=html,line
mv playwright-report "$RESULTS_DIR/combined-report"

# Print summary
echo ""
echo "===================================="
echo "Cross-Browser Testing Complete!"
echo "===================================="
echo "Test results available at: $RESULTS_DIR/combined-report/index.html"
echo ""
echo "Open the report with:"
echo "npx playwright show-report \"$RESULTS_DIR/combined-report\""
echo ""

exit 0 