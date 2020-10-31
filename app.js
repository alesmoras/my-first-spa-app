(function () {
    'use strict';

    angular.module('PalindromeChecker', [])

        .controller('PalindromeCheckerController', ['$scope', PalindromeCheckerController]);

    function PalindromeCheckerController($scope)
    {
        $scope.input = "";
        $scope.isPalindrome = "Test"

        $scope.evaluate = function () {
            if ($scope.input.length <= 1) {
                return alert("Word should be more than 1 character");
            }
            var reverse = reverseString($scope.input)
            evaluateString($scope.input, reverse);
        }
    }

    function evaluateString(string, reverseString) {
        if (string.toLowerCase() != reverseString) {
            alert("It's not a palindrome");
        }
        else {
            alert("It's a palindrome");
        }
    }

    function reverseString(string) {
        var result = string.toLowerCase().split('').reverse().join('');
        return result;
    }

})();
