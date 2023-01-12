(function() {
    'use strict';

    var comment = document.getElementById('comment')
    var label = document.getElementById('label')

  var LIMIT = 50;
  var WARNING = 10;

  label.innerHTML = LIMIT;

  comment.addEventListener('keyup', function() {
    var remaining = LIMIT - this.value.length;
    label.innerHTML = remaining;
    if (remaining < WARNING) {
      label.className = 'warnig';
    } else {
      label.className = '';
    // label.className = remaining < WARNING ? 'warning' ; '';
    }
  });

})();
