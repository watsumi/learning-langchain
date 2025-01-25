# Learning LangChain Code Examples

This repository contains code examples (in python and javascript) from each chapter of the book "Learning LangChain".

To run the examples, you can clone the repository and run the examples in your preferred language.

## Quick Start

### Environment variables setup

First, we need the environment variables required to run the examples in this repository.

You can find the full list in the `.env.example` file. Copy this file to a `.env` and fill in the values.

```bash
cp .env.example .env
```

- `OPENAI_API_KEY`: You can get your key [here](https://platform.openai.com/api-keys). This is will enable you to run the examples that require an openai model.
- `LANGCHAIN_API_KEY`: You can get your key by creating an account [here](https://smith.langchain.com/). This is will enable you to interact with the langsmith tracing and debugging tools.
- `LANGCHAIN_TRACING_V2=true`: This is required to enable visual tracing and debugging in langsmith for the examples.

If you want to run the production example in chapter 9, you need a supabase account and a supabase api key.
- To register for a supabase account, go to [supabase.com](https://supabase.com/) and sign up.
- Once you have an account, create a new project then navigate to the settings section.
- In the settings section, navigate to the API section to see your keys.
- Copy the project url and `service_role` key and add them to the `.env` file as values for `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.

### Running the chapter examples

**For python examples:**

If you haven't installed python on your system, install it first as per the instructions [here](https://www.python.org/downloads/).

1. Create a virtual environment:

This command creates a directory named `.venv` containing the virtual environment.

```bash
python -m venv .venv
```

2. Activate the virtual environment:

- MacOs/Linux:

```bash
source .venv/bin/activate
```

- Windows:

```bash
.venv\Scripts\activate
```

After activation, your terminal prompt should prefix with (venv), indicating that the virtual environment is active.

3. Install the dependencies in the `pyproject.toml` file:

```bash
pip install -e .
```

4. Verify the installation:

```bash
pip list
```

5. Run an example to see the output:

```bash
python ch2/py/a-text-loader.py
```

**For javascript examples:**

If you haven't installed node on your system, install it first as per the instructions [here](https://nodejs.org/en/download/).

1. Install the dependencies in the `package.json` file:

```bash
npm install
```

2. Run the example to see the output:

```bash
node ch2/js/a-text-loader.js
```

## Troubleshooting

1. PgVector Vector Store Installation or Connection Errors:

Errors for python:

- ***Can't find `psycopg` or `psycopg_binary`***: Try to reinstall `psycopg` with the [binary] extra, which includes pre-compiled binaries and necessary dependencies.

```bash
pip install psycopg[binary]
```
Then run the file again.

```bash
pip install setuptools
```

alternatives:

If you're having issues connecting to postgres via docker, you can use `Chroma` as an alternative. `Chroma` is an AI-native open-source vector database.

You can install `Chroma` as per the instructions for [Python](https://python.langchain.com/docs/integrations/vectorstores/chroma) or [Javascript](https://js.langchain.com/docs/integrations/vectorstores/chroma/).

