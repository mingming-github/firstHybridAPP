


//单类商品列表模块    $scope将数据暴露给前端     $ionicHistor里面有个goBack()方法返回之前操作  $stateParams获取网址特定参数     $ionicLoading遮罩层   $timeout延迟执行
angular.module('APT.goodsList.controller', ['APT.goodsList.service'])
  .controller('GoodsListCtrl', ['$scope', '$ionicHistory','$state','GoodsListFty','CommonJs','$stateParams','$ionicLoading','$timeout',
    function ($scope, $ionicHistory,$state,GoodsListFty,CommonJs,$stateParams,$ionicLoading,$timeout) {
			//测试
			/*var promises=GoodsListFty.getgoodslist();
			promises.then(function(d){
				console.log(promises)
				console.log(d)
				return d;
			},function(r){
				console.log('r')
			});*/
			
			// 5   分页查询对象  保存着每一页中的各种数据    里面参数会改变  所以作为参数传递给service 在$http中作为参数从后台获取到相应的数据
      $scope.obj_pagingInfo = {
        amountMax: "",
        amountMin: "",
        billNum: "",
        createUser: "",
        dateFrom: "",
        dateTo: "",
        deptID: "",
        deptName: "",
        keyWord: "",
        loginName: "",
        billType: "",
        pageNum: 1,   //默认显示第一页
        pageSize: 10, //每页有十条数据
        sortFlag: "0",
        sortType: "desc",
        typeNumber:""
      };
			
			
			//定义一个存放页面商品数据的对象，上拉刷新的数据放在push进来
				var obj_goodsListData=[];
			
			
			//3    绑定一个事件$ionicView.beforeEnter   这是当视图进来之前就加载一次刷新 获取数据
			$scope.$on('$ionicView.beforeEnter',function(){
				$scope.func_refreshGoodsList();
			})
			
			//刷新没有数据使用是否有提示
			$scope.pms_isMoreItemsAvailable=true;
			
			//2页面下拉刷新操作 也就是获取第一页的信息
			$scope.func_refreshGoodsList=function(){
				//下拉加载的时候会将pageNum不断+1  这里刷新是初始化变为1
					$scope.obj_pagingInfo.pageNum=1;
				//6，把第一页的数据message作为参数传递给service  $http.get根据这个参数从数据库获取数据相应数据  再返回来到service中    再根据$q的一些方法给controller
				$scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
				var message=JSON.stringify($scope.obj_pagingInfo);
				console.log(message);
				//1在service获取到的数据保存在了promise中  通过then获取再暴露出去
					var promises=GoodsListFty.refreshGoodsList(message);
					promises.then(function(datas){
						console.log('触发刷新')
						//console.log(datas)
						//暴露给前端
						//$scope.obj_goodsListData=datas;
						//对返回来的数据进行判断，
						if(datas!=[]){
							$scope.obj_goodsListData=datas;
						}else{
							//控制没有数据时候的提示 是否显示
							$scope.pms_isMoreItemsAvailable=false;
						};
					},function(){
						
					}).finally(function(){
						//刷新之后有数据了，就让它变为true隐藏起来
						$scope.pms_isMoreItemsAvailable=true;
						//一旦获取到数据停止刷新
						 $scope.$broadcast('scroll.refreshComplete');
					})
			};
			
		
			
			
			
			
			
			//4页面上拉加载数据
			$scope.func_loadMoreGoodsList=function(){
				
				//一上拉  增加遮罩层，提高用户体验
				 $ionicLoading.show({
		      template: '明明正在加载...'
		    });
				
				//下拉加载了数据  是到了第二页，分页查询对象里面的pageNum要增加
				 $scope.obj_pagingInfo.pageNum++;
				//console.log($scope.obj_pagingInfo.pageNum)
				
				//将第二页的数据message作为message参数传递给service里  $http.get根据这个参数从数据库获取数据相应数据  再返回来到service中    再根据$q的一些方法给controller
				$scope.obj_pagingInfo.typeNumber=$stateParams.typeNumber;
				var message=JSON.stringify($scope.obj_pagingInfo)
				console.log(message)
				//在service获取到的数据保存在了promise中  通过then获取再暴露出去
				var promises=GoodsListFty.loadMoreGoodsList(message);
				promises.then(function(datas){ //成功回调函数
					console.log('触发上拉加载');
					//将后台上拉的数据push进obj_goodsListData数组中
					
					//对返回来的数据进行判断，
					if(datas!=[]){
						$.each(datas,function(i,data){
							$scope.obj_goodsListData.push(data)
						})
					}else{
						//控制没有数据时候的提示 是否显示
						//$scope.pms_isMoreItemsAvailable=false;
					};
					
				},function(){   //失败回调函数
					
					
				}).finally(function(){
					//一加载完数据遮罩层延迟2s让他消失
					$timeout(function(){
						 $ionicLoading.hide();
					},2000)
					//一旦获取到数据停止上拉加载
					 $scope.$broadcast('scroll.infiniteScrollComplete');
				})
				
				
			}
			
			 // 左上角返回按钮方法
      $scope.goBack = function () {
        $ionicHistory.goBack();
      };
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
/*			
			
      $scope.$on('$stateChangeSuccess', function(e) {
        $scope.func_refreshGoodsList();
      });

      $scope.$on('$ionicView.enter', function (e) {

      });

      // 数据对象
      $scope.obj_goodsListData=null;
      // 有更多数据可以加载
      $scope.pms_isMoreItemsAvailable =true;
      // 分页查询对象
      $scope.obj_pagingInfo = {
        amountMax: "",
        amountMin: "",
        billNum: "",
        createUser: "",
        dateFrom: "",
        dateTo: "",
        deptID: "",
        deptName: "",
        keyWord: "",
        loginName: "",
        billType: "",
        pageNum: 1,
        pageSize: 10,
        sortFlag: "0",
        sortType: "desc",
        typeNumber:""
      };


      
        //下拉刷新方法
       
      $scope.func_refreshGoodsList = function () {
        $scope.obj_pagingInfo.pageNum = 1;
        $scope.obj_pagingInfo.typeNumber= $stateParams.typeNumber;
        console.log('刷新'+$scope.obj_pagingInfo.pageNum);
        var message = JSON.stringify($scope.obj_pagingInfo);

        var promise = GoodsListFty.refreshGoodsList(message);
        promise.then(
          function (result) {
            $scope.obj_goodsListData = result;
          },
          function (reason) {
            CommonJs.AlertPopup("抱歉,请求数据失败！");
          }
        ).finally(function () {
            // 刷新完毕要广播刷新完毕事件
            $scope.$broadcast('scroll.refreshComplete');
          });
      };

      
        //上拉加载更多方法
       
      $scope.func_loadMoreGoodsList = function () {
        $ionicLoading.show({
          template: "正在载入数据，请稍后..."
        });

        $scope.obj_pagingInfo.pageNum = $scope.obj_pagingInfo.pageNum + 1;
        $scope.obj_pagingInfo.typeNumber= $stateParams.typeNumber;
        console.log('加载更多'+$scope.obj_pagingInfo.pageNum);
        var message = JSON.stringify($scope.obj_pagingInfo);

        var promise = GoodsListFty.loadMoreGoodsList(message);
        promise.then(
          function (result) {
            if(result!=null){
              $.each(result,function(i,item){
                $scope.obj_goodsListData.push(item);
              });
            }else{
              $scope.pms_isMoreItemsAvailable=false;
            }
          },
          function (reason) {
            CommonJs.AlertPopup("抱歉,请求数据失败！");
          }
        ).finally(function () {
            // 加载更多完毕要广播刷新完毕事件
            $scope.$broadcast('scroll.infiniteScrollComplete');
            $timeout(function(){
              $ionicLoading.hide();
            },2000);
          });
      };

      // 返回按钮方法
      $scope.goBack = function () {
        $ionicHistory.goBack();
      };

*/
    }
  ]);
