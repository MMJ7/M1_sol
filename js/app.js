(function (){
'use strict';

angular.module('LunchCheck', []).
controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

 function LunchCheckController ($scope){

$scope.inputbox = "";
$scope.message = "";

$scope.LunchChecker = function (){
	var emptycell=0;
	var nonemptycel=0;

$scope.inputbox = $scope.inputbox.trim();
var foodArray = $scope.inputbox.split(",");

foodArray = foodArray.filter(function(entry) { 
	return /\S/.test(entry); 
});

console.log(foodArray);
$scope.message = foodArray;
if(foodArray.length==0){
	$scope.message="Please enter data first.";
}

if(foodArray.length <=3 && foodArray.length !=0){
	$scope.message ="Enjoy"
}

if(foodArray.length > 3){
	$scope.message="Too Much"
}


 }


}









})()