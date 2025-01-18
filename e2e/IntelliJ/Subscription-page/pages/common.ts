import { Page, Locator } from 'playwright';
import { selectors } from '../../../support/enums/selectors';

export class commonSelectors {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  yearlyBillingButton(): Locator {
    return this.page.getByRole('button', { name: 'Yearly billing' }).first();
  }

  monthlyBillingButton(): Locator {
    return this.page.getByRole('button', { name: 'Monthly billing' });
  }

  intellijUltimateProductPrice(price: string): Locator {
    return this.intellijUltimateCard().locator(selectors.PRODUCT_PRICE).getByText(price);
  }

  intellijUltimateCard(): Locator {
    return this.page.locator(selectors.INTELLIJ_IDEA_ULTIMATE_CARD);
  }

  allProductsPackCard(): Locator {
    return this.page.locator(selectors.ALL_PRODCUTS_PACK_CARD);
  }

  intellijUltimateBuyButton(): Locator {
    return this.intellijUltimateCard().locator('a[data-test="product-card-footer-buy-button"]');
  }

  allProductsPackBuyButtonWithSuperCharge(): Locator {
    return this.allProductsPackCard().locator('button[data-test="buy-page-buy-action-button"]').last();
  }

  intellijUltimateBuyButtonWithSuperCharge(): Locator {
    return this.intellijUltimateCard().locator('button[data-test="buy-page-buy-action-button"]');
  }

  intellijUltimateCardSuperchargeCheckbox(): Locator {
    return this.intellijUltimateCard().locator(selectors.CARD_ITEM).locator(selectors.SUPER_CHARGE_CHECKBOX).first();
  }

  allProductsPackCardSuperchargeCheckbox(): Locator {
    return this.allProductsPackCard().locator(selectors.CARD_ITEM).locator(selectors.SUPER_CHARGE_CHECKBOX).first();
  }
}
