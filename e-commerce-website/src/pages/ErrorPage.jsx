import "./ErrorPage.css";
import { Link } from "react-router";
import { Header } from "../components/Header";

export function ErrorPage({ cart }) {
  return (
    <>
      <Header cart={cart} />
      <div className="error-page">
        <div className="heading">404</div>
        <div className="sub-heading">Oops! This page was not found.</div>
        <div className="description">
          This page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </div>
        <Link to="/">
          <button className="homepage-button">GO TO HOMEPAGE</button>
        </Link>
      </div>
    </>
  );
}
