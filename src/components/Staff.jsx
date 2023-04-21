import React, { useState } from 'react'
import StaffReg from "../components/StaffReg"
import SupStaff from "./StaffSup"
const StaffNav = () => {
  const [MembernavNum, setMembernavNum] = useState(1);
  function renderStaff(MembernavNum) {
    switch (MembernavNum) {
      case 1:
        return <StaffReg/>
      case 2:
        return <SupStaff/>
      default:
        <StaffReg/>
        break;
    }
  }
  return (
    <div className="v-main-wrop">
      <div className="v-main-wrop-row">
        <div className="v-main-wrop-row-text">
          <h1>เจ้าหน้าที่</h1>
        </div>
      </div>
      <div className="v-slid-group-wrapper-p">
        <div className="v-slid-group-content-p">
          <div className="v-slid-group-p">
            <div className="v-slid-group-content-button-DASHBOARD">
              <p p onClick={() => setMembernavNum(1)}>เจ้าหน้าที่</p>
            </div>
            <div className="v-slid-group-content-REPORT1">
              <p onClick={() => setMembernavNum(2)}>เจ้าหน้าที่ระดับสูง</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-sidebar-menu-render">{renderStaff(MembernavNum)}</div>
    </div>
  )
}

export default StaffNav
