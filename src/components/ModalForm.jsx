import { useState, useContext, useRef } from "react";
import AuthContext from "../../contexts/auth-context";
import classes from "./ModalForm.module.css";
import Modal from "./Modal";

function ModalForm({ onClose }) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleLoginSuccess = (data) => {
    authCtx.login(data.access);
    history.replace("/");
    onClose();
  };

  const handleLoginError = (error) => {
    alert(error.message);
    setIsLoading(false);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      const url = isLogin
        ? "http://127.0.0.1:8000/api/users/login/"
        : "http://127.0.0.1:8000/api/users/";

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const data = await response.json();
        let errorMessage = "ایمیل یا گذرواژه اشتباه است. دوباره تلاش کنید.";
        // if (data && data.error && data.error.message) {
        //   errorMessage = data.error.message;
        // }

        throw new Error(errorMessage);
      }

      const data = await response.json();
      handleLoginSuccess(data);
    } catch (error) {
      handleLoginError(error);
    }
  };

  return (
    <Modal onClose={onClose}>
      <section className={classes.auth}>
        <h1>{isLogin ? "ورود" : "ثبت نام"}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">ایمیل</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">گذرواژه</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading ? (
              <button>{isLogin ? "ورود" : "ثبت نام"}</button>
            ) : (
              <p>در حال ارسال...</p>
            )}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "ساخت اکانت" : "ورود با اکانت موجود"}
            </button>
          </div>
        </form>
      </section>
    </Modal>
  );
}

export default ModalForm;
