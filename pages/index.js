import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";
const SignIn = () => {
  const router = useRouter();

  const onButtonSignInClick = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className={styles.WholePage}>
      <div className={styles.leftside}>
        <h1>Board.</h1>
      </div>
      <div className={styles.rightside}>
        <div>
          <div className={styles.Text}>
            <div>Sign In</div>
            <div>Sign in to your account</div>
          </div>

          <div className={styles.SocialMediaContainer}>
            <div onClick={onButtonSignInClick}>
              <img alt="" src="/googleicon-1.svg" />
              <div>Sign in with Google</div>
            </div>
            <div onClick={onButtonSignInClick}>
              <img alt="" src="/apple-1.svg" />
              <div>Sign in with Apple</div>
            </div>
          </div>

          <div className={styles.loginFormContainer}>
            <form
              className={styles.loginForm}
              onSubmit={(e) => onButtonSignInClick(e)}
            >
              <div className={styles.InputContainer}>
                <div className={styles.InputLabel}>Email address</div>
                <input
                  className={styles.InputField}
                  type="text"
                  placeholder="Please Enter Your Email Address"
                  required
                />
              </div>
              <div className={styles.InputContainer}>
                <div className={styles.InputLabel}>Password</div>
                <input
                  className={styles.InputField}
                  type="password"
                  placeholder="Please Enter Your Password"
                  required
                />
              </div>
              <a href="#" className={styles.forgotPassword}>
                Forgot password?
              </a>
              <button className={styles.buttonSignIn}>SignIn</button>
            </form>
            <a href="#" className={styles.DontHaveAccount}>
              <span>{`Don’t have an account? `}</span>
              <span>Register here</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
