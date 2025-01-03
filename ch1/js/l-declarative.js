import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableLambda } from "@langchain/core/runnables";

// the building blocks

const template = ChatPromptTemplate.fromMessages([
  ["system", "You are a helpful assistant."],
  ["human", "{question}"],
]);

const model = new ChatOpenAI();

// combine them in a function

const chatbot = template.pipe(model);

// use it

const result = await chatbot.invoke({
  question: "Which model providers offer LLMs?",
});
