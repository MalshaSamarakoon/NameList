import React from 'react';
import NameListItem from './NameListItem';

function NameList(){
        return(
            <div>          
                <h1>Name List</h1>
     
                <ul>
                <NameListItem/> 
                <NameListItem/> 
                <NameListItem/> 
                <NameListItem/> 
                <NameListItem/>  
                </ul> 
            </div>            
        );
}

export default NameList;

