"use client"

import {useEffect} from 'react';
import Prompt from "@/models/prompt";

const Feed = () => {

    const createPrompt = () => {

       let prompt = new Prompt({
           prompt: "test str 111",
           tag: "webDev"
       });

       console.log(222);
       console.log(prompt);

    }




    return (
        <div>
            <div className="text-center font-bold">Feed component</div>
            <button onClick={createPrompt}>create Prompt</button>
        </div>
    )
};

export default Feed;