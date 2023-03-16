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
            description:`The poet is a moonchild. A hopeless romantic, forever fascinated by the Moon.
            Sometimes in life we find people who are like the Moon- beautiful, 
            helpful, guiding us through the nights. This is dedicated to those kind of people.`,
            theme:"Promise",
            date:"4th Mar 2023",
            featureID:3,
            poem:
            `
            I love you like I love the Moon
            I want you to know that
            I'll be here for you.
            I am here to stay, my dear
            I am not going away
            no matter what the phase.
            
            Just like when the Moon
            shines the brightest, glows with happiness
            or when the Moon disappears in the quietest nights;
            From you moonless nights to the blue moon skies,
            I promise I will be there, my love
            The dark won't scare me away.`
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
            featureID:6
        },
        {
            category:"poetry",
            id:3,
            url:"https://images.unsplash.com/photo-1620628193519-822b8eb8e92f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWVzdGhldGljJTIwYm9va3xlbnwwfHwwfHw%3D&w=1000&q=80",
            title:"Books Had Warned",
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
            oneliner:`lorem ipsum dolor sit amet`,
            theme:"nature",
            date:"23rd Nov 2022",
            featureID:2
        },
        {
            category:"poetry",
            id:5,
            url:"https://img.freepik.com/free-vector/watercolor-poetry-illustration_52683-81538.jpg?w=2000",
            title:"Poem 5",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"26th Sep 2022",
            featureID:4
        },
        {
            category:"poetry",
            id:6,
            url:"https://img.freepik.com/free-vector/watercolor-poetry-illustration_52683-81538.jpg?w=2000",
            title:"Poem 6",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"11th Oct 2022",
            featureID:7
        },
        {
            category:"poetry",
            id:7,
            url:"https://img.freepik.com/free-vector/watercolor-poetry-illustration_52683-81538.jpg?w=2000",
            title:"Poem 7",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"23rd Nov 2021",
            featureID:1
        },
        {
            category:"photography",
            id:8,
            url:"https://images.unsplash.com/photo-1505051508008-923feaf90180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bnNldCUyMHNreXxlbnwwfHwwfHw%3D&w=1000&q=80",
            title:"Photo 1",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"23rd Nov 2022",
            featureID:3
        },
        {
            category:"photography",
            id:9,
            url:"https://www.greenthumbdiaries.com/wp-content/uploads/2022/05/Blank-600-x-900-copy-17-15.jpg",
            title:"Photo 2",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"26th Sep 2021",
            featureID:1
        },
        {
            category:"photography",
            id:10,
            url:"https://images.unsplash.com/photo-1505051508008-923feaf90180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bnNldCUyMHNreXxlbnwwfHwwfHw%3D&w=1000&q=80",
            title:"Photo 3",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"23rd Nov 2022",
            featureID:4
        },
        {
            category:"photography",
            id:11,
            url:"https://www.greenthumbdiaries.com/wp-content/uploads/2022/05/Blank-600-x-900-copy-17-15.jpg",
            title:"Photo 4",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"26th Sep 2021",
            featureID:2
        },
        {
            category:"photography",
            id:12,
            url:"https://www.greenthumbdiaries.com/wp-content/uploads/2022/05/Blank-600-x-900-copy-17-15.jpg",
            title:"Photo 4",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"26th Sep 2021",
            featureID:5
        },
        {
            category:"photography",
            id:13,
            url:"https://www.greenthumbdiaries.com/wp-content/uploads/2022/05/Blank-600-x-900-copy-17-15.jpg",
            title:"Photo 4",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"26th Sep 2021",
            featureID:6
        },
        {
            category:"photography",
            id:14,
            url:"https://www.greenthumbdiaries.com/wp-content/uploads/2022/05/Blank-600-x-900-copy-17-15.jpg",
            title:"Photo 4",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"26th Sep 2021",
            featureID:7
        },
        {
            category:"painting",
            id:15,
            url:"https://www.topalski.com/wp-content/uploads/2019/12/Through-the-Country-Fields-Fine-Art-Original-Landscape-Oil-Painting-on-Canvas-by-artist-Darko-Topalski.jpg",
            title:"Painting 1",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"23rd Nov 2022",
            featureID:4
        },
        {
            category:"painting",
            id:16,
            url:"https://cdn3.volusion.com/oljgs.pljhv/v/vspfiles/photos/CAB333-2.jpg?v-cache=1615978659",
            title:"Painting 2",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"26th Sep 2021",
            featureID:1
        },
        {
            category:"painting",
            id:17,
            url:"https://www.topalski.com/wp-content/uploads/2019/12/Through-the-Country-Fields-Fine-Art-Original-Landscape-Oil-Painting-on-Canvas-by-artist-Darko-Topalski.jpg",
            title:"Painting 3",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"23rd Nov 2022",
            featureID:2
        },
        {
            category:"painting",
            id:18,
            url:"https://cdn3.volusion.com/oljgs.pljhv/v/vspfiles/photos/CAB333-2.jpg?v-cache=1615978659",
            title:"Painting 4",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"26th Sep 2021",
            featureID:3
        },
        {
            category:"painting",
            id:19,
            url:"https://cdn3.volusion.com/oljgs.pljhv/v/vspfiles/photos/CAB333-2.jpg?v-cache=1615978659",
            title:"Painting 4",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"26th Sep 2021",
            featureID:5
        },
        {
            category:"painting",
            id:20,
            url:"https://cdn3.volusion.com/oljgs.pljhv/v/vspfiles/photos/CAB333-2.jpg?v-cache=1615978659",
            title:"Painting 4",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"26th Sep 2021",
            featureID:6
        },
        {
            category:"painting",
            id:21,
            url:"https://cdn3.volusion.com/oljgs.pljhv/v/vspfiles/photos/CAB333-2.jpg?v-cache=1615978659",
            title:"Painting 4",
            description:"lorem ipsum dolor sit amet",
            theme:"nature",
            date:"26th Sep 2021",
            featureID:7
        },
        {
            category:"music",
            id:22,
            url:"https://www.pinkvilla.com/imageresize/exo_love_shot_main_0.jpg?width=752&t=pvorg",
            title:"EXO",
            description:`Legendary Kpop Group`,
            theme:"KPop",
            date:"23rd Feb 2023",
            featureID:2
        },
        {
            category:"music",
            id:23,
            url:"https://www.byrdie.com/thmb/tzOBjUASJRamT3xDIIoVbJKNoK8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taylorswift-9139bb0a51284de2b3f0ffcb334a8c0e.jpg",
            title:"Taylor Swift",
            description:`A closer look at the 'Midnights' record. This is Taylor's world, and we're living in it.`,
            theme:"Pop",
            date:"21st Oct 2022",
            featureID:1
        },
        {
            category:"music",
            id:24,
            url:"https://pbs.twimg.com/media/FA6zB4mVQAMs83e.jpg",
            title:"aespa",
            description:`Breaking the industry with their unique concepts! Fusing music with AI.`,
            theme:"KPop",
            date:"31st Jan 2023",
            featureID:4
        },
        {
            category:"music",
            id:25,
            url:"https://i.scdn.co/image/ab6761610000e5eb724f08bfa57000ac31e466a3",
            title:"Anuv Jain",
            description:`Keeping it simple with a ukulele. Bringing to us fresh, new, soulful music.`,
            theme:"Desi-pop",
            date:"21st Feb 2023",
            featureID:3
        },
        {
            category:"music",
            id:26,
            url:"https://i.scdn.co/image/ab6761610000e5eb724f08bfa57000ac31e466a3",
            title:"Anuv Jain",
            description:`Keeping it simple with a ukulele. Bringing to us fresh, new, soulful music.`,
            theme:"Desi-pop",
            date:"21st Feb 2023",
            featureID:5
        },
        {
            category:"music",
            id:27,
            url:"https://i.scdn.co/image/ab6761610000e5eb724f08bfa57000ac31e466a3",
            title:"Anuv Jain",
            description:`Keeping it simple with a ukulele. Bringing to us fresh, new, soulful music.`,
            theme:"Desi-pop",
            date:"21st Feb 2023",
            featureID:6
        },
        {
            category:"music",
            id:28,
            url:"https://i.scdn.co/image/ab6761610000e5eb724f08bfa57000ac31e466a3",
            title:"Anuv Jain",
            description:`Keeping it simple with a ukulele. Bringing to us fresh, new, soulful music.`,
            theme:"Desi-pop",
            date:"21st Feb 2023",
            featureID:7
        },
        {
            category:"kdramas",
            id:29,
            url:"https://cdn.theatlantic.com/thumbor/JNvwX6hgB9qJmFhE0pSfnMQs050=/101x0:1398x973/1200x900/media/img/mt/2019/12/little/original.jpg",
            title:"Little Women",
            description:`Yet another Masterpiece by Greta Gerwig. An adaptation that brings the novel to life.`,
            theme:"Drama",
            date:"25th Dec 2019",
            featureID:4
        },
        {
            category:"kdramas",
            id:30,
            url:"https://people.com/thmb/03guWi6JNe_J2y4rpvApgDRiK_k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(511x0:513x2)/matthew-mcconaughney-1024-96a54219af2d4b148163dfe3381e7336.jpg",
            title:"Interstellar",
            description:`A film that explores the psychological and emotional state of a man whose life revolves around his family.`,
            theme:"Sci-Fi/Adventure",
            date:"7th Nov 2014",
            featureID:1
        },
        {
            category:"kdramas",
            id:31,
            url:"https://c4.wallpaperflare.com/wallpaper/947/272/849/anime-your-name-kimi-no-na-wa-mitsuha-miyamizu-wallpaper-preview.jpg",
            title:"Your Name",
            description:`A story to tug at your heartstrings with astounding animation that leaves the viewer awestruck.`,
            theme:"Fantasy",
            date:"26th Aug 2016",
            featureID:3
        },
        {
            category:"kdramas",
            id:32,
            url:"https://i.pinimg.com/originals/c7/2d/43/c72d43e7dc086597bc9f6caa2a960055.jpg",
            title:"The Box",
            description:`The film is about an aspiring singer and a washed-up music producer and their musical journey.`,
            theme:"Musical",
            date:"24th Mar 2021",
            featureID:5,
            rating:4
        },
        {
            category:"kdramas",
            id:33,
            url:"https://static01.nyt.com/images/2020/01/26/arts/26before-sunrise1/26before-sunrise1-superJumbo.jpg",
            title:"Before Sunrise",
            description:`A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna.`,
            theme:"Romance",
            date:"27th Jan 1995",
            featureID:2
        },
        {
            category:"kdramas",
            id:34,
            url:"https://static01.nyt.com/images/2020/01/26/arts/26before-sunrise1/26before-sunrise1-superJumbo.jpg",
            title:"Before Sunrise",
            description:`A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna.`,
            theme:"Romance",
            date:"27th Jan 1995",
            featureID:6
        },
        {
            category:"kdramas",
            id:35,
            url:"https://static01.nyt.com/images/2020/01/26/arts/26before-sunrise1/26before-sunrise1-superJumbo.jpg",
            title:"Before Sunrise",
            description:`A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna.`,
            theme:"Romance",
            date:"27th Jan 1995",
            featureID:7
        }
    ]);

    return(
        <blogData.Provider value={[data,setData]}>
            {props.children}
        </blogData.Provider>
    );
}

export default ContextAPI;