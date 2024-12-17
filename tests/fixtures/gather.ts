import { test as base } from "@playwright/test";
import WelcomeScreen from "../pom/Welcome.screen";

export const test = base.extend<{welcomeScreen: WelcomeScreen}>({
    welcomeScreen: async ({page}, use) => {
        await use(new WelcomeScreen(page));
    }
})