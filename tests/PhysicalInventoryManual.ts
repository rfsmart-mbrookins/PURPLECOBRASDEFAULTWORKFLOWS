import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto ('https://icsstg-purplecobras.oraclecloud.rfsmart.com/webclient');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('dev.one');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('RFSics1650');
  await page.getByRole('button', {name: 'Login'}).click();
  await page.getByRole('link', { name: 'QA Regression' }).click();
  await page.getByRole('link', { name: 'Physical Inventory Manual' }).click();