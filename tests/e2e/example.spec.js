// tests/e2e/example.spec.js
const { test, expect } = require('@playwright/test');

test('should display the correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Expected Title');
});

test('should display "Hello, World!" text', async ({ page }) => {
  await page.goto('/');
  const content = await page.textContent('#app');
  expect(content).toBe('Hello, World!');
});
