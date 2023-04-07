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
            url:"https://pbs.twimg.com/media/EFibK7uXUAAJ3Xm.jpg",
            title:"Little Women (2019)",
            description:`While the March sisters enter the threshold of womanhood, they go through many ups and downs in life and endeavour to make important decisions that can affect their future.`,
            theme:"Romance / Drama",
            date:"11th Mar 2023",
            featureID:4
        },
        {
            category:"movies",
            id:9,
            url:"https://i.ytimg.com/an/xi-1NchUqMA/5962b9c2-6478-4cf2-8a20-413bcca79d94_mq.jpg?v=5e4d7e8d",
            title:"Knives Out (2019)",
            description:`Harlan Thrombey, a reputable crime novelist, is found dead after his 85th birthday celebrations. However, as detective Benoit Blanc investigates the case, it unravels a ploy of sinister intentions.`,
            theme:"Mystery / Comedy",
            date:"10th Mar 2023",
            featureID:7
        },
        {
            category:"movies",
            id:10,
            url:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/49fa48f084e1cafbb862b14ac3594c1c74f1ef0093e076df908675fa69b04d5b._RI_V_TTW_.jpg",
            title:"Lady Bird (2017)",
            description:`As senior year comes to an end, Lady Bird must strive to navigate through the ups and downs in her relationships while trying to get into a prestigious college and become popular.`,
            theme:"Drama / Comedy",
            date:"8th Mar 2023",
            featureID:1
        },
        {
            category:"movies",
            id:11,
            url:"https://i.ndtvimg.com/i/2015-10/the-martian_640x480_41444636911.jpg",
            title:"The Martian (2015)",
            description:`Mark Watney is stranded on the planet of Mars after his crew leaves him behind, presuming him to be dead due to a storm. With minimum supplies, Mark struggles to keep himself alive.`,
            theme:"Sci-fi / Adventure",
            date:"6th Mar 2023",
            featureID:6
        },
        {
            category:"movies",
            id:12,
            url:"https://pbs.twimg.com/media/EmUeXUZVcAA5v6j.jpg",
            title:"Interstellar (2014)",
            description:`When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.`,
            theme:"Sci-fi / Adventure",
            date:"3rd Mar 2023",
            featureID:3
        },
        {
            category:"movies",
            id:13,
            url:"https://s3.amazonaws.com/criterion-production/films/0222c09df56224b064124b3d8010b7fa/jPuODGO8YemfcdKeV5VBvFXHFHMYXB_original.jpg",
            title:"Before Sunrise (1995)",
            description:`While travelling on a train in Europe, Jesse, an American man, meets Celine, a French woman. On his last day in Europe before returning to the US, he decides to spend his remaining hours with her.`,
            theme:"Romance / Drama",
            date:"1st Mar 2023",
            featureID:2
        },
        {
            category:"movies",
            id:14,
            url:"https://i.guim.co.uk/img/media/8d9e6ba5e54fa16afc7ee6ebed8c6ba546a42131/0_6_1724_1035/master/1724.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9e4ef7a7fbb0f4d40cae74834285d731",
            title:"Dead Poets Society (1989)",
            description:`John Keating, a progressive English teacher, tries to encourage his students to break free from the norm, go against the status quo and live life unapologetically.`,
            theme:"Drama / Teen",
            date:"28th Feb 2023",
            featureID:5
        },

        {
            category:"animes",
            id:15,
            url:"https://cdn.theatlantic.com/thumbor/tvoccZR-OQ02Oca7QQjNA0s2-0Q=/420x0:1500x1080/1080x1080/media/img/mt/2017/04/your_name-1/original.jpg",
            title:"Your Name (2016)",
            description:`Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person.`,
            theme:"Romance / Fantasy",
            date:"12th Mar 2023",
            featureID:3
        },
        {
            category:"animes",
            id:16,
            url:"https://kidscreen.com/wp/wp-content/uploads/2020/01/Neighbor-Totoro.jpg",
            title:"My Neigbour Totoro (1988)",
            description:`When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.`,
            theme:"Comedy / Family / Fantasy",
            date:"10th Mar 2023",
            featureID:7
        },
        {
            category:"animes",
            id:17,
            url:"https://i.scdn.co/image/ab67616d0000b27310caecaf6f356c3842b422ca",
            title:"Spirited Away (2001)",
            description:`Spirited Away tells the story of Chihiro Ogino, a ten-year-old girl who, while moving to a new neighborhood, enters the world of Kami (spirits of Japanese Shinto folklore)`,
            theme:"Fantasy / Family",
            date:"9th Mar 2023",
            featureID:1
        },
        {
            category:"animes",
            id:18,
            url:"https://assets-prd.ignimgs.com/2021/10/14/demonslayer-art-1634244394273.png",
            title:"Demon Slayer (2019)",
            description:`After a demon attack leaves his family slain and his sister cursed, Tanjiro embarks upon a perilous journey to find a cure and avenge those he's lost. His journey as a demon slayer began.`,
            theme:"Adventure / Dark fantasy / Martial arts",
            date:"7th Mar 2023",
            featureID:6
        },
        {
            category:"animes",
            id:19,
            url:"https://elcomercio.pe/resizer/4fTAPIBuluCE5T5dU6jV4qT9oMg=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YJ4UI274RFCKXHN3VW3K64ZHE4.jpg",
            title:"Spy x Family (2022)",
            description:`Agent Twilight, the greatest spy of the nation of Westalis, assembles a fake family in order to infiltrate an elite private school, not realizing he recruited a psychic child and a legendary assassin also in need of a cover family.`,
            theme:"Comedy / Action",
            date:"5th Mar 2023",
            featureID:4
        },
        {
            category:"animes",
            id:20,
            url:"https://i.scdn.co/image/ab67706c0000da84dc2e654c065ccc3034ac2919",
            title:"Fruits Basket (2019)",
            description:`When an orphan moves in with members of the reclusive Soma family, she learns they carry a curse that turns them into animals from the Chinese zodiac at awkward times, and she resolves to help them lift the curse and restore peace to their family.`,
            theme:"Slice of life",
            date:"4th Mar 2023",
            featureID:2
        },
        {
            category:"animes",
            id:21,
            url:"https://anitrendz.net/news/wp-content/uploads/2021/07/Jujutsu-Kaisen-Pop-up-Shop-at-Osaka-square-magnets.png",
            title:"Jujutsu Kaisen (2020)",
            description:`The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers to eliminate a powerful Curse named Ryomen Sukuna`,
            theme:"Action / Adventure",
            date:"1st Mar 2023",
            featureID:5
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
            
            In September 2014, it was announced that The Lumineers began working on their second album. The band released
            their 2nd studio album Cleopatra on April 8, 2016. The black and white photo on the cover depicts silent movie
            star Theda Bara in the title role in the 1917 film Cleopatra. The album's first single "Ophelia" was released 
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
            Written by:     Kwon Do-eun
            Directed by:    Jung Ji-hyun
            Starring:   Kim Tae-ri, Nam Joo-hyuk
            Genre:  Romance, Coming-of-age
            No. of episodes:    16
            Original release:   February 12 - April 3, 2022
            Original network	tvN
            IMDb Rating:    8.6/10

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
            Written by:     	Park Gye-ok, Choi Ah-il
            Directed by:    Yoon Sung-sik
            Starring:   Shin Hye-sun, Kim Jung-hyun, Seol In-ah, Na In-woo
            Genre:  Historical, Romantic Comedy, Fantasy
            Based on:	Go Princess Go (novel) by Xian Chen
            No. of episodes:    20
            Original release:   December 12, 2020 - February 14, 2021
            Original network	tvN
            IMDb Rating:    8.6/10
            
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
            Written by:     Park Hye-ryun
            Directed by:    Oh Choong-hwan
            Starring:   Bae Suzy, Nam Joo-hyuk, Kim Seon-ho, Kang Han-na
            Genre:  Romantic Comedy
            No. of episodes:    16
            Original release:   October 17 - December 6, 2020
            Original network:	tvN
            IMDb Rating:    8/10
            
            1) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 

            2) dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 

            3) ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu

            4) fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt`
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
            Written by:     Jo Yong
            Directed by:    Park Shin-woo
            Starring:   Kim Soo-hyun, Seo Yea-ji, Oh Jung-se, Park Gyu-young
            Genre:  Romantic Comedy
            No. of episodes:    16
            Original release:   June 20 - August 9, 2020
            Original network:   tvN
            IMDb Rating:    8.6/10
            
            1) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 

            2) dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 

            3) ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu

            4) fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt`
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
            Written by:     Park Ji-eun
            Directed by:    Lee Jung-hyo
            Starring:   Hyun Bin, Son Ye-jin, Seo Ji-hye, Kim Jung-hyun
            Genre:  Romantic Comedy
            No. of episodes:    16
            Original release:   December 14, 2019 - February 16, 2020
            Original network:	tvN
            IMDb Rating:    8.7/10
            
            1) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 

            2) dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 

            3) ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu

            4) fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt`
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
            Written by:     Baek Mi-kyung
            Directed by:    Lee Hyung-min
            Starring:   Park Bo-young, Park Hyung-sik, Ji Soo
            Genre:  	Crime, Fantasy, Thriller, Action, Romantic comedy
            No. of episodes:    16 + 1 special
            Original release:   February 24 - April 15, 2017
            Original network:	JTBC
            IMDb Rating:    8.2/10
            
            1) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 

            2) dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 

            3) ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu

            4) fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt`
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
            Written by:     Lee Woo-jung
            Directed by:    Shin Won-ho
            Starring:   	Lee Hye-ri, Ryu Jun-yeol, Go Kyung-pyo, Park Bo-gum, Lee Dong-hwi
            Genre:  	Family, Comedy, Romance, Coming-of-age
            No. of episodes:    20 + special
            Original release:   November 6, 2015 - January 16, 2016
            Original network:	tvN
            IMDb Rating:    9.2/10
            
            1) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 

            2) dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 

            3) ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu

            4) fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt`
        }
    ]);

    return(
        <blogData.Provider value={[data,setData]}>
            {props.children}
        </blogData.Provider>
    );
}

export default ContextAPI;