import Prompt from "@/models/prompt";
import connectToDB from "@/utils/database.ts";

export const POST = async (request) => {
    console.info("POST /api/prompt/new");

    const {prompt, tag} = await request.json();

    await connectToDB();

    let newPrompt = new Prompt({
        prompt,
        tag
    });

    let response = await newPrompt.save().catch((err: any) => {
        console.error(err);
    });

    if (!response) {
        return new Response(
            JSON.stringify({error: "Failed to save prompt."}),
            {status: 500}
        )
    }

    return new Response(
        JSON.stringify(newPrompt),
        {status: 201}
    );
}
