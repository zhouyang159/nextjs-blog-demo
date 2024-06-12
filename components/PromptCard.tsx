import {useRouter } from "next/navigation";

type PromptCardProps = {
    prompt: Prompt;
    loading: boolean;
    handleDelete: (id: string) => void;
}

const PromptCard = ({prompt, loading, handleDelete}: PromptCardProps) => {
    const router = useRouter();

    return <div
        className="flex justify-between
            border-4 border-blue-600 mb-6 p-2 cursor-pointer w-[300px] max-w-[500px] mr-2"
        onClick={() => router.push(`/update-prompt?promptId=${prompt._id}`)}
    >
        <div>
            <div>{prompt.prompt}</div>
            <div className="text-gray-500 font-light">#{prompt.tag}</div>
        </div>
        <button
            className="bg-red-600 hover:bg-red-700 text-white
            font-bold py-1 px-3 rounded"
            disabled={loading}
            onClick={(e) => {
                e.stopPropagation();
                handleDelete(prompt._id)
            }}
        >
            X
        </button>
    </div>;
}

export default PromptCard;
