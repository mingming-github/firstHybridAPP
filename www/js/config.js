// 配置兼容性模块
angular.module('config', [])
	.config(['$ionicConfigProvider',function($ionicConfigProvider){
		
		//$ionicConfigProvider.views.forwardCache(true);//是否清理缓存
		
		$ionicConfigProvider.platform.android.tabs.position('bottom');
		$ionicConfigProvider.platform.ios.tabs.position('bottom')
	}])
  
