(function () {
  'use strict';

  if (typeof weddingDate === 'undefined') return;

  var target = new Date(weddingDate).getTime();
  if (isNaN(target)) return;

  var daysEl    = document.getElementById('countdown-days');
  var hoursEl   = document.getElementById('countdown-hours');
  var minutesEl = document.getElementById('countdown-minutes');
  var secondsEl = document.getElementById('countdown-seconds');

  function update() {
    var now      = new Date().getTime();
    var distance = target - now;

    if (distance <= 0) {
      daysEl.textContent    = '0';
      hoursEl.textContent   = '0';
      minutesEl.textContent = '0';
      secondsEl.textContent = '0';
      return;
    }

    daysEl.textContent    = Math.floor(distance / (1000 * 60 * 60 * 24));
    hoursEl.textContent   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutesEl.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    secondsEl.textContent = Math.floor((distance % (1000 * 60)) / 1000);

    requestAnimationFrame(function () {
      setTimeout(update, 1000);
    });
  }

  update();
})();
