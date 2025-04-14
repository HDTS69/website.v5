import { test, expect } from '@playwright/test';
import { format, addDays } from 'date-fns';

// Helper function to calculate the end of this/next week (Saturday)
function getEndOfWeek(date: Date, weeksToAdd = 0): Date {
  const result = new Date(date);
  const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
  const daysUntilSaturday = 6 - dayOfWeek; // Days until Saturday
  
  // Add days until Saturday, plus additional weeks if needed
  result.setDate(date.getDate() + daysUntilSaturday + (weeksToAdd * 7));
  return result;
}

test.describe('DatePicker Component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page where the HeroBookingForm is present
    await page.goto('http://localhost:3000');
  });

  test('should show the date format correctly for individual dates', async ({ page }) => {
    // Look for the Date field in the booking form
    const datePickerButton = page.locator('.bg-black button:has-text("Choose date")').first();
    if (!await datePickerButton.isVisible()) {
      console.log('DatePicker button not found with primary selector, trying alternative...');
      // Try alternative selector
      await page.locator('button:has-text("Book Now")').first().click();
      await page.waitForTimeout(1000); // Wait for any animations
    }
    
    // Open the DatePicker
    await datePickerButton.click();
    
    // Wait for the calendar to be visible
    await page.waitForSelector('.rdp-months');
    
    // Select a date that is NOT the end of this week or next week
    // Find a date in the middle of the week
    const today = new Date();
    const midWeekDate = new Date(today);
    midWeekDate.setDate(today.getDate() + 3); // Add a few days but avoid next Saturday
    
    // Ensure we're not hitting a Saturday (end of week)
    if (midWeekDate.getDay() === 6) {
      midWeekDate.setDate(midWeekDate.getDate() + 1); // Move to Sunday if we hit Saturday
    }
    
    // Format the date for finding in the calendar
    const dateToSelect = format(midWeekDate, 'd');
    
    // Click on the date in the calendar
    await page.locator(`.rdp-day:has-text("${dateToSelect}")`).click();
    
    // Verify the button text shows the specific date in the correct format
    const expectedDateText = format(midWeekDate, 'dd MMMM yyyy');
    await expect(datePickerButton).toContainText(expectedDateText);
  });

  test('should show "This Week" range when selecting end of current week', async ({ page }) => {
    // Look for the Date field in the booking form
    const datePickerButton = page.locator('.bg-black button:has-text("Choose date")').first();
    if (!await datePickerButton.isVisible()) {
      console.log('DatePicker button not found with primary selector, trying alternative...');
      // Try alternative selector
      await page.locator('button:has-text("Book Now")').first().click();
      await page.waitForTimeout(1000); // Wait for any animations
    }
    
    // Open the DatePicker
    await datePickerButton.click();
    
    // Wait for the calendar to be visible
    await page.waitForSelector('.rdp-months');
    
    // Use the This Week button
    await page.locator('button:has-text("This Week")').click();
    
    // Calculate the expected date range
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Sunday
    const endOfWeek = getEndOfWeek(today); // Saturday
    
    // Verify the button shows the week range text
    const expectedWeekRangeText = `This Week (${format(startOfWeek, 'MMM d')} - ${format(endOfWeek, 'MMM d')})`;
    await expect(datePickerButton).toContainText(expectedWeekRangeText);
  });

  test('should show "Next Week" range when selecting end of next week', async ({ page }) => {
    // Look for the Date field in the booking form
    const datePickerButton = page.locator('.bg-black button:has-text("Choose date")').first();
    if (!await datePickerButton.isVisible()) {
      console.log('DatePicker button not found with primary selector, trying alternative...');
      // Try alternative selector
      await page.locator('button:has-text("Book Now")').first().click();
      await page.waitForTimeout(1000); // Wait for any animations
    }
    
    // Open the DatePicker
    await datePickerButton.click();
    
    // Wait for the calendar to be visible
    await page.waitForSelector('.rdp-months');
    
    // Use the Next Week button
    await page.locator('button:has-text("Next Week")').click();
    
    // Calculate the expected date range
    const today = new Date();
    const startOfNextWeek = new Date(today);
    startOfNextWeek.setDate(today.getDate() + (7 - today.getDay())); // Next Sunday
    const endOfNextWeek = getEndOfWeek(today, 1); // Next Saturday
    
    // Verify the button shows the week range text
    const expectedWeekRangeText = `Next Week (${format(startOfNextWeek, 'MMM d')} - ${format(endOfNextWeek, 'MMM d')})`;
    await expect(datePickerButton).toContainText(expectedWeekRangeText);
  });
}); 