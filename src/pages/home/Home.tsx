import { Card } from "../../components/card/Card";
import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <img src="src/assets/Image.png" className="img-fluid" />
      <div
        className="card"
        style={{
          width: "45%",
          marginTop: "-15%",
          marginLeft: "5%",
          padding: 25,
        }}
      >
        <div>
          <h4>
            <span className="badge">Technology</span>
          </h4>
          <div className="cardContent">
            <h3>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "65%",
              alignItems: "center",
            }}
          >
            <img src="src/assets/BrunoMartins.png" height={30} width={30} />
            <h6 style={{ color: "gray" }}>Jason Francisco</h6>
            <h6 style={{ color: "gray" }}>Aug 20, 2022</h6>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15%" }}>
        <h4>Latest Post</h4>
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
          <button className="btn btn-light border">View All Post</button>
        </center>
      </div>
    </div>
  );
};

export default Home;
