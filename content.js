let blockedWebsites = [];

chrome.storage.sync.get(["blockedWebsites"], function (result) {
  if (result.blockedWebsites) {
    blockedWebsites = result.blockedWebsites;
    checkAndWarn();
  }
});

function checkAndWarn() {
  const currentUrl = window.location.href;
  const isBlocked = blockedWebsites.some((website) =>
    currentUrl.includes(website)
  );

  if (isBlocked) {
    if (
      !confirm('Are you sure you are opening for purpose and won"t waste time?')
    ) {
      window.location.href = "about:blank";
    }
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "remind") {
    alert("Reminder: You are still using this for study purposes!");
  } else if (request.action === "updateBlockedWebsites") {
    blockedWebsites = request.blockedWebsites;
  }
});

checkAndWarn();
