import axios from "axios";

export async function generateEmail(req, res) {
    try {
        const data = req.body;

        // Validation
        if (!data.emailContent) {
            return res.json({
                success: false,
                message: "emailContent is required!"
            });
        }

        // Build prompt
        let prompt = "Generate a professional email reply in clean plain-text format. Do NOT use any HTML tags. Do NOT use code blocks. Do NOT add a subject. Only return the email content with proper line breaks.";


        if (data.tone) {
            prompt += ` Use a ${data.tone} tone. `;
        }

        prompt += `\nOriginal email:\n${data.emailContent}`;


        // API body
        const requestBody = {
            contents: [
                {
                    parts: [
                        { text: prompt }
                    ]
                }
            ]
        };

        // Call Gemini API
        const apiResponse = await axios.post(
            `${process.env.GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`,
            requestBody,
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        // Extract AI reply
        const reply = apiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text;

        return res.json({
            success: true,
            message: "Email generated",
            data: reply
        });

    } catch (error) {
        return res.json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
}
