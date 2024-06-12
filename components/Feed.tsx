"use client"


import {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import PromptCard from "@/components/PromptCard";
import Image from "next/image";

type Prompt = {
    _id: string;
    prompt: string;
    tag: string;
}

const Feed = () => {

    const router = useRouter();

    const [prompts, setPrompts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPrompts = async () => {
        setLoading(true);
        const response = await fetch("/api/prompt", {
            method: "GET"
        });
        const prompts = await response.json();
        setPrompts(prompts);
        setLoading(false);
    }

    const deletePrompt = async (id: string) => {
        setLoading(true);
        await fetch("/api/prompt", {
            method: "DELETE",
            body: JSON.stringify({
                _id: id
            })
        })

        fetchPrompts();
    }

    useEffect(() => {
        fetchPrompts();
    }, []);

    return (
        <div className="p-5">
            <div className="flex mb-6 w-full">
                <button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                    onClick={() => {
                        router.push("/create-prompt");
                    }}>create Prompt
                </button>
                <button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                    onClick={fetchPrompts}>fetch prompts
                </button>
                {loading && <Image src="/assets/icons/loader.svg" alt="loader" width={32} height={32}></Image>}
            </div>

            <div className="flex flex-wrap">
                {prompts.map((prompt: Prompt) => {
                    return <PromptCard
                        key={prompt._id}
                        prompt={prompt}
                        loading={loading}
                        handleDelete={deletePrompt}
                    ></PromptCard>
                })}
            </div>
        </div>
    )
};

export default Feed;
