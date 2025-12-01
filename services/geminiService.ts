import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateMarketingSlogan = async (topic: string, question: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("Vui lòng kiểm tra API Key.");
  }

  try {
    const prompt = `
      Bạn là một giáo viên dạy lái xe kỳ cựu và am hiểu tường tận Luật Giao thông đường bộ Việt Nam.
      Học viên đang có câu hỏi cần giải đáp để chuẩn bị cho kỳ thi hoặc xử lý tình huống thực tế.
      
      Chủ đề: ${topic}
      Câu hỏi/Tình huống cụ thể: ${question}
      
      Hãy đưa ra câu trả lời chính xác, ngắn gọn và dễ hiểu. 
      Nếu là câu hỏi luật, hãy trích dẫn mức phạt (nếu nhớ) hoặc mẹo nhớ nhanh. 
      Nếu là kỹ thuật lái xe, hãy hướng dẫn từng bước an toàn.
      Giọng văn thân thiện, khuyến khích học viên.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Hệ thống đang bận, vui lòng thử lại sau.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Không thể kết nối với trợ lý AI.");
  }
};