'use strict';
var app = angular.module("myApp",[]);

app.controller("myCtrl",function($scope){

	$scope.products = [
		{
			code:10001,
			url:"img/6s.jpg",
			name:"手机",
			price:5000,
			number:1,
			description:"苹果6,全新的苹果体验"
		},
		{
			code:20001,
			url:"img/r9.jpg",
			name:"oppo R9",
			price:2000,
			number:1,
			description:"oppoR9,全新的拍照手机"
		},
		{
			code:30001,
			url:"img/meizu.jpg",
			name:"魅族",
			price:1500,
			number:1,
			description:"魅族最新手机"
		},
		{
			code:40001,
			url:"img/iwatch.jpg",
			name:"iWatch",
			price:1500,
			number:1,
			description:"苹果最新体验iWatch"
		},
	];

	var data = $scope.data = {};
	$scope.allPrice = 0;
	$scope.allNumber = 0;

	//添加数据到购物车当中去
	$scope.addCar = function(item){

		if(data[item.code]){
			data[item.code].number ++;
		}else{
			var arr = {};
			arr.code = item.code;
			arr.name = item.name;
			arr.price = item.price;
			arr.number = 1;
			arr.description = item.description;
			data[item.code] = arr;
		}
		$scope.totalPrice();
		//console.log(data[item.code]);
	}
	
	//添加对应商品的数量
	$scope.add = function(item){
		data[item.code].number++;
		$scope.totalPrice();
	}

	//数量减少
	$scope.decrease = function(item){
		if(data[item.code].number < 1){
			data[item.code].number = 0;
		}else{
			data[item.code].number--;
		}
		$scope.totalPrice();
	}

	//删除购物车中的物品
	$scope.removeToCar = function(item){
		delete data[item.code];
		$scope.totalPrice();
	}

	//立即购买
	$scope.directBuy = function(item){
		 for(var i in data){
		 	delete data[i];
		 }
		 var arr = {};
			arr.code = item.code;
			arr.name = item.name;
			arr.price = item.price;
			arr.number = 1;
			arr.description = item.description;
			data[item.code] = arr;
			$scope.totalPrice();
	}
	//数量输入验证
	$scope.verification = function(item){
		var reg = /[/d]/g;
		if(reg.test(item.number)){
			item.number = 1;
		}else if(item.number == ""){
			item.number = 1;
		}
		item.number = parseInt(item.number );
		$scope.totalPrice();
	}	
	//计算总价
	$scope.totalPrice = function(){
		var product = {};
		var price = 0;
		var number = 0;

		product = data;

		for(var i in product){
			price += product[i].number * product[i].price
			number += product[i].number;
		}

		$scope.allPrice = price;
		$scope.allNumber = number;
		//console.log("总价：" + $scope.allPrice);
		//console.log("数量：" + $scope.allNumber);
	}
});