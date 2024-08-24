import React from 'react';
import { FaEye, FaDownload } from 'react-icons/fa';
import jsPDF from 'jspdf';
import './Submissions.css';

const Submissions = () => {
  const submissions = [
    { id: 1, name: 'Submission 1', content: 'Details of Submission 1' },
    { id: 2, name: 'Submission 2', content: 'Details of Submission 2' },
  ];

  const viewSubmission = (content) => {
    alert(content);
  };

  const downloadPDF = (content) => {
    const doc = new jsPDF();
    doc.text(content, 10, 10);
    doc.save('submission.pdf');
  };

  return (
    <div className="submissions-container">
      <div className="submissions-header">
        <span className="submissions-title">Submissions</span>
      </div>
      <div className="submissions-list">
        {submissions.map((submission) => (
          <div key={submission.id} className="submission-item">
            <div className="submission-name">{submission.name}</div>
            <div className="submission-actions">
              <FaEye 
                className="icon" 
                onClick={() => viewSubmission(submission.content)} 
              />
              <FaDownload 
                className="icon" 
                onClick={() => downloadPDF(submission.content)} 
              />
            </div>
          </div>
        ))}
      </div>
      <div className="show-all">
        <button className="show-all-button">Show all submissions →</button>
      </div>
    </div>
  );
};

export default Submissions;
