angular
    .module('MainApp')
    .controller('MainController', ['$scope', '$rootScope','CardService', MainController]);

function MainController($scope, $rootScope, CardService) {

    // ****variable declaration*****
    
    $scope.currentPage = 0;
    $scope.pageSize = 10;
     

   
    // initial function call to fetch the card list 


    $scope.CardIds = Array(100).fill().map(function (v, i) { return i + 1; });
   

    // fetch card content

    $scope.CardContents = [];

    $scope.getCardTitle = function (cardId) {

        CardService.getCardTitle(cardId).then(function (result) {
            if (result.status == 200) {
                if (result.data.length > 0) {
                    $scope.CardContents.push(result.data[0]);
                }
            }
        }, function (error) {
           

        });
    }
    

    $scope.removeCardDetail = function (card) {

        let index = $scope.CardContents.indexOf(card);

        if (index != -1)
            $scope.CardContents.splice(index, 1);
    }

    // paginator:

    $scope.numberOfPages = function () {
        return Math.ceil($scope.CardIds.length / $scope.pageSize);
    }


};