/** @format */

import React from 'react'
import { useState, useEffect, useContext } from 'react'
//when ever an event function changes the current state we must call the useEffect hook
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelection from './RatingSelection'
import FeedbackContext from '../context/FeedbackContext'

function FeedBackForm() {
	const [text, setText] = useState('') //initially set to empty string
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')
	const [rating, setRating] = useState(10)

	const { addFeedBack, feedbackEdit, updateFeedback } =
		useContext(FeedbackContext)

	//This will run whenever we call the edit function
	useEffect(() => {
		setBtnDisabled(false)
		setRating(feedbackEdit.item.rating || 10) //if rating is not set, set it to 10
		setText(feedbackEdit.item.text || '')
	}, [feedbackEdit])

	//function to change input value
	const handleTextChange = ({target: {value}}) => {
		
		if (value === '') {
			setBtnDisabled(true)
			setMessage(null)
		} else if (value.trim().length < 10) {
			setMessage('Text must be at least 10 character')
			setBtnDisabled(true)
		} else {
			setBtnDisabled(false)
			setMessage(null)
		}
		setText(value)
	}

	//function to submit form
	const handleSubmit = (e) => {
		e.preventDefault()
		if (text.trim().length > 10) {
			let newFeedBack = {
				text,
				rating,
			}
			feedbackEdit.edit
				? updateFeedback(feedbackEdit.item.id, newFeedBack)
				: addFeedBack(newFeedBack)
		}
		setText('')
		feedbackEdit.edit = false
		setRating(10)
		setBtnDisabled(true)
	}

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				{/* the select props passed is so as to access the handleChange in the RatingSelection components
            and to trigger it so as to get the value */}
				<RatingSelection
					select={(rating) => {
						setRating(rating)
					}}
				/>
				<div className='input-group'>
					<input
						id='text'
						onChange={handleTextChange}
						type='text'
						placeholder='Write a review'
						value={text}
					/>
					<Button type='submit' version='primary' isDisabled={btnDisabled}>
						{feedbackEdit.edit ? 'Update' : 'Send'}
					</Button>
				</div>
			</form>
			{message && <div className='message'>{message}</div>}
		</Card>
	)
}

export default FeedBackForm
