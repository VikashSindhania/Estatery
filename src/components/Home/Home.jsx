import React, { useState, useEffect } from "react";
import "./Home.css";
import Card from "../Card/Card";
import { data } from "./data";
import { IoConstructOutline } from "react-icons/io5";

function Home() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [filters, setFilters] = useState({
    location: null,
    moveIn: null,
    price: null,
    property: null,
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleLocation = (e) => {
    setFilters((prev) => ({ ...prev, location: e.target.value }));
  };

  const handleMoveIn = (e) => {
    setFilters((prev) => ({ ...prev, moveIn: e.target.value }));
  };

  const handlePrice = (e) => {
    setFilters((prev) => ({ ...prev, price: e.target.value }));
  };

  const handleProperty = (e) => {
    setFilters((prev) => ({ ...prev, property: e.target.value }));
  };

  const handleFilters = () => {
    console.log("started");
    let arr = data;

    //location
    if (filters.location !== null)
      arr = arr.filter((item) =>
        item.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    //moveIn

    if (filters.moveIn !== null)
      arr = arr.filter((item) =>
        item.moveInDate.toLowerCase().includes(filters.moveIn.toLowerCase())
      );

    //price

    if (filters.price !== null) {
      //500 - 1000
      if (filters.price == 500)
        arr = arr.filter((item) => item.cost >= 500 && item.cost <= 1000);
      // 1000 - 1500
      if (filters.price == 1000)
        arr = arr.filter((item) => item.cost >= 1000 && item.cost <= 1500);

      //1500 - 2000
      if (filters.price == 1500)
        arr = arr.filter((item) => item.cost >= 1500 && item.cost <= 2000);

      //2000+
      if (filters.price == 2000) arr = arr.filter((item) => item.cost >= 2000);
    }

    //property

    if (filters.property !== null) {
      arr = arr.filter((item) =>
        item.propertyType.toLowerCase().includes(filters.property.toLowerCase())
      );
    }

    arr.length > 0 ? setFilteredData(arr) : setFilteredData(null);
  };

  //Search
  useEffect(() => {
    const arr = data.filter((d) =>
      d.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(arr);
  }, [search]);

  return (
    <div className="home-container">
      <div className="header-container">
        <h1>Search Properties to Rent</h1>
        <input
          value={search}
          onChange={handleSearch}
          placeholder="Search properties"
        />
      </div>
      <div className="filter-container">
        <div className="select-container">
          <label>Location</label>
          <select id="location" onChange={handleLocation}>
            <option value="" selected disabled>
              Select Location
            </option>

            <option value="usa">New York, USA</option>
            <option value="india">Banglore, India</option>
            <option value="australia">Australia</option>
            <option value="shopping">Shopping Malls</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>
        <div className="select-container">
          <label>When</label>
          <select id="moveInt" onChange={handleMoveIn}>
            <option value="" selected disabled>
              Select Move-in Date
            </option>
            <option value="october">1 October 2022</option>
            <option value="november">1 Novemeber 2022</option>
            <option value="december">1 December 2022</option>
            <option value="january">1 January 2023</option>
          </select>
        </div>
        <div className="select-container">
          <label>Price</label>
          <select id="price" onChange={handlePrice}>
            <option value="" selected disabled>
              Select Price
            </option>
            <option value="500">$500 - $1000</option>
            <option value="1000">$1000 - $1500</option>
            <option value="1500">$1500 - $2000</option>
            <option value="2000">$2000+</option>
          </select>
        </div>
        <div className="select-container">
          <label>Property Type</label>
          <select id="property" onChange={handleProperty}>
            <option value="" selected disabled>
              Select Property Type
            </option>
            <option value="house">Houses</option>
            <option value="office">Offices</option>
            <option value="mansion">Mansions</option>
            <option value="shopping">Shopping Malls</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>
        <button className="btn btn-primary" onClick={handleFilters}>
          Search
        </button>
      </div>
      <div className="card-header">
        {filteredData ? (
          filteredData.map((c, index) => (
            <Card data={c} key={index.toLocaleString()} />
          ))
        ) : (
          <h1>No Properties Found</h1>
        )}
      </div>
    </div>
  );
}

export default Home;
