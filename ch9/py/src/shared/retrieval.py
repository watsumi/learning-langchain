import os
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import SupabaseVectorStore
from supabase import create_client


embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

def init_supabase_retriever():
     supabase_url = os.environ.get("SUPABASE_URL")
     supabase_key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

     if not supabase_url or not supabase_key:
         raise ValueError("Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY env variables")

     client = create_client(supabase_url, supabase_key)
     vectorstore = SupabaseVectorStore(client=client, embedding=embeddings, table_name="documents", query_name="match_documents")
     return vectorstore.as_retriever()


