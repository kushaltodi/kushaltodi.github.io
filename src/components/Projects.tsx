function Projects() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="display-5 p-4">My Work</div>
      <div className="shadow mt-3 p-3" style={{ minWidth: "800px" }}>
        <div className="">
          <b>Creative Learning Web Portal:</b> Course Recommendaton System
          <br />
          Tech Stack: Python, Node JS, React JS, MongoDB, Hybrid Recommendations
        </div>
      </div>
      <div className="shadow mt-3 p-3" style={{ minWidth: "800px" }}>
        <div className="float-end">
          <b>E-Commerce Website:</b> Inspired from Amazon.com
          <br />
          Tech Stack: Node JS, React JS, MongoDB, Firebase
        </div>
      </div>
      <div className="shadow mt-3 p-3" style={{ minWidth: "800px" }}>
        <div className="">
          <b>Query Management System:</b> Efficiently Store, Manage and Execute SQL Queries
          <br />
          Tech Stack: Dotent Core, Postgres SQL, React JS
        </div>
      </div>
      <div className="shadow mt-3 p-3" style={{ minWidth: "800px" }}>
        <div className="float-end">
          <b>Driver Drowsiness Detector:</b> Live Tracking via Camera
          <br />
          Tech Stack: Python, Flask, OpenCV, Convolutional Neural Networks
        </div>
      </div>
      <div className="shadow mt-3 p-3" style={{ minWidth: "800px" }}>
      <div className="">
          <b>IPL Score Prediction System:</b> Machine Learning backed web page
          <br />
          Tech Stack: Python, Flask, Linear Regression
        </div>  
      </div>
      <div className="shadow mt-3 p-3" style={{ minWidth: "800px" }}>
      <div className="float-end">
          <b>Bank Management System:</b> CLI based banking portal
          <br />
          Tech Stack: Java, SQL, JDBC Connector
        </div>
      </div>
    </div>
  );
}

export default Projects;
