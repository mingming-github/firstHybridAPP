//购物车路由模块
angular.module('listRou_Mod',['listCtr_Mod','listSer_Mod'])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('tab.list', {
    			url: '/list',
    			views: {
      				'tab-list': {
        			templateUrl: 'areas/list/listPages.html',
        			controller: 'listCtr'
      				}
    			}
      })
	});




















