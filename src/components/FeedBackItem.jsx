/** @format */

import React from 'react'
// import PropTypes from 'prop-types'
import Card from './shared/Card'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
//adding react icons
import { FaTimes, FaEdit } from 'react-icons/fa'




function FeedBackItem({ item }) {
	const {deleteFeedBack, editFeedBack} = useContext(FeedbackContext)
	return (
		<Card reverse={false}>
			<div className='num-display'>{item.rating}</div>
			<button className='edit' onClick={() => editFeedBack(item)}>
				<FaEdit color='purple' />
			</button>
			<button className='close' onClick={() => deleteFeedBack(item.id)}>
				{/* FaTimes takes in some argument and on of them is color which help to set its color */}
				<FaTimes color='purple' />
			</button>

			<div className='text-display'>{item.text}</div>
		</Card>
	)
}
// FeedBackItem.propTypes = {
// 	item: PropTypes.object.isRequired,
// }

export default FeedBackItem
