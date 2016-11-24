myapp.controller('test5Controller', ['$scope','$http',function($scope,$http){
  // 支付 未支付
    $scope.showActive = 0;   
    $http({
      url:"json/test.json",
    }).success(function(res){
      $scope.a1=res.data.list;
      $scope.a2=res.data.test2;
      $scope.test3=res.data.test3;
    });
       
    $scope.myFilterModel={'status':""};
    $scope.clickFun3 = function(i){
      $scope.myFilterModel.status =  ['',0,1][i];
      // if($scope.myFilterModel.status==1){
      //   $('#btn-pay').css({"display":"none"});
      // }
    };

// 电影对勾 选项  方法1 ：
    $scope.a3=[];
    $scope.a3[0]=$scope.a3[8]=true;
    $scope.clickFun = function(index){
        $scope.a3[index] =  !$scope.a3[index];

    }     // 方法2：$scope.toggle=false;

// 选择银行
   $scope.showIndex2=0;
   $scope.clickFun2=function(index){
      $scope.showIndex2=index;
   }

// 选择支付方式
   $scope.show2=0;
   $scope.clickFun4 = function(index){
       $scope.show2=index; 
   }

  }]);