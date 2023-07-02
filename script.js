import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration({
    organization: "org-anUvoGqvvZiJAggN4LoHcdRH",
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{
        role: "user",
        content: "Hello ChatGPT"
    }]
}).then(res => {
    console.log(res);
})