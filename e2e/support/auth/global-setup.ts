import { chromium, Page } from 'playwright';
import { expect } from 'playwright/test';

const baseURL = 'https://www.jetbrains.com';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseURL);
  const cookiesFrom = page.getByRole('button', { name: 'Accept All' });
  if (cookiesFrom) {
    await cookiesFrom.click();
  }
  await expect(globalSetupNavigation.mainPage.developerToolsButton(page)).toBeVisible();
  await globalSetupNavigation.mainPage.developerToolsButton(page).click();
  await expect(globalSetupNavigation.mainPage.mainSubmenu.intellijButton(page)).toBeVisible();
  await globalSetupNavigation.mainPage.mainSubmenu.intellijButton(page).click();
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(new RegExp('idea'));
  await globalSetupNavigation.idea.pricingButton(page).click();
  await page.waitForURL(new RegExp('buy'));
  await page.context().storageState({ path: 'e2e/support/auth/storage.json' });
  await browser.close();
}

export default globalSetup;

const globalSetupNavigation = {
  mainPage: {
    navBar: (page: Page) => {
      return page.locator('header').locator('nav[data-test="main-menu"]');
    },
    developerToolsButton: (page: Page) => {
      return globalSetupNavigation.mainPage
        .navBar(page)
        .locator('button[data-test="main-menu-item-action"]')
        .getByText('Developer Tools');
    },
    mainSubmenu: {
      intellijButton: (page: Page) => {
        return globalSetupNavigation.mainPage
          .navBar(page)
          .filter({ hasText: 'Developer ToolsJETBRAINS' })
          .locator('[data-test="main-submenu"]')
          .getByRole('link', { name: Texts.INTELIIJ_IDEA });
      },
    },
  },
  idea: {
    pricingButton: function (page: Page) {
      return page.locator('a[data-test="button"]').locator('span').getByText('Pricing').last();
    },
  },
};

enum Texts {
  INTELIIJ_IDEA = 'IntelliJ IDEA',
}
