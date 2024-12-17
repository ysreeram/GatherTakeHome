import { Page } from "@playwright/test";
import OfficeSpaceScreen from "./space.screen";

export default class WelcomeScreen {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //
    // All locator getters
    //
    requestPermissionsButton = () => this.page.getByRole('button', { name: 'Request Permissions'});
    usernameTextField = () => this.page.getByPlaceholder('What\'s your name?');
    joinButton = () => this.page.getByRole('button', { name: 'Join'});

    // Navigate to welcome page
    public async goto(): Promise<this> {
        // TODO: Externalize url to config
        await this.page.goto('https://app.gather.town/app/PS6dBG5ggJabilvW/Remote-Space?spawnToken=YgO7xcaCRPmPZSFe3NSM');
        return this;
    }

    //
    // Abstract all user interactions
    //
    public async doRequestPermissions(): Promise<this> {
        // TODO: Handle Request permissions for real video/audio tracks
        await this.requestPermissionsButton().click();
        return this;
    }

    public async doJoinOfficeSpace(username: string): Promise<OfficeSpaceScreen> {
        await this.usernameTextField().fill(username);
        await this.joinButton().click();
        return new OfficeSpaceScreen(this.page);
    }
}