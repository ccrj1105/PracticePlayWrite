import { expect, test } from "@playwright/test";

import { CreateAccountPage } from "../../pages/elempleo/createAccount.page";
import { HomePage } from "../../pages/elempleo/home.Page";


test("candidate can start cv registration", async ({ page }) => {
  const createAccount = new CreateAccountPage(page);
const mainPage=new HomePage(page);
  await mainPage.navigate();

 await mainPage.clickRegisterCVButton();

  await createAccount.createCV();

  await expect(page.getByPlaceholder("Nombres")).toHaveValue("21321");
});
