'use strict';

document.addEventListener('yt-navigate-finish', () => {
  chrome.storage.local.get(null, (settings) => {
    setTimeVisibility(settings.hideTime);
    setRelatedContentVisibility(settings.hideRelated);
    setCommentVisibility(settings.hideComments);
  });
});

chrome.storage.local.onChanged.addListener((change) => {
  if ('hideTime' in change) {
    setTimeVisibility(change.hideTime.newValue);
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

  if (hideTime) {
    $progressBar.style.display = 'none';
    $timeDuration.style.visibility = 'hidden';
    $timeSeparator.style.visibility = 'hidden';
  } else {
    $progressBar.style.display = 'block';
    $timeDuration.style.visibility = 'visible';
    $timeSeparator.style.visibility = 'visible';
  }
}

function setRelatedContentVisibility(hideRelated) {
  let $relatedContent = document.querySelector('#related');

  if (hideRelated) {
    $relatedContent.style.display = 'none';
  } else {
    $relatedContent.style.display = 'flex';
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
