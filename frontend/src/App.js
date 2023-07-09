import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DataGridMl6 from "./Component/DataGridMl6";
import { Button, Tab, Tabs, makeStyles } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import { useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { red } from "@material-ui/core/colors";
import TabsDemo from "./Component/TabsDemo";
import Tabs2 from "./Component/Tabs2";

const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: "white",
    height: "3px",
  },
  root: {
    backgroundColor: "#666666",
    padding: "10px",
    '& .MuiTabPanel-root':{}
  }
}));

const App = () => {
  const classes = useStyles();
  const [value, setValue] = useState("0");
  const changeTab = (value) => {
    setValue(value);
  };
  return (
    <>
      <Header/>
      <Tabs2/>
      <Footer/>
    </>
  );
};

export default App;
