const FollowToggle = require('./follow_toggle.js');

document.addEventListener("DOMContentLoaded",function() {
  
  $('button.follow-toggle').each( function(index, el) {
    window.something = new FollowToggle(el);
  });
});
