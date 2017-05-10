var app = angular.module('ins',[]);
app.controller('insertCtrl',function($scope,$http){
    $scope.insData = function(){
        var res = {
            method : 'POST',
            url : 'http://localhost:8080/insert',
            data : $scope.product,
             headers: {
                        'Content-Type': 'Application/json'
                    }
        }
        $http(res).then(function(){
            alert();
        })
    }
})