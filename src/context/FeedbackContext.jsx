/** @format */

import React from 'react'
import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid' //To generate Id

const FeedbackContext = createContext()

// We have to create a provider because for our components renderd in app.js to access our state
//in context, we must wrap everything in a <Provider></Provider>
export const FeedbackProvider = ({ children }) => {
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})
	const [feedback, setFeedBack] = useState([
		{
			id: 1,
			text: 'This item is for context 1',
			rating: 10,
		},
		{
			id: 2,
			text: 'This item is for context 2',
			rating: 8,
		},
		{
			id: 3,
			text: 'This item is for context 3',
			rating: 7,
		},
	])

	//what we want to return is the children wrapped in the FeedbackContext
	// Any value or function that we want to pass into the prop of "value" will be an object

	// Moving functions from app.js to context
	const deleteFeedBack = (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			setFeedBack(feedback.filter((item) => item.id !== id))
		}
	}

	const addFeedBack = (newFeedBack) => {
		newFeedBack.id = uuidv4()
		setFeedBack([newFeedBack, ...feedback])
	}

	const editFeedBack = (item) => {
		setFeedbackEdit({
			item:item,
			edit: true,
		})
	}//This is the function that will be called when we want to edit a feedback
 
	const updateFeedback = (id, updItem) => {
		setFeedBack((prev) =>
			prev.map((item) =>
				item.id === id
					? { ...item, ...updItem }
					: item
			)
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
				updateFeedback:updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
