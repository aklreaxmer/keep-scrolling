window.addEventListener("scroll", function(evt) {chrome.runtime.sendMessage({message: "scroll_event"});});