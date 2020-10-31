(function () {
    'use strict';

    angular.module('LunchCheck', [])

        .controller('LunchCheckController', ['$scope', LunchCheckController]);

    function LunchCheckController($scope)
    {
        $scope.lunchmenu = "";
        $scope.IsTooMuch = ""

        $scope.evaluate = function () {
            if ($scope.lunchmenu == "")
            {
                $scope.IsTooMuch = "Please enter data first";
                return;
            }
            else if (checkArrayForEmptyString($scope.lunchmenu))
            {
                $scope.IsTooMuch = "Missing data. please complete the details";
                return; 
            }
            evaluate($scope.lunchmenu)
        }

        function evaluate(string)
        {
           var array = string.split(',');

           if (array.length <= 3 )
           {
               $scope.IsTooMuch = "Enjoy!";
           }
           else if(array.length > 3)
           {
               $scope.IsTooMuch = "Too much!";
           }
        }

        function checkArrayForEmptyString(string)
        {
            string.replace("",null);
            var array = string.split(',');
            console.log(array);
            for(var i = 0 ; i < string.length ; i++)
            {
                if(string[i] === "" || string[i] == ""|| string[i] == " " || string[i] === " ")
                {
                    return true;
                }
            }
            return false;
        }
    }

})();
