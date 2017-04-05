var app = angular.module('Employee',[]);
  app.controller('employeeController',function($scope){
    $scope.employees = [
      {id:1,first_name:'test1',last_name:'last1',salary:10000,date_of_joining:'2017 Jan 23'},
      {id:1,first_name:'test2',last_name:'last2',salary:200000,date_of_joining:'2009 Jul 15'},
      {id:1,first_name:'test3',last_name:'last3',salary:50000,date_of_joining:'2012 Dec 19'},
    ];
  });
