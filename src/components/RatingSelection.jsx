/** @format */

import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelection({ select, selected }) {
	//const [selected, setSelected] = useState(10)
	const { feedbackEdit } = useContext(FeedbackContext)

	// useEffect(()=>{
	// 	setSelected(feedbackEdit.edit ? feedbackEdit.item.rating : 10)
	// },[feedbackEdit])
	const handleChange = (e) => {
		//if we console.log(typeof e.currentTarget.value) it will return string but we don't want string
		// so we add the + sign at the beginning to change it to number
		// i.e console.log(typeof +e.currentTarget.value)

		select(+e.currentTarget.value)
	}
	return (
		<ul className='rating'>
			{Array.from({ length: 10 }, (_, i) => (
				<li key={`rating-${i + 1}`}>
					<input
						type='radio'
						id={`num${i + 1}`}
						name='rating'
						value={i + 1}
						onChange={handleChange}
						checked={
							selected === i + 1 ||
							(feedbackEdit.edit && feedbackEdit.item.rating === i + 1)
						}
					/>
					<label htmlFor={`num${i + 1}`}>{i + 1}</label>
				</li>
			))}
		</ul>
	)
}

export default RatingSelection
