export default function StatsSection() {
  return (
    <section className="stats">
      <div className="container">
        <h2 className="section-title">
          OUR TREE CARE TEAM IS CERTIFIED, INSURED,
          <br />
          AND TRAINED TO THE HIGHEST STANDARDS
        </h2>
        <p className="section-subtitle">
          CALL US TODAY TO MEET THE TEAM FROM A LOCAL FAMILY-OWNED AND OPERATED TREE TRIMMING
          COMPANY
        </p>

        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">
              <span className="material-symbols-outlined" style={{ fontSize: 48 }}>
                sentiment_satisfied
              </span>
            </div>
            <div className="stat-number">600+</div>
            <div className="stat-label">HAPPY CUSTOMERS</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <span className="material-symbols-outlined" style={{ fontSize: 48 }}>
                park
              </span>
            </div>
            <div className="stat-number">1500+</div>
            <div className="stat-label">TREES REMOVED</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <span className="material-symbols-outlined" style={{ fontSize: 48 }}>
                eco
              </span>
            </div>
            <div className="stat-number">200+</div>
            <div className="stat-label">TREES PLANTED</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <span className="material-symbols-outlined" style={{ fontSize: 48 }}>
                thunderstorm
              </span>
            </div>
            <div className="stat-number">1500+</div>
            <div className="stat-label">STORM CLEAN UPS COMPLETED</div>
          </div>
        </div>
      </div>
    </section>
  )
}
