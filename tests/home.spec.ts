import { test, expect } from '@playwright/test';

test('Has the name of the correct city', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('city-name')).toHaveText("London")
});

