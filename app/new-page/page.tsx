import React from "react";
import "./chicha.module.css";

function page() {
  return (
    <div className="home-head">
      <div className="home-cover">
        <img
          src={
            "https://b.zmtcdn.com/data/pictures/0/20728420/5c24d6409aec92703816a3004f055a66_featured_v2.jpg"
          }
        />
      </div>
      <ul className="floating ul">
        <li className="li">
          <div className="wrap-logo">
            {/* <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg"
              }
            /> */}
          </div>
        </li>

        <li className="name">Pista House</li>

        <li className="card">
          {/* <PaymentInfoCard pageLoading={false} result="primary" refreshAmount={getBillData} location="landing" refreshDisable={refreshDisable}/> */}
        </li>
      </ul>
    </div>
  );
}

export default page;
