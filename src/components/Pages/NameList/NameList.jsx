import React, {useState} from 'react';
import NameListItem from './NameListItem';
import {useEffect} from 'react';

function NameList(){
    const [loadData, setLoadData] = useState(new Date());
    const [nameList, setNameList] = useState([
        {id:1,
        "name" :{"title": "mr","first": "brad","last": "gibson"},
        "location": {"city": "kilcoole",},
        "email": "brad.gibson@example.com",
        "dob": {"date": "1993-07-20T09:44:18.674Z","age": 26,},
        "picture": {"medium": "https://randomuser.me/api/portraits/med/men/75.jpg",},
    },

       {id:2,
        "name":{"title":"Mr","first":"Dylan","last":"Margaret"},
        "location":{"city":"Borden"},
        "email":"dylan.margaret@example.com",
        "dob":{"date":"1955-05-02T18:20:14.511Z","age":65,},
        "picture":{"medium":"https://randomuser.me/api/portraits/med/men/4.jpg"},
        },

        {id:3,
        "name":{"title":"Mr","first":"Luca","last":"Turner"},
        "location":{"city":"Napier",},
        "email":"luca.turner@example.com",
        "dob":{"date":"1952-11-23T23:10:26.378Z","age":68,},
        "picture":{"medium":"https://randomuser.me/api/portraits/med/men/54.jpg"},
        }
    ]);

      useEffect(() => {
            fetch('https://api.randomuser.me/').then((response) =>{
                     return response.json();  
            })
            .then((responseData) => {
                setNameList((nameList)=>[...nameList, responseData.results[0]])
            });
      },[loadData]);

    const nameListComponent=()=> {
        return nameList.map((aName)=>{
            return(
              <NameListItem 
                key={aName.id}
                name={aName.name.first+' '+aName.name.last}
                city={aName.location.city}
                email={aName.email}
                bday={aName.dob.date}
                avatar={aName.picture.medium}
                />
           );
        });
    };

    const addUserHandler = () =>{
       /* const newUser ={
            id:4,
            "name":{"title":"Mr","first":"Cristina","last":"Thom"},
            "location":{"city":"Borden"},
            "email":"dylan.margaret@example.com",
            "dob":{"date":"1955-05-02T18:20:14.511Z","age":65,},
            "picture":{"medium":"https://randomuser.me/api/portraits/med/women/82.jpg"},
        }

            //setNameList((nameList)=>nameList.concat(newUser));   -----(1st tyep)

            setNameList((nameList)=>[...nameList, newUser]);       //-----(2nd type ---- spread operator)  */

            setLoadData(new Date());
    };   
           
                

        return(
            <React.Fragment>  
                <div className="container mt-4">
                    
                <ul className="list-group list-group-flush"> {nameListComponent()} </ul> 

                <button className="btn btn-primary mt-4" onClick={addUserHandler}> Add Name </button>

                </div>
            </React.Fragment>              
        );
}

export default NameList;
        
