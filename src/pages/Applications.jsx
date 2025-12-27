import { useState } from 'react';
import { useJobs } from '../context/JobContext';
import JobForm from '../components/JobForm';
import JobList from '../components/JobList';
import Filters from '../components/Filters';
import './Applications.css';

const Applications = () => {
  const { jobs, deleteJob } = useJobs();
  const [selectedStatus, setSelectedStatus] = useState('');
  const [editingJob, setEditingJob] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const filteredJobs = selectedStatus
    ? jobs.filter((job) => job.status === selectedStatus)
    : jobs;

  const handleEdit = (job) => {
    setEditingJob(job);
    setShowForm(true);
  };

  const handleCancelEdit = () => {
    setEditingJob(null);
    setShowForm(false);
  };

  const handleFormSuccess = () => {
    setEditingJob(null);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    deleteJob(id);
  };

  return (
    <div className="applications page">
      <div className="container">
        <div className="page-header">
          <div className="page-header-content">
            <div>
              <h1>Job Applications</h1>
              <p>Manage all your job applications in one place</p>
            </div>
            {!showForm && (
              <button
                className="btn btn-primary"
                onClick={() => setShowForm(true)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Add New Application
              </button>
            )}
          </div>
        </div>

        {showForm && (
          <JobForm
            jobToEdit={editingJob}
            onCancel={handleCancelEdit}
            onSuccess={handleFormSuccess}
          />
        )}

        {!showForm && jobs.length > 0 && (
          <Filters
            selectedStatus={selectedStatus || 'All'}
            onStatusChange={setSelectedStatus}
          />
        )}

        {!showForm && (
          <JobList
            jobs={filteredJobs}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

export default Applications;

