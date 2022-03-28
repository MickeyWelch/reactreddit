import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import redditLogo from '../../assets/logo.png';
import numberWithDots from "../../helpers/DotNotation";
import truncateString from "../../helpers/truncateText";
import Footer from "../../components/footer/Footer";

function Home() {
    const [posts, getPosts] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(result.data);
                getPosts(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [])

    return (
        <>
            <p>{truncateString("Dit is een hele lange zin om te testen of mijn helperfunctie werkt in de react app voor reddit. met meer dan 100 tekens moet de tekst worden afgekapt.")}</p>
            <Header
                logo={redditLogo}
                title="Reddit"
            />
            <main>
                <h1>Hottest posts <span>on reddit right now</span></h1>
                {posts && <>
                    {posts.data.children.map((post) => {
                        return <article key={post.data.id}>
                            <h3><a href={post.data.url} target="_blank"
                                   title={`go to ${post.data.title} on reddit`}>{post.data.title}</a></h3>
                            <span className="meta">
                            <p><Link to={`/subreddit/${post.data.subreddit}`}>{post.data.subreddit_name_prefixed}</Link></p>
                            <p>Comments {numberWithDots(post.data.num_comments)} - Ups {numberWithDots(post.data.ups)}</p>
                            </span>
                        </article>
                    })}
                </>
                }
            </main>
            <Footer />
        </>
    );
}

export default Home;