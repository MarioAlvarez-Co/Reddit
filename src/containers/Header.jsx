import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'
export const Header=()=>{
    return(                               
        <header>
            <Link to={"/Reddit"}>
            <img src="https://logo-download.com/wp-content/data/images/svg/Reddit-logo.svg" alt="" />
            </Link>
            
            <h1>SUBREDDITS</h1>

        </header>
    )
}