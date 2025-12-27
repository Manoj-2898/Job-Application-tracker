import { createContext, useContext, useState, useEffect } from 'react';

const JobContext = createContext();

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  // Load jobs from localStorage on mount
  useEffect(() => {
    const savedJobs = localStorage.getItem('jobApplications');
    if (savedJobs) {
      try {
        setJobs(JSON.parse(savedJobs));
      } catch (error) {
        console.error('Error loading jobs from localStorage:', error);
      }
    }
  }, []);

  // Save jobs to localStorage whenever jobs change
  useEffect(() => {
    localStorage.setItem('jobApplications', JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    const newJob = {
      ...job,
      id: Date.now().toString(),
    };
    setJobs((prevJobs) => [...prevJobs, newJob]);
  };

  const updateJob = (id, updatedJob) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === id ? { ...updatedJob, id } : job))
    );
  };

  const deleteJob = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  const value = {
    jobs,
    addJob,
    updateJob,
    deleteJob,
  };

  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

