import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "langchain/prompts";
import { StringOutputParser } from "langchain/schema/output_parser";
import { getWeatherData } from "./accu-weather";

const llm = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro",
});

const parser = new StringOutputParser();

const summaryTemplate = `
Give an user input with a city name output the city correct name or 'not found'.
Context: the city name can contain typos or be an informal name or a city description

Output Format: A single string with the correct city name or 'not found'
 
Input: {city}
`;

const summaryPromptTemplate = new PromptTemplate({
  inputVariables: ["city"],
  template: summaryTemplate,
});

const chain = summaryPromptTemplate.pipe(llm).pipe(parser).pipe(getWeatherData);

async function getFormattedOPWInput(city: string) {
  return chain.invoke({
    city,
  });
}

export { getFormattedOPWInput };
