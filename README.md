# To-Do List Application

## Description

The To-Do List Application is a web-based tool built using Node.js, Express.js, EJS, and MongoDB. This application allows you to create, manage, and track your to-do tasks. With a user-friendly interface, you can easily add, complete, and delete tasks, making it a convenient tool for organizing your daily activities.

## Prerequisites

Before you run the application, you have the option to set up the database either locally or using MongoDB Atlas. Choose one of the following options:

### Option 1: Local MongoDB Setup

If you prefer to run the database locally, follow these steps:

1. Ensure you have MongoDB installed on your machine.

2. Create a local MongoDB database and note the connection details.

3. Replace the MongoDB connection string in `app.js` with the following:

   ```javascript
   mongoose.connect("mongodb://localhost:27017/todoListDB");
   ```

### Option 2: MongoDB Atlas Setup

For a cloud-based setup, follow these steps:

1. Create a MongoDB Atlas account and set up a cluster.

2. Create a `.env` file in the project root directory with the following environment variables:

   ```
   MONGODB_USERNAME=yourMongoDBUsername
   MONGODB_PASSWORD=yourMongoDBPassword
   ```

## Getting Started

1. Clone this repository to your local machine.

2. Open a terminal using Git Bash and navigate to the root directory of the project.

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm start
   ```

5. Access the To-Do List application in your web browser by visiting [http://localhost:3000](http://localhost:3000).

## Features

- **View Tasks:** See your existing tasks on the to-do list.

- **Add Task:** Add new tasks to your to-do list by typing the task name in the input field and clicking the "+" button.

- **Complete Task:** Mark tasks as completed by checking the checkbox next to each task.

- **Delete Task:** Delete tasks from your to-do list by clicking the checkbox.
