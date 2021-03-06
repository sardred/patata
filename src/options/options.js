// Set options
function saveOptions () {
  var sessionLength = document.getElementById('sessionLength').value
  var breakLength = document.getElementById('breakLength').value
  var longBreakLength = document.getElementById('longBreakLength').value
  var sessionRatio = document.getElementById('sessionRatio').value

  chrome.storage.sync.set({
      sessionLength: sessionLength,
      breakLength: breakLength,
      longBreakLength: longBreakLength,
      sessionRatio: sessionRatio
    }, function () {
      // Feedback for user
      var status = document.getElementById('status')
      status.textContent = 'Options saved.'
      setTimeout(function () {
        status.textContent = ''
      }, 2000)
    }
  )
}

// Get stored options
function restoreOptions () {
  chrome.storage.sync.get({
    sessionLength: 25,
    breakLength: 5,
    longBreakLength: 15,
    sessionRatio: 4
  }, function (data) {
    document.getElementById('sessionLength').value = data.sessionLength
    document.getElementById('breakLength').value = data.breakLength
    document.getElementById('longBreakLength').value = data.longBreakLength
    document.getElementById('sessionRatio').value = data.sessionRatio
  })
}

// Save options when clicking... Save.
document.getElementById('save').addEventListener('click', saveOptions)

// Restore options when loading up the menu
document.addEventListener('DOMContentLoaded', restoreOptions)
