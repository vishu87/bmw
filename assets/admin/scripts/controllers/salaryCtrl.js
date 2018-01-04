app.controller('salaryCtrl',function($scope , $http ,SalaryService,Upload){
	$scope.employees = [];
	$scope.month_id = 0;
	$scope.year_id=0;
	$scope.loading = true;
	$scope.initials = function(){
		SalaryService.initials($scope.month_id , $scope.year_id).then(function(data){
			if(data.success){
				$scope.employees = data.employees;
				console.log(data);
			}
		});
	}

	$scope.updateSalaries = function(month_id,year_id){
		$scope.processing = true;
		console.log($scope.employees);
		SalaryService.updateSalaries($scope.employees,month_id,year_id).then(function(data){

			if(data.success){
				$.notific8(data.message,{life:4000,theme: 'teal'});
			}else{
				$.notific8(data.message,{life:4000,theme: 'ruby'});
			}
			$scope.processing = false;
		});
	}

	$scope.uploadFile = function (file, name,employee) {
		console.log(name);
		employee.uploading = true;
		var url = base_url+'/api/upload/file';
        Upload.upload({
            url: url,
            data: {
            	media: file
            }
        }).then(function (resp) {
            if(resp.data.success){
            	employee.salary_slip = resp.data.media;
            	
            } else {
            	alert(resp.data.message);
            }
            employee.uploading = false;
        }, function (resp) {
            console.log('Error status: ' + resp.status);
            employee.uploading = false;
        }, function (evt) {
            $scope.uploading_percentage = parseInt(100.0 * evt.loaded / evt.total) + '%';
        });
    }

    $scope.removeFile = function(index){
    	console.log(index);
    	$scope.employees[index].salary_slip = '';
    }


});

app.service('SalaryService', function($http, $rootScope){

	this.initials = function(month_id,year_id){
		console.log(base_url + "/api/salary/getSalaries?month_id="+month_id+'&year_id='+year_id);
		var promise = $http({
			method: 'GET',
			url: base_url + "/api/salary/getSalaries?month_id="+month_id+'&year_id='+year_id,
			headers: {
				'apiToken': api_token
			}
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	} else {
	        		return response.data.message;
	        	}
	        }
	    });

	    return promise;
	}

	this.updateSalaries = function(employees,month_id,year_id){
		var data = {employees:employees,month_id:month_id,year_id:year_id};
		var promise = $http({
			method: 'POST',
			url: base_url + "/api/salary/updateSalaries",
			data:data,
			headers: {
				'apiToken': api_token
			}
			
		})
		.then(function(response) {
	        if(response.status == 200){
	        	if(response.data.success){
	        		return response.data;
	        	} else {
	        		return response.data.message;
	        	}
	        }
	    });

	    return promise;
	}


});