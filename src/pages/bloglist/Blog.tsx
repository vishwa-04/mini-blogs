import { Card } from "../../components/card/Card";
import "./style.css";
export const Blog = () => {
  return (
    <div className="container">
      <div>
        <center>
          <h2>Page Title</h2>
        </center>
        <div className="d-flex justify-content-center w-100">
          <div
            className="d-flex justify-content-between"
            style={{ width: "auto" }}
          >
            <h6>Home</h6>
          </div>
        </div>
      </div>
      <div className="imageBackground">
        <div className="cardContainer">
          <h4>
            <span className="badge">Technology</span>
          </h4>
          <div className="title">
            <h1>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h1>
          </div>
          <div className="profile">
            <img
              className="profileImage"
              src="src/assets/BrunoMartins.png"
              alt=""
              height={30}
              width={30}
            />
            <span className="profileContent">Tracey Wilson</span>
            <span className="profileContent">August 20, 2022</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-6 pb-4">
          <Card />
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 pb-4">
          <Card />
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 pb-4">
          <Card />
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 pb-4">
          <Card />
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 pb-4">
          <Card />
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 pb-4">
          <Card />
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 pb-4">
          <Card />
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 pb-4">
          <Card />
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 pb-3">
          <Card />
        </div>
      </div>
      <center>
        <button className="btn btn-light border">Load More</button>
      </center>
    </div>
  );
};
