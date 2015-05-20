var myApp = angular.module('myApp', ['pascalprecht.translate']);
var transEN = {
    "HEADING": "This section can be translated into German or English.",
    "PARA": "Just click one of the buttons below to see how it works.",
    "BUTTON_TEXT_EN": "English",
    "BUTTON_TEXT_DE": "German"
};
var transDE = {
    "HEADING": "Diesem Abschnitt kann in deutscher oder englischer Sprache übersetzt werden.",
    "PARA": "Klicken Sie einfach auf einer Tasten zu sehen wie es funktioniert.",
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

myApp.controller('accordion', ["$scope", function($scope) {
    $scope.activeTabs = [];

    $scope.expanded = function (tab) {
        if ($scope.activeTabs.indexOf(tab) > -1) {
            return true;
        } else {
            return false;
        }
    };

    $scope.expandT = function (tab) {
        if ($scope.expanded(tab)) {
            $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
        } else {
            $scope.activeTabs.push(tab);
        }
    }
}]);