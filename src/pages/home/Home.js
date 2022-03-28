import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Home.css';
import {Link} from "react-router-dom";
import Header from "../../components/header/Header";
import redditLogo from '../../assets/logo.png';
import {ReactComponent as LoaderImage} from "../../assets/reddit-app-loader.svg";
import numberWithDots from "../../helpers/DotNotation";
import TruncateString from "../../helpers/TruncateText";
import Footer from "../../components/footer/Footer";

function Home() {
    const [posts, getPosts] = useState(null);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            toggleError(false);
            try {
                toggleLoading(true);
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(result.data);
                getPosts(result.data);
                toggleLoading(false);

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        fetchData();
    }, [])

    return (
        <>
            <Header
                logo={redditLogo}
                title="Reddit"
            />
            <main className="outer-container">
                <div className="inner-container">
                    <h1>Hottest posts <span>on reddit right now</span></h1>
                    <div className='posts'>

                    {loading && <>
                        <LoaderImage width="50px" height="50px" />
                    </>
                    }

                    {error && <span>Er ging iets mis met het ophalen van de posts van Reddit... </span>}

                    {posts && <>
                        {posts.data.children.map((post) => {
                            return <article key={post.data.id}>
                                <h3>
                                    <a href={post.data.url} target="_blank"
                                       title={`go to ${post.data.title} on reddit`}>
                                        {TruncateString(post.data.title)}
                                    </a>
                                </h3>
                                <span className="meta">
                            <p><Link to={`/subreddit/${post.data.subreddit}`}>{post.data.subreddit_name_prefixed}</Link></p>
                            <p>Comments {numberWithDots(post.data.num_comments)} - Ups {numberWithDots(post.data.ups)}</p>
                            </span>
                            </article>
                        })}
                    </>
                    }
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Home;