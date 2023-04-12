import { createGlobalStyle } from "styled-components";
import "../style/style-login/login.css";
import Photo from "../asset/bg/bg-login.png";
import Logo from "../asset/icon/icon-login.png";
import { useNavigate } from "react-router-dom";
const GStyles = createGlobalStyle`
body{
  background-color:white;
}
`;
function Login() {
  return (
    <div className="log-in-wrapper">
      <GStyles />
      <img className="login-bg" src={Photo} alt="" />
      <div className="log-in-login-box-wrapper">
        <div className="login-login-box">
          <form className="login-form">
            <div className="textbox-login">
              <img className="login-icon" src={Logo} alt="" />
              <h1 className="textbox-login-name">PATTAYA CONNET</h1>
              <h2 className="textbox-login-login">ล็อกอิน</h2>
              <p className="textbox-login-name-name">PATTAYA CONNET</p>
            </div>
            <div className="form-iogin-input">
              <div className="inputbox-username">
                <input type="text" required="required" />
                <label>ชื่อผู้ใช้</label>
                <i></i>
              </div>
              <div className="inputbox-password">
                <input type="password" required="required" />
                <label>รหัสผ่าน</label>
                <i></i>
              </div>
            </div>
            <div>
              <button
               className="login-btn">
                เข้าสู้ระบบ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
