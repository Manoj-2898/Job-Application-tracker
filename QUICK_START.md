# Quick Start Guide

## Installation Steps

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Open Browser:**
   - The app will be available at `http://localhost:5173`
   - Open this URL in your browser

## That's It! 🎉

Your Job Application Tracker is now running!

## Features Overview

- **Dashboard Page** (`/`) - View statistics and charts
- **Applications Page** (`/applications`) - Manage all your job applications

## First Steps

1. Go to the **Applications** page
2. Click **"Add New Application"**
3. Fill in Company Name and Job Role (required fields)
4. Add optional details like location, date, status, and notes
5. Click **"Add Application"**
6. View your stats on the **Dashboard** page

## Data Storage

- All data is saved automatically to your browser's LocalStorage
- No database or server required
- Data persists between browser sessions

## Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

---

For more details, see the full [README.md](README.md) file.

