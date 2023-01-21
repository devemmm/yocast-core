import React from "react";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";
function SuccessAlert(props) {
  const showAlerts = useSelector((store) => store.page.showAlerts);
  return (
    <Alert className="w-[90%] mx-auto" severity={props.status}>
      {props.message}
    </Alert>
  );
}

export default SuccessAlert;
