# Job Application Tracker

A modern, fully functional Job Application Tracker built with React + Vite. Track all your job applications, monitor your progress with beautiful charts, and stay organized throughout your job search journey.

## Features

- ✅ **Add Job Applications** - Store company name, job role, location, application date, status, and notes
- ✅ **Edit Applications** - Update any application details
- ✅ **Delete Applications** - Remove applications you no longer need
- ✅ **View All Applications** - Beautiful card-based layout with all your applications
- ✅ **Filter by Status** - Filter applications by status (Applied, Interview, Offer, Rejected)
- ✅ **Dashboard** - Visual statistics and charts showing your application progress
- ✅ **LocalStorage Persistence** - All data is saved automatically in your browser
- ✅ **Responsive Design** - Works perfectly on mobile and desktop devices
- ✅ **Empty States** - Friendly messages when you have no applications

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Context API** - Global state management
- **LocalStorage** - Data persistence
- **Recharts** - Beautiful chart visualizations
- **CSS3** - Modern styling with responsive design

## Installation

1. **Clone or download this repository**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The app will be available at `http://localhost:5173` (or the port shown in your terminal)

## Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder. To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
 ├── components/
 │    ├── Navbar.jsx          # Navigation bar component
 │    ├── Navbar.css
 │    ├── JobForm.jsx         # Form for adding/editing jobs
 │    ├── JobForm.css
 │    ├── JobList.jsx         # Container for job cards
 │    ├── JobList.css
 │    ├── JobCard.jsx         # Individual job application card
 │    ├── JobCard.css
 │    ├── Filters.jsx         # Status filter component
 │    ├── Filters.css
 │    ├── Stats.jsx           # Dashboard statistics and charts
 │    └── Stats.css
 │
 ├── context/
 │    └── JobContext.jsx      # Context API for global state
 │
 ├── pages/
 │    ├── Dashboard.jsx       # Dashboard page
 │    ├── Dashboard.css
 │    ├── Applications.jsx    # Applications list page
 │    └── Applications.css
 │
 ├── App.jsx                  # Main app component with routing
 ├── main.jsx                 # React entry point
 └── index.css                # Global styles
```

## Usage

### Adding a Job Application

1. Navigate to the **Applications** page
2. Click the **"Add New Application"** button
3. Fill in the required fields (Company Name and Job Role)
4. Optionally add location, application date, status, and notes
5. Click **"Add Application"** to save

### Editing an Application

1. Go to the **Applications** page
2. Click the **"Edit"** button on any job card
3. Modify the information
4. Click **"Update Application"** to save changes

### Deleting an Application

1. Go to the **Applications** page
2. Click the **"Delete"** button on any job card
3. Confirm the deletion in the popup

### Filtering Applications

1. On the **Applications** page, use the status filter buttons
2. Click on a status to filter (or "All" to show everything)
3. The list will update automatically

### Viewing Statistics

1. Navigate to the **Dashboard** page
2. View your total applications, counts by status, and visual charts
3. Charts include both bar charts and pie charts

## Data Persistence

All job applications are automatically saved to your browser's LocalStorage. This means:
- Your data persists between browser sessions
- No server or database required
- Data is stored locally on your device

**Note:** If you clear your browser data or use a different browser, your applications will not be available.

## Status Options

- **Applied** - Initial application submitted
- **Interview** - Interview scheduled or in progress
- **Offer** - Job offer received
- **Rejected** - Application rejected

## Browser Support

This app works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and educational use.

## Contributing

Feel free to fork this project and customize it for your needs!

---

**Happy Job Hunting! 🚀**

