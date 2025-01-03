const chatbot = RunnableLambda.from(async function* (values) {
  const prompt = await template.invoke(values);
  for await (const token of await model.stream(prompt)) {
    yield token;
  }
});

for await (const token of await chatbot.stream({
  question: "Which model providers offer LLMs?",
})) {
  console.log(token);
}
