import React from "react";

function Profile() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="display-4 p-4">A bit more about me ...</div>
      <div className="shadow p-3" style={{ maxWidth: "800px" }}>
        Hey!!
        <br />
        Welcome to my digital space! I'm a passionate software engineer with a
        knack for full-stack solutions. Having recently graduated and already
        immersed in the industry for the past 4 months, I bring fresh
        perspectives and a hunger for innovation to every line of code I write.
        <br />
        My journey in the world of technology is fueled by a love for building
        seamless and user-centric applications. From frontend aesthetics to
        backend functionality, I thrive on creating holistic solutions that not
        only meet but exceed expectations. Join me in this exciting adventure
        where every challenge is an opportunity to learn, and every project is a
        canvas for creativity. Let's code the future together! 💻✨
      </div>
      <div className="shadow p-3" style={{ minWidth: "800px" }}>
        <div className="display-6">My Skill include - </div>
        <br />
        <ul>
          <li>Dotnet Core (EF Core, Apis, Worker Services)</li>
          <li>React Js</li>
          <li>Python (Flask, Pandas, etc.)</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>Java</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
