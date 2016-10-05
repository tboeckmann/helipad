angular.module('helipadApp', [])
  .controller('helipadController', function() {
    var helipad = this;
    helipad.company = {
      "name": "placeholder"
    };
    
    helipad.page = {
      "brandName": "Helipad.io",
    "signUpText": "Sign Up"
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

  });
