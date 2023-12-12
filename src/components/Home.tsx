import profilePic from "./../assets/profilepic.jpg";
import "./components.css";

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center m-5">
      <div className="border shadow-lg rounded-circle ">
        <img
          style={{ maxHeight: "30vh", maxWidth: "30vh" }}
          className=" rounded-circle"
          src={profilePic}
        ></img>
      </div>
      <div className="display-5 m-3">Kushal Todi</div>
      <div className="">Software Developer</div>
      <div className="d-flex flex-row socials">
        <div title="LinkedIn" className="shadow-lg m-5 rounded-circle  p-4">
          <a
            href="https://www.linkedin.com/in/kushaltodi/"
            className="fa-brands fa-linkedin fa-2xl text-decoration-none"
            style={{ color: "black" }}
          ></a>
        </div>
        <div title="Github" className="shadow-lg m-5 rounded-circle  p-4">
          <a
            href="https://github.com/kushaltodi"
            className="fa-brands fa-github fa-2xl text-decoration-none"
            style={{ color: "black" }}
          ></a>
        </div>
        <div title="Instagram" className="shadow-lg m-5 rounded-circle  p-4">
          <a
            href="https://www.instagram.com/_kushal_todi_/"
            className="fa-brands fa-instagram fa-2xl text-decoration-none"
            style={{ color: "black" }}
          ></a>
        </div>
        <div title="Resume" className="shadow-lg m-5 rounded-circle  p-4">
          <a
            href="https://drive.google.com/file/d/1WbnCG5qkYqfZ9IvkdOhXgQySWlUBDPCc/view?usp=sharing"
            className="fa-solid fa-file fa-2xl text-decoration-none"
            style={{ color: "black" }}
          ></a>
        </div>
      </div>
      {/* <div className="d-flex m-5 rounded p-3" style={{ maxWidth: "80vh" }}>
        Welcome to my digital space! I'm Kushal, a passionate software
        engineer with a knack for full-stack solutions. Having recently
        graduated and already immersed in the industry for the past 4 months, I
        bring fresh perspectives and a hunger for innovation to every line of
        code I write. 
        My journey in the world of technology is fueled by a love for building
        seamless and user-centric applications. From frontend aesthetics to
        backend functionality, I thrive on creating holistic solutions that not
        only meet but exceed expectations.
        Join me in this exciting adventure where every challenge is an
        opportunity to learn, and every project is a canvas for creativity.
        Let's code the future together! 💻✨
      </div> */}
    </div>
  );
}

export default Home;
