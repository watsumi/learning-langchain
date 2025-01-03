@chain
async def chatbot(values):
    prompt = await template.ainvoke(values)
    return await model.ainvoke(prompt)


await chatbot.ainvoke({"question": "Which model providers offer LLMs?"})
