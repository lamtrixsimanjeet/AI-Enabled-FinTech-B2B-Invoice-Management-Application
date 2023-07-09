import React from "react";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
//******************************************Function Component****************************************************************** */
function SearchDataGrid() {
  //****************************************USESTATE************************************************************** */
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState({id:null})
  

  const changeHandler = (event) => {
    const { value, name } = event.target;
    console.log(name, value);
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const onClose = async (isDataRequired) => {
    setOpen(false);
    //console.log(isDataRequired ? console.log(editData) : null);

    if (isDataRequired) {
      await axios
        .get("h2h_milestone_3/DataLoadingServlet")
        .then((resp) => {
          console.log("hi iii");
        })
        .catch((error) => console.log("Error while fetching data : ", error));
      
    } 
  };

  return (
    <>
      <div>
        <form noValidate autoComplete="off">
          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <TextField
              name="id"
              label="Search Customer Order Id"
              variant="outlined"
              style={{ marginRight: "10px" }}
              onChange={changeHandler}
              value={editData.id}
            />
            <button
              style={{
                marginRight: "10px",
                marginBottom: "20px",
                backgroundColor: "#8fd163",
                padding: "10px",
                borderRadius: "4px",
                borderColor: "black",
              }}
              onClick={() => {onClose(true)}}
            >
              Search
            </button>
            <button
              style={{
                marginRight: "10px",
                marginBottom: "20px",
                backgroundColor: "red",
                padding: "10px",
                borderRadius: "4px",
                borderColor: "black",
              }}
              onClick={() => {onClose(false)}}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchDataGrid;
