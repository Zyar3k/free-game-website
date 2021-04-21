import React, { ReactElement, useState, useEffect } from 'react'
import axios from 'axios'
import { Game } from 'types'
import GameListRender from './GameList.render'
import { API_HOST, API_KEY } from './constants'

const GameList = (): ReactElement => {
	const [games, setGames] = useState<Game[]>([])
	const [err, setErr] = useState<string>('')

	useEffect(() => {
		axios
			.get('/games', {
				baseURL: `https://${API_HOST}/api`,
				headers: {
					'x-rapidapi-key': API_KEY,
					'x-rapidapi-host': API_HOST,
				},
				params: {
					platform: 'browser',
				},
			})
			.then(res => setGames(res.data))
			.catch(e => setErr(e.message))
	}, [])

	return <GameListRender err={err} games={games} />
}

export default GameList
