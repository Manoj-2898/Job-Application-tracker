import './JobCard.css';

const JobCard = ({ job, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Applied':
        return '#3b82f6';
      case 'Interview':
        return '#f59e0b';
      case 'Offer':
        return '#10b981';
      case 'Rejected':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (!job) return null;

  return (
    <div className="job-card">
      <div className="job-card-header">
        <div>
          <h3 className="job-card-company">{job.companyName || 'N/A'}</h3>
          <p className="job-card-role">{job.jobRole || 'N/A'}</p>
        </div>
        <span
          className="job-card-status"
          style={{ backgroundColor: getStatusColor(job.status) + '20', color: getStatusColor(job.status) }}
        >
          {job.status || 'Applied'}
        </span>
      </div>

      <div className="job-card-details">
        {job.location && (
          <div className="job-card-detail-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{job.location}</span>
          </div>
        )}
        <div className="job-card-detail-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>{formatDate(job.applicationDate)}</span>
        </div>
      </div>

      {job.notes && (
        <div className="job-card-notes">
          <p>{job.notes}</p>
        </div>
      )}

      <div className="job-card-actions">
        <button
          className="btn btn-outline"
          onClick={() => onEdit(job)}
          aria-label="Edit application"
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this application?')) {
              onDelete(job.id);
            }
          }}
          aria-label="Delete application"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;

