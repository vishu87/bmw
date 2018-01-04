app.controller('CalendarCtrl',function($scope , $http , EventService){
	
	$scope.weeks = [];
	$scope.events = [];
	$scope.matches = [];
	$scope.loading = true;
	$scope.month = 0;
	$scope.year = 0;

	$scope.initialize = function(){
		$scope.loading = true;
		EventService.fetchCalendar($scope.month, $scope.year).then(function(data){
			if(data.success){
				console.log(data);
				$scope.month = data.month;
				$scope.year = data.year;
				$scope.weeks = data.weeks;
				$scope.events = data.events;
				$scope.matches = data.matches;
			} else {
				$scope.formError = data;
			}
			$scope.loading = false;

		});
	}

	$scope.prev_month = function(){
		$scope.month--;
		if($scope.month == 0) {
			$scope.month = 12;
			$scope.year--;
		}
		$scope.initialize();
	}

	$scope.next_month = function(){
		$scope.month++;
		if($scope.month == 13) {
			$scope.month = 1;
			$scope.year++;
		}
		$scope.initialize();
	}

	$scope.initialize();
	

});