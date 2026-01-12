

 Q1. Role of Frontend (FE)

The **Frontend (FE)** is the part of a web application that users directly see and interact with. It runs in the user’s browser and focuses on providing a clear, responsive, and user‑friendly experience.

 User Interface (UI)
- Frontend is responsible for how the application looks.
- It includes layouts, buttons, forms, text, images, and navigation.
- Common technologies: **HTML, CSS, JavaScript, React**.

 User Interaction
- Handles user actions like clicking, typing, scrolling, and submitting forms.
- Shows feedback such as error messages, alerts, loaders, and animations.
- Example: Showing an error when a required field is empty.

 Communication with Backend
- Sends data to the backend using API calls (GET, POST, etc.).
- Receives responses and updates the UI accordingly.

 Diagram: Frontend–Backend Interaction
```
User
 │
 ▼
Frontend (UI)
 │  HTTP Request
 ▼
Backend (Server)
 │
 ▼
Database
```

---

 Q2. Role of Backend (BE)

The **Backend (BE)** is the server-side part of a web application that manages data, logic, and security. It works behind the scenes and is not directly visible to users.

Server-Side Processing
- Processes requests received from the frontend.
- Applies validations, calculations, and rules.
- Example: Calculating total order amount.

 Database Handling
- Stores and manages application data.
- Performs CRUD operations (Create, Read, Update, Delete).
- Example: Saving user registration details.

 Security and Authentication
- Manages login, signup, and user permissions.
- Protects data from unauthorized access.
- Example: Token-based authentication.

---

 Q3. Business Logic

**Business Logic** refers to the set of rules that define how an application behaves according to business requirements. It decides *what should happen* when certain actions are performed.

It sits between the frontend and database and ensures correct processing of data.

 Real-World Examples

1. **E-commerce Application**
   - Apply discounts only if order value is above a certain amount.
   - Add tax and delivery charges before checkout.

2. **Banking Application**
   - Prevent withdrawal if balance is insufficient.
   - Apply interest or penalty based on account rules.

3. **Online Learning Platform**
   - Allow course access only after payment.
   - Track progress and issue certificates.

 Diagram: Business Logic Flow
```
Frontend
   │
   ▼
Business Logic
   │
   ▼
Database
```

---

 Q4. Client-Server Model

The **Client‑Server Model** is a system where the client requests services and the server provides them.

 Client
- The client is the user-facing application.
- Example: Web browser or mobile app.

 Server
- The server processes requests and sends responses.
- Handles logic, database access, and security.

 Communication Process
1. Client sends request
2. Server processes it
3. Server sends response
4. Client displays data

 Diagram: Client‑Server Communication
```
Client
  │ Request
  ▼
Server
  │ Response
  ▼
Client
```

---

 Q5. Three‑Tier Architecture

**Three‑Tier Architecture** divides a web application into three layers to improve structure and scalability.

 1. Presentation Layer
- User interface layer
- Handles display and user interaction
- Example: React, HTML, CSS

 2. Application (Business) Layer
- Contains business logic
- Processes data and rules
- Example: Node.js, Java Spring

 3. Data Layer
- Stores and manages data
- Example: MySQL, MongoDB

 Diagram: Three‑Tier Architecture
```
Presentation Layer
        │
        ▼
Application Layer
        │
        ▼
Data Layer
```

 Why This Architecture Is Used
- Better separation of concerns
- Easy maintenance and scaling
- Improved security

---

 Q6. JavaScript as a Backend Language

JavaScript is widely used on the backend due to its speed, flexibility, and strong ecosystem.

 Performance
- Uses non‑blocking, event‑driven architecture.
- Handles multiple users efficiently.

 Ecosystem
- Large number of libraries via npm.
- Same language for frontend and backend.

 Popular Backend Frameworks
- **Node.js**
- **Express.js**
- **NestJS**

 Diagram: JavaScript Backend Flow
```
Client
  │
  ▼
Node.js Server
  │
  ▼
Database
```

---

**End of Answers**

