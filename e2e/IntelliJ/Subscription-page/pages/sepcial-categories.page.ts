import { specialCategoriesHeaders } from './../../../support/asserts/subscriptionPage-specialCategories';
import { Page, Locator } from 'playwright/test';
import { commonSelectors } from './common';

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
