// tabs抽象路由模块
angular.module('tabs_route', [])

  .config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // 不能渲染到页面中
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'areas/tabs/tabs.html',
    controller:'tabsCtr'
  })


});
