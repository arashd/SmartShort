console.log('running site script');

chrome.extension.sendRequest({'type' : 'ourSite', 'message': 'user is in our site', 'url' : document.location.href}, function(response) {
  console.log('got this response from background: ' + response.message + " " + response.url);
  redirect(response.url);
});

function redirect(url){
	document.location = url;
}
