import { OpenAI } from '@langchain/openai';

const model = new OpenAI({ model: 'gpt-3.5-turbo' });

const response = await model.invoke('The sky is');
console.log(response);
