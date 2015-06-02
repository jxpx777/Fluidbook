function loadFacebookRequestsInFluidApp(event) {
	console.log(event);
	if (/\b(facebook.com|fb.me)(\/.*.html)?\b/.test((event.url || event.query))) {
		event.preventDefault();
		var activeWindow = safari.application.activeBrowserWindow;
		if (!activeWindow) { return; }
		var activeTab = activeWindow.activeTab;
		if (!activeTab) { return; }
		activeTab.url = "x-choosy://open/" + (event.url || "https://facebook.com");
		return false;
	}
}

console.log("Loaded for: 20150506123834");
safari.application.addEventListener("beforeNavigate", loadFacebookRequestsInFluidApp, true);