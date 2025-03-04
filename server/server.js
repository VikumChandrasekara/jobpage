const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// Connect to Database
db.connect(err => {
  if (err) {
    console.error("Database connection failed: " + err.message);
    process.exit(1); // Stop server if DB connection fails
  }
  console.log("Connected to MySQL Database");
});

// POST API Endpoint to Insert Job Data
app.post("/api/jobs", (req, res) => {
  const {
    job_title,
    year,
    start_date,
    end_date,
    send_cv_email,
    main_topics,
    sub_topics,
    job_type,
    salary_range,
    job_description,
    job_post_image,
    job_post_thumbnail,
    company_name,
    company_logo
  } = req.body;

  if (!job_title || !company_name) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const formattedSubTopics = Array.isArray(sub_topics) ? JSON.stringify(sub_topics) : sub_topics;

  const query = `INSERT INTO job_details (job_title, year, start_date, end_date, send_cv_email, main_topics, sub_topics, job_type, salary_range, job_description, job_post_image, job_post_thumbnail, company_name, company_logo) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [
    job_title,
    year,
    start_date,
    end_date,
    send_cv_email,
    main_topics,
    formattedSubTopics,
    job_type,
    salary_range,
    job_description,
    job_post_image,
    job_post_thumbnail,
    company_name,
    company_logo
  ], (err, result) => {
    if (err) {
      console.error("Error inserting job data: ", err);
      res.status(500).json({ message: "Internal Server Error" });
    } else {
      res.status(201).json({ message: "Job posted successfully", job_id: result.insertId });
    }
  });
});

// GET API Endpoint to Fetch All Job Data
app.get("/api/jobs", (req, res) => {
  const query = "SELECT * FROM job_details";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Query error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

// GET API Endpoint to Fetch Job Data by job_id
app.get("/api/jobs/:job_id", (req, res) => {
  const jobId = req.params.job_id;

  const query = "SELECT * FROM job_details WHERE job_id = ?";
  db.query(query, [jobId], (err, results) => {
    if (err) {
      console.error("Query error:", err);
      return res.status(500).json({ error: "Database error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.json(results[0]);
  });
});

// PUT API Endpoint to Update Job Data
app.put("/api/jobs/:job_id", (req, res) => {
  const jobId = req.params.job_id;
  const {
    job_title,
    year,
    start_date,
    end_date,
    send_cv_email,
    main_topics,
    sub_topics,
    job_type,
    salary_range,
    job_description,
    job_post_image,
    job_post_thumbnail,
    company_name,
    company_logo
  } = req.body;
/*
  if (!job_title || !company_name) {
    return res.status(400).json({ message: "Missing required fields" });
  }*/

  const formattedSubTopics = Array.isArray(sub_topics) ? JSON.stringify(sub_topics) : sub_topics;

  const query = `UPDATE job_details 
                 SET job_title = ?, year = ?, start_date = ?, end_date = ?, send_cv_email = ?, 
                     main_topics = ?, sub_topics = ?, job_type = ?, salary_range = ?, 
                     job_description = ?, job_post_image = ?, job_post_thumbnail = ?, 
                     company_name = ?, company_logo = ?
                 WHERE job_id = ?`;

  db.query(query, [
    job_title,
    year,
    start_date,
    end_date,
    send_cv_email,
    main_topics,
    formattedSubTopics,
    job_type,
    salary_range,
    job_description,
    job_post_image,
    job_post_thumbnail,
    company_name,
    company_logo,
    jobId
  ], (err, result) => {
    if (err) {
      console.error("Error updating job data: ", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Job updated successfully" });
  });
});

// DELETE API Endpoint to Delete a Job
app.delete("/api/jobs/:job_id", (req, res) => {
  const jobId = req.params.job_id;

  const query = "DELETE FROM job_details WHERE job_id = ?";
  db.query(query, [jobId], (err, result) => {
    if (err) {
      console.error("Error deleting job: ", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Job deleted successfully" });
  });
});

// Handle Invalid Routes
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

