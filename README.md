# Chat Application

This is a real-time chat application built using Node.js, React.js, and ChatEngine.io. It supports group chats, 1-on-1 chats, real-time messaging, and image and file sharing.

## Features

- Real-time messaging
- Group and 1-on-1 chats
- Image and file sharing
- User authentication

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js
- **Chat Engine:** ChatEngine.io

## Installation

### Prerequisites

- Node.js (version 12.x or later)
- npm (version 6.x or later) or yarn (version 1.x or later)

### Backend Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/abhishekpd01/Chat-Application.git
   cd chat-application
   
2. Navigate to the backend directory:
   
   ```sh
   cd server-side

3. Install the dependencies:

   ```sh
   npm install
   # or
   yarn install

4. Create a .env file in the backend directory and add the following environment variables:
   ```sh
   CHAT_ENGINE_PROJECT_ID=your_chat_engine_project_id
   CHAT_ENGINE_PRIVATE_KEY=your_chat_engine_private_key

5. Start the backend server:

   ```sh
   npm start
   # or
   yarn start

### Frontend Setup
   
1. Navigate to the backend directory:
   
   ```sh
   cd client-side

2. Install the dependencies:

   ```sh
   npm install
   # or
   yarn install

3. Create a .env file in the forntend directory and add the following environment variables:
   ```sh
   CHAT_ENGINE_PROJECT_ID=your_chat_engine_project_id

5. Start the frontend development server:

   ```sh
   npm run dev

## Usage
1. Open your browser and navigate to http://localhost:5173.
2. Register a new user or log in with existing credentials.
3. Start chatting in a group or 1-on-1.

## Project Structure
```
chat-application/
├── client-side/
│   ├── node_modules/
│   ├── public/
│   ├── src/
|   |   ├── assets/
│   │   ├── App.jsx
|   |   ├── AuthPage.jsx
|   |   ├── ChatsPage.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── package.json
│   └── ...
├── server-side/
│   ├── node_modules/
│   ├── app.js
│   ├── .env
│   ├── package.json
│   └── ...
├── README.md
└── ...
```
## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
