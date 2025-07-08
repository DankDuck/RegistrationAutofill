chrome.action.onClicked.addListener(async (tab) => {
    chrome.scripting.executeScript({
        files: ["fillout.js"],
        target: { tabId: tab.id }
    });
});