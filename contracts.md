# API Contracts - SMPN 19 Mataram Website

## Overview
This document outlines the API contracts and integration plan between frontend and backend for the SMPN 19 Mataram school website.

## Current Frontend Mock Data (in mock.js)
The following data is currently mocked and needs backend integration:
- School information and statistics
- Principal information
- Facilities list
- Achievement records
- Gallery images
- Contact form submissions
- Admin authentication

## Backend API Endpoints to Implement

### 1. Contact Form Submission
**Endpoint**: `POST /api/contact`
**Purpose**: Store contact form submissions
**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```
**Response**:
```json
{
  "success": true,
  "message": "Pesan berhasil dikirim!"
}
```

### 2. Achievement Management
**Endpoint**: `GET /api/achievements?year=2024`
**Purpose**: Retrieve achievement records with optional year filter
**Response**:
```json
{
  "achievements": [
    {
      "id": "string",
      "year": "string",
      "event": "string",
      "position": "string",
      "student": "string",
      "coach": "string",
      "location": "string",
      "date": "string"
    }
  ]
}
```

**Endpoint**: `POST /api/achievements` (Admin only)
**Purpose**: Add new achievement record
**Request Body**: Same as achievement object above

### 3. Gallery Management
**Endpoint**: `GET /api/gallery`
**Purpose**: Retrieve gallery images
**Response**:
```json
{
  "gallery": [
    {
      "id": "string",
      "image": "string (URL)",
      "title": "string",
      "date": "string"
    }
  ]
}
```

**Endpoint**: `POST /api/gallery` (Admin only)
**Purpose**: Upload new gallery image
**Request**: Multipart form data with image file

### 4. Admin Authentication
**Endpoint**: `POST /api/auth/login`
**Purpose**: Admin login authentication
**Request Body**:
```json
{
  "username": "string",
  "password": "string"
}
```
**Response**:
```json
{
  "success": true,
  "token": "JWT token",
  "user": {
    "username": "string"
  }
}
```

### 5. School Information
**Endpoint**: `GET /api/school-info`
**Purpose**: Retrieve general school information
**Response**:
```json
{
  "name": "string",
  "address": "string",
  "phone": "string",
  "email": "string",
  "established": "string",
  "accreditation": "string",
  "npsn": "string",
  "stats": {
    "students": "string",
    "teachers": "string",
    "classrooms": "string"
  }
}
```

## MongoDB Collections

### 1. contacts
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: Date,
  status: String // 'new', 'read', 'replied'
}
```

### 2. achievements
```javascript
{
  _id: ObjectId,
  year: String,
  event: String,
  position: String,
  student: String,
  coach: String,
  location: String,
  date: String,
  createdAt: Date
}
```

### 3. gallery
```javascript
{
  _id: ObjectId,
  image: String, // URL or path
  title: String,
  date: String,
  createdAt: Date
}
```

### 4. admins
```javascript
{
  _id: ObjectId,
  username: String,
  password: String, // hashed
  email: String,
  createdAt: Date
}
```

### 5. school_info
```javascript
{
  _id: ObjectId,
  name: String,
  address: String,
  phone: String,
  email: String,
  established: String,
  accreditation: String,
  npsn: String,
  stats: {
    students: String,
    teachers: String,
    classrooms: String
  }
}
```

## Frontend Integration Steps

### 1. Remove mock data imports
- Replace all mock data imports from `mock.js` with actual API calls

### 2. Create API service file
- Create `/app/frontend/src/services/api.js` with axios calls to backend

### 3. Update components to use API service
- Update Contact page to POST to `/api/contact`
- Update Achievements page to GET from `/api/achievements`
- Update Gallery page to GET from `/api/gallery`
- Update Home page to GET from `/api/school-info`
- Update AdminLogin to POST to `/api/auth/login`

### 4. Add loading and error states
- Show loading spinners while fetching data
- Display error messages if API calls fail

## Security Considerations

1. **Password Hashing**: Use bcrypt for admin password hashing
2. **JWT Authentication**: Implement JWT for admin session management
3. **Input Validation**: Validate all input data on both frontend and backend
4. **Rate Limiting**: Add rate limiting to prevent spam on contact form
5. **CORS**: Ensure proper CORS configuration for frontend-backend communication

## Implementation Priority

1. **Phase 1 - Contact Form** (Essential)
   - Implement contact form submission endpoint
   - Store submissions in MongoDB
   
2. **Phase 2 - Admin Authentication** (Essential)
   - Implement login endpoint
   - Create admin user in database
   
3. **Phase 3 - Read-Only Data** (Important)
   - Implement GET endpoints for achievements, gallery, school info
   - Seed initial data in database
   
4. **Phase 4 - Admin CRUD** (Future Enhancement)
   - Implement protected admin endpoints for adding/editing content
   - Create admin dashboard UI

## Notes

- Frontend currently uses mock data that simulates all features
- All pages are functional with mock data for demonstration
- Backend integration will make data editable and persistent
- Images are currently stored in `/app/frontend/public/images/`
- Future enhancement: Implement file upload for gallery images
