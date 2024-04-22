$(document).ready(function() {
    chrome.storage.sync.get(['memeSettings'], function(result) {
        const companyMemeMap = result.memeSettings || {}; 

        function swapImage() {
            $("div.feed-shared-update-v2").each(function() { // Adjust the selector if needed
                const postText = $(this).text().toLowerCase();

                for (const company in companyMemeMap) {
                    if (postText.includes(company.toLowerCase())) {
                        const memePath = companyMemeMap[company];
                        const originalImage = $(this).find("img");
                        originalImage.attr("src", memePath);
                        break; 
                    }
                }
            });
        }

        swapImage();
        setInterval(swapImage, 2000); 
    });
});