import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Engineer</h4>
                <h5>Kaiser Permanente</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built an ambient clinical documentation system converting clinician–patient conversations into transcripts and draft notes using AWS Lambda and Amazon Transcribe Medical. Implemented HIPAA-aligned PHI security and automated CI/CD using Terraform.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist</h4>
                <h5>Corning Incorporated</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Set up Azure data pipelines with Azure Data Factory and Databricks. Trained defect prediction and anomaly detection models in Azure ML. Deployed models and managed MLOps with Azure DevOps.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Blackstraw.ai</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Built batch ETL/ELT pipelines to ingest high-volume data, created reusable KPI datasets, and designed an automated batch-wise reprocessing framework reducing pipeline failures with proactive alerts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
