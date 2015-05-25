App.controller('loginCntrl', ['$scope','$location','customService', function ($scope,$location,customService) {
    $scope.formInfo = {}; 
    $scope.email ='';
    $scope.password ='';
    $scope.usertype='';
    $scope.err='';
    var found=false;
    $scope.validateUser = function () {  
        for(var index=0;index< person.persons.length;index++){
        if(person.persons[index].email.toLowerCase() === $scope.email.toLowerCase() &&      person.persons[index].password===$scope.password){
             $scope.usertype= person.persons[index].userType; 
             customService.emailId=$scope.email;
            if(person.persons[index].userType==='superuser')
            $location.path('/superuser');            
             else
            $location.path('/user');
            
            found=true;
            break;
        }
       
    }
        if(!found){
             $scope.err='Wrong Credentials!';
       }
    }
} ]);
App.controller('User', ['$scope','Users','customService',function ($scope, Users,customService) {
	$scope.Users = Users;
	$scope.userCreation = {};
	$scope.err = false;	
	$scope.registring = false;     
	$scope.emails = ['ajit@test.com', 'spandan@test.com', 'john@test.com'];
	$scope.Add = function()
	{
		$scope.registring = true;
	}
	$scope.AddToArray = function()
	{
		AddUser($scope, $scope.userCreation.email);
		$scope.registring = false;
	}
	$scope.Delete = function(index)
	{		
		$("#id-"+index).fadeOut('slow', function(){
			$scope.Users.splice(index, 1);
		});
	}
	$scope.Edit = function(index)
	{
		$scope.Users[index].editing = true;
	}
	$scope.Save = function(index)
	{		
		for(var i = 0; i < Users[index].email.length; i++)
		{
			if($scope.emails.indexOf($scope.Users[index].email[i]) == -1)
			{
				$scope.emails.push($scope.Users[index].email[i]);
			}
		}
		$scope.Users[index].editing = false;
		$('#role-'+index + ' input').val("");//Clear the fole input field 
	}
         $scope.filterUser = function (data) {      
        var user = $.grep(data.email, function (element, index) {
            return element.toLowerCase() === customService.emailId.toLowerCase();
        });
        if (typeof (user) != undefined && user.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}]);

