Fairfax-Paywall-Bypass
======================

Bypasses / hides the paywall elements on fairfax sites.

### Installation

Due to the Chrome Web Store no longer allowing "paywall bypass" extension, you must download this from GitHub and load it as an unpacked extension.

Download the repository here to a folder on your local computer.

1. Visit chrome://extensions (or menu -> Tools -> Extensions).
2. Enable Developer mode by ticking the checkbox in the upper-right corner.
3. Click on the "Load unpacked extension..." button.
4. Select the folder containing your unpacked extension.
(NOTE: Enabling developer mode will result in a prompt in chrome to disable it every time you start it up, click cancel to this, to continue to load unpacked extensions like this.)

### Details

This extension creates a mutation observer and monitors for changes that indicate the page has been locked and the paywall is active. Once those changes have been observed, the script removes the elements blocking the article, and unlocks the page again so the scrollbars are active and the article can be read as per normal.