/** @format */

import React from 'react'
import { createContext, useState, useEffect } from 'react'
//import { v4 as uuidv4 } from 'uuid' //To generate Id

const FeedbackContext = createContext()

// We have to create a provider because for our components rendered in app.js to access our state
//in context, we must wrap everything in a <Provider></Provider>
export const FeedbackProvider = ({ children }) => {
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})
	const [feedback, setFeedBack] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	//Fetch from db.json
	useEffect(() => {
		fetchFeedback()
	}, [])
	const fetchFeedback = async () => {
		//const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc')
		//after we've set proxy to "localhost:5000" in package.json file we can now fetch directly
		const response = await fetch(
			'  https://feedback-api-hw-tech-1588720fd2e0.herokuapp.com/feedback?_sort=id&_order=desc'
		)
		const data = await response.json()
		setFeedBack(data)
		setIsLoading(false)
	}

	//what we want to return is the children wrapped in the FeedbackContext
	// Any value or function that we want to pass into the prop of "value" will be an object

	// Moving functions from app.js to context
	const deleteFeedBack = async (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			await fetch(`/feedback/${id}`, { method: 'DELETE' })
			setFeedBack(feedback.filter((item) => item.id !== id))
		}
	}

	const addFeedBack = async (newFeedBack) => {
		// newFeedBack.id = uuidv4()
		// setFeedBack([newFeedBack, ...feedback])
		const response = await fetch('/feedback', {
			method: 'POST',
			headers: {
				'content-Type': 'application/json',
			},
			body: JSON.stringify(newFeedBack),
		})
		const data = await response.json()
		setFeedBack([data, ...feedback])
	}

	const editFeedBack = (item) => {
		setFeedbackEdit({
			item: item,
			edit: true,
		})
	} //This is the function that will be called when we want to edit a feedback

	const updateFeedback = async (id, updItem) => {
		const response = await fetch(`/feedback/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updItem),
		})
		const data = await response.json()
		setFeedBack((prev) =>
			prev.map((item) => (item.id === id ? { ...item, ...data } : item))
		)
		setFeedbackEdit({
			item: {},
			edit: false,
		})
	}
	return (
		<FeedbackContext.Provider
			value={{
				feedback: feedback,
				deleteFeedBack: deleteFeedBack,
				addFeedBack: addFeedBack,
				editFeedBack: editFeedBack,
				feedbackEdit: feedbackEdit, // This is the state that will be used to edit a feedback
				updateFeedback: updateFeedback,
				isLoading: isLoading, // This is the state that will be used to show loading spinner
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
