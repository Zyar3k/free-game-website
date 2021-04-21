import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyles from 'components/GlobalStyles'

import Home from '../Home'

const App = (): ReactElement => (
	<>
		<GlobalStyles />
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	</>
)

export default App
