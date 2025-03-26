# 🧪 springboot-react-docker

A full-stack CRUD boilerplate using **Spring Boot (Java + Hibernate + PostgreSQL)** for the backend and **React (Vite + TypeScript + Tailwind CSS)** for the frontend, running in a unified Docker environment.

---

## 📦 Features

### ✅ Backend (Spring Boot + Hibernate)

- RESTful API with CRUD for `Book` entity
- PostgreSQL integration via JPA (Hibernate)
- Swagger UI for API documentation
- Dockerized Maven build

### ✅ Frontend (React + Vite + Tailwind CSS)

- Book list viewer with add/edit/delete capabilities
- Simple responsive UI using Tailwind CSS
- Integrated with backend via REST API

---

## 🐳 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/springboot-react-docker.git
cd springboot-react-docker
```

### 2. Start with Docker Compose

```bash
docker-compose up --build
```

- React App: [http://localhost:3000](http://localhost:3000)
- Spring Boot API: [http://localhost:8080/books](http://localhost:8080/books)
- Swagger UI: [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

---

## 📁 Project Structure

```
springboot-react-docker/
├── backend/                  # Spring Boot app
│   ├── src/
│   └── Dockerfile
├── frontend/                 # React Vite app
│   ├── src/
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🛠 Backend API Endpoints

| Method | Endpoint      | Description   |
| ------ | ------------- | ------------- |
| GET    | `/books`      | Get all books |
| GET    | `/books/{id}` | Get one book  |
| POST   | `/books`      | Add new book  |
| PUT    | `/books/{id}` | Update a book |
| DELETE | `/books/{id}` | Delete a book |

---

## 📚 Example Book JSON

```json
{
  "title": "Spring入門",
  "author": "山田太郎"
}
```

---

## 📝 License

MIT
