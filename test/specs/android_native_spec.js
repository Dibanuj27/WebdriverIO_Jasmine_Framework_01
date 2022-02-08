import Home from '../screens/android_native_screen';


describe('User is in the Home Screen and might do some operations', () => {
    it('Should click the category button', async () => {
      //await HomeScreen.categoryBtn.click();

     await Home.cateoryBtn.click();
    //  await expect(Home.fashion).toBeDisplayed();
    });

    it('click on the search button', async() => {

    await Home.fashion.click();
    });
});
