import { expect, test } from '@playwright/test';
import WelcomeScreen from './pom/Welcome.screen';
import OfficeSpaceScreen from './pom/Space.screen';

test('take home challenge', async ({ page }) => {
  await new WelcomeScreen(page).goto()
    .then(welcomeScreen => welcomeScreen.doRequestPermissions())
    .then(welcomeScreen => welcomeScreen.doJoinOfficeSpace('Nerdy'))
    .then(officeSpaceScreen => officeSpaceScreen.doNavigateToPrivateArea())
    .then(officeSpaceScreen => officeSpaceScreen.doStartChat())
    .then(officeSpaceScreen => officeSpaceScreen.doSendMessage('Sreeram Yerrapragada', 'Hello World'))
    .then(officeSpaceScreen => officeSpaceScreen.assertMessageSent('Hello World'))
});
