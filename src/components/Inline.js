import React from 'react'
const heading={
    fontSize:'100px',
    color:'blue'
    //css properties must be written in camel case here
}
function Inline(){
    return(
        <div>
            <h1 style={heading} >INLINE</h1>
        </div>
    )
}
export default Inline