import React from 'react';

const AppCard = ({ title, apkFile, logo, type }) => {
  return (
    <div
      data-aos="zoom-in-up" data-aos-duration="1000"
      className="card bg-dark text-center border-0 shadow-sm rounded-4 p-4 h-100 d-flex flex-column"
    >
      <img
        src={logo}
        alt="logo"
        className="card-img-top mx-auto"
        style={{ width: "70px", height: "70px", borderRadius: "20%" }}
      />

      <div className="card-body px-0 d-flex flex-column">
        <h5 className="card-title text-white mb-2">{title}</h5>
        <p className="card-text text-info mb-3">{type}</p>

        {/* pushes button to bottom */}
        <div className="mt-auto">
          <a
            href={apkFile}
            download
            className="btn btn-outline-light btn-sm px-4 rounded-5"
            style={{ fontWeight: "500" }}
          >
            Install
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
