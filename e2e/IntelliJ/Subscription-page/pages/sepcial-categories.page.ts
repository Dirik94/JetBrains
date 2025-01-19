import { Page, Locator } from 'playwright/test';

class SpecialCategoriesPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  specialCategoriesHeaders(): Locator {
    return this.page.locator('div[class="wt-row wt-row_size_m"]').locator('h3');
  }
}

export default SpecialCategoriesPage;
