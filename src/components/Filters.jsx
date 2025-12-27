import './Filters.css';

const Filters = ({ selectedStatus, onStatusChange }) => {
  const statuses = ['All', 'Applied', 'Interview', 'Offer', 'Rejected'];

  return (
    <div className="filters">
      <h3 className="filters-title">Filter by Status</h3>
      <div className="filters-buttons">
        {statuses.map((status) => (
          <button
            key={status}
            className={`filter-btn ${selectedStatus === status ? 'active' : ''}`}
            onClick={() => onStatusChange(status === 'All' ? '' : status)}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;

