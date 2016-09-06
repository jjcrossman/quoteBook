angular.module( 'quoteBook' ).controller( 'mainController', function( $scope, mainService ) {

$scope.quotes = mainService.getQuotes();

$scope.deleteQuote = mainService.removeQuote;

$scope.addQuote = mainService.addQuote;

$scope.$watch( 'trigger', function () {
  $scope.newQuote = "";
  $scope.newAuthor = "";
})

});
