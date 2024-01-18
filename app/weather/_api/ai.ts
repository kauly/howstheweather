import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "langchain/prompts";
import { z } from "zod";

const llm = new ChatGoogleGenerativeAI({
  modelName: "gemini-pro",
});

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    current: z.object({
      cityFullName: z
        .string()
        .describe("City, State, Country  Ex: Florianópolis, SC, Brasil"),
      temperature: z.number().describe("current temperature em celsius"),
      weatherDescription: z
        .string()
        .describe(
          "Rainy day in Chicago, with a high of 28 C and a low of 23 C"
        ),
      humidity: z.number().describe("current humidity value in percent"),
      windSpeed: z.number().describe("current wind speed in km/h"),
      latitude: z.number().describe("city latitude"),
      longitude: z.number().describe("city longitude"),
    }),
    forecast: z
      .array(
        z.object({
          day: z
            .enum([
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ])
            .describe("days of the week"),
          description: z
            .string()
            .describe(
              "Mostly rainy day, with a high of 28 C and a low of 23 C"
            ),
        })
      )
      .describe("Array with the weather forecast for the next five days"),
  })
);

const summaryTemplate = `
Give an input with a city name, resume the todays weather data and forecast the next seven days.
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
  const result = await chain.invoke({
    city,
    formatInstructions: parser.getFormatInstructions(),
  });
  return result;
}

export { getFormattedOPWInput };
