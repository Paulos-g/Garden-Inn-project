# 🏨 GARDEN INN HOTEL AND APARTMENTS

> **A modern full-stack hotel booking and hospitality management web application for Garden Inn Hotel & Apartments, a 4-star hotel located in the heart of Bole, Addis Ababa.**

Garden Inn Hotel & Apartments is a full-stack web application designed to provide guests with a convenient and modern way to explore the hotel, book rooms, reserve restaurant tables, and book hotel services such as spa and sauna experiences.

The project combines a responsive React frontend with a Node.js and Express backend, MongoDB for data storage, and JWT-based authentication for secure user account management.

---

## ✨ Features

### 🛏️ Room Booking

* Browse available hotel rooms and apartments
* View room details and pricing
* Select check-in and check-out dates
* Specify the number of guests
* Make online room bookings

### 🍽️ Restaurant Reservations

* Explore the hotel's restaurant
* View restaurant information
* Reserve a table online
* Manage restaurant reservation details

### 🧖 Hotel Services

Guests can explore and book additional hotel services, including:

* Spa
* Sauna
* Wellness services
* Other hotel experiences

### 🔐 Authentication & User Accounts

* User registration and login
* JWT-based authentication
* Protected routes
* Secure session handling
* User-specific booking information

### 🗺️ Nearby Attractions

A dedicated page showcasing attractions and places of interest around Bole, helping guests discover what they can do and visit during their stay.

### 📱 Responsive Design

The application is designed to work across:

* 💻 Desktop
* 📱 Mobile
* 📲 Tablet

---

## 📄 Pages

The application includes several dedicated pages:

* 🏠 **Home** — Hotel overview and featured content
* 🏨 **Rooms** — Browse available rooms and apartments
* 🍽️ **Restaurant** — Explore the restaurant and reserve a table
* 🧖 **Services** — Discover and book hotel services
* 📍 **Nearby Attractions** — Explore attractions around Bole
* 🔐 **Login / Register** — User authentication
* 👤 **Account / Bookings** — Manage personal bookings

---

## 🛠️ Tech Stack

### Frontend

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="45" alt="React"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="45" alt="JavaScript"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="45" alt="CSS3"/>
</p>

* **React.js** — Frontend UI development
* **JavaScript** — Application logic
* **CSS3** — Styling and responsive design
* **React Router** — Client-side navigation
* **Axios** — API communication

### Backend

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="45" alt="Node.js"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="45" alt="Express.js"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="45" alt="JavaScript"/>
</p>

* **Node.js** — Server-side JavaScript runtime
* **Express.js** — REST API and backend framework
* **JavaScript** — Backend application logic
* **JWT (JSON Web Token)** — Authentication and authorization
* **REST API** — Communication between frontend and backend

### Database

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="45" alt="MongoDB"/>
</p>

* **MongoDB** — NoSQL database
* **Mongoose** — MongoDB object modeling

---

## 🏗️ Architecture

The project follows a **full-stack client-server architecture**:

```text
┌──────────────────────────────┐
│          React.js            │
│         Frontend UI          │
└──────────────┬───────────────┘
               │
               │ REST API
               ▼
┌──────────────────────────────┐
│       Node.js + Express      │
│          Backend             │
│                              │
│  Authentication / Bookings   │
│  Reservations / Services     │
└──────────────┬───────────────┘
               │
               │ Mongoose
               ▼
┌──────────────────────────────┐
│           MongoDB            │
│          Database            │
└──────────────────────────────┘
```

---

## 🔐 Authentication

Authentication is implemented using **JWT (JSON Web Tokens)**.

The authentication system allows users to:

1. Create an account
2. Log in securely
3. Receive an authentication token
4. Access protected resources
5. Create and manage their bookings

Protected backend routes verify the JWT before allowing access to authenticated resources.

---

## 📚 Main Application Modules

### Room Management

The room booking system handles:

```text
Room
 ├── Room Name
 ├── Room Type
 ├── Price
 ├── Description
 ├── Availability
 └── Images
```

### Hotel Bookings

```text
Booking
 ├── Guest
 ├── Room
 ├── Check-in
 ├── Check-out
 ├── Number of Guests
 └── Booking Status
```

### Restaurant Reservations

```text
Restaurant Reservation
 ├── Guest
 ├── Date
 ├── Time
 ├── Number of Guests
 └── Reservation Status
```

### Service Bookings

```text
Service Booking
 ├── Guest
 ├── Service
 ├── Date
 ├── Time
 └── Booking Status
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/garden-inn-hotel-and-apartments.git

cd garden-inn-hotel-and-apartments
```

### 2. Install dependencies

For the frontend:

```bash
cd frontend
npm install
```

For the backend:

```bash
cd ../backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the backend

```bash
npm run dev
```

### 5. Start the frontend

From the frontend directory:

```bash
npm run dev
```

The application should now be running locally.

---

## 🔑 Environment Variables

| Variable     | Description                            |
| ------------ | -------------------------------------- |
| `PORT`       | Backend server port                    |
| `MONGO_URI`  | MongoDB connection string              |
| `JWT_SECRET` | Secret key used for JWT authentication |

> ⚠️ Never commit your `.env` file or expose your JWT secret or database credentials.

---

## 🎯 Project Goals

The main goals of this project are to:

* Provide a modern online hotel booking experience
* Allow guests to make reservations without contacting the hotel directly
* Provide an organized booking system
* Practice full-stack web development
* Implement real-world authentication
* Build and consume REST APIs
* Work with MongoDB and database relationships
* Create a responsive and user-friendly interface

---

## 💡 What I Learned

Building Garden Inn Hotel & Apartments provided practical experience with:

* Full-stack application architecture
* React component-based development
* RESTful API development
* Node.js and Express
* MongoDB database management
* JWT authentication
* Protected API routes
* CRUD operations
* Frontend/backend integration
* Responsive web design
* Git and GitHub workflow
* Deployment and production configuration

---

## 🔮 Future Improvements

Potential future improvements include:

* 💳 Online payment integration
* 📧 Email booking confirmations
* 📱 SMS notifications
* ⭐ Guest reviews and ratings
* 📊 Hotel administration dashboard
* 🧾 Digital booking receipts
* 🔔 Real-time booking notifications
* 📅 Advanced room availability calendar
* 🌍 Multi-language support
* 💰 Multiple currency support

---

## 👨‍💻 Developer

Built as a **full-stack web development project** using modern JavaScript technologies.

### Built With

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" alt="React"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" alt="JavaScript"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" alt="CSS3"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" alt="Node.js"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="40" alt="Express"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="40" alt="MongoDB"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40" alt="Git"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40" alt="GitHub"/>
</p>

---

## ⭐ Project

If you find this project interesting, feel free to ⭐ the repository and explore the code.

**Garden Inn Hotel & Apartments — bringing hotel reservations and hospitality services online.**
