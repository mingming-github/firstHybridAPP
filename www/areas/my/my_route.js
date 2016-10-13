//我的路由模块
angular.module('myRou_Mod',['myCtr_Mod','mySer_Mod'])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('tab.my', {
    			url: '/my',
    			views: {
      				'tab-my': {
        			templateUrl: 'areas/my/myPages.html',
        			controller: 'myCtr'
      				}		
    			}
  			})
	});




















