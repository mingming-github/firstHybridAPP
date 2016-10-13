//首页路由模块
angular.module('homeRou_Mod',['homeCtr_Mod','homeSer_Mod'])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('tab.home', {
    			url: '/home',
    			views: {
      				'tab-home': {
        			templateUrl: 'areas/home/homePages.html',
        			controller: 'homeCtr'
      				}		
    			}
  			})
	});




















