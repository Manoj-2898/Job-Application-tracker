import { useState, useEffect } from 'react';
import { useJobs } from '../context/JobContext';
import './JobForm.css';

const JobForm = ({ jobToEdit, onCancel, onSuccess }) => {
  const { addJob, updateJob } = useJobs();
  const [formData, setFormData] = useState({
    companyName: '',
    jobRole: '',
    location: '',
    applicationDate: new Date().toISOString().split('T')[0],
    status: 'Applied',
    notes: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (jobToEdit) {
      setFormData({
        companyName: jobToEdit.companyName || '',
        jobRole: jobToEdit.jobRole || '',
        location: jobToEdit.location || '',
        applicationDate: jobToEdit.applicationDate || new Date().toISOString().split('T')[0],
        status: jobToEdit.status || 'Applied',
        notes: jobToEdit.notes || '',
      });
    }
  }, [jobToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    if (!formData.jobRole.trim()) {
      newErrors.jobRole = 'Job role is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (jobToEdit) {
      updateJob(jobToEdit.id, formData);
    } else {
      addJob(formData);
    }

    // Reset form
    setFormData({
      companyName: '',
      jobRole: '',
      location: '',
      applicationDate: new Date().toISOString().split('T')[0],
      status: 'Applied',
      notes: '',
    });
    setErrors({});
    
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <div className="job-form-container">
      <div className="card">
        <h2>{jobToEdit ? 'Edit Job Application' : 'Add New Job Application'}</h2>
        <form onSubmit={handleSubmit} className="job-form">
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="companyName">
                Company Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={errors.companyName ? 'error' : ''}
                placeholder="e.g., Google, Microsoft"
              />
              {errors.companyName && (
                <span className="error-message">{errors.companyName}</span>
              )}
            </div>

            <div className="input-group">
              <label htmlFor="jobRole">
                Job Role <span className="required">*</span>
              </label>
              <input
                type="text"
                id="jobRole"
                name="jobRole"
                value={formData.jobRole}
                onChange={handleChange}
                className={errors.jobRole ? 'error' : ''}
                placeholder="e.g., Software Engineer"
              />
              {errors.jobRole && (
                <span className="error-message">{errors.jobRole}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., San Francisco, CA"
              />
            </div>

            <div className="input-group">
              <label htmlFor="applicationDate">Application Date</label>
              <input
                type="date"
                id="applicationDate"
                name="applicationDate"
                value={formData.applicationDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offer">Offer</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Additional notes about this application..."
              rows="4"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              {jobToEdit ? 'Update Application' : 'Add Application'}
            </button>
            {onCancel && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCancel}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;

