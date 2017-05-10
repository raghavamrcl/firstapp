var app = angular.module('ret',[]);
app.controller('retCtrl',function($scope,$http){
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
})