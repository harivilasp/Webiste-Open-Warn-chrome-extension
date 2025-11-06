# Website Open Warn Chrome Extension

This Chrome extension helps you stay focused by warning you before opening distracting websites and reminding you to stay on task for study purposes.

## Features

- **Website Blocking with Confirmation**: Get a confirmation prompt before opening specified websites, helping you to think twice about your browsing choices.
- **Customizable Blocked Websites**: Easily add or remove websites from your blocked list directly through the extension's popup.
- **Study Reminder**: Receive periodic reminders (every 5-10 minutes) that you are using the browser for study purposes, helping you maintain focus during study sessions.

## Implemented Features

- [x] Remind after every 5-10 min that you are still using for study purpose
- [x] Customizable website blocking: Users can add/remove websites to be blocked via the extension popup.

## How to Use

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/harivilasp/Webiste-Open-Warn-chrome-extension.git
    ```
2.  **Load the extension in Chrome**:
    - Open Chrome and navigate to `chrome://extensions`.
    - Enable "Developer mode" by toggling the switch in the top right corner.
    - Click on "Load unpacked" and select the cloned repository directory.
3.  **Configure Blocked Websites**:
    - Click on the extension icon in your Chrome toolbar.
    - In the popup, add the URLs of the websites you want to block (e.g., `youtube.com`, `facebook.com`).
    - Click "Add Website" and then "Save Settings".
4.  **Start Studying!**
    - When you try to open a blocked website, you will receive a confirmation prompt.
    - Periodically, you will receive a reminder to stay focused on your study purpose.

## Future Enhancements

- More granular control over reminder intervals.
- Option to temporarily disable blocking for a set period.
- Integration with productivity tools.
