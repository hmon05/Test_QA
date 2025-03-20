import { test, expect } from '@playwright/test';
import { Home } from '../tests/pages/home';

test.beforeEach(async ({page}) => {
  await page.goto('https://es.aliexpress.com/');
  await page.waitForLoadState('networkidle');
});

test( 'Agregar un producto al carro de compras:'  , async ({ page }) => {
  const home = new Home(page);

  await page.getByRole('textbox', { name: 'audífonos inalámbrico' }).click();
  await page.getByRole('textbox', { name: 'audífonos inalámbrico' }).fill('Humidificador');
  await page.getByRole('textbox', { name: 'audífonos inalámbrico' }).press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Report fraud item Humidificador de niebla en aerosol portátil, Mini taza de' }).click();
  const page1 = await page1Promise;
  const precio = await page1.getByText('COP7.336,51').textContent();
  await page1.getByRole('button', { name: 'Agregar al carrito' }).click();
  await page1.locator('div').filter({ hasText: /^0Cesta0$/ }).click();
  expect (precio).toEqual('COP7.336,51');
});