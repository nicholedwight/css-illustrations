$(document).ready(function () {
  (function (clockJS, $, undefined) {

    var currentTime, hour, minute, interval;

    function getTimeValues() {
      currentTime = new Date();
      hour = currentTime.getHours() >= 12 ? currentTime.getHours() - 12 : currentTime.getHours();
      minute = currentTime.getMinutes();
    }

    function updateTime() {
      getTimeValues();

      if(minute >= 58) {
        $('.five').removeClass('active');
        $('.to').removeClass('active');
        $('.oclock').addClass('active');
        $('.' (hour +1).toString()).addClass('active');
      }

      else if (minute >= 52) {
        $('.ten').removeClass('active');
        $('.five').addClass('active');
        $('.to').addClass('active');
        $('.' (hour +1).toString()).addClass('active');
      }

      else if (minute >= 49) {
        $('.ten').addClass('active');
        $('.to').addClass('active');
        $('.quarter').removeClass('active');
        $('.' (hour +1).toString()).addClass('active');
      }

      else if (minute >= 43) {
        $('.quarter').addClass('active');
        $('.twenty').removeClass('active');
        $('.to').addClass('active');
        $('.' (hour +1).toString()).addClass('active');
      }

      else if (minute >= 36) {
        $('.twenty').addClass('active');
        $('.to').addClass('active');
        $('.' (hour +1).toString()).addClass('active');
        $('.half').removeClass('active');
        $('.past').removeClass('active';
        $('.' + hour.toString()).removeClass('active');
        $('.' + (hour + 1).toString()).addClass('active');
      }
    }

};
