import { analyze } from "@/utils/ai";

const OpenAiPage = async () => {
    await analyze('Create me a React App')
    return (
        <div>
            <p>OpenAI Server Side(only)</p>
        </div>
    )
}
export default OpenAiPage;