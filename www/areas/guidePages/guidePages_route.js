//引导页路由模块
angular.module('guidePagesRou_Mod',['guidePagesCtr_Mod','guidePagesSer_Mod'])
	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('guidePages', {
			    url: '/guidePages',
			    templateUrl: 'areas/guidePages/guidePages.html',
			    controller: 'guidePages_Ctr'
			})
	});




















