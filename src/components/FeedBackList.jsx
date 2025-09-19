/** @format */

import React from 'react'
import FeedBackItem from './FeedBackItem'
// import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
// import { Link } from 'react-router-dom'
import Spinner from './shared/Spinner'

	//Get global state with the useContext Hook
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

// function FeedBackList({ feedBack, handleDelete }) {
function FeedBackList() {
	const {feedback,isLoading} = useContext(FeedbackContext)
	if (!isLoading && (!feedback || feedback.length === 0)) {
		return <p>No Feedback yet!</p>
	}

	return isLoading ? <Spinner/> : (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item, index) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						layout
					>
						<FeedBackItem
							key={item.id}
							item={item}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
	// return(
	// <div className='feedback-list'>
	//{
	//{feedBack.map((item,index)=>{<FeedBackItem key={item.id} item={item} handleDelete={handleDelete}/> })}
	//}
	//</div>
	//)
}
// FeedBackList.propTypes = {
// 	feedBack: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.number.isRequired,
// 			text: PropTypes.string.isRequired,
// 			rating: PropTypes.number.isRequired,
// 		})
// 	).isRequired,
// }

export default FeedBackList
