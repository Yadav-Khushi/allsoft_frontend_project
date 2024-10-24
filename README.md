Document Management System - Frontend Interface
Project Overview
This is the frontend interface for a Document Management System, designed using React.js. The system allows users to upload, tag, search, preview, and download documents. Notifications are handled using SweetAlert for better user interaction. Inline styling is used for component design.

1.Features
User Authentication: Login with OTP (handled via backend API).
2.File Upload:
Includes file categorization (Personal/Professional), dynamic dropdowns, tags, and remarks.
Only accepts Image and PDF files.
File Search:
Search by categories, tags, and date range.
File Preview and Download:
File preview for supported formats (PDF, Images) and download options.


Tech Stack
Frontend: React.js
Notifications: SweetAlert
Styling: Inline CSS in React components
Backend: API provided  
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js (v14 or above)
npm (v6 or above)
Git for version control
Installation
Clone the repository:

bash
 
git clone https://github.com/your-username/document-management-system.git
cd document-management-system
Install dependencies:

bash
 
npm install
Create .env file for API configurations (add backend API base URL or any required tokens).

SWEETALRET NOTIFICATION INSTALL
npm install sweetalert2


Running the Application
To start the development server:

bash
 
npm start
Open http://localhost:3000 to view the app in the browser.

nagivation in react install
bash

npm install react-router-dom
