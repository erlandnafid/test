var app = angular.module('app', []);

function ctrl($scope, $window) {
  $scope.data = $window.data;
  $scope.currentPage = 0;
  $scope.dataLimit = 5;
  $scope.numberOfPages = function () {
    return Math.ceil($scope.data.length / $scope.dataLimit);
  }

  $scope.show = function (item) {
    document.getElementById("main").style.display = "none";
    document.getElementById("show").style.display = "block";
    $scope.showItem = item;
  }

  $scope.back = function () {
    document.getElementById("main").style.display = "block";
    document.getElementById("show").style.display = "none";
  }
}

app.filter('pagination', function () {
  return function (input, start) {
    start = +start;
    return input.slice(start);
  }
});