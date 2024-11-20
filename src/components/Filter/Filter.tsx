"use client";

import { FC, useState } from "react";
import "./Filter.css";

const Filter: FC = () => {
  const [activeTab, setActiveTab] = useState("accommodation");
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1 гость, 1 номер");

  return (
    <div className="filter">
      {/* <div className="filter_tabs">
        <div 
          className={`filter_tab ${activeTab === "accommodation" ? "active" : ""}`}
          onClick={() => setActiveTab("accommodation")}
        >
          Проживание
        </div>
        <div 
          className={`filter_tab ${activeTab === "excursions" ? "active" : ""}`}
          onClick={() => setActiveTab("excursions")}
        >
          Экскурсии
        </div>
        <div 
          className={`filter_tab ${activeTab === "entertainment" ? "active" : ""}`}
          onClick={() => setActiveTab("entertainment")}
        >
          Развлечения
        </div>
      </div> */}

      <div className="filter_inputs">
        <div className="filter_input">
          <label>Направление</label>
          <input
            type="text"
            placeholder="Куда вы отправляетесь"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className="filter_input">
          <label>Заезд</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>

        <div className="filter_input">
          <label>Выезд</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>

        <div className="filter_input">
          <label>Гости</label>
          <input
            type="text"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>

        <button className="filter_button">Поиск</button>
      </div>
    </div>
  );
};

export default Filter;
