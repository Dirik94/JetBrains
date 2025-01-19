import { prices } from '../../../support/asserts/subscriptionPage-specialCategories';
import { subscriptionTexts } from '../../../support/enums/subscriptionPageTexts';
import { test, expect } from '../../../support/fixtures/pages';
test.describe('Check Pricing for Individual Use', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.jetbrains.com/idea/buy');
  });
  test('verify pricing for organizations yearly billing - IntelliJ Ultimater', async ({
    page,
    forIndividualUsePage,
  }) => {
    await forIndividualUsePage.forIndividualUseCard().click();
    await forIndividualUsePage.commonSelectors.yearlyBillingButton().click({ force: true });
    await expect(forIndividualUsePage.getYearPrice(subscriptionTexts.FIRST_YEAR, '€169.00')).toBeVisible();
    await expect(forIndividualUsePage.getYearPrice(subscriptionTexts.SECOND_YEAR, '€135.00')).toBeVisible();
    await expect(forIndividualUsePage.getYearPrice(subscriptionTexts.THIRD_YEAR_ONWARDS, '€101.00')).toBeVisible();
    await forIndividualUsePage.commonSelectors.intellijUltimateBuyButton().click();
    await expect(page).toHaveURL(new RegExp('shop/customer'));
  });

  test('verify pricing for organizations yearly billing with supercharge - All Products Pack', async ({
    page,
    forIndividualUsePage,
  }) => {
    await forIndividualUsePage.forIndividualUseCard().click();
    await forIndividualUsePage.commonSelectors.yearlyBillingButton().click({ force: true });
    await forIndividualUsePage.commonSelectors
      .allProductsPackCardSuperchargeCheckbox(prices.VAT_FOR_INDIVIDUAL_USE)
      .click();
    await expect(forIndividualUsePage.getYearPrice(subscriptionTexts.FIRST_YEAR, '€389.00')).toBeVisible();
    await expect(forIndividualUsePage.getYearPrice(subscriptionTexts.SECOND_YEAR, '€331.00')).toBeVisible();
    await expect(forIndividualUsePage.getYearPrice(subscriptionTexts.THIRD_YEAR_ONWARDS, '€273.00')).toBeVisible();
    await forIndividualUsePage.commonSelectors.allProductsPackBuyButtonWithSuperCharge().click();
    await expect(page).toHaveURL(new RegExp('shop/customer'));
  });
});
