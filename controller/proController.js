myapp.controller('proController',['$scope','$stateParams','$http',function($scope,$stateParams,$http){
      // 传参
      $http({
        url:'json/detailof'+$stateParams.id+'.json'
      }).success(function(res){
        $scope.pro = res.project;
      });

      $http({
        url:'json/test.json'
      }).success(function(res){
        $scope.imgList= res.data.list2;
      });
      $scope.show3=0;
      $scope.clickFun5=function(i){
        $scope.show3=i;
      }
}]);

