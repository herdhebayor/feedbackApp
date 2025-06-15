/** @format */

import React from 'react'
// import { useParams } from 'react-router-dom'
import { Navigate, useNavigate, Routes, Route, BrowserRouter as Router } from 'react-router-dom' // Navigate is used for class Component while
//useNavigate is used for Function component but they both perform the same function

//Sending prarams

function Post() {
	//Redirecting with useNavigate
	// const status = 200

	const navigate = useNavigate()
	//Method 1
	// if (status === 404) {
	// 	return <Navigate to='/about' />
	//}
	//Method 2: Navigate from a function
	const onClick = () => {
		console.log('hello')
		navigate('/')
	}
	return (
		<div>
			<h1>Post</h1>
			<button onClick={onClick}>Click</button>

			{/* Nested Route */}
			<Routes>
				<Route path='/show' element={<h1>Hello World</h1>} />
			</Routes>
		</div>
	)

	//  Getting params with useParams
	//Params is used to filter list of post from the backend by passing in some information to it---
	//---i.e Id or name
	// you can also set more than one params
	//     const params = useParams()
	//   return (
	// 		<div>
	// 			<h1>Post</h1>
	// 		</div>
	// 	)
}

export default Post
