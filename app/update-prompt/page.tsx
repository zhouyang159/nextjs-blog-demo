"use client";
import {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

const UpdatePrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [loading, setLoading] = useState(false);
    const [prompt, setPrompt] = useState({
        prompt: "",
        tag: "",
    });

    const fetchPrompt = async () => {
        let id = searchParams.get("promptId");
        const response = await fetch(`/api/prompt/${id}`);
        const prompt = await response.json();
        setPrompt(prompt);
    }

    useEffect(() => {
        fetchPrompt();
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (loading) {
            return;
        }

        if (prompt.prompt == "") {
            alert("Prompt cannot be empty");
            return;
        }

        setLoading(true);
        await fetch("/api/prompt", {
            method: "PATCH",
            body: JSON.stringify(prompt),
        })

        setLoading(false);
        router.push("/");
    }

    return <div>
        <form onSubmit={handleUpdate}>
            <div className="flex flex-col mb-4">
                <label htmlFor="prompt" className="mb-2">Prompt:</label>
                <textarea
                    id="prompt"
                    className="resize-none w-1/3 h-30 p-1 ml-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-black placeholder-gray-500"
                    value={prompt.prompt}
                    onChange={(e) => setPrompt(() => {
                        return {
                            ...prompt,
                            prompt: e.target.value
                        }
                    })}
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="tag" className="mb-2">Tag:</label>
                <input
                    id="tag"
                    className="w-1/3 p-1 ml-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-black placeholder-gray-500"
                    value={prompt.tag}
                    onChange={(e) => setPrompt(() => {
                        return {
                            ...prompt,
                            tag: e.target.value
                        }
                    })}
                />
            </div>
            <button disabled={loading} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {loading ? "Updatng..." : "Update"}
            </button>
        </form>
    </div>
}

export default UpdatePrompt;
