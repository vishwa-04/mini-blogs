import { Link } from "react-router-dom";
import "./style.css";

export const Footer = () => {
  return (
    <div className="container mt-5 pb-5">
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="col-4 col-sm-3">
          <div>
            <b>About</b>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
          <div>
            <div>
              <b>Email</b> : info@jstemplate.net
            </div>
          </div>
          <div>
            <div>
              <b>Phone</b> : 9974 60 86 90
            </div>
          </div>
        </div>
        <div
          className="col-4 col-sm-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "20%",
          }}
        >
          <div>
            <div>
              <b>Quick Link</b>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link to={"blog"} className="link">
                Home
              </Link>

              <Link to={"blog"} className="link">
                About
              </Link>

              <Link to={"blog"} className="link">
                Blog
              </Link>

              <Link to={"blog"} className="link">
                Archieved
              </Link>

              <Link to={"blog"} className="link">
                Author
              </Link>
              <Link to={"blog"} className="link" id="some-id">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <div>
              <b>Category</b>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link to={"blog"} className="link">
                LifeStyle
              </Link>

              <Link to={"blog"} className="link">
                Technology
              </Link>

              <Link to={"blog"} className="link">
                Travel
              </Link>

              <Link to={"blog"} className="link">
                Business
              </Link>

              <Link to={"blog"} className="link">
                Economy
              </Link>

              <Link to={"blog"} className="link">
                Sports
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-3" style={{ width: "31%" }}>
          <div className="card">
            <h5 className="card-header">Weekly Newsletter</h5>
            <div className="card-body">
              <h5 className="card-title">
                Get blog articles and offers via email
              </h5>
              <input
                className="form-control me-1 searchBar w-100"
                type="search"
                placeholder="Your Email"
                aria-label="Search"
              />
              <Link className="btn btn-primary mt-3 w-100" to={""}>
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="d-flex justify-content-between">
        <div className="d-flex copyright">
          <div>
            <img
              src="src/assets/Logo (1).png"
              className="logo"
              alt=""
              height={40}
              width={40}
            />
          </div>
          <div style={{ marginLeft: "3%" }}>
            <img
              className="logo"
              src="src/assets/MetaBlog.png"
              alt=""
              height={20}
              width={100}
            />
            <p>&copy; JS Template 2023. All Rights Reserved.</p>
          </div>
        </div>
        <div className="d-flex terms">
          <Link to={""} className="mr-1">
            Terms of Use
          </Link>
          <Link to={""}>Privacy Policy</Link>
          <Link to={""}>Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
};
