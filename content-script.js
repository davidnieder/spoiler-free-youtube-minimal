'use strict';

document.addEventListener('yt-navigate-finish', () => {
  chrome.storage.local.get(null, (settings) => {
    setTimeVisibility(settings.hideTime);
    setOverlayVisibility(settings.hideOverlay);
    setRelatedContentVisibility(settings.hideRelated);
    setCommentVisibility(settings.hideComments);
  });
});

chrome.storage.local.onChanged.addListener((change) => {
  if ('hideTime' in change) {
    setTimeVisibility(change.hideTime.newValue);
  }
  if ('hideOverlay' in change) {
    setOverlayVisibility(change.hideOverlay.newValue);
  }
  if ('hideRelated' in change) {
    setRelatedContentVisibility(change.hideRelated.newValue);
  }
  if ('hideComments' in change) {
    setCommentVisibility(change.hideComments.newValue);
  }
});

function setTimeVisibility(hideTime) {
  let $progressBar = document.querySelector('.ytp-progress-bar');
  let $timeDuration = document.querySelector('.ytp-time-duration');
  let $timeSeparator = document.querySelector('.ytp-time-separator');
  let $chapterContainer = document.querySelector('.ytp-chapter-container');

  if (hideTime) {
    $progressBar.style.display = 'none';
    $timeDuration.style.visibility = 'hidden';
    $timeSeparator.style.visibility = 'hidden';
    $chapterContainer.style.display = 'none';
  } else {
    $progressBar.style.display = 'block';
    $timeDuration.style.visibility = 'visible';
    $timeSeparator.style.visibility = 'visible';
    $chapterContainer.style.display = 'block';
  }
}

function setOverlayVisibility(hideOverlay) {
  let $overlayContainers = document.querySelectorAll('.ytp-ce-element');

  if (hideOverlay) {
    $overlayContainers.forEach(el => el.style.setProperty('display', 'none', 'important'));
  } else {
    $overlayContainers.forEach(el => el.style.setProperty('display', 'initial', 'important'));
  }
}

function setRelatedContentVisibility(hideRelated) {
  let $relatedContent = document.querySelector('#related');
  let $endscreen = document.querySelector('.html5-endscreen');

  if (hideRelated) {
    $relatedContent.style.display = 'none';
    $endscreen.style.display = 'none';
  } else {
    $relatedContent.style.display = 'flex';
    $endscreen.style.display = 'block';
  }
}

function setCommentVisibility(hideComments) {
  let $comments = document.querySelector('#comments');

  if (hideComments) {
    $comments.style.display = 'none';
  } else {
    $comments.style.display = 'block';
  }
}
