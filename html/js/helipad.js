angular.module('helipadApp', [])
  .controller('helipadController', function() {
    var helipad = this;
    helipad.company = {
  		"name": "placeholder"
    };
    
    helipad.page = {
    	"brandName":	"Helipad.io",
		"signUpText":	"Sign Up"
    };

  });
