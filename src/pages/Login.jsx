import "../style/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG3.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        {/* 로그인폼 */}
        <form>
          <h5>이메일</h5>
          <input type="text" />
          <h5>비밀번호</h5>
          <input type="password" />

          <button className="login_button">로그인</button>

          {/* 회원가입 버튼 */}
          <div className="signup_form">
            <p>아직 회원이 아니십니까?</p>
            <button className="signup_button">회원가입</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
