chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
  chrome.alarms.create("studyReminder", {
    delayInMinutes: 5,
    periodInMinutes: 5,
  });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "studyReminder") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "remind" });
      }
    });
  }
});
