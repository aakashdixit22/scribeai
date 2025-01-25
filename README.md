# [ScribeAI](https://scribeai-lake.vercel.app/) ✍️  
**AI-Powered PDF Notes Maker**  

---

## 📖 Description  
ScribeAI is a cutting-edge web application built with **Next.js**, designed to revolutionize how users create and manage notes from PDF documents. The app empowers users to upload PDF files and interactively generate comprehensive notes using a state-of-the-art text editor integrated with **AI capabilities**.  

---

## ✨ Key Features  

### 🤖 AI-Powered Notes Creation  
- **Ask Questions:** Users can ask questions about the uploaded PDF content directly in the text editor.  
- **Smart Answers:** ScribeAI employs advanced AI models to analyze the PDF context and provide accurate, insightful answers.  
- **Save AI Notes:** Answers can be saved as notes for future reference.  

### 📝 Advanced Text Editor  
- **Rich Toolbar:** Features include bold, italics, headings, code blocks, and more for seamless note-making.  
- **Auto-Save:** Notes are auto-saved and can be revisited anytime.  

### 📂 PDF and Notes Management  
- **File Management:** Securely upload, save, manage, or delete PDFs and notes.  
- **Downloadable Content:** Download notes or PDFs in **DOCX** or **PDF** format.  

### 🔒 Secure and Personalized  
- **Authentication:** Robust user authentication using **Clerk** ensures data security.  
- **Data Privacy:** User PDFs and notes remain private and accessible only to them.  

### 🚀 Seamless User Experience  
- **Real-Time Updates:** Powered by **Convex DB**, ensuring real-time synchronization.  
- **Responsive Design:** Styled with **Tailwind CSS** and animations by **Framer Motion** for an intuitive experience.  

---

## 🛠️ Tech Stack  

- **Frontend & Backend:**  
  - Built with **Next.js** ⚛️ for a seamless full-stack experience.  
  - Uses **react-pdf-viewer** 📄 for rendering PDFs across all devices.  
  - Integrated with **Tiptap** ✍️ for a powerful and versatile text editor.  
  - **JSPDF** 📤 enables downloading notes as PDFs.  

- **Database:**  
  - Powered by **Convex DB** 🔗 for real-time updates and scalability.  

- **Artificial Intelligence:**  
  - Implements **LangChain** 🧠 for advanced AI functionalities.  
  - Leverages **Google Gemini Model Flash 1.5** 🌐 for precise context analysis.  
  - Uses **Google’s Text Embedding 004** ✍️ for embedding-based searches.  

- **Styling:**  
  - Designed with **Tailwind CSS** 🎨 for a modern, responsive UI.  
  - Enhanced with **Framer Motion** 🎥 for smooth animations.  

- **Hosting:**  
  - Deployed on **Vercel** 🌍 for optimal performance and reliability.  

---

## 📸 Screenshots  

![Screenshot 1](https://github.com/aakashdixit22/scribeai/blob/main/public/md_demo/md_demo1.png?raw=true)  
*Intuitive Text Editor and PDF Viewer*  

![Screenshot 2](https://github.com/aakashdixit22/scribeai/blob/main/public/md_demo/md_demo2.png?raw=true)  
*Efficient PDF and Notes Management*  

---

## 🚀 Installation  

### Prerequisites  
1. **Node.js** installed on your system.  
2. An account on **Google AI Studio** and **Convex DB**.  
3. **Clerk** credentials for authentication configuration.  

### Steps  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/aakashdixit22/scribeai  
   cd scribeai  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Configure environment variables:  
   Create a `.env` file in the project root and add:  
   ```bash  
   CONVEX_DEPLOYMENT=  
   NEXT_PUBLIC_CONVEX_URL=  
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=  
   CLERK_SECRET_KEY=  
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in  
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up  
   NEXT_PUBLIC_GEMINI_API_KEY=  

   NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL="/dashboard"  
   NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL="/dashboard"  
   NEXT_PUBLIC_CLERK_SIGN_OUT_FORCE_REDIRECT_URL="/"  

   EMAIL_USER=    // for contact us  
   EMAIL_USER2=   // optional, make code changes if not using.  
   EMAIL_PASS=  
   ```  
4. Start the development server:  
   ```bash  
   npm run dev  
   ```  
5. Start the Convex DB server in another terminal:  
   ```bash  
   npm convex dev  
   ```  
6. Open the app at:  
   ```bash  
   http://localhost:3000  
   ```  

---

## 🌐 Deployment  
For production deployment using Vercel and Convex DB, follow the [Convex DB Hosting Guide](https://docs.convex.dev/production/hosting/vercel).  

---

## 📩 Contact Us  
For issues or queries, feel use the **Contact Us** section on the [website](https://scribeai-lake.vercel.app).  

---

## 📜 License  
This project is licensed under the [MIT License](https://github.com/aakashdixit22/scribeai/blob/main/LICENSE).  

