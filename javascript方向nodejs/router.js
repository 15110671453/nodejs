

function route (pathname)
{

	console.log('about to route a request for' + pathname);
	console.log(__filename);
    console.log(__dirname);
}

exports.route = route;