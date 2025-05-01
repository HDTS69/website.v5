#!/bin/bash

# Define directories to search
directories=("app" "src" "components")
# Define prefixes to check and potentially update
prefixes=("components" "lib" "hooks" "utils" "config" "types")

# Find all TypeScript and TypeScript JSX files in the specified directories
find "${directories[@]}" -type f \( -name "*.ts" -o -name "*.tsx" \) | while read -r file; do
  # Check if the file exists and is a regular file before proceeding
  if [ -f "$file" ]; then
    updated=false
    for prefix in "${prefixes[@]}"; do
      # Use grep to find lines matching the pattern "@/<prefix>/" but NOT "@src/<prefix>/"
      # Process matching lines with sed to add "src/"
      # Use process substitution and temporary files for macOS compatibility
      
      # Store lines needing updates
      grep -E "'@/$prefix/" "$file" | grep -vE "'@src/$prefix/" > temp_matches_$$.txt || true
      grep -E '"@/'$prefix'/"' "$file" | grep -vE '"@src/'$prefix'/"' >> temp_matches_$$.txt || true

      if [ -s temp_matches_$$.txt ]; then
        # If matches found, apply the replacement
        # Use a different delimiter for sed to handle slashes
        sed -i.bak "s|'@/$prefix/|'@src/$prefix/|g; s|\"@/$prefix/|\"@src/$prefix/|g" "$file"
        rm "${file}.bak" # Remove backup file created by sed -i on macOS
        updated=true
      fi
      rm -f temp_matches_$$.txt # Clean up temp file
    done

    if $updated; then
      echo "Checked/Updated potentially incorrect paths in: $file"
    fi
  else
    echo "Skipped (not a file): $file"
  fi
done

echo "Finished checking and potentially updating import paths." 