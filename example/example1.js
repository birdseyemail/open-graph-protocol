// parses the HTML

var data = $('html').ogp(); 

// get the URLs
var actions = data['email:action']; 
var web_urls = data['email:action:web_url'];

// creates JSON string
var z = '['; 

function def(x) { 
    if (x) return x; 
    return ''; 
} 

for (var i = 0; i < actions.length; i++) { 

    if (i > 0) { 
      z = z + ','; 
    } 
    z = z + '{ "name" : "' + def(actions[i]) + '", '; 
    if (apps) {
        z = z + '"app" : [ "' + def(apps[i]) + '" ], '; 
    }
    if (web_urls) {
        z = z + '"url" : "' + def(web_urls[i]) + '" '; 
    }    
    z = z + '}'; 
} 

// returns back to calling UIWebView
z = z + ']'; 
    