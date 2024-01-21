import { cityDataSchema } from "@/lib/schemas";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "langchain/prompts";

const llm = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro",
});

const parser = StructuredOutputParser.fromZodSchema(cityDataSchema);

const summaryTemplate = `
Give an input with a city name, resume the todays weather data and forecast the next six days.
Context: the city name can contain typos or be an informal name

Output Format: {formatInstructions}
 
Input: {city}
`;

const summaryPromptTemplate = new PromptTemplate({
  inputVariables: ["city", "formatInstructions"],
  template: summaryTemplate,
});

const chain = summaryPromptTemplate.pipe(llm).pipe(parser);

async function getFormattedOPWInput(city: string) {
  return chain.invoke({
    city,
    formatInstructions: parser.getFormatInstructions(),
  });
}

export { getFormattedOPWInput };
