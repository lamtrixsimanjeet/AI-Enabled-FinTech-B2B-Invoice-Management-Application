// import { AppBar, Button, Tab, Tabs, makeStyles } from "@material-ui/core";
// import { TabContext, TabPanel } from "@material-ui/lab";
import { Button, Grid, Paper, Tab, Tabs, makeStyles } from "@material-ui/core";
import { TabContext, TabPanel } from "@material-ui/lab";
import React from "react";
import { useState } from "react";
import DataGridMl6 from "./DataGridMl6";
import axios from "axios";
import AddData from "./AddData";
import TextField from "@material-ui/core";
import SearchDataGrid from "./SearchDataGrid";
import {GridToolbarQuickFilter} from "@mui/x-data-grid"
//***********************************************STYLING******************************************************* */
const useStyles = makeStyles((theme) => ({
  tabpanel: {
    padding: "0px",
  },
  tabs: {
    backgroundColor: "white",
    height: "3px",
  },
  root: {
    color: "white",
    backgroundColor: "#666666",
  },
  tabpanel2: {
    padding: "30px",
    backgroundColor: "#666666",
  },
}));

//*******************************************function Component************************************************************* */

const Tabs2 = () => {
  //******************************************USESTATES***************************************************************** */
  const classes = useStyles();
  const [value, setValue] = useState("0");
  const [searchTabVisible, setSearchTabVisible] = useState(false);
  const changeTab = (value) => {
    setValue(value);
  };
  
  const onClose = () => {
    setSearchTabVisible(true)
  }


  return (
    <>
      <TabContext value={value}>
        <Tabs
          value={value}
          classes={{
            indicator: classes.tabs,
            root: classes.root,
          }}
        >
          <Tab
            label="HOME PAGE"
            value={"0"}
            onClick={() => changeTab("0")}
          ></Tab>
          <Tab
            label="ADD DATA"
            value={"1"}
            onClick={() => changeTab("1")}
          ></Tab>
          {searchTabVisible === false ? (
            ""
          ) : (
            <Tab
              label="SEARCH RESULT"
              value={"4"}
              onClick={() => changeTab("4")}
            ></Tab>
          )}
          <Tab
            label="ANALYTICS VIEW"
            value={"2"}
            onClick={() => changeTab("2")}
          ></Tab>
        </Tabs>

        <TabPanel classes={{ root: classes.tabpanel }} value={"0"}>
        <div style={{textAlign: "right", backgroundColor: "#666666"}}>
        <button
        style={{
          marginRight: "20px",
          padding: "10px",
          borderRadius: "4px",
        }}
        onClick={() => {onClose()}}
        >
          Search Customer Order Id
        </button>
        <button
        style={{
          marginRight: "10px",
          marginBottom: "20px",
          backgroundColor: "#8fd163",
          padding: "10px",
          borderRadius: "4px",
          borderColor: "black",
        }}
        onClick={() => {onClose()}}
      >
        Advance <br /> Search
      </button>
        </div>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <DataGridMl6 />
                </Paper>
              </Grid>

              <Grid item xs={8} sm={4}>
                <Paper className={classes.paper}></Paper>
              </Grid>
            </Grid>
          </div>
        </TabPanel>
        <TabPanel classes={{ root: classes.tabpanel2 }} value={"1"}>
          <AddData />
        </TabPanel>
        <TabPanel classes={{ root: classes.tabpanel }} value={"2"}>
          <h1>Three</h1>
        </TabPanel>
        <TabPanel classes={{ root: classes.tabpanel }} value={"4"}>
          <h1>this is my search</h1>
        </TabPanel>
      </TabContext>
    </>
  );
};


export default Tabs2;
