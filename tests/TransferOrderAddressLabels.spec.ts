import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto ('https://icsstg-purplecobras.oraclecloud.rfsmart.com/webclient');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('dev.one');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('RFSics1650');
  await page.getByRole('button', {name: 'Login'}).click();
  await page.getByRole('link', { name: 'QA Regression' }).click();
  await page.getByRole('link', { name: 'Transfer Order Address Labels' }).click();
  await page.getByPlaceholder('Organization Code').click();
  await page.getByPlaceholder('Organization Code').fill('001');
  await page.getByPlaceholder('Organization Code').press('Enter');
  await page.getByPlaceholder('Order').click();
  await page.getByPlaceholder('Order').fill('23123');
 await page.getByPlaceholder('Order').press('Enter');
 await page.getByPlaceholder('Quantity of labels').click();
 await page.getByPlaceholder('Quantity of labels').fill('1');
 await page.getByPlaceholder('Quantity of labels').press('Enter');
 await page.getByRole('link', { name: 'List' }).click();
 await page.getByRole('cell', { name: '\\\\PRINT-SERV\\Lexmark-room' }).click();
 await page.getByRole('link', { name: 'Exit' }).click();
 await page.getByRole('link', { name: 'Exit' }).click();
});