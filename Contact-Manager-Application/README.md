# Contact Manager

The Contact Manager is a web application created with MERN Stack. It enables users to effectively manage and store their contacts.

## Features

- **Add Contact**: Users can add new contacts by providing their name, email, and phone number. The application validates the input to ensure the data is entered correctly.

- **Delete Contact**: Users can delete contacts from the list. A confirmation dialog is displayed to prevent accidental deletions.

- **Edit Contact**: Users can edit existing contacts by updating their name, email, or phone number. The changes are instantly reflected in the contact list.

- **Search Contact**: The application provides a search functionality that allows users to find specific contacts based on their name, email, or phone number. The search results are displayed in real-time as the user types.

## Tech Stack

- **React**: A front-end JavaScript library for building user interfaces. Users can view their contacts, add new ones, edit existing entries, and perform searches, all without needing to refresh the page.

- **Context API**: The application leverages React's Context API to efficiently manage and share contact data across different components. This ensures that all components have access to the most up-to-date contact information.

- **Axios**: Axios, a popular HTTP client, is used to interact with the backend server for seamless CRUD operations. It enables the application to send requests to the server to create, read, update, and delete contacts.

- **Node.js**: A runtime environment that enables you to run JavaScript on the server-side. In your application, Node.js works in tandem with Express.js to handle server-side logic and communicate with the database.

- **Express.js**: A backend framework for Node.js that simplifies the process of building APIs and handling HTTP requests. Express.js is used to create the server-side logic that interacts with the database and processes user requests, such as adding, deleting, editing, and searching contacts.

- **MongoDB**: A NoSQL database that allows you to store and manage data in a flexible, document-oriented format. In your Contact Manager application, MongoDB likely stores contact information such as names, phone numbers, email addresses, etc.
