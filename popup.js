// Get the active tab
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var currentTab = tabs[0];

  // Display confirmation popup
  if (confirm("Are you sure you want to open YouTube?")) {
    // If user clicks OK, open the tab
    chrome.tabs.update(currentTab.id, { url: "https://www.youtube.com" });
  } else {
    // If user clicks Cancel, close the tab
    chrome.tabs.remove(currentTab.id);
  }
});
