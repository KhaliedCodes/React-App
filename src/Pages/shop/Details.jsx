import React, { useEffect, useState } from 'react'
import  Card  from './Card'
import {useParams} from 'react-router-dom'

export default function Details() {
	const params = useParams()
	const [data, setData] = useState([])
	
	useEffect(()=>{
		console.log("poarams",params);
		fetch(`https://fakestoreapi.com/products/${params.id}`).then(res=>res.json()).then(json=>{setData(json); console.log(json);})
		console.log(data);
	},[])
	return (
		<div className='d-flex justify-content-center'>
			<Card title={data.title} img={data.image} description= {data.description}/>
		</div>
		
	)
}
