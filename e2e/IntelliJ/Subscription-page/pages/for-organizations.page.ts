import { Page, Locator } from 'playwright/test';
import { commonSelectors } from './common';

class ForOrganizationsPage {
  private page: Page;
  commonSelectors: commonSelectors;

  constructor(page: Page) {
    this.page = page;
    this.commonSelectors = new commonSelectors(this.page);
  }

  forOrganizationsButton(): Locator {
    return this.page.getByRole('button', { name: 'For organizations' });
  }
}

export default ForOrganizationsPage;
