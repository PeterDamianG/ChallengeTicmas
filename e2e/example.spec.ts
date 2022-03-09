import { test, expect } from '@playwright/test';

test.describe('All base entry UI working.', () => {
  test('Header show title and button go source.', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(
      page.locator('text=Vi-Datec Frontend Dev Challenge'),
    ).toHaveText('Vi-Datec Frontend Dev Challenge');
    await expect(page.locator('text=Go to source.')).toHaveText(
      'Go to source.',
    );
    await expect(page.locator('text=Search Movie*')).toHaveText(
      'Search Movie*',
    );
    await expect(
      page.locator('[placeholder="Avengers\\:\\ Endgame"]'),
    ).toHaveText('');
    await expect(
      page.locator('text=A minimum of 6 characters is required'),
    ).toHaveText('A minimum of 6 characters is required.');
    await expect(
      page.locator(
        'text=You need complete the text field with a minimum of 6 characters.',
      ),
    ).toHaveText(
      'You need complete the text field with a minimum of 6 characters.',
    );
  });
});

test.describe('Check input search working.', () => {
  test('Check categories and card movie.', async ({ page }) => {
    // Go to http://localhost:3000/
    await page.goto('http://localhost:3000/');
    // Click [placeholder="Avengers\:\ Endgame"]
    await page.locator('[placeholder="Avengers\\:\\ Endgame"]').click();
    // Fill [placeholder="Avengers\:\ Endgame"]
    await page.locator('[placeholder="Avengers\\:\\ Endgame"]').fill('spider');
    // Click button:has-text("Drama")
    await page.locator('button:has-text("Drama")').click();
    // Click #accordion-panel-5 >> text=• 2017-07-05 •Spider-Man: Homecoming
    await page
      .locator(
        '#accordion-panel-5 >> text=• 2017-07-05 •Spider-Man: Homecoming',
      )
      .click();
  });
});
