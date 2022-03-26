import React from 'react';
import {useParams} from "react-router-dom";

function Subreddit(props) {
    const {subredditId} = useParams();

    return (
        <p>Dit is Subreddit</p>
    );
}

export default Subreddit;