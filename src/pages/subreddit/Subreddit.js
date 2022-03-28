import React, {useEffect, useState} from 'react';
import './Subreddit.css';
import {Link, useHistory, useParams} from "react-router-dom";
import axios from "axios";
import Header from "../../components/header/Header";
import numberWithDots from "../../helpers/DotNotation";
import Footer from "../../components/footer/Footer";
import {ReactComponent as LoaderImage} from "../../assets/reddit-app-loader.svg";

function Subreddit() {
    const {subredditId} = useParams();
    const [post, setPost] = useState();
    const history = useHistory();
    const [loading, toggleLoading] = useState(true);

    function handleClick() {
        history.push("/");
    }

    useEffect(() => {
        async function getData() {
            try {
                toggleLoading(true);
                const result = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                console.log(result.data)
                setPost(result.data);
                toggleLoading(false);

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
                title={post.data.display_name_prefixed}
                subtitle="Subreddit specifications"
            />
            }

            <main className="outer-container">
                <div className="inner-container post">

                    {loading && <>
                        <LoaderImage width="50px" height="50px" />
                    </>
                    }

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

                    {/*<button*/}
                    {/*    type="button"*/}
                    {/*    onClick={handleClick}*/}
                    {/*>Take me back*/}
                    {/*</button>*/}
                    <p className="go-back">&#60; <Link to="/" className="go-back">Take me back</Link></p>
                </div>
            </main>

            <Footer/>
        </>
    );
}

export default Subreddit;