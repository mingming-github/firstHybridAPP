//商品的路由模块
angular.module('goodsRou_Mod',['goodsCtr_Mod','goodsSer_Mod'])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('goods', {
    			url: '/goods/:typeNumber',
    			templateUrl: 'areas/goods/goodsPages.html',
        		controller: 'goodsCtr'
  			})
	});




















