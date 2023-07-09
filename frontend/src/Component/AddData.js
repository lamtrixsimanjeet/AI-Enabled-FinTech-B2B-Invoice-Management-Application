import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      //margin: theme.spacing(5),
      //width: '25ch',
    },
    backgroundColor: "#666666",
  },
}));

function AddData() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState({
    slNo: null,
    customerOrderId: null,
    salesOrg: null,
    distributionChannel: "",
    division: "",
    releasedCreditValue: null,
    purchaseOrderType: "",
    companyCode: null,
    orderCreationDate: "",
    orderCreationTime: "",
    creditControlArea: "",
    soldToParty: null,
    orderAmount: null,
    requestedDeliveryDate: "",
    orderCurrency: "",
    creditStatus: "",
    customerNumber: null,
    amountInUSD: null,
    uniqueCustId: null,
  });

  const changeHandler = (event) => {
    const { value, name } = event.target;
    console.log(name, value);
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  

  const onClose3 = async (isDataRequired) => {
    setOpen(false);
    //console.log(isDataRequired ? console.log(editData) : null);

    if (isDataRequired) {
      await axios
        .post("h2h_milestone_3/AddServlet", editData)
        .then((resp) => {
          console.log(resp);
          console.log(editData);
        })
        .catch((error) => console.log("Error while fetching data : ", error));
      setEditData({
        slNo: 0,
        customerOrderId: 0,
        salesOrg: 0,
        distributionChannel: "",
        division: "",
        releasedCreditValue: 0,
        purchaseOrderType: "",
        companyCode: 0,
        orderCreationDate: "",
        orderCreationTime: "",
        creditControlArea: "",
        soldToParty: 0,
        orderAmount: 0,
        requestedDeliveryDate: "",
        orderCurrency: "",
        creditStatus: "",
        customerNumber: 0,
        amountInUSD: 0,
        uniqueCustId: 0,
      });
    }
    else {
        setEditData({
            slNo: null,
            customerOrderId: 0,
            salesOrg: 0,
            distributionChannel: "",
            division: "",
            releasedCreditValue: 0,
            purchaseOrderType: "",
            companyCode: 0,
            orderCreationDate: "",
            orderCreationTime: "",
            creditControlArea: "",
            soldToParty: 0,
            orderAmount: 0,
            requestedDeliveryDate: "",
            orderCurrency: "",
            creditStatus: "",
            customerNumber: 0,
            amountInUSD: 0,
            uniqueCustId: 0,
          });
    }
  };

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <div style={{ marginTop: "0px" }}>
          <TextField
            name="customerOrderId"
            label="CUSTOMER ORDER ID"
            variant="outlined"
            style={{
              marginRight: "20px",
              marginLeft: "10px",
              width: "23%",
              backgroundColor: "white",
            }}
            value={editData.customerOrderId}
            onChange={changeHandler}
          />
          <TextField
            name="salesOrg"
            label="SALES ORG"
            variant="outlined"
            style={{
              marginRight: "20px",
              marginLeft: "10px",
              width: "23%",
              backgroundColor: "white",
            }}
            value={editData.salesOrg}
            onChange={changeHandler}
          />
          <TextField
            name="distributionChannel"
            label="DISTRIBUTION CHANNEL"
            variant="outlined"
            style={{
              marginRight: "20px",
              marginLeft: "10px",
              width: "47%",
              backgroundColor: "white",
            }}
            value={editData.distributionChannel}
            onChange={changeHandler}
          />
          <br />
          <br />
          <br />
          <TextField
            name="customerNumber"
            label="CUSTOMER NUMBER"
            variant="outlined"
            style={{
              marginRight: "20px",
              marginLeft: "10px",
              width: "23%",
              backgroundColor: "white",
            }}
            value={editData.customerNumber}
            onChange={changeHandler}
          />
          <TextField
            name="companyCode"
            label="COMPANY CODE"
            variant="outlined"
            style={{
              marginRight: "20px",
              marginLeft: "10px",
              width: "23%",
              backgroundColor: "white",
            }}
            value={editData.companyCode}
            onChange={changeHandler}
          />
          <TextField
            name="orderCurrency"
            label="ORDER CURRENCY"
            variant="outlined"
            style={{
              marginRight: "20px",
              marginLeft: "10px",
              width: "14%",
              backgroundColor: "white",
            }}
            value={editData.orderCurrency}
            onChange={changeHandler}
          />
          <TextField
            name="amountInUSD"
            label="AMOUNT IN USD"
            variant="outlined"
            style={{
              marginRight: "20px",
              marginLeft: "10px",
              width: "14%",
              backgroundColor: "white",
            }}
            value={editData.amountInUSD}
            onChange={changeHandler}
          />
          <TextField
            name="orderCreationDate"
            label="ORDER CREATION DATE"
            type="date"
            variant="outlined"
            style={{
              marginRight: "20px",
              marginLeft: "10px",
              width: "14%",
              backgroundColor: "white",
            }}
            value={editData.orderCreationDate}
            onChange={changeHandler}
          />
        </div>
        <br />
        <br />
        <TextField
          name="slNo"
          label="slNo"
          variant="outlined"
          style={{
            marginRight: "20px",
            marginLeft: "10px",
            width: "14%",
            backgroundColor: "white",
          }}
          value={editData.slNo}
          onChange={changeHandler}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "#fc7500",
            width: "49%",
            marginRight: "10px",
          }}
          onClick={() => {
            onClose3(true);
          }}
        >
          ADD
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "red", width: "49%" }}
          onClick={() => {
            onClose3(false);
          }}
        >
          CLEAR DATA
        </Button>
      </form>
    </>
  );
}

export default AddData;
