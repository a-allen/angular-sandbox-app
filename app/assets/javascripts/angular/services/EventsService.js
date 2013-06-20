app.factory('Event', function($resource){
	var resource = $resource('/eventlist/:id', {id:'@id'}, {update: {method:'PUT'}});
	return resource;
});