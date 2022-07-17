import React from 'react';
import { AppContext } from '../context/AppContext';
import'../css/Details.css'
import ReactMarkdown from 'react-markdown'
export const Details =()=>{
    const [state,] = React.useContext(AppContext) 
    let id=window.location.pathname.substr('/details/'.length)    
    let subReddit=state.find((item)=>item.data.id===id)
    subReddit=subReddit.data   
    return (
        <div className='Details'>
                <div className='banner' >
                    <div className='banner-image' style={{backgroundColor:subReddit.key_color}}>
                        <img src={subReddit.icon_img} alt="" />                    
                    </div>
                    <div className='tittles'>
                        <h1>{subReddit.title}</h1>
                        <h3>{subReddit.display_name_prefixed}</h3>
                    </div>
                </div>
                <div className='description' style={{borderColor: subReddit.key_color}}>
                    <ReactMarkdown>{subReddit.description}</ReactMarkdown>
                </div>    
                <p>see more in <a href={`https://www.reddit.com/${subReddit.url}`} style={{color: subReddit.key_color}}>{`reddit.com ${subReddit.url}`}</a></p>       
        </div>
    )
}