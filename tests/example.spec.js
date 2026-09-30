import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CheckoutPage } from '../pages/checkoutPage';

test('Login - Successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory\.html/);
});

test('Add to cart - Add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addProduct('Sauce Labs Backpack');
  await inventoryPage.goToCart();

  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});

test('Checkout - Complete purchase', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addProduct('Sauce Labs Backpack');
  await inventoryPage.goToCart();
  await checkoutPage.clickCheckout();
  await checkoutPage.enterDetails();
  await checkoutPage.finishOrder();

  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});