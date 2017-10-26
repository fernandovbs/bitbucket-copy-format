(browser => {
    "use strict";

    browser.browserAction.onClicked.addListener(tab => {

        browser.tabs.executeScript(null, {file: "src/content.script.js"});

        browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
            console.log(request);

            browser.notifications.create('bitbucket-copy-format', {
                type: 'basic',
                iconUrl: 'src/images/icon.png',
                title: 'bitbucket-copy-format',
                message: 'Copied'
            }, () => {
                sendResponse({
                    "response": "notificated"
                });
            });

        });
    });

})(chrome||browser);