import { test } from "./fixtures/gather";

test('take home challenge', async ({ page, welcomeScreen }) => {
  await welcomeScreen.goto()
    .then(welcomeScreen => welcomeScreen.doRequestPermissions())
    .then(welcomeScreen => welcomeScreen.doJoinOfficeSpace('Nerdy'))
    .then(officeSpaceScreen => officeSpaceScreen.doNavigateToPrivateArea())
    .then(officeSpaceScreen => officeSpaceScreen.doStartChat())
    .then(officeSpaceScreen => officeSpaceScreen.doSendMessage('Sreeram Yerrapragada', 'Hello World'))
    .then(officeSpaceScreen => officeSpaceScreen.assertMessageSent('Hello World'))
});
