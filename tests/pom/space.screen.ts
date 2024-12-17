import { expect, Page } from "@playwright/test";

export default class OfficeSpaceScreen {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //
    // All locator getters
    //
    officeCanvas = () => this.page.locator('canvas');

    // Chat section
    chatButton = () => this.page.getByLabel('chat');
    continueToChatButton = () => this.page.getByRole('button', {name: 'continue'});
    switchViewsPopupCloseButton = () => this.page.getByRole('button', {name: 'Got it'});
    startChatButton = () => this.page.getByRole('button', {name: 'Start chat'});
    chatReceipientButton = (userName: string) => this.page.getByText(userName);
    createChatButton = () => this.page.getByRole('button', {name: 'Create chat'});
    chatMessageTextbox = () => this.page.locator('#sendbird-message-input-text-field');
    messageContentDiv = () => this.page.getByTestId('sendbird-message-content__middle');
   

    //
    // Abstract all user interactions
    //
    public async doNavigateToPrivateArea(): Promise<this> {
        // Focus on canvas for keyboard events
        await this.officeCanvas().click();
        await this.page.keyboard.press('ArrowRight', {delay: 1});
        await this.page.keyboard.press('ArrowRight', {delay: 1});
        await this.page.keyboard.press('ArrowRight', {delay: 1});
        await this.page.keyboard.press('ArrowRight', {delay: 1});
        return this;
    }

    public async doStartChat(): Promise<this> {
        await this.chatButton().click();
        await this.continueToChatButton().click();
        await this.switchViewsPopupCloseButton().click();
        await this.startChatButton().click();
        return this;
    }

    public async doSendMessage(to: string, message: string): Promise<this> {
        await this.chatReceipientButton('sreeram yerrapragada').click();
        await this.createChatButton().click();
        await this.chatMessageTextbox().fill('Hello World');
        await this.chatMessageTextbox().press('Enter');
        return this;
    }

    //
    // Asserts
    //
    public async assertMessageSent(message: string) {
        await expect(
            this.messageContentDiv().getByText('Hello World', { exact: true})
        ).toBeVisible();
    }

}