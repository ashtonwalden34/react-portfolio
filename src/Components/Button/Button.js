// import React from 'react'
// import './Button.css'

// const STYLES = [
//     'btn--primary',
//     'btn--outline'
// ]

// const SIZES = [
//     'btn--medium',
//     'btn--large'
// ]

// export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
//     // Checks if button has a style and uses it if it already does, if not it will be set to index 0 of STYLES
//     const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
//     // Checks if button has a size and uses it if it already does, if not it will be set to index 0 of SIZES
//     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    
//     return(
//     <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
//         {children}
//     </button>
//     )
// }