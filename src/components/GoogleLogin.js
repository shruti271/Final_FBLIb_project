import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google";
import React from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { gLogin, GoggleRegisterAuth, gRefister } from "../services";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

function GoogleAuthLogin() {
  const navigate = useNavigate();
  //   const onsucLogIn = useGoogleLogin({
  //     onSuccess: codeResponse => console.log(codeResponse),
  //   });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GoogleOAuthProvider clientId="1051506495207-q9t49sm79f7e958lfc5r1fu17blputsp.apps.googleusercontent.com">
        {/* <Button onClick={()=>onsucLogIn}>Sign In Google</Button> */}

        <GoogleLogin
          // type="standard"
          // shape="pill"
          logo_alignment="left"
          size="medium"
          // locale="gudsgawu"
          onSuccess={async (credentialResponse) => {
            const abc =await axios.post(
              `${process.env.REACT_APP_API_URL}/api/googleauth/`,
              jwt_decode(credentialResponse.credential, {
                credential: true,
              })
            );
            // var a = jwt_decode(credentialResponse.credential, {
            //   credential: true,
            // });

            // var abc = await gRefister(a);
            // console.log("888888888888888888888", abc);
            gLogin({ email: abc.data.data.email }).then(() => {
                localStorage.setItem("is_alive", true);
                localStorage.setItem("email", abc.data.data.email);
                navigate("/");
              });
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default GoogleAuthLogin;
