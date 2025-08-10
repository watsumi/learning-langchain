import { HumanMessage } from "@langchain/core/messages";
import { Annotation } from "@langchain/langgraph";
import { MemorySaver } from "@langchain/langgraph";
import { StateGraph } from "@langchain/langgraph";
import * as dotenv from "dotenv/config";
dotenv;

const GraphState = Annotation.Root({
  messages: Annotation(),
});

const controller = new AbortController();

const input = {
  messages: [
    new HumanMessage(
      "How old was the 30th president of the United States when he died?"
    ),
  ],
};

const config = { configurable: { thread_id: "1" } };

// Assuming graph is already created and configured
const graph = new StateGraph(GraphState).compile({
  checkpointer: new MemorySaver(),
});

// Simulate interruption after 2 seconds
setTimeout(() => {
  controller.abort();
}, 2000);

try {
  const output = await graph.stream(input, {
    ...config,
    signal: controller.signal,
  });

  for await (const chunk of output) {
    console.log(chunk); // do something with the output
  }
} catch (e) {
  console.log(e);
}
