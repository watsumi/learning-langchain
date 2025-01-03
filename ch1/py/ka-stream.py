@chain
def chatbot(values):
    prompt = template.invoke(values)
    for token in model.invoke(prompt):
        yield token


for part in chatbot.stream({"question": "Which model providers offer LLMs?"}):
    print(part)
