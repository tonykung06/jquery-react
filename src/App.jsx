import React from 'react';
import Calendar from './Calendar';

export default class App extends React.Component {
	render() {
		const events = [{
			title: 'testing event',
			date: Date.now(),
			allDay: true
		}];

		return (
			<div>
				<h1>Hello World</h1>
				<Calendar events={events} />
			</div>
		);
	}
};