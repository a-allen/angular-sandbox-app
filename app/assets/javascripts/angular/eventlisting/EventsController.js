(function(angular, app) {

	app.controller('EventCtrl', function EventCtrl($scope, Event) {

		$scope.message  = "Angular Event App";
		$scope.events   = Event.query();
		$scope.newEvent = '';
		
		$scope.addEvent = function() {

			if (!$scope.newEvent.length) {
				return;
			}

			var entry = Event.save({name: $scope.newEvent})
			$scope.events.push(entry);
			$scope.newEvent = '';
		};

		$scope.deleteEvent = function(ID, index) {

			$scope.events.splice(index, 1);

			Event.delete({id:ID}, function() {
				console.log('success: DELETE');			
			});
		};

		$scope.updateEvent = function(ID) {

			Event.update({id:ID}, function() {
				$scope.dirty = false;		
			});
		};

	});

})(angular, app);