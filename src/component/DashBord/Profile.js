import React from "react";
import { useState } from "react";
import DashNav from "./DashNav";
import DashHeader from "./DashHeader";
import Free from "./Free";
function Profile() {
  const [isNavClosed, setIsNavClosed] = useState(false);

  const handleMenuClick = () => {
    setIsNavClosed((prevIsNavClosed) => !prevIsNavClosed);
  };

  return (
    <div>
      <DashHeader handleMenuClick={handleMenuClick}/>
      <Free />
      <div class="main-dashbord">
        <DashNav isNavClosed={isNavClosed}/>
        <div className="Profile">
          <div className="report-container">
            <div class="report-header">
              <h3>Client Information</h3>
            </div>
            <div className="report-body">
              <table>
                <thead>
                  <tr>
                    <th>Info</th>
                    <th>Desc.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Services:</td>
                    <td>Web Devlpoer</td>
                  </tr>
                  <tr>
                    <td>Post Link:</td>
                    <td>click here to view original post</td>
                  </tr>
                  <tr>
                    <td>LinkedIn Id:</td>
                    <td>visit Scott Bryant's Profile</td>
                  </tr>
                  <tr>
                    <td>Name:</td>
                    <td>Scott Bryant</td>
                  </tr>
                  <tr>
                    <td>Email Id:</td>
                    <td>scottbryant@gamil.com</td>
                  </tr>
                  <tr>
                    <td>Country:</td>
                    <td>United Kingdom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="report-container">
            <div class="report-header">
              <h3>Client Information</h3>
            </div>
            <div className="report-body">
              <table>
                <thead>
                  <tr>
                    <th>Info</th>
                    <th>Desc.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Services:</td>
                    <td>Web Devlpoer</td>
                  </tr>
                  <tr>
                    <td>Post Link:</td>
                    <td>click here to view original post</td>
                  </tr>
                  <tr>
                    <td>LinkedIn Id:</td>
                    <td>visit Scott Bryant's Profile</td>
                  </tr>
                  <tr>
                    <td>Name:</td>
                    <td>Scott Bryant</td>
                  </tr>
                  <tr>
                    <td>Email Id:</td>
                    <td>scottbryant@gamil.com</td>
                  </tr>
                  <tr>
                    <td>Country:</td>
                    <td>United Kingdom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="report-container">
            <div class="report-header">
              <h3>Client Information</h3>
            </div>
            <div className="report-body">
              <table>
                <thead>
                  <tr>
                    <th>Info</th>
                    <th>Desc.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Services:</td>
                    <td>Web Devlpoer</td>
                  </tr>
                  <tr>
                    <td>Post Link:</td>
                    <td>click here to view original post</td>
                  </tr>
                  <tr>
                    <td>LinkedIn Id:</td>
                    <td>visit Scott Bryant's Profile</td>
                  </tr>
                  <tr>
                    <td>Name:</td>
                    <td>Scott Bryant</td>
                  </tr>
                  <tr>
                    <td>Email Id:</td>
                    <td>scottbryant@gamil.com</td>
                  </tr>
                  <tr>
                    <td>Country:</td>
                    <td>United Kingdom</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
