document.addEventListener('DOMContentLoaded', function () {
  // Query the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Inject the content script into the active tab
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        files: ['content.js']
      },
      () => {
        // After injecting, send a message to the content script
        chrome.tabs.sendMessage(tabs[0].id, { action: "getEcoStatus" }, function (response) {
          // Handle the response from the content script
          if (response) {
            document.getElementById('description').innerText = response.description || "No description found.";
            document.getElementById('eco-status').innerText = response.ecoStatus || "Status unavailable.";
          } else {
            document.getElementById('description').innerText = "Failed to get response.";
            document.getElementById('eco-status').innerText = "Status unavailable.";
          }
        });
      }
    );
  });
});
