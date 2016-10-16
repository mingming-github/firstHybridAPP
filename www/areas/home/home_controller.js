
//首页控制器的模块
angular.module('homeCtr_Mod',[])
	.controller('homeCtr',function($scope,$window){
		//这是实例   #headerSlider，让它滑动,
		function  initHearslide(){
			var mySwiper = new Swiper('#headerSlider',{
				//是否显示分页器
				pagination : '.swiper-pagination',
				//分页器是否可点击
				paginationClickable :true,
				//是否循环
				loop:true,
				//每次滑动时间
				autoplay:1000,
				//第一页前面加上最后一页      最后一页后面加上最后一页
				slidesPerView: 1,
				//这个属性用于在鼠标操作滑动后操作后  能不能再自动滑动   false是能
				autoplayDisableOnInteraction: false,
				//这两个属性设置为true，前端才能循环生成
				observeParents:true,
				observer:true
			})
		};
		//这是实例   #toutiaoSlider，让它滑动,
		function  inittoutiaoSlider(){
			var mySwiper = new Swiper('#toutiaoSlider',{
				//是否循环
				loop:true,
				//每次滑动时间
				autoplay:1000,
				direction : 'vertical',
				//这个属性用于在鼠标操作滑动后还能继续自动滑动
				autoplayDisableOnInteraction: false,
				//这两个属性设置为true，前端才能循环生成
				observeParents:true,
				observer:true
			})
		};
		//头部透明的特效
		function  changHearopcity(){
			var ion_content=$window.document.getElementById('home-content');
			var headerBarbg=$window.document.getElementById('headerBar-bg');
			ion_content.onscroll=function(){
				var scrolltop=ion_content.scrollTop;
				console.log(scrolltop)
				var opcity=scrolltop/350;
				if(opcity<0.8){
					headerBarbg.style.opacity=opcity;
				}else{
					headerBarbg.style.opacity=0.8;
				};
			};
		};
		//回到头部特效
		function gotop(){
			var ion_content=$window.document.getElementById('home-content');
			var back_top=$window.document.querySelector('.back_top');
			ion_content.addEventListener('scroll',function(){
				var scrolltop=ion_content.scrollTop;
				if (scrolltop>200){
					back_top.style.opacity=1;
				}else{
					back_top.style.opacity=0;
				}
			},false)
			back_top.addEventListener('click',function(){
				ion_content.scrollTop=0;
			},false)
		}
		
		
		changHearopcity();
		gotop();
		//绑定一个事件是为了解决，不能循环回第一张问题   这是一个视图加载完成之后执行的事件 $ionicView.afterEnter
		$scope.$on('$ionicView.afterEnter',function(){
			initHearslide();
			inittoutiaoSlider();
		});
		
		//这是模拟后台数据  由于生成首页滑动
		  $scope.headerSlideData=[
		    {
		      alt:"双十一预热主场会",
		      src:"img/home/home-headerSlide-1.jpg"
		    },
		    {
		      alt:"11月11天家电低价不停歇",
		      src:"img/home/home-headerSlide-2.jpg"
		    },
		    {
		      alt:"家具盛典 好货提前抢",
		      src:"img/home/home-headerSlide-3.jpg"
		    },
		    {
		      alt:"IT抢券节",
		      src:"img/home/home-headerSlide-4.jpg"
		    },
		    {
		      alt:"潮流数码 双11爽购攻略",
		      src:"img/home/home-headerSlide-5.jpg"
		    }
		  ];
	    
	    
	    
	});









