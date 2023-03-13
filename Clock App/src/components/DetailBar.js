import React from "react";
import { useFetch } from "../hooks/useFetch";
import "./DetailBar.css";

export default function DetailBar({ isClicked, isMorning }) {
  const { data: detail } = useFetch("https://worldtimeapi.org/api/ip");

  return (
    <section
      className={`detailBar 
      ${isMorning ? "detailBar--day" : "detailBar--night"}  
      ${isClicked ? "move" : null}`}>
      <div className="detailBar__wrapper">
        <aside className="detailBar__aside  detailBar__aside-left">
          <div className="detailBar__row">
            <p className="detailBar__timezone-text text">Current Timezone</p>
            <p className="detailBar__timezone-city text-api">
              {detail && detail.timezone}
            </p>
          </div>
          <div className="detailBar__row">
            <p className="detailBar__days-year-text text">Day Of The Year</p>
            <p className="detailBar__days-year-days text-api">
              {detail && detail.day_of_year}
            </p>
          </div>
        </aside>
        <aside className="detailBar__aside">
          <div className="detailBar__row">
            <p className="detailBar__days-week-text text">Day Of The Week</p>
            <p className="detailBar__days-week-days text-api">
              {detail && detail.day_of_week}
            </p>
          </div>
          <div className="detailBar__row">
            <p className="detailBar__week-text text">Week Number</p>
            <p className="detailBar__week-number text-api">
              {detail && detail.week_number}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
