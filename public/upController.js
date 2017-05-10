var app = angular.module('updte',[]);
app.controller('updteCtrl',function($scope,$http){
    $scope.retData = function(){
        var res = {
            method : 'POST',
            url: 'http://localhost:3000/ret',
            data: $scope.product,
             headers: {
                        'Content-Type': 'Application/json'
                    }
        }
        $http(res).then(function(response){
            $scope.result = response.data;
        })
    }
    $scope.upData = function(){
        var res = {
            method : 'POST',
            url : 'http://localhost:3000/updte',
            data : $scope.product,
             headers: {
                        'Content-Type': 'Application/json'
                    }
        }
        $http(res).then(function(response){
            alert("updated");
        })
    }
})
