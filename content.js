console.log("Content script is running");

function scrapeEntirePage() {
    let textContent = document.body.innerText;
    return textContent;
}

function checkEcoFriendly(text) {
    const ecoKeywords = ["organic", "sustainable", "recycled", "eco-friendly", "natural", "biodegradable", "green"];
    let isEcoFriendly = false;

    for (const keyword of ecoKeywords) {
        if (text.toLowerCase().includes(keyword)) {
            isEcoFriendly = true;
            break;
        }
    }

    return isEcoFriendly ? "Eco-friendly" : "Not eco-friendly";
}

const entirePageContent = scrapeEntirePage();
const ecoStatus = checkEcoFriendly(entirePageContent);

console.log(`The page is ${ecoStatus}`);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "getEcoStatus") {
        sendResponse({ description: entirePageContent, ecoStatus: ecoStatus });
    }
});
