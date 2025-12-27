import { useJobs } from '../context/JobContext';
import Stats from '../components/Stats';
import './Dashboard.css';

const Dashboard = () => {
  const { jobs } = useJobs();

  return (
    <div className="dashboard page">
      <div className="container">
        <div className="page-header">
          <h1>Dashboard</h1>
          <p>Track your job application statistics and progress</p>
        </div>
        <Stats jobs={jobs} />
        {jobs.length === 0 && (
          <div className="empty-state">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <h3>No job applications yet</h3>
            <p>Start tracking your job applications by adding your first one!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

