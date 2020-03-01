const directiveName = 'datetimepicker';

angular.module('xdan-datetimepicker', []).directive(directiveName, [
    function() {
        var link;
        link = function($scope, element, attribute, ngModel) {
            var options = {};
            if(attribute[directiveName] && attribute[directiveName] != "") {
                options = $scope[attribute[directiveName]];
            }
            options.onChangeDateTime = function(dp, $input){
                $scope.$apply(function() {
                    ngModel.$setViewValue($input.val());
                });
            }
            $(element).datetimepicker(options);
        };
  
        return {
            restrict: 'A',
            link: link,
            require: 'ngModel'
        };
    }
]);