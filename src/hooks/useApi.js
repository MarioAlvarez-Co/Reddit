import React from 'react';

const API="https://www.reddit.com/reddits.json";

export function useApi(){
    const [Info, setInfo] = React.useState([]);
    React.useEffect(()=>{
        const setResponse = async(URL)=>{
            const response= await fetch(URL);
            const data=await response.json();                       
            setInfo(data.data.children);            
        }
        setResponse(API)     
    },[])
    return Info;   
}