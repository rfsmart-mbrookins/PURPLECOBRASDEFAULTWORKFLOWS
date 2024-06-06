import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://icsstg-purplecobras.oraclecloud.rfsmart.com/webclient');

  // Function to attempt auth server login
  const authServerLogin = async () => {
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('dev.one');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('mn');
    await page.getByRole('button', { name: 'Login' }).click();
  };

  // Function to attempt legacy login
  const legacyLogin = async () => {
    await page.getByPlaceholder('User ID').click();
    await page.getByPlaceholder('User ID').fill('dev.one');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('sdf');
    await page.getByRole('link', { name: 'Enter' }).click();
  };

  try {
    await authServerLogin();
  } catch (error) {
    console.error('Authentication server login failed. Attempting legacy login.');
    await legacyLogin();
  }
});
