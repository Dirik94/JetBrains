import { test as base } from '@playwright/test';
import ForOrganizationsPage from '../../IntelliJ/Subscription-page/pages/for-organizations.page';
import ForIndividualUsePage from '../../IntelliJ/Subscription-page/pages/for-individual-use.page';
import SpecialCategoriesPage from '../../IntelliJ/Subscription-page/pages/sepcial-categories.page';

type MyFixtures = {
  forOrganizationsPage: ForOrganizationsPage;
  forIndividualUsePage: ForIndividualUsePage;
  specialCategoriesPage: SpecialCategoriesPage;
};

export const test = base.extend<MyFixtures>({
  forOrganizationsPage: async ({ page }, use) => {
    await use(new ForOrganizationsPage(page));
  },
  forIndividualUsePage: async ({ page }, use) => {
    await use(new ForIndividualUsePage(page));
  },
  specialCategoriesPage: async ({ page }, use) => {
    await use(new SpecialCategoriesPage(page));
  },
});

export { expect } from '@playwright/test';
