var App = angular.module('App', ['ui.select','ngRoute']);

function AddUser($scope, emails)
{	
		if($scope.userCreation.task && $scope.userCreation.time && $scope.userCreation.email)
		{	
				$scope.err = false;//There is no error				
				for(var i = 0; i < emails.length; i++)
				{
					if($scope.emails.indexOf(emails[i]) == -1)
						$scope.emails.push(emails[i]);
				}
				$scope.Users.push($scope.userCreation);				
				$scope.Users[$scope.Users.length - 1].email = angular.copy($scope.userCreation.email);		
				$scope.userCreation = {email: []};
				
				$('#email_input input').val("");                
			
		}
		else
		{
			$scope.err = "You should fill all fields!";
		}
}

//Some default tasks
App.factory('Users', function () {
	return [{task: "Change the layout", time: "6hrs", email:['ajit@test.com'],editing: false},{task: "Assigned bug #1221", time: "3hrs", email:['ajit@test.com', 'spandan@test.com'],editing: false},{task: "Assigned bug #1222", time: "2hrs", email:['ajit@test.com', 'john@test.com'],editing: false}];// 
});
