import React from "react";
import { useNavigate } from "react-router-dom";
import ContactUs from "./ContactUs";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide section"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item  active">
            <img
              src="https://nektony.com/wp-content/uploads/2022/05/sport_anywhere_ntext@2x.png"
              className="d-block w-100 home"
              alt="..."
            />
            <div className="title home-p">
              <h1>WELCOME TO THE KOVAI SPORTS EVENTS</h1>
              <h3>Participate the sports events now</h3>
              <button
                onClick={() => {
                  navigate("/events");
                }}
                className="btn-events btn-book"
                type="submit"
              >
                Show Events
              </button>
            </div>
          </div>
          <div className="carousel-item  ">
            <img
              src="https://wallpapers.com/images/featured/best-sports-background-9mo6eiyv8hxj5jln.jpg"
              className="d-block w-100 home"
              alt="..."
            />
            <div className="title home-p">
              <h1>WELCOME TO THE KOVAI SPORTS EVENTS</h1>
              <h3>Participate the sports events now</h3>
              <button
                onClick={() => {
                  navigate("/events");
                }}
                className="btn-events btn-book"
                type="submit"
              >
                Show Events
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://wallpapers.com/images/hd/dark-red-boxing-gloves-ip1ixazptbq3q7bw.webp"
              class="d-block w-100 home"
              alt="..."
            />
            <div className="title home-p">
              <h1>WELCOME TO THE KOVAI SPORTS EVENTS</h1>
              <h3>Participate the sports events now</h3>
              <button
                onClick={() => {
                  navigate("/events");
                }}
                className="btn-events btn-book"
                type="submit"
              >
                Show Events
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800"
              className="d-block w-100 home"
              alt="..."
            />
            <div className="title home-p">
              <h1>WELCOME TO THE KOVAI SPORTS EVENTS</h1>
              <h3>Participate the sports events now</h3>
              <button
                onClick={() => {
                  navigate("/events");
                }}
                className="btn-events btn-book"
                type="submit"
              >
                Show Events
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="running-div">
        <img
          height="600px"
          width="800px"
          src="https://jase.ac.in/assets/images/pro.jpg"
        />
        <div>
          <h1 className="kse"> KSE (Kovai Sports Events)</h1>
          <p className="">We successfully conducting 500+ sports events...</p>
          <p className="kse-p">
            We help you take admission in any sports academy like that of
            Cricket Academy, Football Academy, Hockey Academy, Tennis Academy,
            Kick-Boxing Academy, Basketball Academy and Volleyball Academy.
          </p>
        </div>
      </div>

      <div className="main-card-div">
        <div className="cards d-flex m-2 ">
          <div
            className="card event-cards"
            style={{ width: "15rem", height: "auto", marginBottom: "20px" }}
          >
            <img
              src="https://kheloindiaacademy.com//cdn/categories/cricket-main.jpg"
              className="card-img-top event-data-img"
              alt="..."
            />

            <div className="card-body ">
              <h5 className="card-title">Cricket</h5>
              <button className="home-card-btn">View Details</button>
            </div>
          </div>
        </div>

        <div className="cards d-flex m-2 ">
          <div
            className="card event-cards"
            style={{ width: "15rem", height: "auto", marginBottom: "20px" }}
          >
            <img
              src="https://getwallpapers.com/wallpaper/full/1/f/3/1221720-athletics-wallpapers-1920x1200-for-iphone-5s.jpg"
              className="card-img-top event-data-img"
              alt="..."
            />

            <div className="card-body ">
              <h5 className="card-title">Athletics</h5>
              <button className="home-card-btn">View Details</button>
            </div>
          </div>
        </div>

        <div className="cards d-flex m-2 ">
          <div
            className="card event-cards"
            style={{ width: "15rem", height: "auto", marginBottom: "20px" }}
          >
            <img
              src="https://wallpapers.com/images/featured/volleyball-6dvotamb3ddiy7qw.jpg"
              className="card-img-top event-data-img"
              alt="..."
            />

            <div className="card-body ">
              <h5 className="card-title">Volley Ball</h5>
              <button className="home-card-btn">View Details</button>
            </div>
          </div>
        </div>

        <div className="cards d-flex m-2 ">
          <div
            className="card event-cards"
            style={{ width: "15rem", height: "auto", marginBottom: "20px" }}
          >
            <img
              src="https://wallpapercave.com/wp/wp2603379.jpg"
              className="card-img-top event-data-img"
              alt="..."
            />

            <div className="card-body ">
              <h5 className="card-title">Foot Ball</h5>
              <button className="home-card-btn">View Details</button>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
}
