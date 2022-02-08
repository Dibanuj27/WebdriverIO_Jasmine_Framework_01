class HomeScreen {
    get cateoryBtn() {
      return $('//android.widget.FrameLayout[@content-desc="Category"]/android.widget.ImageView');
    }
  
    get recentBtn() {
      return $('//android.widget.FrameLayout[@content-desc="Recent"]/android.widget.ImageView');
    }
  
    get helpBtn() {
      return $('//android.widget.FrameLayout[@content-desc="Help"]/android.widget.ImageView');
    }
  
    get searchBtn() {
      return $('~Search…');
    }
  
    get cartBtn() {
      return $('//*[@resource-id="com.solodroid.solomerce:id/btn_add_cart"]');
    }

    get fashion() {
      return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.support.v4.view.ViewPager/android.widget.LinearLayout/android.view.ViewGroup/android.support.v7.widget.RecyclerView/android.widget.FrameLayout[5]/android.widget.RelativeLayout');
    }
  
  }
  
  export default new HomeScreen();