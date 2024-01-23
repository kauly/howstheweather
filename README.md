# How's the weather?

## Introduction

Application to fetch weather using the [AccuWeather API](https://developer.accuweather.com/apis) and [Gemini](https://ai.google.dev/). To spice things up, I'm using Langchain and Google Gemini to reason about the user input. I create a little chain where the user inputs a city, or anything else, and the LLM will try to guess the intended city. With the correct name, the next step is to call the Location API to get the AccuWeather city ID and with that make the API calls for current and forecast weather data. The following images illustrate the data acquisition process, also, take a look at this [AccuWeather API diagram](https://developer.accuweather.com/api-flow-diagram).

![API Diagram](/docs/api-call.png "API Call")

## Features

- Tests
- Error handling
- Loading indicators
- Weather Data
  - Current temperature
  - Weather description
  - Humidity
  - Wind speed
  - Five days forecast
- Toggle between Celsius and Fahrenheit

## Running

It's necessary to get two API keys to run this app locally, Google Gemini and AccuWeather. A Gemini key it's easy and free to use and can be found at https://ai.google.dev. The AccuWeather has a pretty low free tier of 50 request peer day but it's a simple and useful API. An AccuWeather API can be create at https://developer.accuweather.com/packages. With the two API keys create a `.env.local` following the `.env.example`. After that just install the dependencies and run the project.

```
# Create an env file

cat .env.example > .env.local

# Install the dependencies

pnpm i

# Run the project

pnpm dev

# Run the tests

pnpm test

```
