import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../Home'

const App = (): ReactElement => (
	<BrowserRouter>
		<Switch>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	</BrowserRouter>
)

export default App
