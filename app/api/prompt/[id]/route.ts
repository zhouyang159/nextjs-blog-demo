
import Prompt from "@/models/prompt";
import connectToDB from "@/utils/database";

type Params = {
    id: string;
}

export const GET = async (request: Request, context: { params: Params }) => {
    const id = context.params.id;
    console.log("GET /api/prompt/[id] ==>" + id);

    await connectToDB();
    const prompt = await Prompt.findById(id);
    return new Response(JSON.stringify(prompt), {
        status: 200,
    });
}