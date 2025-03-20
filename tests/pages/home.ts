import type { Locator, Page } from '@playwright/test';

export class Home {
    readonly subscribeNotifications: Locator;
    readonly searchBar: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.subscribeNotifications = page.getByText('No permitir');
        this.searchBar = page.locator('#search-words');
        this.searchButton = page.locator('input[type="button"]');
        // this.searchButton = page.getByRole('button');
    }

    async denyNotifications() {
        this.subscribeNotifications.click();
    }
}