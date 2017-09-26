app.controller('carousel', ['$scope', function($scope) {
  $scope.tab = 1;

  $scope.setTab = function(newTab){
    $scope.tab = newTab;
  };

  $scope.isSet = function(tabNum){
    return $scope.tab === tabNum;
  };

  $scope.cssCircle = function (num) {
    if (num == $scope.tab)
      return 'selected_circle';
    else
      return 'circle';
};

  $scope.swipeLeft = function(n) {
    if ($scope.tab == 3) {
      return $scope.setTab(1);
    } else {
      return $scope.setTab($scope.tab+=1);
    }
  };

  $scope.swipeRight = function(n) {
    if ($scope.tab == 1) {
      return $scope.setTab(3);
    } else {
      return $scope.setTab($scope.tab-=1);
    }
  };

}]);
