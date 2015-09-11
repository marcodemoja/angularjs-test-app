/**
 * Created by demojam on 04/09/2015.
 */

describe('ExampleController', function(){

    //Init angularjs app before each test
    beforeEach(module('ExampleApp'));

    //Injection of dependencies, $http will be mocked with $httpBackend
    beforeEach(inject(function($rootScope, $controller, $httpBackend){
        scope       = $rootScope;
        controller  = $controller;
        httpBackend = $httpBackend;
    }));

    it('should query the webservice', function(){

        //which HTTP requests do we except to occup, and how do we response?
        httpBackend.expectGET('/users').respond('[{"name": "First user"}, {"name": "Second user"}]');

        //starting the controller
        controller('ExampleController', {'$scope': scope});

        //respond to all HTTP requests
        httpBackend.flush();

        //triggering the AngularJS digest cycle in order to resolve all promises
        scope.$apply();

        //we except the controller to put the right value onto the scope
        expect(scope.firstUsername).toEqual('First user');

    });

});