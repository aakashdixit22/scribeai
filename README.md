ScribeAI
ScribeAI is an AI-powered web application designed to help users create, manage, and save notes effectively. By combining the power of artificial intelligence and a robust text editor, ScribeAI allows users to upload PDF files, ask context-based questions, and generate AI-driven notes seamlessly. With real-time updates, secure authentication, and rich export options, ScribeAI redefines the note-taking experience.
________________________________________
Features
🌟 Core Functionalities
•	AI-Powered Note Creation: Upload PDF files and ask questions within the text editor. The AI generates context-specific answers and notes based on the PDF content.
•	Rich Text Editor: 
o	Toolbar with essential formatting options (bold, italics, headings, code blocks, etc.).
o	Designed for an optimal note-making experience.
•	Save and Manage Notes: 
o	Save notes alongside uploaded PDFs.
o	Open, edit, or delete notes anytime.
🔒 Secure Authentication
•	Built using Clerk to ensure the safety of user data, PDFs, and notes.
📂 Export Options
•	Download notes in PDF or Docx formats for offline use.
⚡ Real-Time Updates
•	Leveraging Convex DB for scalable, real-time data updates.
🎨 Sleek User Interface
•	Styled with Tailwind CSS and Framer Motion for smooth animations and an intuitive design.
________________________________________
Tech Stack
Frontend & Backend
•	Next.js: Framework for server-side rendering and frontend/backend integration.
Database
•	Convex DB: A scalable database with real-time update capabilities.
Artificial Intelligence
•	LangChain: Manages AI pipelines.
•	Google Generative AI: Includes the Gemini Model and text embedding models for processing PDFs and generating answers.
Styling
•	Tailwind CSS: For utility-first CSS styling.
•	Framer Motion: Adds interactive animations for a polished user experience.
Authentication
•	Clerk: Secures user data with robust authentication mechanisms.
________________________________________
Installation
1.	Clone the Repository:
bash
CopyEdit
git clone https://github.com/your-username/scribeai.git cd scribeai 
2.	Install Dependencies:
bash
CopyEdit
npm install 
3.	Set Up Environment Variables: Create a .env.local file and add the following:
env
CopyEdit
NEXT_PUBLIC_CLERK_API_KEY=your_clerk_api_key NEXT_PUBLIC_CONVEX_API_URL=your_convex_db_url GOOGLE_API_KEY=your_google_api_key 
4.	Run the Application:
bash
CopyEdit
npm run dev 
5.	Open your browser and navigate to http://localhost:3000.
________________________________________
How It Works
1.	Upload a PDF: Drag and drop or upload your PDF file to the application.
2.	Ask Questions: Use the text editor to ask questions about the uploaded PDF's content.
3.	Generate Notes: Click the AI button to get context-based answers and notes.
4.	Save & Manage Notes: Save your notes for future access or download them as PDFs or Docx files.
________________________________________
Contributions
Contributions are welcome! If you'd like to improve ScribeAI, feel free to fork the repository and create a pull request.
________________________________________
License
This project is licensed under the MIT License.
________________________________________
Contact
For questions or feedback, reach out at your-email@example.com.
