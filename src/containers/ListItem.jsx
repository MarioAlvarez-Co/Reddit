import React from 'react';
import { Item } from '../components/Item';
import { useApi } from '../hooks/useApi';

import '../css/ListItem.css';
export const LisItem=()=>{   
    return(
        <div className='ListItem'>
            {
                useApi().map((item)=>                 
                    <Item key={item.data.id}info={item.data}/>
                )
            }
        </div>
    )

}