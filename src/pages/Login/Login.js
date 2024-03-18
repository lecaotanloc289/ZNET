import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import iconBg1 from "../../img/icon-bg1.png";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { loginApi } from "../../utils/api";
import { isLogin } from "../../store/action";
import "react-toastify/dist/ReactToastify.css";
import { getUserProfile } from "../../redux/thunk";
import { getUserInfo } from "../../redux/actions";
const Login = () => {
  const [data, setData] = useState({
    email: undefined,
    password: undefined,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      let res = await loginApi(data.email, data.password);
      console.log(res.data);
      dispatch(getUserInfo(res.data));
      if (res.data !== "") {
        toast.success("Thành Công");
        // console.log(res.data)
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("image", res.data.image);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("gender", res.data.gender);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("status", res.data.status);
        localStorage.setItem("title", res.data.title);
        localStorage.setItem("roleId", res.data.role.id);
        localStorage.setItem("roleName", res.data.role.name);
        localStorage.setItem("roleCode", res.data.role.code);
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      } else {
        toast.warning("Đăng nhập thất bại, sai email hoặc mật khẩu");
      }
    } catch (error) {
      toast.error("Lỗi: " + error.messase);
    }
  };

  return (
    <div className="container">
      <div className="img-container">
        <img className="icon-bg" src={iconBg1}></img>
      </div>
      <div className="container-form">
        <ToastContainer autoClose={2000}></ToastContainer>

        <h1>Log In</h1>
        <p>Please sign in to continue.</p>
        <div className="inputBox">
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={(e) => {
              setData({
                ...data,
                email: e.target.value,
              });
            }}
            placeholder="Email"
            required
          />
        </div>

        <div className="inputBox">
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={(e) => {
              setData({
                ...data,
                password: e.target.value,
              });
            }}
            placeholder="Password"
            required
          />
        </div>

        <div className="divBtn">
          <button onClick={handleLogin} className="loginBtn">
            LogIn
          </button>
        </div>

        <div className="dont">
          <small className="forgotPassword">Forgot Password?</small>
          <p>
            Don't have any account?{" "}
            <Link to="/signup">
              <span>Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
