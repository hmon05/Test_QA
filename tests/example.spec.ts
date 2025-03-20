import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://es.aliexpress.com/');
});

test.describe( 'Agregar un producto al carro de compras:' , () => {
  test('Buscar producto', async ({ page }) => {
      await page.locator('.search--keyword--15P08Ji').fill('Humificador');
      await page.locator('.search--keyword--15P08Ji').press('Enter');  
      await page.pause();
      await page.getByRole('link', { name: 'Report fraud item Rociador de' }).click();
      // await page.getByRole('link', { name: 'Report fraud item Humidificador de niebla en aerosol portátil, Mini taza de' }).click();
      // await page.getByTestId('l5_b io_it search-card-item l5_l6').click();
  });
});

