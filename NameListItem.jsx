import React from 'react';

function NameListItem(props){
    return(

        <React.Fragment> 
            <li className="list-group-item">
                    <div className="row align-items-center">
                        <div className="col-3">
                            <img src={props.avatar} alt={props.name} className="border border-dark rounded-circle shadow-sm"/>
                        </div>  
                        <div className="col-4">
                            <h4>{props.name}</h4>
                            <p>{props.city} | {props.email}</p>
                            <p><small></small>{new Intl.DateTimeFormat('en-GB').format(new Date(props.bday))}</p>
                        </div>
                    </div>
            </li>
            </React.Fragment>
  
    );
}

export default NameListItem; 