import React from 'react'
import propTypes from 'prop-types'


function Header({text}) {
	//const headerStyle = {
	//	backgroundColor: 'blue',
	//	color: 'white',
	//}
  return (
		//INLINE STYLING
		// <header style={{ backgroundColor: 'blue', color: 'white' }}>
		// STORING STYLES IN A VARIABLE
		// <header style={headerStyle}>
		<header style={{ backgroundColor: '#011122' }}>
			<div className='container'>
				<h2>{text}</h2>
			</div>
		</header>
	)
}

// PROP TYPES AND DEFAULT PROPS. We can and styling to prop type and default props also
// import PropTypes from 'prop-types'
Header.propTypes = {
	text: propTypes.string.isRequired,
}

Header.defaultProps = {
	text: 'Feedback UI',
}

// state and props| difference
// props is being passed to the component while state is managed within the component

//the use state hook
// we have component level state and app or global level state
// component level state iis data associated within a particular component, like a navigation
//tha has open and close state i.e isOpen = true
// app level state is data that is shared across multiple components, like a user's
// login status or a shopping cart. an example of app level state is what 
//we use in our FeedBackItem component

export default Header