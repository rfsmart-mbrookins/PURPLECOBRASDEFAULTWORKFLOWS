import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto ('https://icsstg-purplecobras.oraclecloud.rfsmart.com/webclient');
/* Enable for Auth Server disable for legacy login*/
  // await page.getByPlaceholder('Username').click();
  // await page.getByPlaceholder('Username').fill('dev.one');
  // await page.getByRole('button', {name: 'Login'}).click();
/* Enable for legacy disable for auth server login*/
  await page.getByPlaceholder('User ID').click();
  await page.getByPlaceholder('User ID').fill('frank.eagan');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('RFSics1650');

  await page.getByRole('link', { name: 'Enter' }).click();
  await page.getByRole('link', { name: 'QA Regression' }).click();
  await page.getByRole('link', { name: 'Account Alias Receipt 02' }).click();
  await page.getByPlaceholder('Organization Code').click();
  await page.getByPlaceholder('Organization Code').fill('001');
  await page.getByPlaceholder('Organization Code').press('Enter');
  await page.getByPlaceholder('Account Source').click();
  await page.getByPlaceholder('Account Source').fill('US');
  await page.getByPlaceholder('Account Source').press('Enter');
  await page.getByPlaceholder('Item Number').click();
  await page.getByPlaceholder('Item Number').fill('AS65001');
  await page.getByPlaceholder('Item Number').press('Enter');
  await page.getByPlaceholder('Subinventory').click();
  await page.getByPlaceholder('Subinventory').fill('Stores');
  await page.getByPlaceholder('Subinventory').press('Enter');
  await page.getByPlaceholder('Locator').click();
  await page.getByPlaceholder('Locator').fill('1.1.1.1');
  await page.getByPlaceholder('Locator').press('Enter');
  await page.getByPlaceholder('Quantity').click();
  await page.getByPlaceholder('Quantity').fill('1');
  await page.getByPlaceholder('Quantity').press('Enter');
  await page.getByPlaceholder('UOM').click();
  await page.getByPlaceholder('UOM').fill('Ea');
  await page.getByPlaceholder('UOM').press('Enter');
  await page.getByPlaceholder('Reason').click();
  await page.getByPlaceholder('Reason').fill('Backorder');
  await page.getByPlaceholder('Reason').press('Enter');
  await page.getByPlaceholder('Recipient').click();
  await page.getByPlaceholder('Recipient').fill('AUTOJAX');
  await page.getByPlaceholder('Recipient').press('Enter');
  await page.getByPlaceholder('Quantity of labels').click();
  await page.getByPlaceholder('Quantity of labels').fill('1');
  await page.getByPlaceholder('Quantity of labels').press('Enter');
  await page.getByRole('link', { name: 'List' }).click();
  await page.getByRole('cell', { name: '\\\\PRINT-SERV\\Lexmark-room' }).click();
  await page.getByRole('link', { name: 'Exit' }).click();
  await page.getByRole('link', { name: 'Exit' }).click();
});