import React, { useEffect, useContext } from "react";
import RootLayout from "../layout/RootLayout";
import AuthContext from "../context/AuthContext";
import { useFetch } from "../hooks/useFetch";
import Loading from "../utils/Loading";
import { Link } from "react-router-dom";
import forest1 from '../Asset/Images/Rectangle 42 (2).jpg'

function LandingPage() {
  const { token } = useContext(AuthContext);

  const { data, loading, error } = useFetch(
    "http://127.0.0.1:8000/api/stories/",
    token
  );

  return (
    <div>
      <RootLayout>
        <div className="hero_section text-start">
          <div className="mx-auto mw1240">
            <h1 className="fw-bolder py-2">Stay Curious.</h1>
            <p className="fw-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              fugit maxime pariatur! Quis sapiente nemo distinctio tempore animi
              eum dolorem.
            </p>

            <Link to="/signup" className="btn btn-bg text-white bg-blue px-4">
              Get Started
            </Link>
          </div>
        </div>
        <div className="mw1240 mx-auto">
          <div className="border border-light p-2 mt-5 d-flex flex-column gap-2 flex-sm-row">
            {data &&
              data.slice(0, 3).map((datum) => {
                return (
                  <div className="d-flex align-items-center gap-2 flex-grow-1" key={datum.id}>
                    <img className="w-50 h-100 rounded" src={forest1} alt=""  />
                    <div className="text-start w-100">
                    <p className="btn bg-primary text-white py-0">{datum.tags}</p>
                    <p className="m-0">{datum.title}</p>
                    </div>
                  </div>
                );
              })}
          </div>
          { loading && <Loading Loading={loading} />}

          {error && <p>{error}</p>}

        </div>

        <div className="try-it mx-auto py-4 my-5 mw1240 px-3">
          <h2 className="fw-semibold">Try Post <span className="text-blue">It</span></h2>
          <p>Do you write or discover stories from writers on my topic?</p>
          <div style={{
            maxWidth: '600px',
          }} className="w-100 mx-auto d-flex">
            <input type="text"
            className="w-75 border-0 rounded-start px-3"
            placeholder="Enter Email Address"/>

            <button className="btn bg-blue text-white w-25 rounded-0 rounded-end fs-4 px-1">
              Get Started
            </button>

          </div>

        </div>
      </RootLayout>
    </div>
  );
}

export default LandingPage;
