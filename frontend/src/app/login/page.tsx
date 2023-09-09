"use client";
import "normalize.css/normalize.css";
import logo from "../../assets/logoo politu.jpg";
import Image from "next/image";
import styles from "../styles/login.module.css";
import viewPassword from "../../assets/viewPassword.svg";
import React, { FC } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import LoadingScreen from "../components/LoadingScreen";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "@/store/slices/isLoading.slice";

const Login: FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: any) => state.isLoading);
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
  const router = useRouter();
  const submit = (): void => {
    dispatch(setIsLoading(true));
    event?.preventDefault();
    axios
      .post("https://politurapp-production.up.railway.app/api/v1/auth/login", {
        email,
        password,
      })
      .then((res) => {
        toast.success("¡Inicio de Sesion Exitoso!", {
          theme: "colored",
        });
        setTimeout(() => {
          if (res.data.isAdmin) router.push("/admin/dailyReport");
          else router.push("/seller/createClient");
        }, 1000);
        localStorage.setItem("sellerId", res.data.id);
        localStorage.setItem("isAdmin", res.data.isAdmin);
      })
      .catch((err) => toast.error("Error " + err?.response?.data?.message))
      .finally(() => dispatch(setIsLoading(false)));
  };

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [viewPasswordInput, setViewPasswordInput] = React.useState(true);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.loginContainer}>
          <h2 className={styles.h2}>Iniciar Sesión</h2>
          <form action="">
            <div className={styles.inputContainer}>
              <label className={styles.label} htmlFor="email">
                Correo Electrónico
              </label>
              <input
                id="email"
                className={styles.inputText}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label} htmlFor="password">
                Contraseña
              </label>
              <div>
                <Image
                  className={styles.showPassword}
                  src={viewPassword}
                  alt=""
                  onClick={() => setViewPasswordInput(!viewPasswordInput)}
                />
                <input
                  id="password"
                  className={styles.inputText}
                  type={`${viewPasswordInput ? "password" : "text"}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <p className={styles.forgotPassword}>¿Olvidaste tu contraseña?</p>
            <div className={styles.rememberContainer}>
              <input type="checkbox" id="remember" />
              <label className={styles.remember} htmlFor="remember">
                Recordar
              </label>
            </div>
            <br />
            <button
              onClick={() => submit()}
              type="submit"
              className={styles.button}
            >
              Iniciar Sesión
            </button>
          </form>
          <p className={styles.registerContainer}>
            ¿No tienes cuenta?{" "}
            <span className={styles.register}>Registrate</span>
          </p>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src={logo} alt="" />
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Login;
