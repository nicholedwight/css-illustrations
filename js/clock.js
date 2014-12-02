$(document).ready(function (){
  (function (clockJS, $, undefined) {

    var currentTime, hour, minute, interval;

    function getTimeValues() {
      currentTime = new Date();
      hour = currentTime.getHours() >= 12 ? currentTime.getHours() - 12 : currentTime.getHours();
      minute = currentTime.getMinutes();
    }

    function setTime() {
      updateTime();
      setTimeout(function () {
        updateTime();
        setInterval(function() {
          updateTime();
        }, 60000);
      }, interval * 1000);
    }

    function updateTime() {
      getTimeValues();

      if(minute >= 58) {
        $('.five').removeClass('active');
        $('.to').removeClass('active');
        $('.oclock').addClass('active');
        $('.' + (hour + 1).toString()).addClass('active');
      }

      else if (minute >= 52) {
        $('.ten').removeClass('active');
        $('.five').addClass('active');
        $('.to').addClass('active');
        $('.' + (hour + 1).toString()).addClass('active');
      }

      else if (minute >= 49) {
        $('.ten').addClass('active');
        $('.to').addClass('active');
        $('.quarter').removeClass('active');
        $('.' + (hour + 1).toString()).addClass('active');
      }

      else if (minute >= 43) {
        $('.quarter').addClass('active');
        $('.twenty').removeClass('active');
        $('.to').addClass('active');
        $('.' + (hour + 1).toString()).addClass('active');
      }

      else if (minute >= 36) {
        $('.twenty').addClass('active');
        $('.to').addClass('active');
        $('.half').removeClass('active');
        $('.past').removeClass('active');
        $('.' + hour.toString()).removeClass('active');
        $('.' + (hour + 1).toString()).addClass('active');
      }

      else if (minute >= 26) {
        $('.half').addClass('active');
        $('.past').addClass('active');
        $('.twenty').removeClass('active');
        $('.' + hour.toString()).addClass('active');
      }

      else if (minute >= 19) {
        $('.quarter').removeClass('active');
        $('.twenty').addClass('active');
        $('.past').addClass('active');
        $('.' + hour.toString()).addClass('active');
      }

      else if (minute >= 13) {
        $('.quarter').addClass('active');
        $('.past').addClass('active');
        $('.ten').removeClass('active');
        $('.' + hour.toString()).addClass('active');
      }

      else if (minute >= 9) {
        $('.five').removeClass('active');
        $('.ten').addClass('active');
        $('.past').addClass('active');
        $('.' + hour.toString()).addClass('active');
      }

      else if (minute >= 3) {
        $('.five').addClass('active');
        $('.past').addClass('active');
        $('.oclock').addClass('.active');
        $('.' + hour.toString()).addClass('active');
      }

      else {
        $('.oclock').addClass('active');
        $('.' + hour.toString()).addClass('active');
      }
    }

    clockJS.init = function () {
      getTimeValues();
      interval = 60 - currentTime.getSeconds();
      if (interval === 60) {
        interval = 0;
      }
      setTime();
    };

  }(window.clockJS = window.clockJS || {}, jQuery));

  clockJS.init();
});
