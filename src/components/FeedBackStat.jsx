/** @format */

import React from 'react'
//import propTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedBackStat() {
	const { feedback } = useContext(FeedbackContext)
	//Calculating Average Rating
	// let average =feedback.length >= 1 ? feedback.reduce((acc, cur)=>{
	//     return acc + cur.rating
	// }, 0) / feedback.length : 0
	const average = Math.round(
		feedback.reduce((acc, { rating }) => {
			return acc + rating
		}, 0) / feedback.length
	)

	// average = average.toFixed(1).replace(/[.,]0$/, '')

	return (
		<div className='feedback-stats'>
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average)? 0 : average}</h4>
		</div>
	)
}

// FeedBackStat.propTypes = {
// 	feedBack: propTypes.array.isRequired,
// }

export default FeedBackStat
