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
            theme:"Promise / Affection",
            date:"10th Mar 2023",
            featureID:3,
            article:
            `
            I love you like I love the Moon
            I want you to know that
            I'll be here for you.
            I am here to stay, my dear
            I am not going away
            no matter what the phase.
            
            Just like when the Moon
            shines the brightest, glows with happiness
            or when the Moon disappears in the quietest of nights;
            From your moonless nights to the blue moon skies,
            I promise I will be there, my love
            The dark won't scare me away.
            
            I won't love you only on the best days
            I promise that to you, my love
            I will make your darkest nights mine
            My word I give to you, my dear.
            So, here I am tonight writing this to you:
            I don't say "I heart you" because I Moon You.

            I love you like I love the Moon
            if you go away, do come back too
            know that I'd wait for you
            because I love you
            like I love the Moon.`
        },
        {
            category:"poetry",
            id:2,
            url:"https://media.istockphoto.com/id/1197166101/vector/international-womens-day-pattern.jpg?s=612x612&w=0&k=20&c=SWSS8uV8l10jkOAVmGtfr6XOkKblhg0uweeGb_AdGIA=",
            title:"99 plus one",
            description:`The world is like a double-sided mirror for us. As we look into it, it stares back
            throwing double-standards at us. It's high time to question the status quo. It's high time to wake up
            from the patriarchal slumber. For how long will we let the biased, patriarchal society fool us?
            Hasn't the world realized yet that patriarchy is a double-edged sword to play with? You try to harm us,
            but you will end up getting hurt more in the end.`,
            theme:"Equality / Equity",
            date:"7th Mar 2023",
            featureID:1,
            article:
            `
            Why is it "the youngest prime minister"
            but not "the youngest male prime minister"? 
            why is it written as "the female president"
            but not as "the president" in an article
            as if only males can become presidents
            and there is a need to clarify to the public
            when the person holding the highest position
            is in fact not a male homo sapien? 

            "The youngest prime minister"
            is treated with such awe
            but "the youngest female prime minister"
            is looked upon with doubt. 
            And why is that? 
            Why is it expected that women are excellent
            as long as they come second,
            as long as it is not the top position that they hold
            may it be in any field from politics to companies to entertainment. 
            Be the second best, and the world shall not question you, 
            rather they will applaud;
            but the moment you overtake
            not settle for second-best
            sit in that top position, 
            the world suddenly fears being overshadowed by you. 
            Why is it that?
            When a man is at the top
            it never occurs to anyone
            to question his worth, to gossip about the ways
            he climbed up the ladder,
            to doubt his capabilities, give a glance that
            silently asks "can he? is it his cup of tea?"

            The world is willing to trust a man blindly
            but to trust a woman with responsibility
            there are terms and conditions applied
            don't be married, if married at least don't have kids. 
            The only kind of women the world is comfortable with
            are the silver-haired ones, the world says
            "they are not tied down by anything"
            Why does this world fear bold, young women?
            When a man has a family, it is not treated as a problem
            but if it's a woman, suddenly family becomes a problem
            A man has never been asked to choose between work or home? success or family? 
            Why is that question only reserved for us? 
            If they can have both, why not us?

            Every leader is subject to scrutiny
            but a man always has to deal with one less problem
            and that is of the gender. 
            If women have a hundred issues on their plate, 
            men are given ninety-nine, 
            If we have a thousand of them, 
            men will have nine hundred and ninety nine.
            Our gender has been treated
            as an obstacle for far too long now.`
        },
        {
            category:"poetry",
            id:3,
            url:"https://i.pinimg.com/originals/76/b4/70/76b4701d3f6b176a424b37974dca5a97.jpg",
            title:"The Younger One",
            description:`This poem is about one's world view changing over time. Unlearning and learning new life lessons
            along the way. This is nod to my past self doing the best with the limited knowledge she had, irrespective of 
            how right or wrong her decisions might have been. In life, we always win - either it's a medal or a lesson. But we never lose in life, we only learn.`,
            theme:"Young Adulthood / Coming-of-age",
            date:"4th Mar 2023",
            featureID:4,
            article:
            `
            I was a kid
            who freaked out
            because it was a mystery to me
            how people understood songs. 
            To me, I couldn't tell the words apart
            songs were alien to me
            I loved it, their beat & tempo I knew
            but never their words
            how did others sing along, while I couldn't
            Often I wondered. 
            I was a kid afraid of colouring outside the line
            afraid of my circle not being right
            afraid of imperfect apples & carrots & flowers, 
            afraid of getting the wrong answer
            beside the equal sign. 
            I was a kid who spoke the language of
            medals and ranks, grades and marks, 
            the kid who thought houses were built
            out of the 100's and the A's. 
            I was a child taught to admire "perfect", 
            afraid of losing balance, tripping and falling
            The world is a tightrope, not a playground
            everyone is watching- I was told. 
            And I held on tight, I never fell
            I thought I was doing it right
            until I opened my eyes,
            until I didn't hold my breath in any longer
            only to realize I never lived
            for I lived in fear
            fear of failures and plan B's, hurdles and detours
            all the stuff that the real world was made of. 
            The child, now growing up,
            acknowledges her progress made, 
            the long path stands behind her
            as the lone spectator, as the proof enough
            of her struggle, albeit invisible. 
            She realizes giving a pat on the back
            is not else's job but her own too, 
            and she does give one to that child
            who worked so hard to get here today, 
            The family's first female engineer. 
            The child did it.

            But there's more to be done
            and she steels herself for the rest
            of the voyage awaiting her ahead.`
        },
        {
            category:"poetry",
            id:4,
            url:"https://i.pinimg.com/736x/58/a0/c0/58a0c08768cb3afb0458d7aca1d65f89.jpg",
            title:"To Dear Friend",
            description:`Losing friends is no less than heartbreaks. And it is a heartbreak that we aren't taught much about. 
            Like, how to heal from it, how to move on from it. But I guess the first starting point is to realize and accept that
            when we know nothing is forever in life, then why must we expect forever from friendships? This poem is about the pain of 
            losing a friendship in the present, but realizing that the friendship would forever be cherished & loved in the memories.`,
            theme:"Friendship / Nostalgia",
            date:"1st Mar 2023",
            featureID:5,
            article:
            `
            I won't call you a friend bygone
            or a friend no more
            because growing up has made me realize that
            a friend might be gone
            but the friendship remains.
            No matter how much times change and people along with it
            but a bond is etched permanently
            onto school benches and school magazines,
            the college trips and picnic videos,
            in diaries and poems and photobooks,
            polaroids and albums
            backed up in google photos
            and the old playlists in each other's spotify
            that we may no longer listen to yet
            never would be deleted
            for the music we had shared, forever echoes our names;
            names that had intertwined a long time ago
            and forged a bond with utmost purity,
            sincerity and honesty.
            Such bonds are stronger than iron that easily rusts,
            Such bonds are deeper than the roots of that tree standing since forever in the middle of the city park;
            And though Time can take these names miles apart
            and fade them away
            but not their bond
            that is etched permanently onto their memory.
            No longer friends, but the friendship remains;
            won't have talked for decades, but would immediately recognize taylor swift's voice
            in the shopping mall as someone else's favourite,
            that someone else whom they cannot call a "friend" anymore
            but would warmly cherish the friendship they were once blessed to have shared.`
        },
        {
            category:"poetry",
            id:5,
            url:"https://i.redd.it/7pom4pz33q651.jpg",
            title:"It's Life; not Bread",
            description:`Teenagers often play the game of "what's your deepest fear?" or "what scares you the most?"
            And the answers used to range from failing a test to being robbed to drowning. As we grow up, our fears change too. 
            The brand new fear is: Life turning into a boring, meaningless routine with no escape from. Not truly living, just existing 
            and before we know it- time's up.`,
            theme:"Life",
            date:"27th Feb 2023",
            featureID:2,
            article:`
            Your favourite song, your favourite movie
            Your favourite novel, your favourite hobby
            What do you think they exist for
            if not meant to be enjoyed? 
            Life must be about that recipe of your favourite cup of tea, 
            about planning for your favourite singer's concert, 
            about buying that merch, or the handmade jewellery. 
            Life should have been about
            visiting home more often, 
            about catching up with an old friend over coffee.
            We are meant to live in the present, 
            not repeatedly put it off for later. 
            Life could have been so much more
            than just a boring, old, daily routine.
            Life is to be savoured in the moment, 
            no one enjoys a stale bread anyway,
            it only gets thrown away.

            There exist duties and responsibilities in life, I understand
            But what I don't understand is all
            the stress that we take and work we do
            to earn money and pay the bills, 
            we do all of that to make the remaining of
            our time more comfortable, to enjoy our life better;
            but we end up feeling the exact opposite of it. 
            In reality, neither do we have the time
            nor do we enjoy anything. We aren't at peace.
            Then what is the point of anything, 
            Living unhappy lives to make the invisible
            future-versions of ourselves happy;
            all the while collecting regrets,
            instead of making memories. 
            Whom are we fooling, if not ourselves? 
            Oh, what have we come to?`
        },
        {
            category:"poetry",
            id:6,
            url:"http://www.nyu.edu/content/nyu/en/about/news-publications/news/2017/november/what-gives-poetry-its-aesthetic-appeal--new-research-has-well-ve/jcr:content/page/image.img.480.high.jpg",
            title:"The Saviour",
            description:`Poetry had always been more than just a hobby for me. It became my dearest friend.
            Poetry turned into the language I speak in. Poetry did more than just help me; it saved me. 
            I am so grateful to this world of literature that "Poetry" opened up for me.`,
            theme:"Gratitude",
            date:"24th Feb 2023",
            featureID:6,
            article:
            `
            The years when I didn't have a soul to confide in
            pages were there for me, to soak up my tears and poetry. 
            Poetry: my first friend, my confidante, my patient listener
            there is so much to thank you for. 
            You were the first one to kindly teach me
            the difference between lonely and solitude
            how to take joy in one's own company, not despair.
            You shared my burden on the days that were heavy
            made this world weigh lesser for me,
            made my heart lighter, and my thoughts brighter
            You were my companion during my search for hope. 
            You have seen me through it all,
            from once yearning for friends 
            to cherishing the ones I later discovered,
            from the times I couldn't feel more lost in life
            to the moments I decided to take the leap of faith, 
            You taught me to be kinder to myself
            You helped me clean up, clear the clutter
            and make some more room for mistakes. 
            You held my hand tight, as you guided me
            on the long but healing journey of self-love. 
            You have seen me through it all, 
            from the days I felt ready to take on the whole world
            to the weeks I wouldn't have the energy to do the bare minimum, 
            from feeling like time is too fast and I cannot keep up
            to realizing there is enough time, I am doing just fine, 
            from recounting the happy times
            to being broken by people sometimes;
            So much drama in life, yet you stayed
            with me through it all.

            Not only did you teach me resilience,
            finding strength within myself
            helping me befriend myself;
            But you also are the reason behind
            so many of my happy memories.
            The shared love for the poems by Lang Leav
            helped me find one of the closest friends ever, 
            I scoured through the internet to search
            whether an e-book of Leav's poems existed
            because we were too broke to buy the real one
            but we won't let money get in our way of love;
            I did eventually find a shady link, downloaded the three pdf's
            and gifted them to my friend at midnight of her birthday. 
            She is the same friend who wrote poems 
            during math classes, leaving me in awe of her magic.
            Poetry took me on the last trip of my school life, 
            Late December and off to our capital city, 
            A literature festival during which I stayed up
            writing and editing poems late into the night
            with two beautiful friends of mine.
            It still feels like a dream that Mitra Phukan
            and Ruskin Bond once listened to my poems. 
            A new school year, a new class-
            The best combination for an introvert
            to feel scared and all alone,
            But I met a girl who fancied poetry too 
            and played guitar the best.
            So we had jamming sessions,
            us dissecting Swift lyrics
            years before it was cool to be a Swiftie. 
            From fangirling over her epic songwriting skills, 
            to exchanging our poems with each other. 
            Poetry and Taylor Swift
            marked the beginning of our friendship.
            She always answered my "Does it make sense?"
            believed in me more than I did in myself. 

            Poetry: what simply started off as a hobby
            soon turned into the language I speak in. 
            Poetry did more than just help me; it saved me.`
        },
        {
            category:"poetry",
            id:7,
            url:"https://cdn.shopify.com/s/files/1/0295/7505/3372/products/colourfuljigsawpuzzlesforadultsmaimo_0d12a196-13c2-4d1f-bea6-d1043d7cb61b_1024x1024.jpg?v=1674132675",
            title:"Life like a Mozaic",
            description:`People come and people go. Some stay for a while and few stay for life. This poem is for 
            those who went by. They may not be here today. But their stories, their memory, their legacy forever lives on. 
            Life is a patchwork of the old and new. Life is a collage, a melange of stories. 
            Life is a puzzle and we discover its pieces over time. What is Life according to you?`,
            theme:"Nostalgia",
            date:"20th Feb 2023",
            featureID:7,
            article:
            `
            Have you often wondered
            how our lives are a patchwork
            of people- both old and new, 
            those who stayed and those who left
            and those whom we left. 
            If Life is like a puzzle, 
            they are the missing pieces of that puzzle;
            without them, the stories are left incomplete.
            We might not have their numbers down the line
            but they will still continue to fit our puzzle, 
            in their own way. That is how memories work.
            That is how life works. No one is ever truly gone. 

            Decades have gone by, 
            yet I can remember a friend's birthday from class 8
            just because it falls on the 8th day of the 8th month. 
            I love the Seafret, and I know somebody recommended them to me
            just can't remember who exactly
            but would always be grateful to them.
            
            A neighbour once showed me
            the "Love Story" video in the small Nokia screen
            prior to the smartphones and 4G era
            This was 2009, and 13 years later
            thanks to her today I am a Swiftie. 
            She must be married now, with a cool job,
            settled somewhere nice.
            Dan Brown is my favourite author today
            only because a senior of mine was once reading
            Angels & Demons in the school bus
            and we had a conversation about it. 

            The Nigerian security guard who helped me out
            when I lost my way back from school;
            every bus had left and silence hung heavy 
            in that utterly empty campus.
            I was a foreigner, my fear had doubled
            But I was lucky to have found a good human. 
            Never got to know his name, 
            Yet his memory would always remain so fond.
            
            An unlikely friendship struck between
            a girl ever so serious and the guy
            who was the mischief-maker of the class.
            Years of eye-rolls and side-eyes,
            yet it thawed with time, to their surprise
            in the height of their teens.
            Gone were the middle school years
            and maybe gone was their low-key rivalry
            but it wasn't too long until
            we both ended up changing schools
            never got to be more than classmates, 
            had never called him a friend
            but I really do hope he's doing well. 

            So many of my hilarious stories
            that I like to entertain my 6-year old cousin with
            are made up of these characters, so real
            though the people that play these characters, non-existent today. 
            And that's all right, for memory is the proof enough
            that our orbits had once intersected, 
            and that our worlds had aligned. 
            Even though it was once upon a time ago.`
        },

        {
            category:"movies",
            id:8,
            url:"https://i.scdn.co/image/ab67616d0000b273052e704eec3300dc7e968ce4",
            title:"Little Women (2019)",
            description:`While the March sisters enter the threshold of womanhood, they go through many ups and downs in life and endeavour to make important decisions that can affect their future.`,
            theme:"Romance / Drama",
            date:"11th Mar 2023",
            featureID:4,
            article:
            `
            Directed by: Greta Gerwig
            Starring: Saoirse Ronan, Emma Watson, Florence Pugh, Eliza Scanlen, 
                      Laura Dern, Timothée Chalamet, Meryl Streep
            Genre: Romance, Drama
            Based on: Little Women - 1868 novel by Louisa May Alcott
            Release: December 25, 2019
            Rating: 8.6/10
            
            Little Women is a 2019 American coming-of-age period drama film. It chronicles the lives of the March 
            sisters— Meg, Jo, Beth, and Amy, in Concord, Massachusetts, during the nineteenth century. The film
            premiered at the Museum of Modern Art in New York City on December 2019. The film received critical acclaim,
            with particular praise for Gerwig's screenplay and direction as well as the performances of the cast, and 
            grossed $218 million worldwide.  Among its numerous accolades, the film garnered six Academy Award 
            nominations, including Best Picture, Best Actress (Ronan), Best Supporting Actress (Pugh), Best Adapted 
            Screenplay and Best Original Score, and won for Best Costume Design. It also earned five British Academy 
            Film Award nominations, with a win for Best Costume Design, and two Golden Globe Award nominations.

            Gerwig began penned the screenplay using Alcott's letters and diaries as well as "19th-century paintings of 
            young women" as inspirations. She also drew inspiration from Alcott's other stories for the dialogues. In
            addition, she stated that a monologue in the film was inspired by a conversation she had with Streep about 
            "the challenges women faced in the 1860s". To "focus the film on [its characters] as adults", Gerwig 
            incorporated a nonlinear timeline. A romantic, intimate slice of life with none of the pomp and stuffiness 
            of period pictures and not one wasted scene. This is by far Gerwig's best work and somehow maybe one of her 
            most personal as well and that's what makes this adaptation amazing. It's respectful of the source material 
            and the author, cognisant of what audiences require now and faithful to Gerwig's own sentiment and 
            sensibility. The Marches are all, top to bottom, stunningly cast and acted and the interlocking nature of 
            the story makes it brisk and poignant. It's beautifully shot and edited, it's a real masterwork of drama and 
            sometimes comedy, every frame is lovingly, achingly constructed with flair, restraint, warmth and soul.`
        },
        {
            category:"movies",
            id:9,
            url:"https://i.ytimg.com/an/xi-1NchUqMA/5962b9c2-6478-4cf2-8a20-413bcca79d94_mq.jpg?v=5e4d7e8d",
            title:"Knives Out (2019)",
            description:`Harlan Thrombey, a reputable crime novelist, is found dead after his 85th birthday celebrations. However, as detective Benoit Blanc investigates the case, it unravels a ploy of sinister intentions.`,
            theme:"Mystery / Comedy",
            date:"10th Mar 2023",
            featureID:7,
            article:
            `
            Directed by: Rian Johnson
            Starring: Daniel Craig, Chris Evans, Ana de Armas
            Genre: Mystery, Comedy
            Release: September 7, 2019
            Rating: 7.9/10
            
            Knives Out is a 2019 American mystery film that follows master detective Benoit Blanc investigating the death
            of the patriarch of a wealthy, dysfunctional family. Knives Out premiered at the 2019 Toronto International 
            Film Festival on September 7, 2019. It received universal acclaim, particularly for its screenplay, 
            direction, and acting, and grossed $311.9 million worldwide. It was named one of the top ten films of 2019 
            by the National Board of Review and the American Film Institute, and received three nominations at the 77th 
            Golden Globe Awards.

            The family of Harlan Thrombey, a wealthy mystery novelist, attends his 85th birthday party at his 
            Massachusetts mansion. His housekeeper, Fran, finds him dead the next morning with his throat slit. The 
            police believe Harlan's death to be suicide, but private detective Benoit Blanc is anonymously hired to 
            investigate. Blanc learns Harlan had strained relationships with his family, having made threats that day to
            his son-in-law Richard and daughter-in-law Joni, fired his son Walt, and had an argument with his grandson 
            Ransom. Harlan's nurse, Marta Cabrera, plays an important role in the investigation because of her unique 
            case- she cannot lie without vomiting.

            Knives Out brought back the classic whoddunit in amazingly entertaining fashion. It was a delightful story 
            with lots of classic whodunnit elements. I thought we got to know each character well and, like in an Agatha
            Christie novel, fulfilled their roles. Daniel Craig is downright terrific as Benoit Blanc, a private 
            detective with a bizarre accent and weird one-liners. The plot is entirely new and scripted directly for the 
            screen. A good old-fashioned murder mystery/whodunit set in the  enormous mansion of a wealthy family, full
            of eccentric people each of whom have dirty little secrets, convoluted plot twists, continuous red herrings
            that practically make it impossible to guess along, and a fabulous all-knowing but slightly odd sleuth slowly
            unravelling the clues. This movie is refreshing and inventive, compelling as well as humorous, complex 
            and 200% entertaining.`
        },
        {
            category:"movies",
            id:10,
            url:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/49fa48f084e1cafbb862b14ac3594c1c74f1ef0093e076df908675fa69b04d5b._RI_V_TTW_.jpg",
            title:"Lady Bird (2017)",
            description:`As senior year comes to an end, Lady Bird must strive to navigate through the ups and downs in her relationships while trying to get into a prestigious college and become popular.`,
            theme:"Drama / Comedy",
            date:"8th Mar 2023",
            featureID:1,
            article:
            `
            Directed by: Greta Gerwig
            Starring: Saoirse Ronan, Laurie Metcalf, Tracy Letts, Lucas Hedges, Timothée Chalamet, Beanie Feldstein
            Genre: Drama, Comedy
            Release: November 10, 2017
            Rating: 8.8/10

            Lady Bird is a 2017 American coming-of-age comedy-drama which was Greta Gerwig's her solo directorial debut.
            The film received widespread critical acclaim, with reviewers praising Gerwig's screenplay and direction, 
            and the performances of Ronan and Metcalf. It was considered by many critics as one of the best films of 
            2017 and one of the best films of the 2010s. At the 90th Academy Awards, it earned five nominations: Best 
            Picture, Best Actress (for Ronan), Best Supporting Actress (for Metcalf), Best Original Screenplay, and Best 
            Director. At the 75th Golden Globe Awards, the film won two awards—Best Motion Picture (Musical or Comedy) 
            and Best Actress in a Musical or Comedy (for Ronan). Lady Bird grossed a worldwide total of $79 million.
            Lady Bird received a standing ovation at its international premiere at the Toronto International Film 
            Festival, and was praised for Ronan and Metcalf's performances, and Gerwig's direction.

            In the year 2002, Catholic high school senior Christine McPherson, self-named "Lady Bird," is an impetuous 
            girl literally from the wrong side of the tracks who's at a critical stage in her life: she's continually at 
            odds with her mother, despises her mundane life in Sacramento, and wants to go to college on the east coast 
            in a city with culture. Her ordinary life suddenly takes a turn when she has to deal with popularity, 
            discovering boys and romance, and coping with the problems of people other than her own. Cute, quirky, and 
            thoughtful coming-of-age story is one everyone can relate to, with the all-important themes of teen angst, 
            adolescence, and ambition; colorful dialogue, well-drawn characters, and believable situations are only 
            elevated by a talented cast of actors. Twenty-three-year-old Ronan perfectly embodies the spirit of a 
            self-absorbed teenager in all her complexities, making it easy for viewers to recall a similar time period 
            in their lives.

            Lady Bird delivered fresh insights about the turmoil of adolescence. It is exceptionally well-written, full 
            of wordplay and lively argument. Every line sounds like something a person might actually say, which means 
            that the movie is also exceptionally well acted. The themes in 'Bird' are common ones that many young adults
            can identify with during the confusing, competitive high school years. At the center of the film is the 
            titular character, who stops at nothing to escape her hometown for the east coast while battling her mother. 
            This rivalry dominates the entire film and helps us understand how one's environment growing up can have a 
            major impact on their choices in life. Between jumping out of moving vehicles, disrupting assemblies at her 
            Catholic high school and struggling with early love, Lady Bird stumbles her way through senior year in pursuit
            of being part of the "in crowd."`
        },
        {
            category:"movies",
            id:11,
            url:"https://i.ndtvimg.com/i/2015-10/the-martian_640x480_41444636911.jpg",
            title:"The Martian (2015)",
            description:`Mark Watney is stranded on the planet of Mars after his crew leaves him behind, presuming him to be dead due to a storm. With minimum supplies, Mark struggles to keep himself alive.`,
            theme:"Sci-fi / Adventure",
            date:"6th Mar 2023",
            featureID:6,
            article:
            `
            Directed by: Ridley Scott
            Starring: Matt Damon, Jessica Chastain, Chiwetel Ejiofor, Sebastian Stan, Kate Mara
            Genre: Sci-fi, Adventure
            Based on: "The Martian" 2011 novel by Andy Weir
            Release: October 2, 2015
            IMDb Rating: 8/10

            An Earth team is on Mars carrying out tests on the surface of The Red Planet, a message comes through from 
            Earth warning of a huge and fast approaching storm. The team quickly assemble and flee, unfortunately Mark 
            Watney is caught in the storm, loses his communication device and presumed dead. Watney has survived and has
            a harsh realization that he's abandoned on Mars with precious little supplies, no company and little chance
            of survival. Being 50 million miles away and 4 years away in terms of rescue life seems bleak. Watney has to
            defy the odds in order to survive.
            
            The special effects are fantastic! Director Ridley Scott outshines himself once again with a truly 
            magnificent feast for the eyes. The pacing of the film is very cleverly done, never does it feel rushed.
            The story itself is riveting. It's a tale of survival on a barren planet where Matt Damon fights a constant
            battle not against aliens or laser beams but against the cold and sterile reality of space. Matt Damon shows
            his class, he carries the film on his shoulders, he gives a stellar performance as Mark, cannot be faulted.
            Besides the realistic depiction of Mars, his performance is the other pillar on which this fine film rests.
            And a special mention for Jessica Chastain's fine performance as a tough and yet humane leader of the team.

            My favorite part of the movie was the fact that it can carry our interest for two and a half hours
            with the only real conflict being how to survive on a planet where nothing works. Matt Damon does an
            incredible job of acting, portraying a complex character who realizes he's a dead man but rises to 
            the challenge and pits every brain cell he's got against the universe. The Martian splits time evenly
            with Damon's plight and the efforts to rescue him. It's a story about never giving up even if it kills you,
            and that regardless of whether we get a happy ending or a sad one, is the takeaway of this flick.`
        },
        {
            category:"movies",
            id:12,
            url:"https://pbs.twimg.com/media/EmUeXUZVcAA5v6j.jpg",
            title:"Interstellar (2014)",
            description:`When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.`,
            theme:"Sci-fi / Adventure",
            date:"3rd Mar 2023",
            featureID:3,
            article:
            `
            Directed by: Christopher Nolan
            Starring: Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Matt Damon
            Genre: Sci-fi, Adventure
            Release: November 7, 2014
            Rating: 8.9/10

            "Interstellar" is a visual and auditory marvel that you cannot dare miss. It is a movie like no other. 
            Unlike many apocalyptic sci-fi films that feature advanced technology as the source of our destruction, 
            it instead asserts that technology will save us. Most of the times Sci-Fi movies are not great at telling 
            an effective, emotional drama stories. Mixing those two genres is unique and dangerous. Yet they achieved
            it in "Interstellar". The script, the acting, the cinematography, the visual effects, the sound and 
            the production as a whole are all absolutely mindblowing. Thus, making it one of the very best movies of 
            all time. Nearly every actor's performance proved worthy of commendation.

            Not everyone in Interstellar recognizes the potential of advanced technology. Most dismiss it as a waste of 
            time and resources. Farming became paramount while advanced technology was deemed frivolous. Cooper remains 
            one of the few survivors who still appreciates the need for engineering. He feels like a man lost in time, 
            until he stumbles into the headquarters of NASA (which had been operating in secret due to public 
            disapproval). Here he meets others who realize that a return to our old ways is unsustainable and will 
            ultimately lead to our demise. We need technology to save us. Professor Brand, eloquently tells Cooper,  
            "we were never meant to save the world. We were meant to leave it."
            For a movie that won an Oscar for Best Visual Effects (and deservedly so) the sound stole the show. Hans 
            Zimmer unleashed a performance that was, quite appropriately, out of this world. Never have I seen a movie 
            elevated so much by its score. The music fueled every important scene. In every meaningful moment Zimmer's 
            harmonies captivated watchers' attention. The music elucidated those emotional scenes, particularly ones 
            featuring Cooper and his daughter, in a way that no words or visual possibly could.
            Interstellar inspires, it awes, and above all it entertains.`
        },
        {
            category:"movies",
            id:13,
            url:"https://s3.amazonaws.com/criterion-production/films/0222c09df56224b064124b3d8010b7fa/jPuODGO8YemfcdKeV5VBvFXHFHMYXB_original.jpg",
            title:"Before Sunrise (1995)",
            description:`While travelling on a train in Europe, Jesse, an American man, meets Celine, a French woman. On his last day in Europe before returning to the US, he decides to spend his remaining hours with her.`,
            theme:"Romance / Drama",
            date:"1st Mar 2023",
            featureID:2,
            article:
            `
            Directed by: Richard Linklater 
            Starring: Ethan Hawke, Julie Delpy
            Genre: Romance, Drama
            Release: January 27, 1995
            Rating: 8.4/10

            The story follows two people, Jesse; an American and Celine; a French girl that meet on a train into Vienna.
            They instantly connect, and after telling her his awful idea for a television show and almost getting off the
            train, Jesse asks Celine to join him for the day in the picturesque city of Vienna. "Before Sunrise" is one 
            of my favorite romances, indeed one of the most beautiful love stories I have ever seen. It is a low budget
            movie with a very simple and real storyline, but the chemistry between Ethan Hawke and Julie Delpy is 
            perfect, and the dialogs are stunning. The direction is amazing, transmitting the feelings of Celine and
            Jesse to the viewer. This romantic drama is an offbeat telling of a dream come true for most people. The 
            film depicts romance in all it's glory, but without any of the pitfalls that befall most couples. In short
            the film is about two people that have a relationship that's as close to perfection as relationships will
            ever come to - with just one problem, the problem of time. While most relationships wind down with time,
            this one keeps going strong throughout and time itself is the only thing that wears out. "Before Sunrise"
            is certainly not the typical sentimental 'Hollywood romance', which is another aspect that puts this film 
            leagues ahead of the pretenders.

            Before Sunrise works principally for two reasons - realistic acting and an immense script that builds the 
            characters through their thoughts and feelings and thus allows us to get to know them as we do the people in
            real life. This allows the characters to be free, and it's easy to believe that these are real people and 
            not just actors working from a script. This also allows us to feel for the characters for who they are, and 
            not merely because they're the protagonists. This kind of realism is hard to capture as, at the end of the 
            day, we as the audience know that they're watching a film and not observing real life; but Before Sunrise 
            represents one of the truest to life exhibitions of realism ever to be seen on screen. A truly great script 
            cannot work on it's own, and needs great actors to deliver it to an extent that does it justice.

            In a film like this, it is the writing that's the most important thing, and contained within the script are 
            several observations about life, most of which I personally could relate to. With this script, they not only
            created and built the characters, but also managed to expose what true love is, along with several other 
            aspects of life. Adding to the beauty of the film is the city of Vienna. Before Sunrise is simultaneously 
            beautiful and captivating. The director created something that is rare in the world of cinema; a film that 
            captures the beauty of life without ever going over the top or being overly sentimental. Before Sunrise is 
            what it is. And what it is, is pure cinematic brilliance.`
        },
        {
            category:"movies",
            id:14,
            url:"https://i.guim.co.uk/img/media/8d9e6ba5e54fa16afc7ee6ebed8c6ba546a42131/0_6_1724_1035/master/1724.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9e4ef7a7fbb0f4d40cae74834285d731",
            title:"Dead Poets Society (1989)",
            description:`John Keating, a progressive English teacher, tries to encourage his students to break free from the norm, go against the status quo and live life unapologetically.`,
            theme:"Drama / Teen",
            date:"28th Feb 2023",
            featureID:5,
            article:
            `
            Directed by: Peter Weir
            Starring: Robin Williams, Robert Sean Leonard, Ethan Hawke
            Genre: Drama, Teen
            Release: June 2, 1989
            Rating: 8.2/10

            The film  is set in 1959 at the fictional elite conservative boarding school Welton Academy, and tells the 
            story of an English teacher who inspires his students through his teaching of poetry. The film was a
            commercial success and received numerous accolades, including Academy Award nominations. And it won the 
            BAFTA Award for Best Film. The original script was written by Tom Schulman, based on his experiences at the 
            Montgomery Bell Academy in Nashville, Tennessee, particularly with his inspirational teacher Samuel Pickering.

            There are certain films that get under your skin, never to come out. They change your life, subtly altering 
            your perceptions of reality, almost always for the better. Dead Poets Society is one of those few films.
            This movie was showed to us in our school, back when I was in class X. Back when you are young, you never 
            really stop to think what in the world you are doing with your life. You simply live for the day, hope your 
            grades will be enough to pass, and that's it. Long term thinking involves career, settling down. Nothing 
            more. What this film showed me was that we have the responsability and the joy of being alive in this planet.
            That we are dust, and we will go back to it, so we have precious little time to make a difference. That we 
            have a moral obligation to "seize the day, and make our lives extraordinary". That the world, basically is 
            ours. That the only limitations are within ourselves, and that we owe it to us to fight, to rebel against 
            conformity, to change what we hate and keep what we love. That living in this world is a beautiful 
            responsibility, and that only cowards dare not to change it for the better. The fact that the cast was 
            basically my age, and was passing through the same dilemmas and situations I was facing made it all so much 
            more powerful. 10 out of 10. A definitive masterpiece.`
        },

        {
            category:"animes",
            id:15,
            url:"https://cdn.theatlantic.com/thumbor/tvoccZR-OQ02Oca7QQjNA0s2-0Q=/420x0:1500x1080/1080x1080/media/img/mt/2017/04/your_name-1/original.jpg",
            title:"Your Name (2016)",
            description:`Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.`,
            theme:"Romance / Fantasy",
            date:"12th Mar 2023",
            featureID:3,
            article:
            `
            Directed by: Makoto Shinkai
            Starring: Ryunosuke Kamiki, Mone Kamishiraishi
            Genre: Romance, Fantasy
            Release: August 26, 2016
            IMDb Rating: 8.8/10
            
            "Your Name" was critically acclaimed, with praise for its story, animation, music, visuals, and emotional
            weight. It grossed over ¥41.44 billion (US$382 million) worldwide, breaking numerous box office records, 
            including  becoming the 3rd highest-grossing anime film of all time, unadjusted for inflation. The film
            received several accolades, including the Best Animated Feature at the 2016 Los Angeles Film Critics 
            Association Awards, the 49th Sitges Film Festival, and the 71st Mainichi Film Awards. It was also
            nominated for the Japan Academy Prize for Animation of the Year.
            
            It follows two high school students, a boy named Taki and a girl named Mitsuha, who live in different parts 
            of Japan and have never met each other. However, one day, they suddenly and inexplicably begin to swap bodies
            and living each other's lives. The film was commissioned in 2014, written and directed by Makoto Shinkai 
            and produced by CoMix Wave Films.

            The animation is stunning, so beautifully and intricately drawn with immaculate attention to detail in the 
            backgrounds and a simply breath-taking array of ethereal but also atmospheric colours. The music fits the 
            film's atmosphere with no problem at all and also works wonders as a soundtrack on its own, serving superbly 
            as music on its own. Characters, and the film's themes, are brilliantly written and developed, and the voice 
            acting is emotive and fit the characters with no qualms.

            Meanwhile, the script is thought-provoking and touching, with much to say and explored expertly and neatly 
            with no heavy-handedness. The storytelling engages throughout, sucks one into its world and never lets go of 
            the immersing and is enormously heartfelt, really investing in the characters' chemistry and their love for 
            each other. Pacing is deliberate, but never drags due to the emotional impact and how well realised the 
            characters are, even when noticeably slower in the second half. In summary, a truly magnificent film all 
            round that will be remembered for years to come.`
        },
        {
            category:"animes",
            id:16,
            url:"https://kidscreen.com/wp/wp-content/uploads/2020/01/Neighbor-Totoro.jpg",
            title:"My Neigbour Totoro (1988)",
            description:`When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.`,
            theme:"Comedy / Family / Fantasy",
            date:"10th Mar 2023",
            featureID:7,
            article:
            `
            Directed by: Hayao Miyazaki
            Starring: Chika Sakamoto, Noriko Hidaka, Hitoshi Takagi
            Genre: Comedy, Family, Fantasy
            Release: April 16, 1988
            IMDb Rating: 8.1/10
            
            My Neighbor Totoro  is a 1988 Japanese animated fantasy film that was written and directed by Hayao Miyazaki 
            and animated by Studio Ghibli for Tokuma Shoten. The film tells the story of a professor's young daughters 
            Satsuki and Mei, and their interactions with friendly wood spirits in postwar rural Japan. The film explores
            themes such as animism, Shinto symbology, environmentalism and the joys of rural living; it received 
            worldwide critical acclaim and has amassed a global cult following. My Neighbor Totoro has grossed over 
            $41 million worldwide at the box office as of September 2019, and from home video sales & licensed 
            merchandise sales, totaling approximately $1.46 billion.

            The film is considered as one of the top animation films, ranking 41st in Empire magazine's "The 100 Best 
            Films of World Cinema" in 2010 and the number-one animated film on the 2012 Sight & Sound critics' poll of 
            all-time greatest films. The film and its titular character have become cultural icons, and made multiple 
            cameo appearances in a number of Studio Ghibli films. Totoro also serves as the mascot for Studio Ghibli and 
            is recognized as one of the most popular characters in Japanese animation. My Neighbor Totoro received 
            numerous awards: the Animage Anime Grand Prix prize, the Mainichi Film Award, Kinema Junpo Award for Best
            Film in 1988 and the Special Award at the Blue Ribbon Awards.

            Animism is a major theme in My Neighbor Totoro (Animism is the belief that objects, places, and creatures all
            possess a distinct spiritual essence). Totoro has animistic traits and has kami status because he lives in a 
            camphor tree in a Shinto shrine surrounded by a Shinto rope, and is referred to as mori no nushi (master of 
            the forest). When Mei returns from her encounter with Totoro, her father takes Mei and her sister to the 
            shrine to greet and thank Totoro. This is a common practice in the Shinto tradition following an encounter 
            with a kami. The film is considered as an example of alternative history because of the utopian-like setting 
            of the anime.

            The animation is typical Ghibli, ethereal-looking and just ravishing to watch, while the music is one of my 
            favourite scores in a Ghibli film. The story is simple, but I loved the simplicity, it had such a pleasant 
            atmosphere to it, and the characters engaged with great chemistry together. In my opinion this is an 
            animation classic and a must-watch.`
        },
        {
            category:"animes",
            id:17,
            url:"https://i.scdn.co/image/ab67616d0000b27310caecaf6f356c3842b422ca",
            title:"Spirited Away (2001)",
            description:`Spirited Away tells the story of Chihiro Ogino, a ten-year-old girl who, while moving to a new neighborhood, enters the world of Kami (spirits of Japanese Shinto folklore)`,
            theme:"Fantasy / Family",
            date:"9th Mar 2023",
            featureID:1,
            article:
            `
            Directed by: Hayao Miyazaki
            Starring: Rumi Hiiragi, Miyu Irino, Mari Natsuki
            Genre: Fantasy, Family, Coming-of-age
            Release: 20 July 2001
            IMDb Rating: 8.6/10
            
            Miyazaki wrote the screenplay after he decided the film would be based on the ten-year-old daughter of his 
            friend Seiji Okuda, the film's associate producer, who came to visit his house each summer. After its
            release in Japan (2001) by distributor Toho, the film received universal acclaim, grossing $395.8 million
            at the worldwide box office. Accordingly, it became the most successful and highest-grossing film in 
            Japanese history and held the record for 19 years until it was surpassed by Demon Slayer in 2020.
            Spirited Away tells the story of Chihiro Ogino, a ten-year-old girl who, while moving to a new neighborhood, 
            enters the world of Kami (spirits of Japanese Shinto folklore). After her parents are turned into pigs by 
            the witch Yubaba, Chihiro takes a job working in Yubaba's bathhouse to find a way to free herself and her 
            parents and return to the human world.
            Spirited Away is regarded as Miyazaki's magnum opus and has often been listed among the greatest films of all
            time. It won the Academy Award for Best Animated Feature at the 75th Academy Awards, making it the first, and 
            to date only, hand-drawn and non-English-language animated film to win the award. Spirited Away is heavily
            influenced by Japanese Shinto-Buddhist folklore. The central location of the film is a Japanese 
            bathhouse where a great variety of Japanese folklore creatures, including kami, come to bathe.

            Upon gaining employment at the bathhouse, Yubaba's seizure of Chihiro's true name symbolically kills the 
            child, who must then assume adulthood. She then undergoes a rite of passage according to the monomyth format;
            to recover continuity with her past, Chihiro must create a new identity. Spirited Away contains critical 
            commentary on modern Japanese society concerning generational conflicts and environmental issues. Just as
            Chihiro seeks her past identity, Japan, in its anxiety over the economic downturn occurring during the 
            release of the film in 2001, sought to reconnect to past values. Accordingly, the film can be partly 
            understood as an exploration of the effect of greediness and Western consumerism on traditional Japanese 
            culture. For instance, Yubaba is stylistically unique within the bathhouse, wearing a Western dress & living
            among European décor and furnishings, in contrast with the minimalist Japanese style of her employees' 
            quarters, representing the Western capitalist influence over Japan in its Meiji period and beyond. Chihiro's
            parents turning into pigs symbolizes how some humans become greedy. "There were people that "turned into pigs" 
            during Japan's bubble economy (consumer society) of the 1980s", commented Miyazaki.

            In Spirited Away, two major instances of allusions to environmental issues have been noted.
            Chihiro dealing with the "stink spirit", who, it turns out, is actually a river spirit but is so corrupted 
            with filth that one couldn't tell what it was at first glance. It only became clean again when Chihiro pulled
            out a huge amount of trash, including car tires, garbage, and a bicycle. This alludes to human pollution of 
            the environment, and how people can carelessly toss away things without thinking of the consequences and of 
            where the trash will go. The second allusion is seen in Haku himself. Haku does not remember his name and
            lost his past, which is why he is stuck at the bathhouse. Eventually, Chihiro remembers that he used to be 
            the spirit of the Kohaku River, which was destroyed and replaced with apartments. Because of humans' need for
            development, they destroyed a part of nature, causing Haku to lose his home and identity. This can be 
            compared to deforestation and desertification; humans tear down nature, cause imbalance in the ecosystem, 
            and demolish animals' homes to satisfy their want for more space (housing, malls, stores, etc.) but do not 
            think about how it can affect other living things.`
        },
        {
            category:"animes",
            id:18,
            url:"https://assets-prd.ignimgs.com/2021/10/14/demonslayer-art-1634244394273.png",
            title:"Demon Slayer (2019)",
            description:`After a demon attack leaves his family slain and his sister cursed, Tanjiro embarks upon a perilous journey to find a cure and avenge those he's lost. His journey as a demon slayer began.`,
            theme:"Adventure / Dark fantasy / Martial arts",
            date:"7th Mar 2023",
            featureID:6,
            article:
            `
            Directed by: Haruo Sotozaki
            Starring: Natsuki Hanae, Akari Kitō, Hiro Shimono, Yoshitsugu Matsuoka, Takahiro Sakurai
            Genre: Adventure, Dark fantasy, Martial arts
            Release: April 6, 2019
            IMDb Rating: 8.7/10
            
            Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It was
            serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2016 to May 2020, with its 
            chapters collected in 23 tankōbon volumes. It follows teenage Tanjiro Kamado, who strives to become a Demon 
            Slayer after his family was slaughtered and his younger sister, Nezuko, turned into a demon. A 26-episode
            anime television series adaptation produced by Ufotable aired from April to September 2019. The sequel film
            "Mugen Train", released in October 2020, became the highest-grossing anime film of all time. In 2020, the 
            Demon Slayer franchise became one of the highest-grossing media franchises of all time.

            The gore in this was better than I anticipated and the creatures are portrayed in an awesome manner- many
            unique demons with surprisingly cool powers. I loved the evolution of the main characters as well as the 
            friends he meets and their display of powers. The animation is superb! The action scenes and the way the
            plot builds will definitely captivate you. And the show of strengths of our protagonists is astounding. 
            They have built such complex characters and developing their backstories; because of the amazing character
            development I understood the craze for this anime. But my most favourite aspect is: The Villains. Strong,
            compelling villains are a sign of show's success, atleast for me. The best part of this show is that it does
            not have a black-and-white storytelling, the usual good-vs-bad, hero-vs-enemy. They made all their characters
            multi-dimensional. A single action doesn't define anybody. They could humanize the demons. Even if they are
            negative characters, the enemies but at the end of each episode we still sympathize with them. That's how
            strong their storytelling is and what I love about this show. I love the message that Tanjiro repeatedly
            sends: "These demons were once humans too" and through his actions many of the demons realized the same as
            well and passed away with more peace.`
        },
        {
            category:"animes",
            id:19,
            url:"https://elcomercio.pe/resizer/4fTAPIBuluCE5T5dU6jV4qT9oMg=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YJ4UI274RFCKXHN3VW3K64ZHE4.jpg",
            title:"Spy x Family (2022)",
            description:`Agent Twilight, the greatest spy of the nation of Westalis, assembles a fake family in order to infiltrate an elite private school, not realizing he recruited a psychic child and a legendary assassin also in need of a cover family.`,
            theme:"Comedy / Action",
            date:"5th Mar 2023",
            featureID:4,
            article:
            `
            Directed by: Kazuhiro Furuhashi
            Starring: Takuya Eguchi, Saori Hayami, Atsumi Tanezaki
            Genre: Comedy, Action
            Release: 9 April 2022
            IMDb Rating: 8.5/10
            
            Spy x Family is a Japanese manga series written and illustrated by Tatsuya Endo. The story follows a spy who
            has to "build a family" to execute a mission, not realizing that the girl he adopts as his daughter is a 
            telepath, and the woman he agrees to be in a marriage with is a skilled assassin. An anime television series
            adaptation produced by Wit Studio and CloverWorks premiered on TV Tokyo in April 2022. The second half aired
            from October to December 2022. A second season is set to premiere in October 2023 and an anime film, titled 
            Spy x Family Code: White, will release on December 22, 2023. By March 2023, it had over 30 million copies in
            circulation, making it one of the best-selling manga series. The series has been praised for its storytelling,
            comedy, and artwork.

            In order to maintain the state of peace between the rival nations of Westalis and Ostania, a Westalian agent
            code-named "Twilight" is tasked with spying on Donovan Desmond, leader of the National Unity Party within 
            Ostania. However, due to Desmond being notoriously reclusive, the only way Twilight can get close to him is 
            to enroll a child in the same private school as Desmond's sons and pose as a fellow parent. To accomplish
            this and present the image of a happy family, he creates the alias of Loid Forger, adopts a young orphan
            girl named Anya, and marries a woman named Yor Briar. However, unbeknownst to him Anya can read minds and 
            Yor is in fact a professional assassin. Neither Loid nor Yor are aware of each other's true identities, or 
            that Anya knows their true professions. The family later takes in a dog with precognitive abilities whom 
            they name Bond. Despite these unknown factors and Twilight's occasional lapses of common sense due to years 
            of being a spy, he must learn to play the role of the perfect father and husband in order to carry out his 
            mission.

            This show is engaging, funny and have great character designs. I've never been hooked so quickly (after just
            2 episodes) into an anime. I think it's the characters. They are so likable. The writing, story, soundtrack, 
            pacing, it's all amazing! They have a strong, unique plot from the very beginning. And it only gets better
            with the subsequent episodes. Yor Forger is one of the strongest female anime characters ever created! And
            Loid Forger with his spy skills would capture you heart right from the start. But the one who really steals
            the show is: Anya Forger. Her cuteness will charm you, her quick thinking will surprise you, her imagination
            about the stuffs adults deal with is hilarious. Loid & Yor are so compatible, and their awkwardness is super
            cute. And then there is the duo of Anya and Damian. It's beautiful how they are developing the bonds between
            different characters as the show progresses. I was already in awe of the 1st season and thought nothing
            could be better than it. But then 2nd season proved me wrong, it just elevated the entire show. Amazing
            plot build up in season 2. There is anime original content that builds on and expands on the story in the 
            manga, which automatically  makes it better than the manga. The VAs are perfect and they truly bring the 
            characters to life.  The animation is great too! This is honestly such a cute, funny and wholesome anime and
            I recommend this anime to everyone, especially for those who are watching anime for the first time.`
        },
        {
            category:"animes",
            id:20,
            url:"https://i.scdn.co/image/ab67706c0000da84dc2e654c065ccc3034ac2919",
            title:"Fruits Basket (2019)",
            description:`When an orphan moves in with members of the reclusive Soma family, she learns they carry a curse that turns them into animals from the Chinese zodiac at awkward times, and she resolves to help them lift the curse and restore peace to their family.`,
            theme:"Slice of life",
            date:"4th Mar 2023",
            featureID:2,
            article:
            `
            Directed by: Yoshihide Ibata
            Starring: Manaka Iwami, Yuma Uchida, Nobunaga Shimazaki
            Genre: Slice of life, Romantic comedy
            Release: 5 April 2019
            IMDb Rating: 8.6/10
            
            The 2019 Fruits Basket anime series is the second based on the manga series of the same name by Natsuki 
            Takaya, this time adapting all 23 volumes of the story. The new anime adaptation was announced in November
            2018, featuring a new cast and staff, handling the 63 episodes-long production from April 2019 to June 2021, 
            divided into three seasons. The 1st season adapted the manga's first 5 volumes and parts of volumes 6 & 7.
            It ran for 25 episodes from April 6 to September 21, 2019. The 2nd season adapted the rest of volumes 6 & 7
            and all content from volume 8 to the beginning of volume 17. It aired from April 7 to September 22, 2020.
            The third and final season adapted the remaining content of the manga series. It aired from April 6 to June 
            29, 2021, titled Fruits Basket: The Final.

            After a family tragedy turns her life upside down, 16 year old high schooler Tohru Honda takes matters into 
            her own hands and moves out...into a tent. Unfortunately for her, she pitches her new home on private land 
            belonging to the mysterious Souma clan, and it isn't long before the owners discover her secret. But, as 
            Tohru quickly finds out when the family offers to take her in, the Soumas have a secret of their own--when 
            hugged by the opposite sex, they turn into the animals of the Chinese Zodiac.
            It is a true Adaptation, fit with a high quality studio producing the show, and an outstanding soundtrack 
            perfectly matched with emotional scenes sure to make you laugh and cry. While sometimes comedic, this show 
            exposes you time and again to life struggles, no matter the age.

            The found family trope, the power of friendship and kindness, the strength of unwavering love between the 
            characters. There were many things that this anime took time to highlight such as loneliness, neglect, 
            bullying, etc and I think the way these issues were addressed and dealt with in the show is one of the main 
            reasons why I love and have so much respect for this anime. Honestly, there were so many times I cried like
            a baby. Also, I have to mention the character development in this anime because I truly believe that Fruits
            Basket has done it incredibly well. Everyone In Fruits Basket started out with some kind of emotional scar 
            and tragic past that tied them down and over time, they changed and grew and realized things about themselves.
            The most important thing is that they healed. And in some ways, I also feel as if I healed by watching this.`
        },
        {
            category:"animes",
            id:21,
            url:"https://anitrendz.net/news/wp-content/uploads/2021/07/Jujutsu-Kaisen-Pop-up-Shop-at-Osaka-square-magnets.png",
            title:"Jujutsu Kaisen (2020)",
            description:`The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers to eliminate a powerful Curse named Ryomen Sukuna`,
            theme:"Action / Adventure",
            date:"1st Mar 2023",
            featureID:5,
            article:
            `
            Directed by: Seong-Hu Park (S1), Shōta Goshozono (S2) 
            Starring: Junya Enoki, Yûichi Nakamura, Yuma Uchida, Asami Seto
            Genre: Adventure, Action
            Release: October 3, 2020
            IMDb Rating: 8.5/10
            
            In Jujutsu Kaisen, all living beings emanate energy called Cursed Energy which arises from negative emotions
            that naturally flow throughout the body. Ordinary people cannot control this flow in their bodies. As a 
            result, they continually lose Cursed Energy, resulting in the birth of Curses a race of spiritual beings
            whose primary desire is to bring harm to humanity. These curses are shown as gruesome monsters and ghosts.
            Jujutsu Sorcerers are people who control the flow of Cursed Energy in their bodies, allowing them to use it 
            as they please and also to reduce its release. High-ranking Sorcerers and Curses can refine this energy and 
            use it to perform Cursed Techniques which tend to be unique to the user or their family. An advanced form of 
            Cursed Technique is Domain Expansion, which the users build a pocket dimension of variable size. Inside the 
            domain, all of their attacks will always connect and grow in strength.

            I love it when an anime goes out of its way to surpass the manga in terms of quality, making it the 
            definitive way to experience the story. I was left very impressed and entertained to the core. Jujutsu 
            Kaisen is MAPPA's striking new achievement which has set the bar for action anime shows, very high and hard 
            to top. The protagonist Yuji Itadori was not allowed to completely dominate the show, which is rare. Rather,
            his teacher and an absolute fan-favorite Satoru Gojo stole the show with his cool heroic moments, many of 
            which can send a shiver down your spine! For a secondary character, he truly gets to shine a lot, and other 
            characters one can actually expect to great primary treatment, mainly Itadori's friends Nobara and Megumi, 
            too shine when the right time comes. The plot initially moves at a very fast pace, leaving little to no room 
            for characters to grow on you easily. However, that is achieved later on as we get introduced to them again 
            and again through the skillfully drawn, beautifully colored and overall masterfully crafted action scenes. 
            Every fight sequence is executed with intensity and the right usage of music and colors just adds to the 
            brilliance. Jujutsu Kaisen has strong characters, both male and female, and are used effectively throughout 
            the 24 episodes. There's some humor too and it doesn't disappoint. But it's mostly the fight sequences that 
            stand out as the show's biggest highlight.`
        },

        {
            category:"music",
            id:22,
            url:"https://www.pinkvilla.com/imageresize/aespa_girls_main_2_0.jpg?width=752&t=pvorg",
            title:"Girls - aespa",
            description:`aespa is a South Korean girl group formed by SM Entertainment. 
            The group consists of four members: Karina, Giselle, Winter, and Ningning. 
            They debuted on November 17, 2020, with the single "Black Mamba".
            They released their 2nd EP "Girls" on 8th July 2022.`,
            theme:"KPop / Dance-Pop",
            date:"11th Mar 2023",
            featureID:5,
            article:
            `
            The group's name, Aespa, combines the English initials of "avatar" and "experience" (Avatar X Experience) with 
            the English word "aspect", meaning "two sides", to symbolize the idea of "meeting another self & experiencing 
            the new world". Girls is the second extended play by South Korean girl group Aespa. The EP was released
            through SM Entertainment and Warner Records on July 8, 2022. It consists of six tracks and was preceded by the
            promotional single "Illusion" & two official singles: "Life's Too Short" (English version) and "Girls". Girls 
            was a commercial success and debuted at number one on South Korea's Circle Album Chart. Aespa's 2nd No. 1 
            album on the chart and their highest-selling album to date. In September, the EP was certified Million by the  
            Korea Music Content Association (KMCA). It also debuted at number three on the Billboard 200 becoming the
            second and highest entry on the chart. Girls features various genres such as dance-pop and pop. Lyrically, the 
            album discusses themes of love, self-confidence, friendship, alliance, and more. Rolling Stone's Kristine Kwak
            noted that while "Girls" and "Illusion" are closer to the group's futuristic sound, the rest of the mini album  
            is "more light-hearted side of the girls with themes of not taking life too seriously". 
            
            The lead single "Girls" was described as a "dark", "brooding" dance, pop and electropop song with "heavy bass 
            synth" & lyrics about "Aespa & ae-Aespa having a full-fledged battle with Black Mamba [the antagonist]". It's 
            "glitchy, electronic-heavy production" softens during the bridge, before "sliding into a nutty techno break-
            -down" at the end. The second track "Illusion" was described as an electronic hip hop, synth-pop, dance
            and EDM-trap song with "punchy 808 bass and kicking sound that catches the ears". It consists of elements 
            indicative of hyperpop, including an "eccentric percussion to hi-hats and electric, woodblock-like clicks".
            Lyrically, the song was described as having "Aespa's own color expressed" such as "comparing the desire to
            seduce and devour one's opponent to goblin fire". 
            
            The third track "Lingo" was described as a country and dance-pop song with a "reverse charm that combines 
            bass and energetic drums", "Wild West-worthy" harmonica. The track celebrates "the special and unique bonds 
            between close friends", expressed through the metaphor of a shared lingo. The fourth track "Life's Too Short" 
            is a medium-tempo pop, soft pop and bubblegum pop song with a "catchy, electric guitar riff" and "bright, 
            breezy & hopeful vocals". The song's lyrics feature a "positive aspiration to enjoy a once-in-a-lifetime life 
            as desired without regrets". The last track "ICU" is a "gentle" and "soothing" acoustic ballad that has a 
            "harmonious" folk guitar and "delicate" strings. It delivers a message that emphasizes the importance of 
            "making sure to take a step back and rest in the midst of busy times".
            `
        },
        {
            category:"music",
            id:23,
            url:"https://www.udiscovermusic.com/wp-content/uploads/2022/10/SIGRID_HTLG_SPECIAL-EDITION_tif.jpg",
            title:"How To Let Go - Sigrid",
            description:`Sigrid is a Norwegian singer-songwriter. She has released two studio albums, 
            Sucker Punch (2019) and How to Let Go (2022), both of which charted in Norway and the United Kingdom. 
            She has also released two EPs.`,
            theme:"Pop",
            date:"9th Mar 2023",
            featureID:6,
            article:
            `
            Sigrid Solbakk Raabe was born in Ålesund on 5 September 1996. In her first year of high school, she realized 
            that music was more than just a hobby. After finishing high school in Ålesund, Sigrid moved to Bergen for its 
            indie music scene. In 2016, in partnership with Martin Sjølie, she wrote "Don't Kill My Vibe", inspired by an 
            incident where a producer belittled and patronized her in a songwriting session.  After executives at Island 
            Records heard the song, they immediately signed her to a recording contract. On 5 May 2017 she released her 
            debut EP which was named after the song, which charted in Norway, Australia, and the United Kingdom. In 2018
            January, Sigrid was announced as the winner of BBC Music Sound of 2018. On 8 March 2019, Sigrid's debut
            album, Sucker Punch, was released. She was listed in Forbes "30 under 30" for European Entertainment in 2019.

            Sigrid's songs are underpinned by anger, melancholia, and disappointment; she says that it is easier to write 
            about frustration than about having a nice time. For her love songs Sigrid cites Coldplay, Adele as influences. 
            How to Let Go is the second studio album by Norwegian singer-songwriter Sigrid, released on 6 May 2022 
            through Island Records. The album was promoted by the singles "Mirror", "Burning Bridges", "It Gets Dark", 
            "Bad Life". "Mirror" described as a "self-acceptance anthem", was released as the lead single from the album. 
            The meaning of the song "Burning Bridges" is "that moment when you know you have to let go [...] when you are 
            listening to the song, I'm cool with it being anything you want it to be". "Bad Life", with British rock band 
            Bring Me The Horizon, marks the first collaboration with another artist in Sigrid's projects.`
        },
        {
            category:"music",
            id:24,
            url:"https://linkstorage.linkfire.com/medialinks/images/734fca10-e3a7-4b87-90ef-f0b122214f81/artwork-440x440.jpg",
            title:"Forever Daze - RADWIMPS",
            description:`Radwimps is a Japanese rock band who debuted independently in 2003 and signed with Toshiba EMI in 2005. 
            According to the band, the coined word had several meanings, including "excellent weakling" and "superlative coward". 
            They gained international recognition for providing the soundtrack to the anime movie "Your Name".
            The Radwimps released their latest album on 23rd November 2021.`,
            theme:"J-Rock / Pop Rock",
            date:"6th Mar 2023",
            featureID:7,
            article:
            `
            Radwimps formed in 2001 in Kanagawa, Japan during their first year of high school. The five original members 
            had been friends since middle school. Lead vocalist Yojiro Noda first became interested in music after hearing
            Oasis in middle school. They gained widespread recognition for providing the soundtracks to famous Japanese 
            anime movies: 2016's Your Name, 2019's Weathering with You and 2022's Suzume. Radimps was awarded the 
            "Japanese Academy Award fro Best Original Score" for their work Makoto Shinkai's animes "Your Name" and 
            "Weathering with You". Lead vocalist Yojiro Noda writes all of the band's music and lyrics (the only exception
            currently is the bonus track "Yonaki" from Radwimps 4). Almost all of Noda's lyrics are based on events he has
            experienced. The current members are: Yojiro Noda, Akira Kuwahara, Yusuke Takeda, Satoshi Yamaguchi. 

            On November 23, 2021 the band released their irst studio album in 3 years titled "FOREVER DAZE" and went on 
            the road to support the album with the "Forever in the Daze Tour" from December 2021 through January 2022, 
            visiting 6 cities for 12 shows. This record was written throughout the pandemic and speaks to the musical 
            challenges the band faced, their hopes moving forward. It is composed of 14 songs. My personal favourites are
            "Iron Feather" and "Inujarashi". "Iron Feather" is a song that will touch your heart with its melody, lyrics
            and the artistic approach in its music video. In the song, it's discussed what pushes people to move forward
            in their ever-changing daily lives. The orchestra in "Inujarashi" will take your breath away.`
        },
        {
            category:"music",
            id:25,
            url:"https://i1.sndcdn.com/artworks-jf24hYaJPkMQ-0-t500x500.jpg",
            title:"Red (Taylor's Version)",
            description:`Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. Her genre-spanning discography, songwriting & artistic reinventions 
            have received critical praise and wide media coverage. Born in West Reading, Pennsylvania, Swift moved to Nashville at age 14 to become a country artist. 
            This is her 2nd re-recorded album, after Fearless(TV), released on 12th November 2021.`,
            theme:"Country / Pop",
            date:"2nd Mar 2023",
            featureID:1,
            article:
            `
            Swift is known for venturing into various music genres and undergoing artistic reinventions, having been
            described as a "music chameleon". She self-identified as a country musician until 2012, when she released her
            4th studio album, Red. She abandoned her country-music identity in 2014 with the release of her synth-pop 5th
            studio album, 1989. Swift described this as her first "documented, official pop album". Her career has always
            been one of transcendence & covert boundary-pushing, reaching a point at which Taylor Swift is just Taylor
            Swift, and not defined by any genre. One of Swift's earliest memories of music is listening to her grandmother,
            Marjorie Finlay. Swift said she owes her confidence and her "fascination with writing and storytelling" to her
            mother. Swift is referred to as one of the greatest songwriters of all time & the best of our generation.
            She told The New Yorker in 2011 that she identifies as a songwriter first: "I write songs, and my voice is
            just a way to get those lyrics across."

            Red (Taylor's Version) is the 2nd re-recorded album by American singer-songwriter Taylor Swift. Released via
            Republic Records on November 12, 2021, as part of her countermeasure against the purchase of the masters of
            her back catalog, the album is the re-recording of Swift's 4th studio album, Red (2012). The 30-track Red
            (Taylor's Version) includes re-recorded versions of 20 songs from the deluxe edition of Red; the 2012 charity
            single "Ronan"; the 10-minute, unabridged version of "All Too Well"; Swift's own recordings of "Better Man"
            (2016) and "Babe" (2018); and 6 previously unreleased "From the Vault" tracks. 
            Met with widespread acclaim, reviews commended Red (Taylor's Version) for Swift's vocals, enhanced 
            production quality, and the new tracks. Critics have described it as a classic pop record with a country 
            core, infusing rock and electronic flairs, whilst examining various dynamics of love, life, loss and 
            heartache. The album broke a string of commercial records, including the biggest vinyl sales week in MRC 
            Data history and the Spotify record for the most single-day streams for an album by a female artist. 
            
            The star of this album is undoubtedly the lead single 10-minute version "All Too Well", that Taylor Swift 
            made a short film for. "All Too Well (10 Minute Version)" topped charts worldwide and became the longest 
            song to reach No.1 on the Billboard Hot 100. Critics received the 10-minute version with rave reviews: they 
            praised the song structure and richer context to an existing acclaimed song, featured it in many year-end 
            lists, and dubbed it a career highlight. It received a Grammy nomination for Song of the Year. And the ATW 
            short film, directed by Swift, won an MTV Video Music Award for Video of the Year and a Grammy Award for
            the Best Music Video.`
        },
        {
            category:"music",
            id:26,
            url:"https://imageio.forbes.com/specials-images/imageserve/5e15da17888ec0000690782e/EXO-courtesy-of-SM-Entertainment/0x0.jpg?format=jpg&crop=560,420,x0,y132,safe&width=960",
            title:"Obsession - EXO",
            description:`The biggest boy band in the world: EXO is a South Korean-Chinese boy band based in Seoul formed by SM Entertainment which debuted in 2012. 
            The group consists of nine members: Xiumin, Suho, Lay, Baekhyun, Chen, Chanyeol, D.O., Kai and Sehun. They are noted for releasing music and performing 
            extensively in Korean, Mandarin and Japanese. EXO released their 6th album on 27th November 2019.`,
            theme:"KPop",
            date:"28th Feb 2023",
            featureID:3,
            article:
            `
            In 2011, SM Entertainment CEO Lee Soo-man revealed plans to debut a new boy band that would be divided into
            2 sub-groups, promoting the same music simultaneously in South Korea and China by performing songs in both 
            Korean and Mandarin. The group finalized its name as Exo, taken from the word "exoplanet". Exo are considered
            by many to be a vocal powerhouse group in the K-pop industry. In particular, the group's three main vocalists
            D.O., Chen, and Baekhyun have received praise from industry figures and the media. The special winter-themed
            EPs that Exo have released nearly every December since 2013 feature classic, emotional ballads that diverge
            from the upbeat singles usually featured on the band's studio albums. Most of Exo's songs blend pop, hip-hop
            and R&B with electronic dance music genres such as house and trap and are produced with onstage performance 
            in mind. Exo have been praised for their synchronized choreography and elaborate stage designs. With the 
            release of their debut studio album in 2013, Exo became the first South Korean artist in 12 years to sell 
            over one million copies of an album. In 2021, Exo became "sextuple million sellers"- they sold over 1 million 
            copies apiece for six different albums. No wonder Exo is known as "the biggest boy band in the world".

            "Obsession" is the 6th studio album by EXO. Obsession was Exo's first album to be promoted as a six-member
            group, as members Xiumin and D.O. were undergoing mandatory military service, and member Lay was  
            promoting his solo activities in China. The album features 10 songs including the lead single, "Obsession". The
            title track "Obsession" is described as a hip hop dance song featuring repeating spell-like vocal samples and a 
            prominent heavy beat. The album features 10 tracks in a variety of genres. The most interesting track from 
            this album is "Jekyll". It is a dance pop song with heavy drums, bass along with dynamic vocal composition 
            & transformation. The song's lyrics express an internal conflict with one's alter ego in an impactful way. 
            "Jekyll" is based on a duality concept: Fighting with demons inside you. The screaming voice is you calling 
            for help in desperation. The whispering voice is your demons telling you they are never leaving you.
            Hence the title from the theme of "Dr. Jekyll & Mr. Hyde".`
        },
        {
            category:"music",
            id:27,
            url:"https://images.genius.com/34823245b69965cc970d7a4153340208.1000x1000x1.png",
            title:"Lover - Taylor Swift",
            description:`Taylor Swift is an American singer-songwriter, record producer, actress, director, philanthropist, 
            and businesswoman. Lover (23rd Aug 2019) is Taylor's 7th overall studio album, 3rd Pop album and the 1st album to be owned by her. 
            She is also known for using the pseudonym 'Nils Sjoberg' - a Swedish officer and poet. 
            She has gone from a Country Princess to a Pop Star to the Queen of Indie music. 
            It's not an understatement that: Taylor Swift is the Music Industry!`,
            theme:"Pop",
            date:"27th Feb 2023",
            featureID:4,
            article:
            `
            As one of the leading music artists of the 21st century, Swift has influenced the music industry in many
            aspects. In being personal and vulnerable in her lyrics, Swift helped make space for later pop stars like 
            Billie Eilish, Ariana Grande, and Halsey to do the same. Swift is also a subject of academic study. The New 
            York University & Stanford University offer courses on Swift in literary, cultural & sociopolitical contexts.
            The Nashville Songwriters Association International named her Songwriter-Artist of the Decade in 2022. Swift's
            bridges are often underscored as the best aspects of her songs, earning her the title "Queen of Bridges".
            Lover is the 7th studio album by American singer-songwriter Taylor Swift. It was released on August 23, 2019, 
            through Republic Records, and is her first album release after her departure from Big Machine Records. Swift 
            recorded Lover from November 2018 to February 2019 following her 2018 Reputation Stadium Tour, where she 
            felt motivated by the fans, helping her recover her mental health after the controversies leading up to Reputation
            (2017). Swift conceived Lover as a "love letter to love", taking inspiration from her recalibrated personal 
            life and newfound artistic freedom. The songs incorporate eclectic styles ranging from country to folk to pop.
            They explore emotions such as infatuation, commitment, lust, heartache. A few discuss contemporary American
            political issues like LGBT rights and feminism. Lover was Swift's 6th-consecutive album to debut at number 
            one on the US Billboard 200. And it became the year's best-selling studio album. The album won Favorite
            Pop/Rock Album at the American Music Awards of 2019, and its singles won 4 MTV Video Music Awards.

            In the Lover era, butterflies were often used symbolically. With the release and success of this album, for
            her it was like coming out of a cocoon; the Lover album was like a butterfly itself, that soared beautifully.
            After years of backlash, rumours and toxic lies, the world trying to cancel her. She came back stronger than
            ever, and cemented her place at the top as a versatile, talented female artist. Lover was the 1st album owned
            by Taylor Swift; and not just the album, she owned the world.
            The title track "Lover" is one of the most beautiful love songs with its heartfelt metaphors. The music video
            featured the iconic "Lover House" with each room representing her past albums. Then there is "Cruel Summer"
            that has the best bridge in this whole album. Listening to this song, it makes you want to confess your love
            to somebody. That's how raw, powerful and honest it is.
            I loved every song on this album and had a hard time picking favourites, but my underrated favourites are
            "Cornelia Street" and "Death by a Thousand Cuts". The first one is about the feeling that you never want to 
            lose the special one. With love comes the fear of what if the person leaves. This is what "Cornelia Street" 
            explores. While the latter is the first breakup song Taylor wrote while being in a happy relationship. It 
            might sound weird to you but for the fandom and Taylor Swift herself this was a huge deal! You will fall in 
            love with the metaphors in "Death by a Thousand Cuts" and its killer bridge.

            Lastly, in line with our theme of this month, how can I not mention the masterpiece "The Man". Taylor Swift 
            called out the double-standards that women face their entire lives and that the world tries to normalize. With
            this powerful feminist anthem, she speaks up and sends the message that we, collectively, as a society must 
            accept our wrongs and try to do better instead of brushing it under a rug. She brings our focus on the fact 
            that how double-faced the society can be- if men do something, it's accepted easily; but when women do the 
            exact same thing, then the world questions us. "The Man" music video marked Taylor Swift's solo directional 
            debut, for which she won in the 2020 MTV Video Music Awards for "Best Direction". In this album she not only 
            talks about feminism. Through the song "You Need To Calm Down", she also supported the LGBTQ+ community.
            This record didn't portray "love" one-dimensionally, it explored all the shades of love. From the initial 
            attraction and playful flirting to the hard part of confessing; from the conflicts that are bound to happen in
            any relationship to apologizing. The album gave us a glimpse of an entire relationship, and in the last song
            she sang that she once believed 'love' would be black and white, that it would be burning red. But she 
            realizes 'love' can also be golden, like "Daylight". Listening to this album felt like an exploration of 
            "Love" in all of its forms - hence the title "Lover".`
        },
        {
            category:"music",
            id:28,
            url:"https://i.discogs.com/AaYlat-W68uA41Z_Sd80UrZakUm3D35k70XtWUNCqe4/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgzNjYz/NjctMTYyOTE0Nzk5/OS05MTk3LmpwZWc.jpeg",
            title:"Cleopatra - Lumineers",
            description:`They are an American alternative folk band. The founding members are Wesley Schultz and Jeremiah Fraites. 
            Schultz and Fraites began writing and performing together in Ramsey, New Jersey, in 2005. 
            The Lumineers emerged as one of the most popular folk-rock/Americana artists during the revival of those genres. 
            They are known for their energetic live shows and several international hit singles.
            Their album "Cleopatra" was released on 8th April 2016.`,
            theme:"Folk Rock / Indie",
            date:"25th Feb 2023",
            featureID:2,
            article:
            `
            Schultz has stated, "I write the lyrics, and I co-write the songs with Jer," adding "It's never the same thing
            with each song. Generally speaking it involves a piano, a guitar, and maybe singing, and we usually start out
            with the chord structure, a set of chords, a melody especially, and then the lyrics usually follow. Or it's 
            one phrase that you really find great and then you build the song around that". Schultz later claimed, "Your 
            melodies make people want to hear what you're saying". The band cites a diverse range of influences, including
            Bob Dylan, Beethoven, Guns N' Roses, Bruce Springsteen. The Lumineers have released 4 albums on American 
            independent label Dualtone Records. Their self-titled first album was released in 2012 and peaked at No. 2 on 
            the U.S. Billboard 200. In their early years 2002 - 2009, the band became The Lumineers after a band called 
            Lumineers (a made up word) was supposed to play at a club in Jersey City the week after Schultz and Fraites 
            played there. The emcee mistakenly introduced Schultz and Fraites as The Lumineers, and the name stuck. At 
            first, The Lumineers struggled to find success in New York. In 2009, after considering relocating to London, 
            Philadelphia and Boston, Fraites and Schultz, moved to Denver, Colorado, and joined the open mic scene.
            
            In September 2014, it was announced that The Lumineers began working on their second album. The band 
            released their 2nd studio album Cleopatra on April 8, 2016. The black and white photo on the cover depicts silent
            movie star Theda Bara in the title role in the 1917 film Cleopatra. The album's first single "Ophelia" was released 
            on February 5, 2016. Ophelia ended up being 2016's Billboard's #1 Alternative song and #1 Rock Radio song. 
            The second single, also the album's title track, "Cleopatra", sprang from an encounter with a taxi driver Wes
            met in the Republic of Georgia, who told a story of personal tragedy without a trace of self-pity. The 3rd 
            single, "Angela", quickly rose to No. 2 on Triple A radio making "Cleopatra" the first independent album to 
            have three Top-5 singles at Alternative radio. In April 2017, the band released the short film "The Ballad of 
            Cleopatra", which brought together videos for the songs "Cleopatra", "Angela", "Ophelia", "Sleep on the Floor"
            and "My Eyes". The film depicts Cleopatra's life story in one continuous narrative. My personal favourite is 
            "Sleep on the Floor" because of its addictive pre-chorus and lyrics. Each song in this album has a story of 
            its own and is connected to one another, thus making it unique. Hope you enjoy this album as much as I did.`
        },

        {
            category:"kdramas",
            id:29,
            url:"https://images.news18.com/ibnlive/uploads/2022/03/kim-tae-ri-nam-joo-hyuk.jpg",
            title:"Twenty-five Twenty-one",
            description:`In a time when dreams seem out of reach, a teenage fencer pursues big ambitions and meets a hardworking young man who seeks to rebuild his life.`,
            theme:"Coming-of-age / Sports",
            date:"10th Mar 2023",
            featureID:3,
            article:
            `
            Directed by: Jung Ji-hyun
            Starring: Kim Tae-ri, Nam Joo-hyuk
            Genre: Romance, Coming-of-age
            No. of episodes: 16
            Original release: February 12 - April 3, 2022
            Original network: tvN
            IMDb Rating: 8.6/10

            1) It is more than just a romantic story between our two leads. This series shows the journey of 5 friends
            from 1998 to 2002. My favourite part is how beautifully they portrayed different types of bonds: from friendsips
            to romantic relationships, from family to the student-teacher bond. Each character had their own time to shine, 
            irrespective of whether they are the main lead or 2nd lead or a side character. The show didn't glorify "love",
            and had different underlying themes. For example: Na Heedo's mother loved her but wasn't good in expressing,
            Na Heedo and Baek Yijin were in love but also hurt each other unintentionally, the confidence and strength
            Na Heedo received from her coach.

            2) Kudos to them for getting the details right. While watching this series, you will definitely be transported
            back in time. Back in 1998, the good-old-days, the age that had a little bit of everything, not an overdose
            of technology. The nostalgia of late 90s and early 2000s hits different! And an interesting part was how they
            showed the major social issues of back then: from the South Korean financial crisis, their government's gold-
            collection campaign to repay its debt to the International Monetary Fund (IMF), to 2001's 9/11 attacks.

            3) Another interesting factor is the parallels drawn between 1998 and 2022. The economic instability, lack of
            clarity about the future, traversing young adulthood with the help of our loved ones, figuring out ourselves
            as well as the bigger, scary world, finding refuge in friendships, conflicts with families, meeting special
            people along the way, discovering love for the first time, the courage to fall for someone, as well as getting
            hurt by love. When I ended this drama I realized how so many things are similar despite being decades apart.
            
            4) The ending left many in tears. But they were successful in sending one message clearly: there is no
            winning and losing in life. Sometimes the best relationships may not work out, we may lose the person
            we loved the most - that's how unpredictable life is. And that's how this drama was: unpredictable, fun,
            full of surprises, a rollercoaster of emotions; just like Life. Na Hee-do & Baek Yi-jin's breakup might
            feel like a loss. But the real win in this show was: Na Hee-do & Ko Yu-rim's friendship. From admiration,
            to jealousy, competing against one another, to forming a real friendship. The real bond, untouched by time.
            The story of Heedo & Yurim going from enemies to best friends is an integral part of the show.
            
            5) The core of this show is: Fencing. Our protagonist, Na Heedo, is a fencing champion! So how can I not 
            mention this point. Yes, 25-21 is a coming-of-age drama, and has romance elements. But primarily, it is a
            sports-based show. The creators have done a commendable job in bringing a lesser-known sport in the mainstream
            discourse. Their attention to detail will leave you in awe! So yes this drama has everything you're looking for:
            the adrenaline rush, the heart fluttering moments, the pure nostalgia.
            `
        },
        {
            category:"kdramas",
            id:30,
            url:"https://i.scdn.co/image/ab67706c0000bebbb368a163dd39a2b6e5043dfc",
            title:"Mr. Queen",
            description:`A modern chef suddenly becomes trapped inside the body of a queen from the Joseon era, which causes chaos for everyone involved.`,
            theme:"Comedy / Historical / Fantasy",
            date:"9th Mar 2023",
            featureID:1,
            article:
            `
            Directed by: Yoon Sung-sik
            Starring: Shin Hye-sun, Kim Jung-hyun, Seol In-ah, Na In-woo
            Genre: Historical, Romantic Comedy, Fantasy
            Based on: Go Princess Go (novel) by Xian Chen
            No. of episodes: 20
            Original release: December 12, 2020 - February 14, 2021
            Original networ: tvN
            IMDb Rating: 8.6/10
            
            1) Netflix's "Mr. Queen" is the gender-bending time travel K-Drama that you would get addicted to. Meet Jang
            Bong-hwan: a 21st-century cooking prodigy with an ego as boundless as the ocean and a womanizing reputation 
            to match. he had almost drowned in his apartment swimming pool. When he wakes up from the accident, he is in
            a woman's body during the 1800s Joseon dynasty. To make matters worse, the body he inhabits belongs to the 
            controversial queen of Joseon, Kim So-yong. In this show we see how the Queen survives the cutthroat world of
            palace politics and solve the supernatural mystery behind this body swap.

            2) Mr. Queen remains a comedy at heart, thanks to actress Shin Hye-sun playing Bong-hwan in So-yong's body.
            Her reproduction of alpha male body language, smug little smirks, impossibly expressive eyebrows, and general
            demeanor is just uncanny. Because he's such a privileged modern man, Bong-hwan refusing to appease the sexist
            expectations of the Joseon court is hysterical and satisfying all in one. It's fiercely enjoyable to watch a woman's
            persona soar through Korea's most powerful patriarchal hierarchy without a care in the world. Cheoljung
            is the country's most powerful man in title, but in truth a puppet king who's battling against his own socio-
            -political and ideological confines. He has frequent nightmares; he falls in unexpected love with the Queen
            he despised. This complicated character of Cheoljung was flawlessly executed by actor Kim Jung-hyun.

            3) If you're looking for a classically produced historical comedy with whimsy and heart, look no further than 
            Mr. Queen. Start it for the twists and turns, power schemes, and old-fashioned costumes, and stay for all the 
            daring originality they could manage. Neither historical romances nor the body/soul-swap is new creative ground.
            But I had never thought these two genres could be combined, yet they achieved it. Mr. Queen's concept is
            ineffable. It's presented through the lens of Studio Dragon's high production value and executed with an expertly
            comedic touch that maximizes its potential. The scripts balance the tone effortlessly shifting between outrageous
            comedy and just the right amount of severity: the suspense, the mystery, the action.

            4) I not only had lots of good laughs at the humorous content and witty comedy. The amount of plot twists and
            suspense will blow your mind. Once you start this show, don't be surprised if you get addicted to it because
            almost every episode seems to end on a cliffhanger. Mr. Queen was also the first historical kdrama I ever
            watched. And it felt like I learnt so much, like: royal weddings from the Joseon era, their dressing etiquette,
            the political power structure. One fun fact is that while most royal families in other parts of the world
            obsessed with their royal "bloodline", in the korean monarchy it was quite common to not have heirs of their
            own and thus adopt.`
        },
        {
            category:"kdramas",
            id:31,
            url:"https://i.scdn.co/image/ab67616d0000b273025e89b52a4bcb14cf87f1b5",
            title:"Start Up",
            description:`Seo Dal-mi has dreams of becoming Korea's own Steve Jobs, and with her genius first love, an investor, and a business insider by her side, her dream may be closer than she thinks.`,
            theme:"Romantic Comedy",
            date:"7th Mar 2023",
            featureID:5,
            article:
            `
            Directed by: Oh Choong-hwan
            Starring: Bae Suzy, Nam Joo-hyuk, Kim Seon-ho, Kang Han-na
            Genre: Romantic Comedy
            No. of episodes: 16
            Original release: October 17 - December 6, 2020
            Original network: tvN
            IMDb Rating: 8/10
            
            1) This was the first kdrama I dived into without any prior idea about it- no trailer, no summary. I was just
            too excited seeing Bae Suzy back and started it immediately. And I was not disappointed! Plus because of this
            it was even more enjoyable watching it. It did not follow a predictable love triangle plot. Usually the male
            lead becomes certain early on. But while watching "Start Up", we were left guessing until halfway past the series.

            2) I loved the characters! From our 4 leads to the side characters. Not only were strong characters created, the
            character growth was executed amazingly. Each character got time to shine.

            3) Nam Do-san is one of the most unique male leads ever. I could connect to his character on a soul-level. They
            made him so relatable- figuring out life in the twenties. And actor Nam Joo-Hyuk performed flawlessly. Who could 
            have thought that a cute, awkward, smart but under-confident character could become the hero in a story. 
            Do-san's character growth is my favourite part of this show. He was expressive and though usually timid,
            but when it came to Dal-mi he didn't think twice. Instead of holding himself back, he listened to his heart
            and went all in. Instead of overthinking it, he went ahead anyway and put in the efforts. And those efforts
            paid off!

            4) The show had ample of heartwarming moments: Grandma & Ji-pyeong's interactions, the trio of Samsan Tech,
            Do-san & Dal-mi obviously. Grandma with Dal-mi scenes were pure comfort. The portrayal of the start-up 
            culture was also pretty accurate and fun to watch.`
        },
        {
            category:"kdramas",
            id:32,
            url:"https://i.scdn.co/image/ab67616d0000b273606ac026c59ac4f6d5822a5c",
            title:"It's Okay to Not Be Okay",
            description:`A road to emotional healing opens up for an antisocial children's book author and an employee in a psychiatric hospital.`,
            theme:"Mental Health",
            date:"4th Mar 2023",
            featureID:7,
            article:
            `
            Directed by: Park Shin-woo
            Starring: Kim Soo-hyun, Seo Yea-ji, Oh Jung-se, Park Gyu-young
            Genre: Romantic Comedy
            No. of episodes: 16
            Original release: June 20 - August 9, 2020
            Original network: tvN
            IMDb Rating: 8.6/10
            
            1) Unique Format: Each episode had its own fairytale story to tell. The childhood fairytales were discussed 
            with a twist. For example: The story of the shepherd who cried wolf. "Do you know why the boy tricked the
            villagers like that? Because he was lonely. Lonely all by himself in the mountains."
            And another one: The tale of two sisters. "Even though the girls were abused by their stepmother and were
            on the verge of death, the father turned a blind eye to all of it. The one who neglects and turns a blind eye
            to the abuse is worse than the abuser. Those two sisters were practically killed by their father."

            2) Interesting characters and story development: The female lead Ko Moon-young will always remain iconic.
            The characters of male and female leads (Gang Tae & Moon Young) complemented each other well. The cast 
            performed phenomenally.

            3) Unusual Theme: This was one of the first kdramas I watched that had "Mental Health" as its theme. This new
            concept was much needed, especially during 2020 - in the height of the pandemic. The unique circumstances of 
            our lives helped us connect to it more. The autistic character of Sang-Tae was played so realistically.
            Throughout the series, 10 on 10 for their portrayal of various mental health illnesses. It was clear they were
            thorough in their research and amazing attention to detail. The therapy methods shown such as the Butterfly Hug
            were praised for their precision. 

            4) This is a really interesting kdrama with a different approach, new concept and a strong storyline. Each 
            episode has a meaningful story hidden in it. I definitely recommend this drama, it's worth the watch.`
        },
        {
            category:"kdramas",
            id:33,
            url:"https://m.media-amazon.com/images/M/MV5BZWQyZTkwMTMtYTJiZS00MGNlLThhN2EtYzEzOGQzYjFiZGQxXkEyXkFqcGdeQXVyMTEzMjQ4NzEw._V1_.jpg",
            title:"Crash Landing On You",
            description:`A paragliding mishap drops a South Korean heiress in North Korea - and into the life of an army officer, who decides he will help her hide.`,
            theme:"Romantic Comedy",
            date:"2nd Mar 2023",
            featureID:4,
            article:
            `
            Directed by: Lee Jung-hyo
            Starring: Hyun Bin, Son Ye-jin, Seo Ji-hye, Kim Jung-hyun
            Genre: Romantic Comedy
            No. of episodes: 16
            Original release: December 14, 2019 - February 16, 2020
            Original network: tvN
            IMDb Rating: 8.7/10
            
            My most favourite kdrama from the "Romantic" genre! If you choose to watch this, be ready to get
            addicted, and brace yourself for all the twists and suspense and tears (happy, sad, anxious tears of all kinds!)

            1) It starts with South Korean chaebol (conglomerate) heiress Yoon Se-ri entering the North Korean side of the 
            Demilitarised Zone after a storm swept her up during a paragliding accident. Her paths cross with Korean 
            People's Army captain Ri Jeong-Hyeok (Hyun Bin) who attempts to help her cross back to South Korea. However,
            they face many challenges due to the complex nature of their situation. They inevitably fall in love.

            2) Apart from all the emotional feels, I got to learn so much from this show! The male lead's character is
            North Korean. Evidently, a significant part of the storyline is based in North Korea. It was really interesting
            to watch the portrayal of North Korean way of life, their soldiers, the common people, even differentiating
            their accents (north vs south). I have always believed series and movies can be used as an amazing
            educational tool. From just one show we get to learn so much about another part of the world, their culture,
            their history. I found the North Korean - South Korean trope to be really unique.

            3) Needless to say, Crash Landing On You took many liberties when it comes to dealing with its depiction of 
            North Korean and South Korean relations. However, despite its fictionalisation (and to some extent,
            romanticisation) of the situation, it inspired curiosity and made people look into the actual relationship of
            the two sides of the Korean peninsula.

            4) Hyun Bin played tough-on-the-outside but soft-on-the-inside North Korean captain "Ri Jung-hyuk" so well! 
            He may look stoic and serious in his uniform. But there are many moments where you'll recognize he's secretly  
            a sweetheart. Son Ye-jin nailed it as "Yoon Seri". From comedy, to mysterious, serious scenes, to intense
            emotional ones; she will capture you heart. While the side characters added their own charm to this story.
            `
        },
        {
            category:"kdramas",
            id:34,
            url:"https://i.scdn.co/image/ab67616d0000b27330e7ffa60613da62eba9dd7d",
            title:"Strong Woman Do Bong-Soon",
            description:`A woman born with superhuman strength is hired by the CEO of a gaming company, to be his bodyguard.`,
            theme:"Thriller / Action / Fantasy / Comedy",
            date:"1st Mar 2023",
            featureID:6,
            article:
            `
            Directed by: Lee Hyung-min
            Starring: Park Bo-young, Park Hyung-sik, Ji Soo
            Genre: Crime, Fantasy, Thriller, Action, Romantic comedy
            No. of episodes: 16 + 1 special
            Original release: February 24 - April 15, 2017
            Original network: JTBC
            IMDb Rating: 8.2/10
            
            1) Strong Woman Do Bong Soon is a hilarious rom-com, with an undertone of gender issues. The show has the 
            usual elements of k-drama: the rich, good looking chaebol heir, his cold, antagonistic family; the sassy girl;
            the love triangle; and the boy gets girl story after overcoming difficulties, but it managed to be so much more.

            2) This show is a wonderful blend of slapstick comedy, old fashioned romance and a refreshing look at gender
            roles. First there's a hidden message in the story, that loving a strong woman makes you a better man. It works
            that way for ages in the Matriarchy that is the Do Dynasty. 

            3) Second there's a subplot about the young chaebol, who pretends to be gay. This image helps him with free 
            publicity, protects him against unwanted female attention, and last but not least: keeps his lovely "Peanut 
            King Kong" close by his side without alarming her. He even teases her with his supposed attraction to Guk Doo,
            saying he has a nice butt.

            4) Also the show makes fun of the Korean Patriarchy: the police office, the youth gang, the gangster mob in 
            the neighborhood, and the patriarch of the chaebol's family, they are all absurdly dysfunctional.
            
            5) I started this kdrama expecting something simple, light-hearted, just funny. But it went beyond my 
            expectations. Far from some simple, funny story. The plots were layered, there was a seamless transition of 
            genres. The characters are amazing, and the storyline is interesting. I loved the mix of genres - it was 
            REALLY funny, and the romantic parts were sweet, while also having some pretty cool action in it. 
            It had a bit of a comic-book-y style. You cannot miss out on this masterpiece!`
        },
        {
            category:"kdramas",
            id:35,
            url:"https://i.scdn.co/image/ab67616d0000b2738b36a8c16b48db1bdab65545",
            title:"Reply 1988",
            description:`Follows the lives of 5 families living on the same street in a neighbourhood called Ssangmundong in Seoul. A nostalgic look back at the year 1988.`,
            theme:"Comedy / Family",
            date:"27th Feb 2023",
            featureID:2,
            article:
            `
            Directed by: Shin Won-ho
            Starring: Lee Hye-ri, Ryu Jun-yeol, Go Kyung-pyo, Park Bo-gum, Lee Dong-hwi
            Genre: Family, Comedy, Romance, Coming-of-age
            No. of episodes: 20 + special
            Original release: November 6, 2015 - January 16, 2016
            Original network: tvN
            IMDb Rating: 9.2/10
            
            1) Reply 1988 outshines its predecessors. This drama connects us to the nostalgic memory lane of simpleness of
            life for average people and emphasizes the camaraderie between families, friends, neighbors & every one. It is 
            correlated with the cultural aspects of the past and shows us the boundaries where one might stopped existing. 
            But this drama helps us relive the past and appreciate the generosity and oneness of humanity. This is a genuine
            drama that gives moral lessons. It motivates us to be courageous, take care other people, to give love and don't 
            expect anything in return. Made with infinite class. 

            2) The series is a wonderful depiction of friendship, family, and first loves. It shows the ups, downs, and total 
            180 degrees that Koreans in Seoul have experienced in the late '80s and early '90s. The five lifelong friends may 
            be the official lead characters, but their moms, dads, and siblings are each like a bida in their own right, too. 

            3) Reply 1988 revolves around the lives of a group of five friends in Ssangmun-dong, a small neighborhood in 
            Seoul. Most of the series covered their struggles and memorable moments when they were 18 and 19 years old. 
            The story starts in 1988, covers 1989, and fast-forwards to 1994 and 1995. It also has snippets of 2016, where
            Deok Sun is being interviewed with her husband, whose identity is only revealed later on in the story.
            These childhood friends have each other's back no matter what trouble they get into. As neighbors, their parents 
            have grown close, too, and depend on each other. The different characters go through various points in life—from 
            tough years at school to that physically, psychologically, and financially draining stage called adulthood.`
        }
    ]);

    return(
        <blogData.Provider value={[data,setData]}>
            {props.children}
        </blogData.Provider>
    );
}

export default ContextAPI;