import { OpenAI } from '@langchain/openai';

const model = new OpenAI({ model: 'gpt-3.5-turbo-instruct' });

await model.invoke('The sky is');
