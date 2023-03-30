import { useSelect } from "@mui/base";
import React from "react";
import { useSelector } from "react-redux";
import { Alert } from "@mui/material";

function ErrorAlert(props) {
  //   const showAlerts = useSelector((store) => store.page.showAlerts);
  return (
    <Alert className="w-[90%] mx-auto" severity={props.status}>
      {props.message}
    </Alert>
  );
}

export default ErrorAlert;
