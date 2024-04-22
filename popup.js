function saveSettings() {
    const companyMemeMap = {}; 
    const companyInput = document.getElementById('company-input');
    const memeInput = document.getElementById('meme-input');

    // Basic input validation (you'll want to make this more robust)
    if (companyInput.value && memeInput.value) {
        companyMemeMap[companyInput.value] = memeInput.value; 

        chrome.storage.sync.set({ memeSettings: companyMemeMap }, function() {
            console.log('Settings saved');
            // You could add a success message or clear the input fields here
        });
    } else {
        // Handle empty input case (e.g., display an error message)
    }
}

function loadSettings() {
    chrome.storage.sync.get(['memeSettings'], function(result) {
        const companyMemeMap = result.memeSettings || {};
        const settingsDisplay = document.getElementById('settings-display');
        settingsDisplay.innerHTML = ''; // Clear previous settings

        for (const company in companyMemeMap) {
            const memePath = companyMemeMap[company];
            const settingItem = document.createElement('div');
            settingItem.innerHTML = `${company}: ${memePath}`; 
            settingsDisplay.appendChild(settingItem);
        }
    });
}

document.addEventListener('DOMContentLoaded', loadSettings);
document.getElementById('add-setting').addEventListener('click', saveSettings);