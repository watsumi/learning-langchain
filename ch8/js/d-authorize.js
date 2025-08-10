import { HumanMessage } from "@langchain/core/messages";
import { MemorySaver } from "@langchain/langgraph";
import { StateGraph } from "@langchain/langgraph";
import { Annotation } from "@langchain/langgraph";
import * as dotenv from "dotenv/config";
dotenv;

const GraphState = Annotation.Root({
  messages: Annotation(),
});

// Assuming graph is already created and configured
const graph = new StateGraph(GraphState).compile({
  checkpointer: new MemorySaver(),
});

const input = {
  messages: [
    new HumanMessage(
      "How old was the 30th president of the United States when he died?"
    ),
  ],
};

const config = { configurable: { thread_id: "1" } };

const output = await graph.stream(input, {
  ...config,
  interruptBefore: ["tools"],
});

console.log("Streaming output:", output);
for await (const chunk of output) {
  console.log(chunk); // do something with the output
}
