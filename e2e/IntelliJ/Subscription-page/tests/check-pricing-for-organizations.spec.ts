import { prices } from '../../../support/asserts/subscriptionPage-specialCategories';
import { test, expect } from '../../../support/fixtures/pages';

const endPage = 'shop/customer';

test.describe('Verify pricing on for organization page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.jetbrains.com/idea/buy');
  });

  test('verify pricing for organizations yearly billing - IntelliJ Ultimate', async ({
    page,
    forOrganizationsPage,
  }) => {
    await forOrganizationsPage.forOrganizationsButton().click();
    await forOrganizationsPage.commonSelectors.yearlyBillingButton().click();
    await expect(forOrganizationsPage.commonSelectors.intellijUltimateProductPrice('€599.00')).toBeVisible();
    await forOrganizationsPage.commonSelectors.intellijUltimateBuyButton().click();
    await expect(page).toHaveURL(new RegExp(endPage));
  });

  test('verify pricing for organizations monthly billing - IntelliJ Ultimate', async ({
    page,
    forOrganizationsPage,
  }) => {
    await forOrganizationsPage.forOrganizationsButton().click();
    await forOrganizationsPage.commonSelectors.monthlyBillingButton().click();
    await expect(forOrganizationsPage.commonSelectors.intellijUltimateProductPrice('€59.90')).toBeVisible();
    await forOrganizationsPage.commonSelectors.intellijUltimateBuyButton().click();
    await expect(page).toHaveURL(new RegExp(endPage));
  });

  test('verify pricing for organizations with supercharge - IntelliJ Ultimate', async ({
    page,
    forOrganizationsPage,
  }) => {
    await forOrganizationsPage.forOrganizationsButton().click();
    await forOrganizationsPage.commonSelectors.yearlyBillingButton().click();
    await forOrganizationsPage.commonSelectors
      .intellijUltimateCardSuperchargeCheckbox(prices.VAT_FOR_ORGANIZATIONS)
      .click();
    await expect(forOrganizationsPage.commonSelectors.intellijUltimateProductPrice('€799.00')).toBeVisible();
    await forOrganizationsPage.commonSelectors.intellijUltimateBuyButtonWithSuperCharge().click();
    await expect(page).toHaveURL(new RegExp(endPage));
  });
});
