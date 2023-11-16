import React from "react";
import Navbar from "../Components/Navbar";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
export default function ProductBuying() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 py-0 my-5 ">
        <div className="flex justify-start flex-column p-0 space-y-3 mb-3 max-w-md">
          {/* Categories Name  */}
          <h1 className="text-xl font-semibold">Sanding Abrasives</h1>
          <h3 className="text-xs">Total No of Product</h3>
          {/* Categories Description Goes HEre  */}
          <h3 className="text-xs">
            Grainger is a leading provider of industrial maintenance, repair,
            and operations (MRO) products to keep businesses running worldwide.
          </h3>
        </div>
        <div className="row px-2">
          <div className="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2  px-4 flex flex-column item-center border">
            <div>
              <img
                alt="Art"
                src="https://static.grainger.com/rp/s/is/image/Grainger/1D272_AS01?$adapimg$&hei=160&wid=160"
                className="h-22 object-cover flex flex-column item-center my-3 hover:border-2 border-black"
              />
              <p className="text-wrap theme_text text-xs font-semibold mb-2">
                SPRAYON Machining Layout Fluid: 16 oz Container Size, Aerosol
                Can, Liquid, Blue{" "}
              </p>
              <p>
                <span className="text_xss text-gray-500">Item</span>
                <span className="text-xs ml-2">264796</span>
              </p>
              <p>
                <span className=" text_xss text-gray-500">Mfr. Model</span>
                <span className="text_xss ml-2">HV2118400G</span>
              </p>
              <p className="my-3 text_xss d-flex ">
                <input type="checkbox" />
                <span className="text_xss ml-2">Compare </span>
              </p>
              <p className="my-1">
                <span className=" text_xss text-gray-500 block">Web Price</span>
                <span className="text-sm  text-green-900 font-semibold">
                  $58.10
                </span>
                <span className="text_xss text-gray-500">/each</span>
              </p>
              <p className="my-1">
                <span className=" text_xss text-gray-500 block">
                  To check availability
                </span>

                <div>
                  <button
                    aria-describedby={id}
                    type="button"
                    onClick={handleClick}
                  >
                    Toggle Popper
                  </button>
                  <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Box sx={{ bgcolor: "background.paper" }}>
                      <div
                        className=" max-w-xs border border-blue-100 bg-white p-3 pr-1 mr-1 shadow-lg sm:p-6 lg:p-8"
                        role="alert"
                      >
                        <p className="font-medium sm:text-lg">Availability</p>
                        <FormControl className="my-2 mx-3">
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel
                              value="female"
                              style={{ width: "70px", height: "40px" }}
                              className="border pr-2 py-1 text-xs font-sm"
                              sx={{
                                "& .MuiSvgIcon-root": {
                                  fontSize: 16,
                                },
                              }}
                              control={
                                <Radio
                                  size="small"
                                  style={{ width: "20px", height: "20px" }}
                                />
                              }
                              label={
                                <span style={{ fontSize: "12px" }}>Female</span>
                              }
                            />
                            <FormControlLabel
                              value="male"
                              className="border pr-2 py-1 text-xs font-sm"
                              style={{ width: "70px", height: "40px" }}
                              sx={{
                                "& .MuiSvgIcon-root": {
                                  fontSize: 16,
                                },
                              }}
                              control={
                                <Radio
                                  size="small"
                                  style={{ width: "20px", height: "20px" }}
                                />
                              }
                              label={
                                <span style={{ fontSize: "12px" }}>Male</span>
                              }
                            />
                          </RadioGroup>
                        </FormControl>

                        <p className="my-2 text-xs text-gray-500">
                          Enter a ZIP Code.
                        </p>
                        <TextField
                          id="outlined-email-input"
                          label={
                            <span style={{ fontSize: "10px" }}>Zip Code</span>
                          }
                          type="email"
                          size="small"
                          style={{
                            width: "74px",
                            height: "40px",
                            marginRight: "5px",
                          }}
                        />
                        <button
                          className="bg-gray-600 text-white w-24 py-1 rounded "
                          style={{ width: "70px", height: "40px" }}
                        >
                          Save
                        </button>
                      </div>
                    </Box>
                  </Popper>
                </div>

                <div className="row ">
                  <div className="col-3" >
                    <TextField
                      id="outlined-email-input"
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: "8px",
                        },
                      }}
                      defaultValue="1"
                      label={<span style={{ fontSize: "10px" }}>Qty</span>}
                      type=""
                      size="small"
                      // style={{
                      //   width: "40px",
                      //   height: "100px",
                      //   marginRight: "5px",
                      // }}
                    />
                  </div>
                  <div className="col-8">
                    <button className="theme_btn p-2 text_xss ml-2 rounded">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
