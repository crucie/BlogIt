# BlogIt

A modern Blogging platform built with React.js and Appwrite, featuring a rich text editor and seamless state management.

![blogIt Logo](/api/placeholder/400/200) 

## 📋 Overview

BlogIt is a full-featured Blogging platform that allows users to create, edit, and share Blog posts with a rich text editing experience. The application leverages React.js for the frontend, Appwrite for backend services, and Redux for state management.

## ✨ Features

- **User Authentication**: Secure signup, login, and profile management
- **Rich Text Editor**: Advanced Blog creation with TinyMCE
- **Comment System**: Engage with readers through comments
- **Responsive Design**: Optimized for all devices
- **Categories & Tags**: Organize content effectively
- **Social Sharing**: Extend your reach with integrated sharing options
- **Draft Saving**: Never lose your work with automatic draft saving

## 🛠️ Technologies

- **Frontend**: React.js
- **Backend**: Appwrite (Authentication, Database, Storage, Functions)
- **State Management**: React Redux with Redux Toolkit
- **Form Handling**: React Hook Form
- **Text Editor**: TinyMCE
- **Content Parsing**: react-html-parser
- **Styling**: Tailwind CSS

## 🚀 Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm (v8.0.0 or higher)
- Appwrite instance (local or cloud)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/crucie/BlogIt.git
   cd BlogIt
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Appwrite credentials:
   ```
   REACT_APP_APPWRITE_ENDPOINT=https://your-appwrite-endpoint
   REACT_APP_APPWRITE_PROJECT_ID=your-project-id
   REACT_APP_APPWRITE_DATABASE_ID=your-database-id
   REACT_APP_APPWRITE_COLLECTION_ID_POSTS=your-posts-collection-id
   REACT_APP_APPWRITE_COLLECTION_ID_USERS=your-users-collection-id
   REACT_APP_APPWRITE_STORAGE_ID=your-storage-id
   REACT_APP_TINYMCE_API_KEY=your-tinymce-api-key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
BlogIt/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── editor/
│   │   ├── forms/
│   │   └── layout/
│   ├── config/
│   ├── features/
│   │   ├── auth/
│   │   ├── Blog/
│   │   ├── comments/
│   │   └── user/
│   ├── pages/
│   ├── services/
│   │   └── appwrite/
│   ├── store/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🔧 Configuration

### Appwrite Setup

1. Create a new project in the Appwrite console
2. Set up the following collections:
   - `posts`: To store Blog posts
   - `users`: To store user profiles
   - `comments`: To store post comments
3. Configure appropriate permissions for collections
4. Create storage bucket for Blog images

### TinyMCE Setup

1. Register for a TinyMCE API key at [TinyMCE](https://www.tiny.cloud/)
2. Add the API key to your `.env` file

## 💻 Usage

### Creating a New Blog Post

1. Log in to your account
2. Navigate to the "New Post" page
3. Enter your post title
4. Use the TinyMCE editor to write and format your content
5. Add tags and select a category
6. Upload feature images if needed
7. Save as draft or publish immediately

### Managing Posts

- View all your posts in the dashboard
- Edit, delete, or change the status of posts
- Track viewership statistics for published posts

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Amay Mishra- [@kshimate](https://twitter.com/kshimate) - amaymishra100@gmail.com

Project Link: [https://github.com/crucie/BlogIt](https://github.com/crucie/BlogIt)

## 🙏 Acknowledgements

- [React.js](https://reactjs.org/)
- [Appwrite](https://appwrite.io/)
- [Redux](https://redux.js.org/)
- [TinyMCE](https://www.tiny.cloud/)
- [React Hook Form](https://react-hook-form.com/)