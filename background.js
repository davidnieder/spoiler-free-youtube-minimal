'use strict';

let defaultSettings = {
  hideTime: true,
  hideRelated: true,
  hideComments: true
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.clear();
  chrome.storage.local.set(defaultSettings);
});
