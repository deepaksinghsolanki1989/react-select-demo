import React, { useState } from 'react';
import Select from 'react-select';
import * as statesData from './data';

import './App.css';

function App() {
	const [country, setCountry] = useState(null);
	const [state, setState] = useState(null);

	const [states, setStates] = useState(null);

	// var options = states[country];

	const changeCountry = (newCountry) => {
		console.log('Country changed to ', newCountry);

		setCountry(newCountry);
		setState(null);

		setStates(statesData[newCountry.value])
	}

	const changeState = (newValue) => {
		console.log('State changed to ' + newValue);

		setState(newValue);
	}

	return (
		<div className="section">
			<h1 className="section-heading">React Select Demo</h1>
			<div className="section-body">
				<div className="section-item">
					<div className="left">Country</div>
					<div className="right">
						<Select
							autoFocus
							options={[
								{ value: 'AU', label: 'Australia' },
								{ value: 'US', label: 'United States' }
							]}
							simpleValue
							clearable={true}
							name="selected-country"
							value={country}
							onChange={changeCountry}
							searchable={true}
						/>
					</div>
				</div>
				<div className="section-item">
					<div className="left">State</div>
					<div className="right">
						<Select
							// autoFocus
							options={states}
							simpleValue
							clearable={true}
							name="selected-state"
							value={state}
							onChange={changeState}
							searchable={true}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;
