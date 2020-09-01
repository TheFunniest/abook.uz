import React from "react";
import "./styles.scss";
import { ReactComponent as AppleIcon } from "../../assets/images/app-store.svg";
import { ReactComponent as GooglePlayIcon } from "../../assets/images/google-play.svg";

const StoreLinks = () => {
  return (
    <>
      <a href="https://apple.com">
        <div className="store">
          <AppleIcon />
          <p>
            Доступно на <br /> AppStore
          </p>
        </div>
      </a>
      <a href="https://google.com">
        <div className="store">
          <GooglePlayIcon />
          <p>
            Доступно на <br /> Google Play
          </p>
        </div>
      </a>
    </>
  );
};

export default StoreLinks;
