var app = angular.module('myApp', [
	'jcs-autoValidate',
	'ngFileUpload',
	'angular-ladda',
	'datatables',
	'720kb.tooltips',
	'ngImgCrop',
  'ngSanitize',
  'selectize'
]);

// app.config(function(uiSelectConfig) {
//   uiSelectConfig.theme = 'selectize';
// });

app.filter('customArray', function($filter){
    return function(list, arrayFilter, element){
        if(arrayFilter){
            return $filter("filter")(list, function(listItem){
                if(arrayFilter.indexOf(listItem[element]*1) != -1 || arrayFilter.indexOf(listItem[element]) != -1){
                  return true;
                } else {
                  return false;
                }
                // return arrayFilter.indexOf(listItem[element]*1) != -1;
            });
        }
    };
});

app.directive('convertToNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function(val) {
        return val != null ? parseInt(val, 10) : null;
      });
      ngModel.$formatters.push(function(val) {
        return val != null ? '' + val : null;
      });
    }
  };
});