import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";
import { useThemeContext } from "../../App";
const Navbar = () => {
  const { toggleTheme, theme } = useThemeContext();
  return (
    <nav className="navbar navbar-expand-lg navbar-light container">
      <div className="container-fluid p-0">
        <Link className="navbar-brand" to={""}>
          <img
            src="src/assets/Logo.png"
            className="logo"
            height={30}
            width={130}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 navContainer">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"blog"}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"singlepost"}>
                Single Post
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"author"}>
                Pages
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to={"/"}
                onClick={() => {
                  const anchor = document.querySelector("#some-id");
                  if (anchor != null) {
                    anchor.scrollIntoView({
                      behavior: "auto",
                      block: "start",
                    });
                  }
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-1 searchBar shadow-none border-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn" type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
          <Switch
            onChange={() => toggleTheme()}
            checked={theme === "dark"}
            uncheckedIcon={false}
            checkedIcon={false}
            onHandleColor={"#fff"}
            offHandleColor={"#fff"}
            onColor={"#4B6BFB"}
            offColor={"#CDCDD0"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
