import Prompt from "@/models/prompt";
import connectToDB from "@/utils/database.ts";


export const GET = async () => {
    console.log("GET /api/prompt");

    await connectToDB();
    try {
        let prompts = await Prompt.find({});

        return new Response(JSON.stringify(prompts), {status: 200});
    } catch (error) {
        return new Response(JSON.stringify(error), {status: 500});
    }
}

export const PATCH = async (request: Request) => {
    console.log("UPDATE /api/prompt");

    await connectToDB();
    try {
        let prompt = await request.json();
        let res = await Prompt.updateOne({
            _id: prompt._id
        }, {
            prompt: prompt.prompt,
            tag: prompt.tag
        });

        return new Response(JSON.stringify(res), {status: 200});
    } catch (error) {
        return new Response(JSON.stringify(error), {status: 500});
    }
}

export const DELETE = async (request: Request) => {
    console.log("DELETE /api/prompt");

    await connectToDB();
    try {
        let body = await request.json();
        let prompt = await Prompt.deleteMany({_id: body._id});
        return new Response(JSON.stringify(prompt), {status: 200});
    } catch (error) {
        return new Response(JSON.stringify(error), {status: 500});
    }
}
