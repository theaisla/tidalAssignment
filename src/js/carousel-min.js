app.controller("carousel",["$scope",function(t){t.tab=1,t.setTab=function(e){t.tab=e},t.isSet=function(e){return t.tab===e},t.cssCircle=function(e){return e==t.tab?"selected_circle":"circle"},t.swipeLeft=function(e){return 3==t.tab?t.setTab(1):t.setTab(t.tab+=1)},t.swipeRight=function(e){return 1==t.tab?t.setTab(3):t.setTab(t.tab-=1)}}]);