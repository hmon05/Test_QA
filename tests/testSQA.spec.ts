import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://es.aliexpress.com/');
});

test.describe( 'Agregar un producto al carro de compras:' , () => {
  test('Buscar producto', async ({ page }) => {
      await page.locator('.search--keyword--15P08Ji').fill('Humificador');
      await page.locator('input[type="button"]').click(); 
      // await page.pause();
      const page1Promise = page.waitForEvent('popup');
      await page.getByRole('link', { name: 'Report fraud item Humidificador de niebla en aerosol portátil, Mini taza de' }).click();
      const page1 = await page1Promise;
      const precio = await page1.getByText('COP7.336,51').textContent();
      await page1.getByRole('link', { name: '0', exact: true }).click();
      expect (precio).toEqual('COP7.336,51');
      // await page1.locator('div').filter({ hasText: /^Estimación totalCOP7\.336,51$/ }).locator('span').click();
  });
});

