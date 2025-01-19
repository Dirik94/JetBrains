import { Page, Locator } from 'playwright/test';
import { commonLocators } from './common';

class ForOrganizationsPage {
  private page: Page;
  commonSelectors: commonLocators;

  constructor(page: Page) {
    this.page = page;
    this.commonSelectors = new commonLocators(this.page);
  }

  forOrganizationsButton(): Locator {
    return this.page.getByRole('button', { name: 'For organizations' });
  }
}

export default ForOrganizationsPage;
