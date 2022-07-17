import React from 'react';
import { useApi } from './useApi';
 export const useInitialState=()=>{
    const state1 =useApi()
    const [state, setstate] = React.useState([]);
    function addReddits(){
        setstate(state1)
    }
    React.useEffect(()=>{
        addReddits()
    })    
    return[state,setstate,addReddits]        
 }

 