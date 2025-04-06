import google.generativeai as genai


API_KEY = "" #Enter API Key


# Configure Gemini
genai.configure(api_key=API_KEY)

# Use the gemini-pro model
model = genai.GenerativeModel("gemini-2.0-flash")

# Start a chat session
chat = model.start_chat(history=[])

print("🤖 Gemini Chatbot is ready! Type 'exit' to quit.\n")

while True:
    user_input = input("You: ")

    if user_input.lower() in ["exit", "quit"]:
        print("Chatbot: Goodbye! 👋")
        break

    try:
        response = chat.send_message(user_input)
        print("Chatbot:", response.text.strip())
    except Exception as e:
        print("❌ Error:", e)
