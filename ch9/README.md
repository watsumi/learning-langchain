# RAG AI Research Agent Deployment Example

In Chapter 9, you learnt about how to deploy a RAG AI Research agent using LangGraph. This chapter contains the full code for the application discussed in the chapter.

### Prerequisites

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
- In the settings section, navigate to the Data API section to see your keys.
- Copy the project url and `service_role` key and add them to the `.env` file as values for `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.

- Navigate to SQL Editor, run the following SQL to set up `pgvector` and create the necessary table and functions:

```sql
-- Enable the pgvector extension to work with embedding vectors
create extension vector;

-- Create a table to store your documents
create table documents (
  id uuid primary key,
  content text, -- corresponds to Document.pageContent
  metadata jsonb, -- corresponds to Document.metadata
  embedding vector(1536) -- 1536 works for OpenAI embeddings, change if needed
);

-- Create a function to search for documents
create function match_documents (
  query_embedding vector(1536),
  match_count int DEFAULT null,
  filter jsonb DEFAULT '{}'
) returns table (
  id uuid,
  content text,
  metadata jsonb,
  embedding jsonb,
  similarity float
)
language plpgsql
as $$
#variable_conflict use_column
begin
  return query
  select
    id,
    content,
    metadata,
    (embedding::text)::jsonb as embedding,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where metadata @> filter
  order by documents.embedding <=> query_embedding
  limit match_count;
end;
$$;
```

To test if the `pgvector` extension is set up correctly, you can run the following SQL query in the supabase SQL editor:

```sql
-- Insert test document
INSERT INTO documents (content, metadata, embedding)
VALUES (
    'Test document', 
    '{"category": "test", "author": "supabase"}',
    '[1,1,1]'::vector(1536)
);

-- Search using match_documents function
SELECT * FROM match_documents(
  query_embedding => '[1,1,1]'::vector(1536),
  match_count => 1
);
```

### Quick Start:

There is a python and javascript version of the RAG AI Research agent application.

The python version is in the `py` folder, whilst the javascript version is in the `js` folder.

- For python, open the `py` folder and follow the instructions in the `README.md` file.
- For javascript, open the `js` folder and follow the instructions in the `README.md` file.

### Deployment options

After duplicating app logic for your language of choice, you can deploy the agent on the LangGraph Platform or self-host it.

- If you're deploying the agent on the LangGraph Platform, you can follow the guide [here](https://langchain-ai.github.io/langgraph/cloud/deployment/cloud/).
- If you're self-hosting the agent, you can follow the guide [here](https://langchain-ai.github.io/langgraph/concepts/self_hosted/).
