# Full-Stack Business Landing Page

High-converting business landing page for lead generation, built with Vite React and Spring Boot.

## Project Structure

- `frontend` - Vite React landing page with modern animation and lead form
- `backend` - Spring Boot REST API for lead capture

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

## Run Backend

```bash
cd backend
mvn spring-boot:run
```

Backend runs on `http://localhost:8080`.

## API

- `GET /api/health` - health check
- `POST /api/leads` - create a lead
- `GET /api/leads` - list captured leads from memory

Example lead payload:

```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "phone": "+91 98765 43210",
  "company": "Growth Co",
  "budget": "Growth sprint",
  "message": "I need more qualified leads from paid ads."
}
```
