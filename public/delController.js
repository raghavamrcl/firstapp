var app = angular.module('del',[]);
app.controller('deleteCtrl',function($scope,$http){
    $scope.delData = function(){
        var res = {
            method: 'POST',
            url : 'http://localhost:3000/delete',
            data : $scope.product,
             headers: {
                        'Content-Type': 'Application/json'
                    }
        }
        $http(res).then(function(){
            alert("Deleted");
        })
    }
})