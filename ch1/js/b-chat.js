import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

const model = new ChatOpenAI();
const prompt = [new HumanMessage("What is the capital of France?")];

await model.invoke(prompt);
