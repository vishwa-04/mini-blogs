import { Card } from "../../components/card/Card";
import "./styles.css";
const AuthorPage = () => {
  return (
    <div className="container">
      <div className="author" style={{ marginTop: "8%" }}>
        <div className="d-flex copyright  w-100 justify-content-center">
          <div>
            <img
              src="src/assets/BrunoMartins.png"
              alt=""
              height={48}
              width={48}
            />
          </div>
          <div style={{ marginLeft: "1%" }}>
            <h5 style={{ marginTop: 0, marginBottom: 0 }}>Jonathan Doe</h5>
            <p style={{ marginTop: 0, marginBottom: 0 }}>
              Collabrator and Editor
            </p>
          </div>
        </div>
        <div>
          <p
            className="mx-auto my-3"
            style={{
              width: "60%",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
          </p>
        </div>
        <div className="d-flex justify-content-center ">
          <img
            src="src/assets/Vector (2).png"
            alt=""
            className="socialMediaIcons"
            height={35}
            width={36}
          />
          <img
            src="src/assets/Vector (3).png"
            alt=""
            className="socialMediaIcons"
            height={35}
            width={36}
          />
          <img
            src="src/assets/Vector (4).png"
            alt=""
            className="socialMediaIcons"
            height={35}
            width={36}
          />
          <img
            src="src/assets/Vector (5).png"
            alt=""
            className="socialMediaIcons"
            height={35}
            width={36}
          />
        </div>
      </div>
      <div style={{ marginTop: "10%" }}>
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

export default AuthorPage;
