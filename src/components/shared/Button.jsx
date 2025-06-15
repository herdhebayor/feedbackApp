
import propTypes from 'prop-types'

function Button({children, version,type,isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`} >
        {children}
    </button>
  )
}
Button.propTypes = {
    children: propTypes.node.isRequired,
    version: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    isDisabled: propTypes.bool
    }

Button.defaultProps ={
    type: 'button',
    isDisabled: false,
    version: 'primary'
}

export default Button