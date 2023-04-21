
import "../style/members-nav.css";
import React, { useState } from "react";
import Members1 from "./Members1";
import Members2 from "./Members2";
const Members = () => {
  const [MembersnavNum, setMembersnavNum] = useState(0);
    function renderSwitch(MembersnavNum){
      switch(MembersnavNum){
        case 0 : 
        return <Members1/>
        case 1:
          return <Members1 />;
        case 2:
          return <Members2 />;
          default:
          <Members/>;
          break;
      };
    }
  return (
    <div className="v-main-wrop">
      <div className="v-main-wrop-row">
        <div className="v-main-wrop-row-text">
          <h1>สมาชิก</h1>
        </div>
      </div>
      <div className="v-slid-group-wrapper-p">
        <div className="v-slid-group-content-p">
          <div className="v-slid-group-p">
            <div className="v-slid-group-content-button-DASHBOARD">
              <p p onClick={() => setMembersnavNum(1)}>DASHBOARD</p>
            </div>
            <div className="v-slid-group-content-REPORT1">
              <p onClick={() => setMembersnavNum(2)}>REPORT1</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {renderSwitch(MembersnavNum)}
      </div>
    </div>
  );
};

export default Members;
