import { test, expect } from '@playwright/test';
import { Home } from '../tests/pages/home';

test.beforeEach(async ({page}) => {
  await page.goto('https://es.aliexpress.com/');
});

test( 'Agregar un producto al carro de compras:'  , async ({ page }) => {
  const home = new Home(page);

  test.step('No permitir suscripción a notificaciones', async () => {
    await home.denyNotifications();
  });
  
  
  test.step('Buscar producto', async () => {
      await home.searchBar.fill('Gafas de sol para hombre');
      await home.searchButton.click();
      
      const page1Promise = page.waitForEvent('popup');
      await page.getByRole('link', { name: 'Report fraud item Humidificador de niebla en aerosol portátil, Mini taza de' }).click();
      const page1 = await page1Promise;
      const precio = await page1.getByText('COP7.336,51').textContent();

      await page1.getByRole('link', { name: '0', exact: true }).click();
      expect (precio).toEqual('COP7.336,51');

  });
});

