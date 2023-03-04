import { createContext, useState} from "react";
import React from 'react';

export const blogData = createContext();

function ContextAPI(props){
    const [data,setData] = useState([
        {
            category:"poetry",
            id:1,
            url:"https://img.freepik.com/free-vector/watercolor-poetry-illustration_52683-81538.jpg?w=2000",
            title:"Poem 1",
            description:"lorem ipsum dolor sit amet",
            theme:"self-love",
            date:"14th Feb 2023"
        },
        {
            category:"poetry",
            id:2,
            url:"https://img.freepik.com/free-vector/watercolor-poetry-illustration_52683-81538.jpg?w=2000",
            title:"Poem 2",
            description:"lorem ipsum dolor sit amet",
            theme:"friendship",
            date:"26th Sep 2023"
        },
        {
            category:"poetry",
            id:3,
            url:"https://img.freepik.com/free-vector/watercolor-poetry-illustration_52683-81538.jpg?w=2000",
            title:"Poem 3",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"23rd Nov 2023"
        }
    ]);

    return(
        <blogData.Provider value={[data,setData]}>
            {props.children}
        </blogData.Provider>
    );
}

export default ContextAPI;