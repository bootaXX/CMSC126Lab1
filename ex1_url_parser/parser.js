var form = document.getElementById('url-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var uri = document.getElementById('uri-box').value;
    var uriParts = parseUri(uri);
    render(uriParts);
});

function render(uriParts) {
    document.getElementById('parts').className = '';
    for (var key in uriParts) {
        document.getElementById(key + '-value').innerHTML = uriParts[key];
    }
}

function parseUri(uri) {
    var uriParts = {
        scheme: '',
        authority: '',
        path: '',
        query: '',
        fragment: ''
    };

    var temp;
    var a;

    // my code here
    	//scheme
    	uriParts.scheme = uri.substring(0, uri.indexOf(":"));
    	if(uri.indexOf("/") == -1){
    		a = uri.indexOf(":");
    		temp = uri.slice(a+1);
    	}
    	else{
    		a = uri.indexOf(":");
    		temp = uri.slice(a+3);
    	}
    	//authority
    	if(temp.indexOf("/") == -1){
    		uriParts.authority = temp;
    		temp = "";
    	}
    	else{
    		a = temp.indexOf("/");
    		uriParts.authority = temp.substring(0, a);
    		temp = temp.slice(a+1);
	    	if(temp.indexOf("?") != -1){
	    		a = temp.indexOf("?");
	    	}
	    	else if(temp.indexOf("#") != -1){
	    		a = temp.indexOf("#");
	    	}
    	}
    	//path
    	uriParts.path = temp.substring(0, a);
    	temp = temp.slice(a+1);
    	a = temp.indexOf("#");

    	uriParts.query = temp.substring(0,a);
    	temp = temp.slice(a+1);

    	uriParts.fragment = temp;
    // my code ends here

    return uriParts;
}