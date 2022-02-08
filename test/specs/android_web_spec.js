import Web from '../screens/android_web_screen';

describe('Browser open', async() => {

    beforeEach(async() => {
       await Web.url;
    });
    

    it('Open', async() => {
        
        await Web.firstName.addValue("Itachi");
        await expect(Web.lastName).toBeDisplayed();

    });

    it('Last_name', async() => {

        await Web.lastName.addValue("Uchiha");

    });

    it('New', async() => {
        await Web.url1;
        await Web.radButn.click();
    });
});