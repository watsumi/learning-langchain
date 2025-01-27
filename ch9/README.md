# Learning LangChain RAG AI Research Agent Deployment Example

In Chapter 9, you learnt about how to deploy a RAG AI Research agent using LangGraph. This chapter contains the full code for the application discussed in the chapter.

### Environment variables setup

First, you need to ensure you have set the environment variables required to run the examples in this repository at the root of the repository (if you haven't already).

You can find the full list in the `.env.example` file at the root of the repository. Copy this file to a `.env` and fill in the values.

```bash
cp .env.example .env
```

- `OPENAI_API_KEY`: You can get your key [here](https://platform.openai.com/api-keys). This will enable you to run the examples that require an openai model.
- `LANGCHAIN_API_KEY`: You can get your key by creating an account [here](https://smith.langchain.com/). This will enable you to interact with the langsmith tracing and debugging tools.
- `LANGCHAIN_TRACING_V2=true`: This is required to enable visual tracing and debugging in langsmith for the examples.

Supabase is used as the vector store for the examples. To get your supabase keys:

- Register for a supabase account, go to [supabase.com](https://supabase.com/) and sign up.
- Once you have an account, create a new project then navigate to the settings section.
- In the settings section, navigate to the API section to see your keys.
- Copy the project url and `service_role` key and add them to the `.env` file as values for `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.


### Quick Start:

There is a python and javascript version of the RAG AI Research agent application.

The python version is in the `py` folder, whilst the javascript version is in the `js` folder.

- For python, open the `py` folder and follow the instructions in the `README.md` file.
- For javascript, open the `js` folder and follow the instructions in the `README.md` file.
