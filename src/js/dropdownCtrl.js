// Dropdown menu inspired by http://plnkr.co/edit/OrfUVg8KsOhAxqLwn1li?p=preview
app.controller('dropdownCtrl', function ($scope) {
});

app.directive('dropdown', function() {
	return {
		restrict: "C",
		link: function(scope, elem) {

			elem.bind('click', function() {
				elem.toggleClass('activate_menu');
			});
		}
	}
});

// make header transparent on scroll (JS)
var lastScrollTop = 00;

window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if ( st > lastScrollTop){
       document.getElementById("hamburger").style.opacity="0.1";
       document.getElementById("logo1").style.opacity="0.1";
   } else {
     document.getElementById("hamburger").style.opacity="1";
     document.getElementById("logo1").style.opacity="1";
   }
   lastScrollTop = st;
}, false);
