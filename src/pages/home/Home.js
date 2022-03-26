import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

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
            <h1>Hottest posts <span>on reddit right now</span></h1>
            {posts && <>
                    {posts.data.children.map((post) => {
                        return <article>
                            <h3><a href={post.data.url} target="_blank"
                                   title={`go to ${post.data.title} on reddit`}>{post.data.title}</a></h3>
                            <span className="meta">
                            <p><Link to={`/subreddit/${post.data.subreddit_id}`}>{post.data.subreddit_name_prefixed}</Link></p>
                            <p>Comments {post.data.num_comments} - Ups {post.data.ups}</p>
                            </span>
                        </article>
                    })}
            </>
            }
        </>
    );
}

export default Home;