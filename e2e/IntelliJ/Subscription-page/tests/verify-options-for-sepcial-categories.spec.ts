import { specialCategoriesHeaders } from '../../../support/asserts/subscriptionPage-specialCategories';
import { test, expect } from '../../../support/fixtures/pages';

test.describe('Verify Headers for Special Categories', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.jetbrains.com/idea/buy/?section=discounts&billing=yearly');
  });

  test('verify all headers with h3 tags and their texts', async ({ specialCategoriesPage }) => {
    for (let i = 0; i < specialCategoriesHeaders.length; i++) {
      await expect(specialCategoriesPage.specialCategoriesHeaders().nth(i)).toHaveText(
        new RegExp(specialCategoriesHeaders[i])
      );
    }
  });
});
