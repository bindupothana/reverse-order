
var app = angular.module('reverseApp', []);
app.controller('ReverseCtrl', function ($scope) {
$scope.num = 0;
var x = 0; var y = 0;
$scope.rev = function () {
var temp = 0;
var i = $scope.num;
console.log(temp)
while (i > 0)
{
x = i % 10;
temp =(temp* 10)+ x;
i= parseInt(i/10);
}
return temp;
}
});