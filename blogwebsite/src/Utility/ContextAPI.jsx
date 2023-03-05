import { createContext, useState} from "react";
import React from 'react';

export const blogData = createContext();

function ContextAPI(props){
    const [data,setData] = useState([
        {
            category:"poetry",
            id:1,
            url:"https://st.depositphotos.com/1742359/3712/v/600/depositphotos_37128855-stock-illustration-full-moon-vector.jpg",
            title:"The Moon Song",
            description:`This poem is by a person who has always been fascinated by the Moon. Her love language is writing Poems 
            and gazing at the Moon. Thus the Moon Song was born. Sometimes in life we find people who are like the Moon: beautiful, 
            helpful, guiding us through the nights. This is dedicated to those kind of people.`,
            theme:"Promise",
            date:"4th Mar 2023",
            featureID:6
        },
        {
            category:"poetry",
            id:2,
            url:"https://img.freepik.com/free-vector/watercolor-poetry-illustration_52683-81538.jpg?w=2000",
            title:"Winter Sun",
            description:`What's your favourite season? Mine is the Winter. The Sun has such a soft glow in the 
            winters, oozing comfort. Sometimes we meet people who light up our lives and shine just like the Winter Sun.`,
            theme:"Gratitude",
            date:"27th Feb 2023",
            featureID:3
        },
        {
            category:"poetry",
            id:3,
            url:"https://images.unsplash.com/photo-1620628193519-822b8eb8e92f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWVzdGhldGljJTIwYm9va3xlbnwwfHwwfHw%3D&w=1000&q=80",
            title:"Books Warned Us",
            description:`One might often hear "history repeats itself". Ever wonder why does it happen? Or most importantly, 
            what joy do we get from being adamant to keep repeating mistakes?`,
            theme:"Introspective",
            date:"23rd Feb 2023",
            featureID:5
        },
        {
            category:"poetry",
            id:4,
            url:"https://img.freepik.com/free-vector/watercolor-poetry-illustration_52683-81538.jpg?w=2000",
            title:"Poem 4",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"23rd Nov 2023",
            featureID:2
        },
        {
            category:"poetry",
            id:5,
            url:"https://img.freepik.com/free-vector/watercolor-poetry-illustration_52683-81538.jpg?w=2000",
            title:"Poem 5",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"23rd Nov 2023",
            featureID:4
        },
        {
            category:"poetry",
            id:6,
            url:"https://img.freepik.com/free-vector/watercolor-poetry-illustration_52683-81538.jpg?w=2000",
            title:"Poem 6",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"23rd Nov 2023",
            featureID:7
        },
        {
            category:"poetry",
            id:7,
            url:"https://img.freepik.com/free-vector/watercolor-poetry-illustration_52683-81538.jpg?w=2000",
            title:"Poem 7",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"23rd Nov 2023",
            featureID:1
        }
    ]);

    return(
        <blogData.Provider value={[data,setData]}>
            {props.children}
        </blogData.Provider>
    );
}

export default ContextAPI;