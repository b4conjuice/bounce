var React = require('react');
var Bounce = require('./Bounce');
var Input = require('./Input');
require('../scss/style.scss');

var App = React.createClass({
	getInitialState: function() {
		return {
			start: '9:00',
			startLunch: '1:00',
			endLunch: '1:30',
			bounce: 'bounce'
		};
	},
	handleChange: function(event) {
		var name = event.target.name;
		var value = event.target.value;
		var isValidTime = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(value);
		if (isValidTime) {
			if (name == 'start')
				this.setState({
					start: value,
					bounce: this.getBounce(value, this.state.startLunch, this.state.endLunch).T
				});
			else if (name == 'startLunch')
				this.setState({
					startLunch: value,
					bounce: this.getBounce(this.state.start, value, this.state.endLunch).T
				});
			else if (name == 'endLunch')
				this.setState({
					endLunch: value,
					bounce: this.getBounce(this.state.start, this.state.startLunch, value).T
				});
		}
	},
	getBounce: function(start, lunchStart, lunchEnd) {
		var startTime = this.getTime(start);
		var lunchStartTime = this.getTime(lunchStart);
		var lunchEndTime = this.getTime(lunchEnd);

		var beforeLunch = this.getTimeDifference(startTime, lunchStartTime);
		var fullTime = this.getTimeHM(7, 59);
		var afterLunch = this.getTimeDifference(beforeLunch, fullTime);
		var bounce = this.getTimeSum(lunchEndTime, afterLunch);
		return bounce;
	},
	getTime: function(time) {
		var T = time;
		var hourmin = time.split(':');
		var h = parseInt(hourmin[0]);
		var m = parseInt(hourmin[1]);
		if (m > 59) {
			m = m % 60;
			h++;
		}
		else if (m < 0) {
			m += 60;
			h--;
		}
		h = this.convertAMPM(h)
		var Hour = h;
		var Minute = m;
		return {
			T: T,
			Hour: Hour,
			Minute: Minute
		};

	},
	getTimeHM: function(hour, minute) {
		if (minute > 59) {
			minute = minute % 60;
			hour++;
		}
		else if (minute < 0) {
			minute += 60;
			hour--;
		}

		var Hour = hour;
		var Minute = minute;
		var minuteString = minute.toString();
		if (minute < 10)
			minuteString = '0' + minute;
		if (minute == 0)
			minuteString = '00';
		hour = this.convertAMPM(hour);
		var T = hour + ':' + minuteString;
		return {
			T: T,
			Hour: Hour,
			Minute: Minute
		};
	},
	getTimeDifference: function(time1, time2) {
		return this.getTimeHM(time2.Hour - time1.Hour, time2.Minute - time1.Minute);
	},
	getTimeSum: function(time1, time2) {
		return this.getTimeHM(time2.Hour + time1.Hour, time2.Minute + time1.Minute);
	},
	convertAMPM: function(hour) {
		var newHour = hour;
		if (newHour > 12)
			newHour -= 12;
		else if (newHour < 6)
			newHour += 12;

		return newHour;
	},
	render: function() {
		return (
			<div id='content'>
				<Bounce bounce={this.state.bounce} />
				<Input name="start" time="start" onChange={this.handleChange} />
				<Input name="startLunch" time="start lunch" onChange={this.handleChange}/>
				<Input name="endLunch" time="end lunch" onChange={this.handleChange}/>
			</div>
		);
	}
});

module.exports = App;