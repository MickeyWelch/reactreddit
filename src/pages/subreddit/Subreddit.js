import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";
import numberWithDots from "../../helpers/DotNotation";
import Footer from "../../components/footer/Footer";

function Subreddit() {
    const {subredditId} = useParams();
    const [post, setPost] = useState();
    const history = useHistory();

    function handleClick() {
        history.push("/");
    }

    useEffect(() => {
        async function getData() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                console.log(result.data)
                setPost(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        getData();
    }, []);

    return (
        <>
            {post &&
            <Header
                title={post.data.url}
                subtitle="Subreddit specifications"
            />
            }

            <main>
                {post &&
                <>
                    <h3>Title</h3>
                    <p>{post.data.title}</p>
                    <h3>Description</h3>
                    <p>{post.data.public_description}</p>
                    <h3>Number of subscribers</h3>
                    <p>{numberWithDots(post.data.subscribers)}</p>
                </>
                }

                <button
                    type="button"
                    onClick={handleClick}
                >Take me back
                </button>
            </main>

            <Footer />
        </>
    );
}

export default Subreddit;