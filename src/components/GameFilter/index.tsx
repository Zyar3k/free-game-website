import React, { ChangeEvent, ReactElement } from 'react'
import { PLATFORMS, GENRES, TAGS, SORT_BY } from './constans'
import { Form, Label, Select } from './styles'

interface Props {
	onChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameFilter = ({ onChange }: Props): ReactElement => (
	<Form onChange={onChange}>
		<Label htmlFor="platform-select">
			Platform:
			<Select name="platform" id="platform-select">
				{PLATFORMS.map(platform => (
					<option key={platform.value} value={platform.value}>
						{platform.display}
					</option>
				))}
			</Select>
		</Label>

		<Label htmlFor="genre-select">
			Genre:
			<Select name="genre" id="genre-select">
				{GENRES.map(genre => (
					<option key={genre.value} value={genre.value}>
						{genre.display}
					</option>
				))}
			</Select>
		</Label>

		<Label htmlFor="tags-select">
			Tags:
			<Select name="tags" id="tags-select">
				{TAGS.map(tag => (
					<option key={tag.value} value={tag.value}>
						{tag.display}
					</option>
				))}
			</Select>
		</Label>

		<Label htmlFor="sortBy-select">
			Sort By:
			<Select name="sortBy" id="sortBy-select">
				{SORT_BY.map(sortBy => (
					<option key={sortBy.value} value={sortBy.value}>
						{sortBy.display}
					</option>
				))}
			</Select>
		</Label>
	</Form>
)

export default GameFilter
