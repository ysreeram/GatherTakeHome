import { expect, test } from '@playwright/test';

test('take home challenge', async ({ page }) => {
  await page.goto('https://app.gather.town/app/PS6dBG5ggJabilvW/Remote-Space?spawnToken=YgO7xcaCRPmPZSFe3NSM');
  await page.getByRole('button', { name: 'Request Permissions'}).click();
  await page.getByPlaceholder('What\'s your name?').fill("Nerdy");
  await page.getByRole('button', { name: 'Join'}).click();
  await page.locator('canvas').click();
  // TODO: Disable slowmo in config
  await page.keyboard.press('ArrowRight', {delay: 1});
  await page.keyboard.press('ArrowRight', {delay: 1});
  await page.keyboard.press('ArrowRight', {delay: 1});
  await page.keyboard.press('ArrowRight', {delay: 1});
  await page.getByLabel('chat').click();
  await page.getByRole('button', {name: 'continue'}).click();
  await page.getByRole('button', {name: 'Got it'}).click();
  await page.getByRole('button', {name: 'Start chat'}).click();
  await page.getByText('sreeram yerrapragada').click();
  await page.getByRole('button', {name: 'Create chat'}).click();
  await page.locator('#sendbird-message-input-text-field').fill('Hello World');
  await page.locator('#sendbird-message-input-text-field').press('Enter');
  await expect(
    page.getByTestId('sendbird-message-content__middle').getByText('Hello World', { exact: true})
  ).toBeVisible();
});
