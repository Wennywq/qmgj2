var myapp=angular.module('qmgj',['ui.router']);
//   []   是依赖前置  压缩之后可能会找不到
myapp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	// 官网首页
       $urlRouterProvider.otherwise('/home');
       $stateProvider
       .state('home',{
       	url:'/home',
          templateUrl:'view/home.html',
          controller:'homeController'           
       })
       .state('zhuce',{
       	url:'/zhuce',
          templateUrl:'view/zhuce.html'
        })
      .state('login',{
          url:'/login',
          templateUrl:'view/login.html',
          controller:"loginController"
      })
      .state('zhuanlan',{
          url:'/zhuanlan',
          templateUrl:'view/zhuanlan.html'
      })
      .state('circle',{
          url:'/circle',
          templateUrl:'view/circle.html'
      })
      .state('detail',{
          url:'/detail/:id',
          templateUrl:'view/detail.html',
          controller:'proController'
      })
      .state('detail.project',{
          url:'/project',
          templateUrl:'view/project.html',
      })
      .state('detail.process',{
          url:'/process',
          templateUrl:'view/process.html'
      })
      .state('detail.talk',{
          url:'/talk',
          templateUrl:'view/talk.html'
      })
      .state('detailof1',{
          url:'/detailof1',
          templateUrl:'view/detailof1.html'
      })
      .state('detailof2',{
          url:'/detailof2',
          templateUrl:'view/detailof2.html',
          controller:"test5Controller"
      })
      .state('detailof3',{
          url:'/detailof3',
          templateUrl:'view/detailof3.html'
      })
      .state('my',{
          url:'/my',
          templateUrl:'view/my.html'
      })
      .state('my.test1',{
          url:'/test1',
          templateUrl:'view/test1.html'
      })
      .state('my.test2',{
          url:'/test2',
          templateUrl:'view/test2.html',
          controller: 'test5Controller'
      })
      .state('my.test3',{
          url:'/test3',
          templateUrl:'view/test3.html'
      })
      .state('my.test3.test3-1',{
          url:'/test3-1',
          templateUrl:'view/test3-1.html'
      })
       .state('my.test3.test3-2',{
          url:'/test3-2',
          templateUrl:'view/test3-2.html'
      })
        .state('my.test3.test3-3',{
          url:'/test3-3',
          templateUrl:'view/test3-3.html'
      })
      .state('my.test4',{
          url:'/test4',
          templateUrl:'view/test4.html'
      })
      .state('my.test5',{
          url:'/test5',
          templateUrl:'view/test5.html',
          controller:"test5Controller"
      })
}]);










 
   
