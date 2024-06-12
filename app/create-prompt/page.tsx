"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";


const CreatePrompt = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [prompt, setPrompt] = useState({
        prompt: "",
        tag: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (loading) {
            return;
        }

        if (prompt.prompt == "") {
            alert("Prompt cannot be empty");
            return;
        }

        setLoading(true);
        await fetch("/api/prompt/new", {
            method: "POST",
            body: JSON.stringify(prompt),
        })

        setLoading(false);
        router.push("/");
    }

    return <div>
        <form onSubmit={handleSubmit}>
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
                {loading ? "Creating..." : "Create"}
            </button>
        </form>
    </div>
}

export default CreatePrompt;
