// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function (timerValue) {
    //sets the numeric display to the current value of the timer
    document.getElementById('numeric-display').textContent = timerValue;
  },
  drawProgressBars: function (timerValue) {
    //sets the width of each progress bar to 'N%', where N is the amount of time elapsed in seconds
    const timePassed = 100 - timerValue
    document.getElementsByClassName('progress-bar')[0].style.width = timePassed + '%';
  },
  drawLitFuses: function (timerValue) {
    // sets the width of each 'unburnt' bar to 98%
    const timePassed = 100 - timerValue;
    document.getElementsByClassName('burnt')[0].style.width = timePassed * 0.98 + '%';
    document.getElementsByClassName('unburnt')[0].style.width = timerValue * 0.98 + '%';
  },
  drawCrawlers: function (timerValue) {
    //   1) draws "crawlers" whose left margins scale with the amount of time elapsed, at a rate of 10px per second
    //  2) sets the top margin of each "crawler" to either 0px or 10px every other second, starting with 0px when the timer is at 100 seconds left
    const moveBug = 100 - timerValue;
    document.getElementsByClassName('crawler')[0].style.marginLeft = (moveBug * 10) + 'px';
    if (timerValue % 2 === 0) {
      document.getElementsByClassName('crawler')[0].style.marginTop = 10 + 'px';
    }
    else {
      document.getElementsByClassName('crawler')[0].style.marginTop = 0 + 'px';
    }
  }

};
