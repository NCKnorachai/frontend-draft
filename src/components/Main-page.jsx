import React, { useState } from "react";
import "../style/member.css";
import Book from "../asset/icon/book.png";
import People from "../asset/icon/people.png";
import Business from "../asset/icon/business.png";
import Calendar from "../asset/icon/calendar.png";
import Menu from "../asset/icon/menu.png";
import Chat from "../asset/icon/chat.png";
import docs from "../asset/icon/google-docs.png";
import Logout from "../asset/icon/logout.png";
import Members from "./Members";
import Placeholder from "./Placeholder";

export default function Mainpage() {
  const [PagesNum, setPagesNum] = useState(0);
  function renderSwitch(PagesNum){
    switch(PagesNum){
      case 1:
        return <Members />;
      case 2:
        return <Placeholder />;
      case 3:
        return <Members />
      default:
        <Members/>;
        break;
    };
  }
  return (
    <div className="wrapper">
      <div className="member-sidebar">
        <ul className="member-sisdebar-menu">
          <h1 className="member-sisdebar-menu-texthean">ระบบนัดหมาย</h1>
          <li className="member-sisdebar-textmenu-report-summary">
            <img src={Book} alt="" />
            <p onClick={() => setPagesNum(1)}> สรุปรายงาน</p>
          </li>
          <li className="member-sisdebar-textmenu-officer">
            <img src={People} alt="" />
            <p onClick={() => setPagesNum(2)}>เจ้าหน้าที่</p>
          </li>
          <li className="member-sisdebar-textmenu-member">
            <img src={Business} alt="" />
            <p>สมาชิก</p>
          </li>
          <li className="member-sisdebar-textmenu-assign">
            <img src={Calendar} alt="" />
            <p>จัดการนัดหมาย</p>
          </li>
          <li className="member-sisdebar-textmenu-service-group">
            <img src={Menu} alt="" />
            <p>กลุ่มงานบริการ</p>
          </li>
          <li className="member-sisdebar-textmenu-automatic-message">
            <img src={Chat} alt="" />
            <p>ข้อความอัตโนมัติ</p>
          </li>
          <li className="member-sisdebar-textmenu-Instruction-Manual">
            <img src={docs} alt="" />
            <p>คู่มือการใช้งาน</p>
          </li>
          <li className="member-sisdebar-textmenu-logout">
            <img src={Logout} alt="" />
            <p>ออกจากระบบ</p>
          </li>
        </ul>
      </div>
      <h1>test render</h1>
      {renderSwitch(PagesNum)}
    </div>
  );
}
