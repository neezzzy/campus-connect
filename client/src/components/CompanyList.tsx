import React, { useState, useCallback, useEffect } from "react";
import Company from "./Company";
import axios from "axios";
import SearchBar from "./SearchBar";

const CompanyList = () => {
  const [companiesList, setCompaniesList] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("companyName");
  const [orderBy, setOrderBy] = useState("asc");

  const filteredCompanies = companiesList
    .filter((item) => {
      return item.companyName.toLowerCase().includes(query.toLowerCase());
    })
    .sort((a, b) => {
      const order = orderBy === "asc" ? 1 : -1;

      if (sortBy === "size") {
        return a[sortBy] < b[sortBy] ? -1 * order : 1 * order;
      } else {
        return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
          ? -1 * order
          : 1 * order;
      }
    });

  const fetchData = useCallback(() => {
    axios
      .get("./data.json")
      .then((response) => response.data)
      .then((data) => {
        setCompaniesList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex-col">
      <SearchBar
        onQueryChange={(myQuery) => setQuery(myQuery)}
        orderBy={orderBy}
        onOrderByChange={(mySort) => setOrderBy(mySort)}
        sortBy={sortBy}
        onSortByChange={(mySort) => setSortBy(mySort)}
      />
      {filteredCompanies.map((el) => (
        <Company
          key={el.id}
          companyName={el.companyName}
          location={el.location}
          size={el.size}
          projectName={el.projectName}
          projectDescription={el.projectDescription}
          logo={el.logo}
        />
      ))}
    </div>
  );
};

export default CompanyList;
