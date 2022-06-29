import React, { useEffect, useState } from 'react'
import  Card  from './Card'

function Shop() {

	const [data, setData] = useState([])

	useEffect(()=>{
		fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(json=>setData(json))
		console.log(data);
	},[])

	

	return (
		<div className='d-flex flex-wrap justify-content-center'>
				{
				data.map((e)=>{
					return (
						<div  key={e.id}>
							<Card title={e.title} img={e.image} description= {e.description} id ={e.id}></Card>
						</div>
					)
				})
				}
		</div>
	)
}

export default Shop