// 主路由模块
angular.module('route', [
	'ionic','commonJs','indexdb',
	'guidePagesRou_Mod', 'starter.controllers', 'starter.services',
	'homeRou_Mod','tabs_route','cartRou_Mod','listRou_Mod',
	'myRou_Mod','APT.goodsList.route','APT.details.route',////APT.goodsList.route单类商品列表模块  APT.details.route详细内容模块
	'APT.login.route'
])

  .config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  // Each tab has its own nav history stack:

  /*首页已经分离单独
   * .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })*/

  /*商品列表已经分离单独
   * .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })*/
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  /*购物车已经分离到单独
   * .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })*/
  /*我的已经分离到单独
   * .state('tab.my', {
    url: '/my',
    views: {
      'tab-my': {
        templateUrl: 'templates/tabs-my.html',
        controller: 'tabsCtr'
      }
    }
  });*/
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
