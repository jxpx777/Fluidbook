chrome.webRequest.onBeforeRequest.addListener(function beforeRequestHandler(requestInfo) {
	var choosyURL = "x-choosy://open/" + requestInfo["url"];
	return {redirectUrl: choosyURL};
}, {urls: ["*://*.facebook.com/*", "*://*.fb.me/*", "*://facebook.com/*", "*://fb.me/*"], types: ["main_frame"]}, ["blocking"]);