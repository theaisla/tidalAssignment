"use strict";angular.module("angular-parallax",[]).directive("parallax",["$window",function(a){return{restrict:"A",scope:{parallaxRatio:"@",parallaxVerticalOffset:"@",parallaxHorizontalOffset:"@"},link:function(l,r,t){var e=function(){l.parallaxHorizontalOffset||(l.parallaxHorizontalOffset="0");var t=a.pageYOffset*(l.parallaxRatio?l.parallaxRatio:1.1);if(t<=a.innerHeight){var e=t<l.parallaxVerticalOffset?l.parallaxVerticalOffset:t,n=-1===l.parallaxHorizontalOffset.indexOf("%")?l.parallaxHorizontalOffset+"px":l.parallaxHorizontalOffset;r.css("transform","translate("+n+", "+e+"px)")}};e(),angular.element(a).bind("scroll",e),angular.element(a).bind("touchmove",e)}}}]).directive("parallaxBackground",["$window",function(a){return{restrict:"A",transclude:!0,template:"<div ng-transclude></div>",scope:{parallaxRatio:"@",parallaxVerticalOffset:"@"},link:function(l,r,t){var e=function(){var t=(r.prop("offsetTop")-a.pageYOffset)*(l.parallaxRatio?l.parallaxRatio:1.1)-(l.parallaxVerticalOffset||0);r.css("background-position","50% "+t+"px")};angular.element(a).bind("load",function(a){e(),l.$apply()}),angular.element(a).bind("scroll",e),angular.element(a).bind("touchmove",e)}}}]);