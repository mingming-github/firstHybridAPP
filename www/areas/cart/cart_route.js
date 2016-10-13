//购物车路由模块
angular.module('cartRou_Mod',['cartCtr_Mod','cartSer_Mod'])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('tab.cart', {
    			url: '/cart',
    			views: {
      				'tab-cart': {
        			templateUrl: 'areas/cart/cartPages.html',
        			controller: 'cartCtr'
      				}		
    			}
  			})
	});




















