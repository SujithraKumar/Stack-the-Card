app.directive('appTemplate', function () {
    return {
        restrict: "E",
        scope: false,
        templateUrl: 'app/views/viewTemplate1.html',
        link: function ($scope, element, attrs, toaster) {

        }
    };
});