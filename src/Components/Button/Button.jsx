import React from 'react'

export default function Button({title,changeCounter}) {

	
	
	return (
		<button onClick={changeCounter}>{title}</button>
	)
}
