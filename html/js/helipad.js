angular.module('helipadApp', [])
  .controller('helipadController', function() {
    var helipad = this;
    helipad.company = {
      "name": "placeholder"
    };
    
    helipad.page = {
      "brandName": "Helipad.io",
      "signUpTitle": "Get notified about the latest updates...",
      "signUpText": "Sign Up",
      "headerTitle": "Simple Landing Pages",
      "headerSubtitle": "In a snap!",
      "aboutTextBody": "Helipad.io makes building landing pages super simple!"
    };


    helipad.fields = {
      "email": {
        "enabled": true,
        "label": "Email",
        "required": true
      },
      "first_name": {
        "enabled": true,
        "label": "First Name",
        "required": false
      },
      "last_name": {
        "enabled": true,
        "label": "Last Name",
        "required": false
      },
      "company": {
        "enabled": false,
        "label": "company",
        "required": false
      },
      "telephone": {
        "enabled": false,
        "label": "company",
        "required": false
      }
    };

    // Functions
    helipad.page.hasSignUpTitle = function() {
      return helipad.page.signUpTitle.length > 0
    };
    helipad.page.hasHeaderSubtitle = function() {
      return helipad.page.headerSubtitle.length > 0
    };


  });
