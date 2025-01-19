import { Page, Locator } from 'playwright';
import { selectors } from '../../../support/enums/selectors';

export class commonLocators {
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
    return this.allProductsPackCard().locator(selectors.BUY_BUTTON_WITH_SUPER_CHARGE);
  }

  intellijUltimateBuyButtonWithSuperCharge(): Locator {
    return this.intellijUltimateCard().locator(selectors.BUY_BUTTON_WITH_SUPER_CHARGE);
  }

  intellijUltimateCardSuperchargeCheckbox(vatText: string): Locator {
    return this.intellijUltimateCard().locator(selectors.PRICE_BLOCK).locator(`p:has-text("${vatText}")`);
  }

  allProductsPackCardSuperchargeCheckbox(vatText: string): Locator {
    return this.allProductsPackCard()
      .locator(selectors.PRICE_BLOCK)
      .locator(this.page.locator(`p:has-text("${vatText}")`));
  }
}
