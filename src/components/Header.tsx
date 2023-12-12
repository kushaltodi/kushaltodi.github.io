import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-row socials">
        <a
          className="shadow-lg m-5 p-4"
          style={{ borderRadius: "20px" }}
          onClick={() => navigate("/")}
        >
          <i
            className="fa-solid fa-house fa-xl text-decoration-none"
            style={{ color: "black" }}
          ></i>
        </a>
        <a
          onClick={() => navigate("/profile")}
          className="shadow-lg m-5 p-4"
          style={{ borderRadius: "20px" }}
        >
          <i
            className="fa-solid fa-circle-info fa-xl text-decoration-none"
            style={{ color: "black" }}
          ></i>
        </a>
        <a
          onClick={() => navigate("/projects")}
          className="shadow-lg m-5 p-4"
          style={{ borderRadius: "20px" }}
        >
          <i
            className="fa-regular fa-folder-open fa-xl text-decoration-none"
            style={{ color: "black" }}
          ></i>
        </a>
        <a
          onClick={() => navigate("/contact")}
          className="shadow-lg m-5 p-4"
          style={{ borderRadius: "20px" }}
          
        >
          <i
            className="fa-solid fa-phone fa-xl text-decoration-none"
            style={{ color: "black" }}
          ></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
