import React from 'react';
import {  Link } from "react-router-dom";
import'../css/item.css'
 export const Item=({info})=>{      
    return (
        <Link  to={`/details/${info.id}`}>
             <div  className='Item'>
                <img src={info.icon_img} alt="" />
                <div className='item-Contents'>
                    <div className='titles' >
                        <h1>{info.title}</h1>
                        <h3>{info.display_name_prefixed}</h3>
                    </div>
                    <p>{info.public_description}</p>
                </div>            
            </div>
  
        </Link>
           
    )
 }