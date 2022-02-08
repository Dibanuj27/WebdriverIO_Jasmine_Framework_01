class WebElements {
    
  get firstName() {
    return $('//input[@name="first_name"]');
  }

  get lastName() {
    return $('//input[@name="last_name"]');
  }

  get url(){
    return browser.url('https://demo.seleniumeasy.com/input-form-demo.html');
  }

  get url1(){
    return browser.url('https://demo.seleniumeasy.com/basic-radiobutton-demo.html');
  }

  get radButn(){
    return $('//input[@value="Male"]');
  }

  

  // get () {
  //   return $('');
  // }

  // get () {
  //   return $('');
  // }
  
    
  
  }
  
  export default new WebElements();