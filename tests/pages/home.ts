import type { Locator, Page } from '@playwright/test';

export class Home {
    readonly subscribeNotifications: Locator;
    readonly searchBar: Locator;
    readonly searchButton: Locator;
    readonly searchObject: Locator;

    constructor(page: Page) {
        this.subscribeNotifications = page.getByText('No permitir');
        this.searchBar = page.getByRole('textbox', { name: 'audífonos inalámbrico' });
        this.searchButton = page.locator('input[type="button"]');
        this.searchObject = page.getByRole('link', { name: 'Report fraud item Humidificador de niebla en aerosol portátil, Mini taza de' });

    }

    async denyNotifications() {
        this.subscribeNotifications.click();
    }

}
