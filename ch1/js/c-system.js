import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const model = new ChatOpenAI();
const prompt = [
  new SystemMessage(
    "You are a helpful assistant that responds to questions with three exclamation marks.",
  ),
  new HumanMessage("What is the capital of France?"),
];

await model.invoke(prompt);
