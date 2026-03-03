import { expect, test } from "@playwright/test";

import { CreateAccount } from "../../pages/elempleo/createAccountPage";


test("candidate can start cv registration", async ({ page }) => {
  const createAccount = new CreateAccount(page);

  await createAccount.navigate();
  await page.getByRole("button", { name: "Registrar hoja de vida" }).click();
  await createAccount.createCV();

  await expect(page.getByPlaceholder("Nombres")).toHaveValue("21321");
});
