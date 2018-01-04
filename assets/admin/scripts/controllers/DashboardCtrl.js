app.controller('DashboardCtrl',function($scope , $http ,NotificationService, EventService){
	$scope.notifications = [];
	$scope.base_url = base_url;
	$scope.events = [];
	$scope.holidays = [];
	$scope.matches = [];
	$scope.loading = true;

	NotificationService.fetchNotifications().then(function(data){
		if(data.success){
			$scope.notifications = data.notifications;
			console.log(data.notifications);

		} else {
			$scope.formError = data;
		}
		$scope.loading = false;

	});
	
	EventService.fetchEvents().then(function(data){
		if(data.success){
			$scope.events = data.events;
			$scope.holidays = data.holidays;
			$scope.matches = data.matches;

		} else {
			$scope.formError = data;
		}
		$scope.loading = false;

	});
	

});