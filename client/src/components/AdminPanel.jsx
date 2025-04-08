import React, { useState } from 'react';
import '../css/AdminPanel.css';

const AdminPanel = ({ onJobPost }) => {
  const [jobData, setJobData] = useState({
    hot: false,
    image: "",
    logo: "",
    company: "",
    position: "",
    location: "",
    workTime: "Full Time",
    salary: "",
    postedTime: "Just now",
    views: "0"
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setJobData({
      ...jobData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setJobData({ ...jobData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setLogoPreview(reader.result);
        setJobData({ ...jobData, logo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onJobPost(jobData);
    
    // Reset form
    setJobData({
      hot: false,
      image: "",
      logo: "",
      company: "",
      position: "",
      location: "",
      workTime: "Full Time",
      salary: "",
      postedTime: "Just now",
      views: "0"
    });
    setImagePreview(null);
    setLogoPreview(null);
  };

  return (
    <div className="admin-panel">
      <h2>Post New Job</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <input 
              type="checkbox" 
              name="hot" 
              checked={jobData.hot} 
              onChange={handleInputChange} 
            />
            Mark as HOT job
          </label>
        </div>
        
        <div className="form-group">
          <label>Company Name</label>
          <input 
            type="text" 
            name="company" 
            value={jobData.company} 
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Job Position</label>
          <input 
            type="text" 
            name="position" 
            value={jobData.position} 
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Location</label>
          <input 
            type="text" 
            name="location" 
            value={jobData.location} 
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Work Type</label>
          <select 
            name="workTime" 
            value={jobData.workTime} 
            onChange={handleInputChange}
          >
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Salary (in K$)</label>
          <input 
            type="number" 
            name="salary" 
            value={jobData.salary} 
            onChange={handleInputChange}
            required 
          />
        </div>
        
        <div className="form-group file-upload">
          <label>Job Banner Image</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
            required={!jobData.image}
          />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Job Banner Preview" />
            </div>
          )}
        </div>
        
        <div className="form-group file-upload">
          <label>Company Logo</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleLogoUpload} 
            required={!jobData.logo}
          />
          {logoPreview && (
            <div className="logo-preview">
              <img src={logoPreview} alt="Company Logo Preview" />
            </div>
          )}
        </div>
        
        <button type="submit" className="submit-button">Post Job</button>
      </form>
    </div>
  );
};

export default AdminPanel;