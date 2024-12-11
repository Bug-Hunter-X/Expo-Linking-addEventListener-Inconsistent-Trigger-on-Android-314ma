# Expo Linking.addEventListener Inconsistent Trigger on Android

This repository demonstrates a bug in Expo's `Linking` API where the `addEventListener` for deep links does not reliably trigger on Android. The issue causes the application to fail to handle deep links in certain situations.

## Bug Description

The `Linking.addEventListener` method is used to listen for deep link events.  However, on Android, this listener sometimes fails to fire when a deep link is opened, resulting in the app not reacting to the intended URL.

## Reproduction

The `bug.js` file showcases the problem. The app attempts to listen for a deep link. If the app is opened directly through a deep link, it may not correctly capture the URL on Android.

## Solution

The `bugSolution.js` file provides a workaround.  Instead of solely relying on `addEventListener`, it incorporates a check within `componentDidMount` to get the initial URL.  This ensures that even if the event listener fails, the app still attempts to handle the deep link upon startup.

## Note

This workaround is not a complete solution. The ideal approach would be a fix within the Expo `Linking` API itself. This issue should be reported to the Expo team to ensure a more robust solution is implemented.