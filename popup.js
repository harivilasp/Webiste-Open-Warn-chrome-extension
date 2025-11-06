document.addEventListener("DOMContentLoaded", function () {
  const blockedWebsitesList = document.getElementById("blockedWebsites");
  const newWebsiteInput = document.getElementById("newWebsite");
  const addWebsiteButton = document.getElementById("addWebsite");
  const saveSettingsButton = document.getElementById("saveSettings");

  let blockedWebsites = [];

  // Load blocked websites from storage
  chrome.storage.sync.get(["blockedWebsites"], function (result) {
    if (result.blockedWebsites) {
      blockedWebsites = result.blockedWebsites;
      renderBlockedWebsites();
    }
  });

  // Render blocked websites in the popup
  function renderBlockedWebsites() {
    blockedWebsitesList.innerHTML = "";
    blockedWebsites.forEach((website, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = website;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        blockedWebsites.splice(index, 1);
        renderBlockedWebsites();
      });
      listItem.appendChild(removeButton);
      blockedWebsitesList.appendChild(listItem);
    });
  }

  // Add new website to the list
  addWebsiteButton.addEventListener("click", function () {
    const website = newWebsiteInput.value.trim();
    if (website && !blockedWebsites.includes(website)) {
      blockedWebsites.push(website);
      newWebsiteInput.value = "";
      renderBlockedWebsites();
    }
  });

  // Save settings to storage
  saveSettingsButton.addEventListener("click", function () {
    chrome.storage.sync.set({ blockedWebsites: blockedWebsites }, function () {
      alert("Settings saved!");
      // Update content scripts with new blocked websites
      chrome.tabs.query({}, function (tabs) {
        tabs.forEach(function (tab) {
          if (tab.url && tab.url.startsWith("http")) {
            chrome.scripting.executeScript(
              {
                target: { tabId: tab.id },
                function: (newBlockedWebsites) => {
                  window.blockedWebsites = newBlockedWebsites;
                },
                args: [blockedWebsites],
              },
              () => {
                if (chrome.runtime.lastError) {
                  console.warn(
                    `Scripting error in tab ${tab.id}: ${chrome.runtime.lastError.message}`
                  );
                }
              }
            );
          }
        });
      });
    });
  });
});
