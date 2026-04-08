import { expect, test } from "@playwright/test";

import { CreateAccount } from "../../pages/elempleo/createAccountPage";
import { MainPage } from "../../pages/elempleo/MainPage";


test("candidate can start cv registration", async ({ page }) => {
  const createAccount = new CreateAccount(page);
const mainPage=new MainPage(page);
  await mainPage.navigate();

 await mainPage.clickRegisterCVButton();

  await createAccount.createCV();

  await expect(page.getByPlaceholder("Nombres")).toHaveValue("21321");
});
