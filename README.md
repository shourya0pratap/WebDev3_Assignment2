# Student Management REST API

A Node.js and Express.js RESTful API developed for managing student records using in-memory JSON data.

-----

## 📌 Overview

This repository contains the implementation for **Lab Assignment 2: Student Management REST API** (Web Dev III - Node.js & Express Backend). The project demonstrates key backend development concepts, including modular routing, custom middleware logging, CRUD operations, and error handling without using an external database.

-----

## 🛠️ Technology Stack

  * **Runtime Environment:** Node.js
  * **Framework:** Express.js
  * **API Testing Tool:** Postman
  * **Data Storage:** In-Memory Array / JSON Data

-----

## 📁 Project Structure

``` text
├── data/
│   └── students.js
├── middleware/
│   └── logger.js
├── routes/
│   └── studentRoutes.js
├── app.js
└── package-lock.json
└── package.json
└── README.md

```

-----

## 🚀 API Endpoints

| HTTP Method | Endpoint        | Description                             |
| :---------- | :-------------- | :-------------------------------------- |
| `GET`       | `/students`     | Retrieve all student records            |
| `GET`       | `/students/:id` | Retrieve a single student by ID         |
| `POST`      | `/students`     | Create a new student record             |
| `PUT`       | `/students/:id` | Update an existing student record by ID |
| `DELETE`    | `/students/:id` | Delete a student record by ID           |

-----

## ⚙️ Key Features & Implementation

  * **Modular Routing:** Uses Express Router (`studentRoutes.js`) for modular API management.
  * **Custom Middleware:** Includes custom logging middleware (`logger.js`) to track HTTP method, URL, and timestamp for requests.
  * **Error Handling & Status Codes:**
      * `200 OK` – Successful request
      * `201 Created` – Successfully created new record
      * `400 Bad Request` – Invalid client input
      * `404 Not Found` – Requested student ID does not exist
      * `500 Internal Server Error` – General server error handling

-----

## 🧪 Testing with Postman

All API endpoints can be tested using Postman on the url `http://localhost:3000`

1.  Start the server using Node.js.
2.  Send HTTP requests to `http://localhost:3000/students`.
3.  Verify JSON responses and status codes.
