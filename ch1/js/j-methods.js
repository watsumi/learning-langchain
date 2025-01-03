import { OpenAI } from "@langchain/openai";

const model = new OpenAI();

const completion = await model.invoke("Hi there!");
// Hi!

const completions = await model.batch(["Hi there!", "Bye!"]);
// ['Hi!', 'See you!']

for await (const token of await model.stream("Bye!")) {
  console.log(token);
  // Good
  // bye
  // !
}
