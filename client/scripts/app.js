var myApp = angular.module('myApp', ['pascalprecht.translate']);
var transEN = {
    "HEADING": "This website can be translated into German or English.",
    "PARA": "Just click one of the buttons below to see how it works.",
    "BUTTON_TEXT_EN": "English",
    "BUTTON_TEXT_DE": "German"
};
var transDE = {
    "HEADING": "Diese Webseite kann in deutscher oder englischer Sprache übersetzt werden.",
    "PARA": "Klicken Sie einfach auf eine der Tasten, um zu sehen, wie es funktioniert.",
    "BUTTON_TEXT_EN": "Englisch",
    "BUTTON_TEXT_DE": "Deutsch"
};

myApp.config(['$translateProvider', function($translateProvider) {
    $translateProvider.translations('en', transEN);
    $translateProvider.translations('de', transDE);
    $translateProvider.preferredLanguage('en');
    $translateProvider.fallbackLanguage('en');
    $translateProvider.useSanitizeValueStrategy(null);
}]);

myApp.controller('langController', ["$scope", "$translate", function($scope, $translate) {
    $scope.changeLanguage = function (languageKey) {
        $translate.use(languageKey);
    };
}]);
