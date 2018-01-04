app.controller('employeeDocumentCtrl',function($scope ,$timeout , $http ,EmployeeDocumentService,Upload){

    $scope.employee_id = 0;
    $scope.processing = false;
    $scope.form_success = false;
    $scope.form_error = false;
    $scope.employeeDocuments = [];
    $scope.documents = [];
    $scope.document_dropdown = [];

    $scope.contractData = {"start_date":'','end_date':'','contract':''};
    $scope.documentData = {"attachment":'','document_id':''};
    $scope.contract = '';
    $scope.aadhar = '';
    $scope.panCard = '';
    $scope.attachment = '';

    $scope.employeeDocumentData = function(){

        EmployeeDocumentService.employeeDocuments($scope.employee_id).then(function(data){
            if(data.success == true){
                $scope.employeeDocuments = data.employeeDocuments;
                $scope.documents = data.documents;
                // console.log(data);
                angular.forEach(data.documents, function(value,id){
                    if(id != 1 && id != 2 && id != 3){
                        $scope.document_dropdown[id] = value;
                    }
                });

                if($scope.employeeDocuments.length > 0){
                    angular.forEach($scope.employeeDocuments, function(empDocument){
                      if(empDocument.document_id == 2){
                        $scope.panCard = empDocument.document;
                        
                      }else if(empDocument.document_id == 3){
                        $scope.aadhar = empDocument.document;
                      }
                   });
                }
            }
        });
    }


    $scope.uploadDocument = function (file,name) {
        $scope['uploading_'+name] = true;
        var url = base_url+'/api/upload/employeeDocument';
        Upload.upload({
            url: url,
            data: {
                media: file
            }
        }).then(function (resp) {
            if(resp.data.success){
                $scope.contractData[name] = resp.data.media;
                $scope[name] = resp.data.media;

            } else {
                alert(resp.data.message);
            }
            $scope['uploading_'+name] = false;
        }, function (resp) {
            // console.log('Error status: ' + resp.status);
            $scope['uploading_'+name] = false;
        }, function (evt) {
            $scope.uploading_percentage = parseInt(100.0 * evt.loaded / evt.total) + '%';
        });
    }
    

    $scope.uploadCompulsary = function (file,name,document_id) {
        $scope['uploading_'+name] = true;
        var url = base_url+'/api/upload/uploadCompulsary';
        Upload.upload({
            url: url,
            data: {
                media: file,
                document_id : document_id,
                employee_id : $scope.employee_id
            }
        }).then(function (resp) {
            if(resp.data.success){
                $scope[name] = resp.data.media;
                $scope.employeeDocumentData();
                
            } else {
                alert(resp.data.message);
            }
            $scope['uploading_'+name] = false;
        }, function (resp) {
            // console.log('Error status: ' + resp.status);
            $scope['uploading_'+name] = false;
        }, function (evt) {
            $scope.uploading_percentage = parseInt(100.0 * evt.loaded / evt.total) + '%';
        });
    }

    $scope.removeFile = function(name){
        $scope[name] = '';
    }


    $scope.submitContract = function(){
        $scope.form_success = false;
        $scope.form_error = false;
        $scope.contractData.contract = $scope.contract;
        data = $scope.contractData;
        if($scope.employee_id != 0){
            $scope.processing = true;
            EmployeeDocumentService.submitContract($scope.employee_id,data).then(function(data){
                // console.log(data);
                // $scope.employeeRemarks = data.employeeRemarks;
                $scope.processing = false;
                if(data.success){
                    $scope.form_success = data.message;
                    $scope.contractData = {};
                    $scope.contract = '';
                    $scope.employeeDocumentData();
                }else{
                    $scope.form_error = data.message;
                }

            });
        }
        $timeout(function(){
            $scope.processing = false;
        },4000);
        $scope.attachment = '';
    }

    $scope.submitDocument = function(){
        $scope.form_success = false;
        $scope.form_error = false;
        $scope.documentData.attachment = $scope.attachment;
        data = $scope.documentData;
        if($scope.employee_id != 0){
            $scope.processing = true;
            EmployeeDocumentService.submitDocument($scope.employee_id,data).then(function(data){
                $scope.processing = false;
                if(data.success){
                    $scope.form_success = data.message;
                    $scope.documentData = {};
                    $scope.attachment = '';
                    $scope.employeeDocumentData();
                }else{
                    $scope.form_error = data.message;
                }

            });
        }
        $timeout(function(){
            $scope.processing = false;
        },4000);
        $scope.attachment = '';
    }


    $scope.deleteDocument = function(index,document_id,document_type){
        $scope.processing = true;
        EmployeeDocumentService.deleteDocument(document_id).then(function(data){
            if(data.success){
                $scope.employeeDocuments.splice(index , 1);
                $scope.form_success = data.message;

                if(document_type == 2){
                    $scope.panCard = '';
                }else if(document_type == 3){
                    $scope.aadhar = '';
                }
                
            }else{
                $scope.form_error = data.message;

            }
            $scope.processing =false;
        });

    }

});



