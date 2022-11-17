import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (proPage) => {
  const { CompProp } = proPage;
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus =
      localStorage.getItem("isLogin")?.toLocaleLowerCase() === "true";

    if (!loginStatus) {
      navigate("/signin");
    }
  }, []);

  return (
    <div>
      <CompProp />
    </div>
  );
};

export default Protected;
