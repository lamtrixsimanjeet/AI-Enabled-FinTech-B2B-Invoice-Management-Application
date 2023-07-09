import React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Button, makeStyles, Dialog, TextField, Backdrop, DialogActions, DialogContent, DialogTitle, DialogContentText, Slide} from "@material-ui/core";
import EditData from "./EditData";


//**********************************styling****************************************************************************
let useStyle = makeStyles({
  root: {
    backgroundColor: "#666666",
    color: "white",
    "& .MuiCheckbox-root": { color: "#fc7500" , },
    "& .MuiDataGrid-iconSeparator": { visibility: "hidden" },
    "& .MuiDataGrid-columnHeaderTitle": {
      overflow: "hidden",
      fontWeight: 500,
      whiteSpace: "normal",
      lineHeight: "20px",
      padding: "0 0px",
      textAlign: "left",
    },
    fontSize: "13px",
    "& .MuiTablePagination-root": { color: "white" },
  },
  dialog: {
    padding: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
//**********************************Function component********************************************** */
function DataGridMl6() {
  //*********************************USESTATES********************************************************8*
  const [data, setData] = useState([]);
  let [disable, setDisable] = useState(true);
  const [butDisColor, setButDisColor] = useState("#a9a9a9");
  const [invoiceId, setInvoiceId] = useState([]);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState({
    "slNo": 0,
    "customerOrderId": 0,
    "salesOrg": 0,
    "distributionChannel": "",
    "division": "",
    "releasedCreditValue": 0,
    "purchaseOrderType": "",
    "companyCode": 0,
    "orderCreationDate": "",
    "orderCreationTime": "",
    "creditControlArea": "",
    "soldToParty": 0,
    "orderAmount": 0,
    "requestedDeliveryDate": "",
    "orderCurrency": "",
    "creditStatus": "",
    "customerNumber": 0,
    "amountInUSD": 0,
    "uniqueCustId": 0
});
const [rowsPerPage, setRowsPerPage] = useState(10);


  //*************************************************fetch users api call function***********************************************
  const fetchUsers = async () => {
    await axios
      .get("h2h_milestone_3/DataLoadingServlet")
      .then((resp) => {
        setData(resp.data);
      })
      .catch((error) => console.log("Error while fetching data : ", error));
  };

  //***********************************rows selector function***********************************************
  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => data.find((row) => row.slNo === id));
    //console.log(ids)
    console.log(selectedRowsData);
    setDisable(false);
    setButDisColor("#fc7500");
    if (ids.length === 0) {
      setDisable(true);
      setButDisColor("#a9a9a9");
    }
    if (ids.length === 1) {
      setEditData(selectedRowsData[0])
    }
    setInvoiceId(ids);
  };
  console.log(invoiceId);

  useEffect(() => {
    fetchUsers();
  }, []);

  //console.log(data);


  //*******************************************FOR EDIT DATA DIALOG BOX************************************************
  const changeHandler = (event) => {
    const { value, name } = event.target;
    console.log(name, value);
    setEditData((prev) => ({ ...prev, [name]: value }));
  };
  const onClose = async (isDataRequired) => {
    setOpen(false);
    //console.log(isDataRequired ? console.log(editData) : null);
    
    if (isDataRequired){
      await axios
      .post("h2h_milestone_3/UpdateServlet", editData)
      .then((resp) => {
        console.log(resp)
        console.log(editData)
      })
      .catch((error) => console.log("Error while fetching data : ", error));
      fetchUsers();
    }
  };



  //********************************************* DELETE DIALOG BOX**********************************************
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  const [openDelete, setOpenDelete] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = async (a) => {
    setOpenDelete(false);

    if (a){
      await axios
      .post("h2h_milestone_3/DeleteServlet", editData)
      .then((resp) => {
        console.log(resp)
        console.log(editData)
      })
      .catch((error) => console.log("Error while fetching data : ", error));
      fetchUsers();
    }
  };
  
    //***** *********************************************PREDICT**************************************************
  const predictHandler = async()=>{
    await axios.post('http://localhost:5000/predict',editData).then((resp)=>
    {
        console.log(resp.data[0])
        let ydata=editData
        ydata.orderAmount=resp.data[0]
        console.log(ydata)
       axios
      .post("h2h_milestone_3/UpdateServlet", ydata)
      .then((resp) => {
        console.log(resp)
      })
      .catch((error) => console.log("Error while fetching data : ", error));
        
    })
    .catch((error)=>console.log("Error while fetching data : ", error))
    fetchUsers();
  };


//***************************************Rows and Columns************************************************************ */

  //**************************************columns defined for datagrid****************************************************
  const columns = [
    {
      field: "slNo",
      headerName: "Sl No",
      minwidth: 50,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "customerOrderId",
      headerName: "CUSTOMER ORDER ID",
      width: 170,
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "salesOrg",
      headerName: "SALES ORG",
      width: 150,
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "distributionChannel",
      headerName: "DISTRIBUTION CHANNEL",
      width: 300,
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "companyCode",
      headerName: "COMPANY CODE",
      width: 150,
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "orderCreationDate",
      headerName: "ORDER CREATION DATE",
      width: 200,
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "orderAmount",
      headerName: "ORDER AMOUNT",
      width: 150,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "orderCurrency",
      headerName: "ORDER CURRENCY",
      width: 160,
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "customerNumber",
      headerName: "CUSTOMER NUMBER",
      width: 200,
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "amountInUSD",
      headerName: "AMOUNT IN USD",
      width: 150,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
  ];

  //**************************************************rows defined for datagrid****************************************
  const rows = data.map((row) => ({
    slNo: row.slNo,
    customerOrderId: row.customerOrderId,
    salesOrg: row.salesOrg,
    distributionChannel: row.distributionChannel,
    companyCode: row.companyCode,
    orderCreationDate: row.orderCreationDate,
    orderAmount: row.orderAmount,
    orderCurrency: row.orderCurrency,
    customerNumber: row.customerNumber,
    amountInUSD: row.amountInUSD,
  }));

  const classes = useStyle();

  return (
    <>
      <div style={{ height: 500, width: "100%"}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={rowsPerPage}
          rowsPerPageOptions={[10,20,30,40,50]}
          checkboxSelection
          hideFooterSelectedRowCount
          disableSelectionOnClick
          getRowId={(row) => row.slNo}
          classes={{
            root: classes.root,
          }}
          onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
          onPageSizeChange={(newPageSize) => {setRowsPerPage(newPageSize)}}
          pagination
        />
      </div>
      <div style={{ backgroundColor :"#666666"}}>
        <button
          style={{
            marginRight: "8px",
            backgroundColor: "#fc7500",
            padding: "10px",
            borderRadius: "8px",
            color: "white",
            borderColor: "#fc7500",
          }}
          onClick={() => {
            fetchUsers();
          }}
        >
          REFRESH DATA
        </button>
        <button
          style={{
            marginRight: "8px",
            backgroundColor: butDisColor,
            padding: "10px",
            borderRadius: "8px",
            color: "white",
            borderColor: butDisColor,
          }}
          disabled={disable}
          onClick={() => setOpen(true)}
        >
          EDIT
        </button>
        <Dialog
        open={open}
        onClose={onClose}
        BackdropComponent={Backdrop}
        className={classes.modal}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <DialogContent>
        <h1>Edit</h1>
          <TextField
            name="orderCurrency"
            value={editData.orderCurrency}
            defaultValue={editData.orderCurrency}
            onChange={changeHandler}
            label="ORDER CURRENCY"
            variant="outlined"
            style={{marginRight: "10px"}}
          />
          <TextField
            name="companyCode"
            value={editData.companyCode}
            defaultValue={editData.companyCode}
            onChange={changeHandler}
            label="COMPANY CODE"
            variant="outlined"
          />
          <br />
          <TextField
            name="distributionChannel"
            value={editData.distributionChannel}
            defaultValue={editData.distributionChannel}
            onChange={changeHandler}
            label="DISTRIBUTION CHANNEL"
            variant="outlined"
            style={{marginTop: "10px", width: 460}}
          />
          <br />
          </DialogContent>
          <DialogActions>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => onClose(true)}
          >
            EDIT
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => onClose(false)}
          >
            CANCEL
          </Button>
          </DialogActions>
      </Dialog>
        <button
          style={{
            marginRight: "8px",
            backgroundColor: butDisColor,
            padding: "10px",
            borderRadius: "8px",
            color: "white",
            borderColor: butDisColor,
          }}
          disabled={disable}
          onClick={() => {handleClickOpen()}}
        >
          DELETE
        </button>
        <Dialog
        open = {openDelete}
        onClose = {handleCloseDelete}
        BackdropProps={{
          timeout: 1000,
        }}
        //keepMounted
        // aria-labelledby="alert-dialog-slide-title"
        // aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Delete Records?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete these
            record(s) ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleCloseDelete(false)} color="primary" variant="outlined">
            CANCEL
          </Button>
          <Button onClick={() => handleCloseDelete(true)} color="primary" variant="outlined">
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
        <button
          style={{
            marginRight: "8px",
            backgroundColor: butDisColor,
            padding: "10px",
            borderRadius: "8px",
            color: "white",
            borderColor: butDisColor,
          }}
          disabled={disable}
          onClick ={()=> predictHandler()}
        >
          PREDICT
        </button>
      </div>
    </>
  );
}

export default DataGridMl6;