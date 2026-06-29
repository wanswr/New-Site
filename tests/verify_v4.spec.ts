import { test, expect } from '@playwright/test';

test('capture new editorial layout', async ({ page }) => {
  await page.goto('http://localhost:3005');

  // Wait for loader to finish (2.5s + some buffer)
  await page.waitForTimeout(4000);

  // Capture Hero
  await page.screenshot({ path: 'verification/01_hero_v4.png' });

  // Scroll to Explorer
  await page.evaluate(() => {
    const el = document.getElementById('explorer-scene');
    el?.scrollIntoView();
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/02_explorer_v4.png' });

  // Scroll to Portfolio
  await page.evaluate(() => {
    const el = document.getElementById('portfolio-scene');
    el?.scrollIntoView();
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/03_portfolio_v4.png' });

  // Scroll to Calculator
  await page.evaluate(() => {
    const el = document.getElementById('calculator-scene');
    el?.scrollIntoView();
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/04_calculator_v4.png' });
});
