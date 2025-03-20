import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('https://es.aliexpress.com/');
});

test.describe( 'test#1' , () => {
  test('Buscar producto', async ({ page }) => {
      await page.locator('.search--keyword--15P08Ji').fill('Humificador');
      await page.locator('.search--keyword--15P08Ji').press('Enter');
      
  });
});

test.describe( 'test#2' , () => {
  test('enter text2', async ({ page }) => {
      await page.locator('.new-todo').fill('text testing #2');
      await page.locator('.new-todo').press('Enter');

      await expect(page.locator('.view label')).toHaveText('text testing #2');
  });
});

