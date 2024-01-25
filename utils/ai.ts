import { OpenAI } from 'langchain/llms/openai';

export const analyze = async (prompt: string) => {
    const model = new OpenAI({
        openAIApiKey: process.env.OPENAI_API_SCORE_KEY
    })
    const result = await model.call(prompt)
    console.log(result)
}