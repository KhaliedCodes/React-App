import React, { useState } from 'react'
import Button from '../Components/Button/Button'

export default function Home() {
	const [counter, setCounter] = useState(0)
	function increment(){
		setCounter(counter+1)
		console.log(counter);
	}
	function decrement(){
		if(counter > 0){
			setCounter(counter-1)
		}
		console.log(counter);
	}
	return (
		<div>
			<h1>{counter}</h1>
			<Button title="increment" changeCounter = {increment}/>
			<Button title="decrement" changeCounter = {decrement}/>
		</div>
	)
}
