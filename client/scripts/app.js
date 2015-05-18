var myApp = angular.module('myApp', ['pascalprecht.translate']);

myApp.config(function($translateProvider) {
    $translateProvider.translations('en', {
        "HEADING": "This website can be translated into German or English.",
        "PARA": "Just click one of the buttons below to see how it works.",
        "BUTTON_TEXT_EN": "English",
        "BUTTON_TEXT_DE": "German"
    })
    .translations('de', {
        "HEADING": "Diese Webseite kann in deutscher oder englischer Sprache übersetzt werden.",
        "PARA": "Klicken Sie einfach auf eine der Tasten, um zu sehen, wie es funktioniert.",
        "BUTTON_TEXT_EN": "Englisch",
        "BUTTON_TEXT_DE": "Deutsch"
    });
    $translateProvider.preferredLanguage('en');
});

//myApp.config(['$translateProvider', function ($translateProvider) {
//    $translateProvider.useStaticFilesLoader({
//        prefix: 'lang-',
//        suffix: '.json'
//    });
//    $translateProvider.preferredLanguage('en');
//}]);

myApp.controller('langController', ["$scope", function($translate, $scope) {
    $scope.switchLanguage = function (languageKey) {
        $translate.uses(languageKey);
    };
}]);
