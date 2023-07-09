import {
  Backdrop,
  Button,
  Modal,
  TextField,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
//**********************************************STYLING************************************************************* */
const useStyles = makeStyles({
  modal: {
    padding: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
// ***************************************Functional COMPONENT******************************************************
export default function EditData() {
  const classes = useStyles();
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
  });
//*****************************************************USESTATE*************************************************** */
  const [open, setOpen] = useState(false);

  const changeHandler = (event) => {
    const { value, name } = event.target;
    console.log(name, value);
    setdata((prev) => ({ ...prev, [name]: value }));
  };
  const onClose = (isDataRequired) => {
    setOpen(false);
    console.log(isDataRequired ? console.log(data) : null);
  };
  return (
    <div>
      <button onClick={() => setOpen(true)}>Click me to open Modal</button>
      <Modal
        open={open}
        onClose={onClose}
        BackdropComponent={Backdrop}
        className={classes.modal}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <form>
          <h1>somedf</h1>
          <TextField
            name="username"
            value={data.username}
            defaultValue={data.username}
            onChange={changeHandler}
            label="Username"
          />
          <br />
          <TextField
            name="password"
            value={data.password}
            defaultValue={data.password}
            onChange={changeHandler}
            label="password"
          />
          <br />
          <TextField
            name="email"
            value={data.email}
            defaultValue={data.email}
            onChange={changeHandler}
            label="Email"
          />
          <br />
          <TextField
            name="mobile"
            value={data.mobile}
            defaultValue={data.mobile}
            onChange={changeHandler}
            label="mobile"
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => onClose(true)}
          >
            Submit Data
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onClose(false)}
          >
            Cancel
          </Button>
        </form>
      </Modal>
    </div>
  );
}
