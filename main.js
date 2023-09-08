let timer ;
let elapsedTime = 0;

function updateDisplay() {
  let milliseconds = elapsedTime % 1000;
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let hour = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  $('#milliseconds').text(milliseconds.toString().padStart(3, '0'));
  $('#seconds').text(seconds.toString().padStart(2, '0'));
  $('#minutes').text(minutes.toString().padStart(2, '0'));
  $('#hour').text(hour.toString().padStart(2, '0'));
}

$(document).ready(function () {
  $('#start').on('click', function () {
    if (!timer) {
      timer = setInterval(function () {
        elapsedTime += 10;
        updateDisplay()
      }, 10);
      $('#start').prop('disabled', true);
      $('#stop').prop('disabled', false);
      $('#reset').prop('disabled', false);
    };
  });
  $('#stop').on('click', function () {
    if (timer) {
      clearInterval(timer);
      timer = null;

      $('#start').prop('disabled', false);
      $('#stop').prop('disabled', true);
      $('#reset').prop('disabled', false);
    };
  });

  $('#reset').on('click', function () {
    if (!timer) {
      elapsedTime = 0;
      updateDisplay();

      $('#start').prop('disabled', false);
      $('#stop').prop('disabled', true);
      $('#reset').prop('disabled', true);
    };

    if (timer) {
      clearInterval(timer);
      timer = null;
      elapsedTime = 0;
      updateDisplay();

      $('#start').prop('disabled', false);
      $('#stop').prop('disabled', true);
      $('#reset').prop('disabled', true);
    };
  });
});


