import { GoogleGenerativeAI } from "@google/generative-ai";

export async function handler(event, context) {
  try {
    const { prompt } = JSON.parse(event.body);

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);

    return {
      statusCode: 200,
      body: JSON.stringify({ output: result.response.text() })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
async function generate(prompt) {
  const res = await fetch("/.netlify/functions/gemini", {
    method: "POST",
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  console.log(data);
}
