$(document).ready(function(){

	// Set countdown date
	var countdownDate = 'Jan 13 2022 17:30:00';

		function time_counting(timecount) {
  			var t = Date.parse(timecount) - Date.parse(new Date());
  			var seconds = Math.floor((t / 1000) % 60);
  			var minutes = Math.floor((t / 1000 / 60) % 60);
  			var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  			var days = Math.floor(t / (1000 * 60 * 60 * 24));
  			return {
    			'total': t,
    			'days': days,
    			'hours': hours,
    			'minutes': minutes,
    			'seconds': seconds
  			};
		}

		function run_countdown(id, timecount) {
  			var countdown = document.getElementById(id);

  				var day_span = countdown.querySelector('.days');
  				var hour_span = countdown.querySelector('.hours');
  				var minute_span = countdown.querySelector('.minutes');
  				var second_span = countdown.querySelector('.seconds');

  				var days_title = document.getElementById('days_title');
  				var hours_title = document.getElementById('hours_title');
  				var mins_title = document.getElementById('mins_title');
  				var secs_title = document.getElementById('secs_title');

  		function update_countdown() {
    		var t = time_counting(timecount);

    			day_span.innerHTML = t.days;
    			if (t.days === 1) {
      			day_title.innerHTML = 'Day';
    			} else {
      			day_title.innerHTML = 'Days';
    			}

    			hour_span.innerHTML = ('' + t.hours).slice(-2);
    			if (t.hours === 1) {
      			hour_title.innerHTML = 'Hour';
    			} else {
      			hour_title.innerHTML = 'Hours';
    			}

    			minute_span.innerHTML = ('' + t.minutes).slice(-2);
    			if (t.minutes === 1) {
      			minute_title.innerHTML = 'Minute';
    			} else {
      			minute_title.innerHTML = 'Minutes';
    			}

    			second_span.innerHTML = ('' + t.seconds).slice(-2);
    			if (t.seconds === 1) {
      			second_title.innerHTML = 'Second';
    			} else {
      			second_title.innerHTML = 'Seconds';
    			}

  		}
  		update_countdown();
  		var timeinterval = setInterval(update_countdown, 1);

	}
	run_countdown('count', countdownDate);

});