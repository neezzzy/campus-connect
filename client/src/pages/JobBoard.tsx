import React from "react";
import CompanyList from "../components/CompanyList";
import NavBar from "../components/NavBar";


type Props = {};

const JobBoard = (props: Props) => {
  return (
    <>
      <NavBar />
      <CompanyList />
    </>
  );
};

export default JobBoard;
