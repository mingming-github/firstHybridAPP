
//引导页控制器模块
angular.module('guidePagesCtr_Mod',[])
	.controller('guidePages_Ctr',function($scope,$state){
		var guideSlide = new Swiper('#guideSlide', {
	      	pagination: '.swiper-pagination',
	      	onSlideChangeEnd: function(swiper){
		        var index = guideSlide.activeIndex+1;
		        if(index==2||index==3){
	          		var item = $("#tips-"+index);
		          	if(item.hasClass("hidden")){
		            	item.removeClass("hidden");
		            	item.addClass("guide-show");
		          	}
		        }
	        }
	    });
	    $scope.gohome=function(){
	    	$state.go('tab.home')
	    }
	});









