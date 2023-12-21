document.getElementById("confirmButton").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.remove(tabs[0].id);
  });
});

document.getElementById("cancelButton").addEventListener("click", function () {
  window.close();
});
