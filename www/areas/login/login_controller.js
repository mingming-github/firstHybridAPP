
//登录模块控制器
angular.module('APT.login.controller', [])
  .controller('LoginCtrl', ['$scope', '$ionicHistory','$state', function ($scope, $ionicHistory,$state) {

    $scope.$on('$ionicView.enter', function (e) {

    });

    // 变量定义
    $scope.loginInfo = {
      userName: "",
      password: "",
      loginError: "",
      hasError: false
    };

    // 登录方法
    $scope.login = function () {
      if($scope.loginInfo.userName=="admin"&&$scope.loginInfo.password=="1"){
        $ionicHistory.goBack();
        //$state.go("indexTab.home");
      }
      else{
        $scope.loginInfo.hasError=true;
        $scope.loginInfo.loginError="用户名或密码不正确，请重新输入！";
      }
    };

  }]);
