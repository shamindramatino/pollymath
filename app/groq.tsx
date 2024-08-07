import Groq from "groq-sdk";

const groq = new Groq({
  apiKey:"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"//`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` //
});
export const reqGroqAI = async (content: string) => {
  // Enhanced prompt to ensure the generation of resources


  const promptInstructions = `JSON`;


  const res = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: promptInstructions
      },
      {
        role: "user",
        content: content,
      },
    ],
    model: "llama3-8b-8192",
    temperature: 1,
    max_tokens: 8192,
    top_p: 1,
    response_format: { type: "json_object" }
  });


  return res.choices[0]?.message?.content;
};
