'use strict';

let $boxHideTime = document.getElementById('boxHideTime');
let $boxHideRelated = document.getElementById('boxHideRelated');
let $boxHideComments = document.getElementById('boxHideComments');

chrome.storage.local.get(null, (settings) => {
  $boxHideTime.checked = settings['hideTime'];
  $boxHideRelated.checked = settings['hideRelated'];
  $boxHideComments.checked = settings['hideComments'];
});

$boxHideTime.addEventListener('change', () => {
  chrome.storage.local.set({'hideTime': $boxHideTime.checked});
});
$boxHideRelated.addEventListener('change', () => {
  chrome.storage.local.set({'hideRelated': $boxHideRelated.checked});
});
$boxHideComments.addEventListener('change', () => {
  chrome.storage.local.set({'hideComments': $boxHideComments.checked})
});
