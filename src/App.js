import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Home from "./components/parts/home/Home";
import TopBar from "./components/layout/TopBar";
import BottomBar from "./components/layout/BottomBar";
import LeftBar from "./components/layout/LeftBar";
import Spacer from "./components/layout/Spacer";
import AboutMe from "./components/parts/home/AboutMe";
import Experience from "./components/parts/profession/Experience";
import Education from "./components/parts/education/Education";

function App() {
  const matches = useMediaQuery("(min-width:800px)"); // is greater than 600
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const getData = (address, setData) => {
    fetch(address, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    getData("/data.json", setData);
  }, []);

  return (
    <>
      <TopBar
        style={{
          zIndex: 5,
        }}
        title={data?.general.name}
        setOpen={setOpen}
        open={open}
      ></TopBar>
      <div>
        <LeftBar open={open} setOpen={setOpen}></LeftBar>
        <Spacer dim={70}></Spacer>
        <Home data={data?.general} home={data?.home}></Home>
        <Spacer dim={50}></Spacer>
        <AboutMe aboutme={data?.aboutme}></AboutMe>
        <br></br>
        <div
          style={{
            display: "flex",
            flexDirection: matches ? "row" : "column",
            justifyContent: "center",
          }}
        >
          <Experience experiences={data?.experiences}></Experience>
          <Education educations={data?.educations}></Education>
        </div>
      </div>
      <p></p>
      <br></br>
      {matches ? null : <BottomBar></BottomBar>}
    </>
  );
}

export default App;
