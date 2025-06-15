/** @format */

//import React, { useState } from 'react'
import Header from './components/Header'
// import FeedbackData from './FeedbackData'
import FeedBackList from './components/FeedBackList'
import FeedBackStat from './components/FeedBackStat'
import FeedBackForm from './components/FeedBackForm'
// import { v4 as uuidv4 } from 'uuid' //To generate Id
import AboutPage from './pages/AboutPage'
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
// import Post from './components/Post'
// import Card from './components/shared/Card'
import { FeedbackProvider } from './context/FeedbackContext' // FeedbackProvider is not a default export that is why we're putting it in a curly bracket

function App() {
	// const [feedBack, setFeedBack] = useState(FeedbackData)

	// const addFeedBack = (newFeedBack) => {
	// 	newFeedBack.id = uuidv4()
	// 	setFeedBack([newFeedBack, ...feedBack])
	// 	console.log(newFeedBack)
	// }
	// const deleteFeedBack = (id) => {
	// 	if (window.confirm('Are you sure you want to delete this feedback?')) {
	// 		setFeedBack(feedBack.filter((item) => item.id !== id))
	// 	}
	// }
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<FeedBackForm />
									<FeedBackStat />
									<FeedBackList />
								</>
							}
						/>
						<Route path='/about' element={<AboutPage />} />
					</Routes>
					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>

		// <Router>
		// 	<Header text='Feedback App' />
		// 	<div className='container'>
		// 		<Routes>
		// 			<Route
		// 				exact
		// 				path='/'
		// 				element={
		// 					<>
		// 						<FeedBackForm handleAdd={addFeedBack} />
		// 						<FeedBackStat feedBack={feedBack} />
		// 						<FeedBackList
		// 							feedBack={feedBack}
		// 							handleDelete={(id) => deleteFeedBack(id)}
		// 						/>
		// 					</>
		// 				}
		// 			/>

		// 			{/* <AboutPage/> */}
		// 			{/* <Route path='/about' Component={AboutPage} /> */}
		// 			<Route path='/about' element={<AboutPage />} />

		// 			{/*Using params */}
		// 			{/* for the nested route to work we have to put the '/*' in the component route we are
		// 			nesting the route */}

		// 			{/* <Route path='/post/*' element={<Post />} /> */}
		// 		</Routes>

		// 		{/*NavLink give us a way to style the active link and it is used mostly for navigation  */}
		// 		{/* <Card>
		// 			<NavLink to='/' activeClassName='active'>Home</NavLink>
		// 			<NavLink to='/about' activeClassName='active'>About</NavLink>
		// 		</Card> */}

		// 		<AboutIconLink />
		// 	</div>
		// </Router>
	)
}

export default App
