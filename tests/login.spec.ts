import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('has title', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('user', 'password');
  await expect(loginPage.getErrorMessage()).toHaveText('Invalid username or password');
});

test('wrong Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();

  await loginPage.login('test', 'secret');
  await expect(page).toHaveURL(/books.htm/)
});


