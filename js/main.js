var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
        //route for the Home Page
        .when('/',{
            templateUrl: 'pages/home.html',
            controller:  'mainController'
        
    })
    //route for the about Page
    
    .when('/about',{
        templateUrl: 'pages/about.html',
        controller: 'aboutController'
    })
    //route the skills page 
    
     .when('/skills',{
        templateUrl: 'pages/skills.html',
        controller: 'skillsController'
    })
    //route for the Contact page
      .when('/experience',{
        templateUrl: 'pages/experience.html',
        controller: 'experienceController'
    })
    .when('/contact',{
        templateUrl : 'pages/contact.html',
        controller: 'contactCotroller'
        
    });
});

myApp.directive('bsActiveLink', ['$location', function($location){
    return {
        restrict: 'A', //use as attribute 
        replace: false,
        link: function (scope, elem) {
            //after the route has changed
            scope.$on("$routeChangeSuccess", function () {
                var hrefs = ['/#' + $location.path(),
                             '#' + $location.path(), //html5: false
                             $location.path()]; //html5: true
                angular.forEach(elem.find('a'), function (a) {
                    a = angular.element(a);
                    if (-1 !== hrefs.indexOf(a.attr('href'))) {
                        a.parent().addClass('active');
                    } else {
                        a.parent().removeClass('active');   
                    };
                });     
            });
        }
    }
}]);
// MainController
myApp.controller('mainController', ['$scope', function ($scope) {
    $scope.message ='Zarana Patel';
    console.log( $scope.message );
}]);


    
    //aboutCotroller
myApp.controller('aboutController', ['$scope', function ($scope) {

}]);

//skillsCotroller
myApp.controller('skillsController', ['$scope', function ($scope,$timeout) {
    
}]);
//contactController
myApp.controller('contactCotroller', ['$scope', function ($scope) {
    $scope.message ='On Contact Controller :-P';
    console.log( $scope.message );
}]);
