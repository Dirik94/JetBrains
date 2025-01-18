import { Page, Locator } from 'playwright/test';
import { commonSelectors } from './common';

class ForIndividualUsePage {
  private page: Page;
  commonSelectors: commonSelectors;

  constructor(page: Page) {
    this.page = page;
    this.commonSelectors = new commonSelectors(this.page);
  }

  getYearPrice(text: 'first year' | 'second year' | 'third year onwards', price: string): Locator {
    switch (text) {
      case 'first year':
        return this.page
          .locator(`div[data-test="product-price-title"]:has-text("${text}"):left-of(:text("${price}"))`)
          .first();
      case 'second year':
        return this.page
          .locator(`p[data-test="product-price-title-second-year"]:has-text("${text}"):left-of(:text("${price}"))`)
          .first();
      case 'third year onwards':
        return this.page
          .locator(
            `p[data-test="product-price-title-third-year-onwards"]:has-text("${text}"):left-of(:text("${price}"))`
          )
          .first();
      default:
        return this.page
          .locator(`div[data-test="product-price-title"]:has-text("${text}"):left-of(:text("${price}"))`)
          .first();
    }
  }

  forIndividualUseCard() {
    return this.page.getByRole('button', { name: 'For Individual Use' });
  }
}

export default ForIndividualUsePage;
