
//获取数据失败模块  弹出提示
angular.module('commonJs', [])
  .factory('CommonJs', ['$ionicPopup',function ($ionicPopup) {
    return {
      // 弹出提示框
      AlertPopup:function(message){
        var alertPopup = $ionicPopup.alert({
          title: '提示',
          template: message
        });
        alertPopup.then(function(res) {
          console.log('');
        });
      }
    }
  }]);
