myapp.controller('homeController',['$scope','$http','$interval',function($scope,$http,$interval){
    $scope.showIndex=0;
    $interval(function(){
      $scope.showIndex++;
      if($scope.showIndex==2){
         $scope.showIndex=0;
      }
    },2000);
    $http({
      url:"json/home.json",
    }).success(function(res){
         $scope.data=res.list;
         $scope.arr=res.data1;
         $scope.arr4=res.title;
         $scope.hotList=res.hotList;
    });

    $scope.clickFun=function(index){
      $scope.showIndex=index;
    }


// 热门项目
    $scope.showIndex3=4;
     $scope.clickFun2=function(index){
      $scope.showIndex3=index;
    }
  
}]);
