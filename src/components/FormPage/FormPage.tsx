import React, { useEffect, useState } from "react";
import "./formPage.css";
import membersData from "../../../data";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

import { GrFilter, GrSearch } from "react-icons/gr";

const FormPage = () => {
  //FILTER
  const [showFilter, setShowFilter] = useState(false);
  const [maleIsChecked, setMaleIsChecked] = useState(true);
  const [femaleIsChecked, setFemaleIsChecked] = useState(true);
  const [activeChecked, setActiveIsChecked] = useState(true);
  const [inactiveIsChecked, setInactiveIsChecked] = useState(true);

  const [showStatus, setShowStatus] = useState(true);
  const [showGender, setShowGender] = useState(true);

  const handleMaleCheck = (e) => {
    setMaleIsChecked((prev) => !prev);
  };
  const handleFemaleCheck = (e) => {
    setFemaleIsChecked((prev) => !prev);
  };

  //PAGINATION
  const [currPage, setCurrPage] = useState(1);
  const cards = 9;
  const lastIndex = currPage * cards;
  const firstIndex = lastIndex - cards;
  const cardsData = membersData;
  const pageNum = Math.ceil(membersData.length / cards);
  const nums = [...Array(pageNum + 1).keys()].slice(1);

  const nextPage = () => {
    if (currPage !== lastIndex && currPage < 6) {
      setCurrPage(currPage + 1);
    }
  };

  const changeCurrentPage = (n) => {
    setCurrPage(n);
  };

  const prevPage = () => {
    if (currPage !== firstIndex && currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };

  return (
    <div className="container">
      {showFilter && (
        <div className="filterbar">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              cursor: "pointer",
            }}
            onClick={() => setShowStatus((prev) => !prev)}
          >
            {showStatus ? (
              <IoIosArrowForward
                className="arrows"
                style={{ color: "#274D78", marginLeft: "14px" }}
              />
            ) : (
              <IoIosArrowDown
                className="arrows"
                style={{ color: "#274D78", marginLeft: "14px" }}
              />
            )}
            <h4>სტუდენტის სტატუსი</h4>
          </div>

          {showStatus && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "7px",
                marginLeft: "44px",
              }}
            >
              <label
                htmlFor=""
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "800",
                  accentColor: "#3669A2",
                }}
              >
                <input
                  type="checkbox"
                  value="active"
                  checked={activeChecked}
                  onChange={() => setActiveIsChecked((prev) => !prev)}
                />
                ACTIVE
              </label>

              <label
                htmlFor=""
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "800",
                  accentColor: "#3669A2",
                }}
              >
                <input
                  type="checkbox"
                  value="inactive"
                  checked={inactiveIsChecked}
                  onChange={() => setInactiveIsChecked((prev) => !prev)}
                />
                INACTIVE
              </label>
            </div>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              cursor: "pointer",
            }}
            onClick={() => setShowGender((prev) => !prev)}
          >
            {showGender ? (
              <IoIosArrowForward
                className="arrows"
                style={{ color: "#274D78", marginLeft: "14px" }}
              />
            ) : (
              <IoIosArrowDown
                className="arrows"
                style={{ color: "#274D78", marginLeft: "14px" }}
              />
            )}
            <h4>სქესი</h4>
          </div>

          {showGender && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "7px",
                marginLeft: "44px",
              }}
            >
              <label
                htmlFor=""
                style={{
                  fontFamily: "Montserrat",
                  accentColor: "#3669A2",
                  fontWeight: "800",
                }}
              >
                <input
                  type="checkbox"
                  value="female"
                  checked={femaleIsChecked}
                  onChange={handleFemaleCheck}
                />
                FEMALE
              </label>
              <label
                htmlFor=""
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "800",
                  accentColor: "#3669A2",
                }}
              >
                <input
                  type="checkbox"
                  value="male"
                  checked={maleIsChecked}
                  onChange={handleMaleCheck}
                  style={{ color: "#3669A2" }}
                />
                MALE
              </label>
            </div>
          )}
        </div>
      )}

      <nav>
        <button id="filter" onClick={() => setShowFilter((prev) => !prev)}>
          <GrFilter
            size={20}
            style={{
              marginRight: "30px",
            }}
          />
          <p style={{ marginRight: "50px" }}>filter</p>
        </button>

        <div className="searchbar" style={{ position: "relative" }}>
          <GrSearch
            style={{
              position: "absolute",
              top: "9px",
              left: "12px",
            }}
            size={24}
          />
          <input type="text" id="search" style={{ textAlign: "center" }} />
        </div>
      </nav>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>სტუდენტის სახელი და გვარი</th>
              <th>სტატუსი</th>
              <th>სქესი</th>
              <th style={{ position: "relative" }}>
                ქულები
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: "20px",
                    right: "40px",
                    color: "#767777",
                  }}
                >
                  <IoIosArrowUp size={10} />
                  <IoIosArrowDown size={10} />
                </div>
              </th>
              <th>პირადი ნომერი</th>
              <th>მაილი</th>
              <th>მობილურის ნომერი</th>
              <th>მისამართი</th>
              <th>დაბადების თარიღი</th>
            </tr>
          </thead>
          <tbody>
            {cardsData
              .filter((i) => {
                if (!maleIsChecked && !femaleIsChecked) {
                  return null;
                } else if (maleIsChecked && !femaleIsChecked) {
                  return i.gender == "male";
                } else if (!maleIsChecked && femaleIsChecked) {
                  return i.gender == "female";
                } else {
                  return i;
                }
              })
              .filter((i, n, array) => {
                if (!activeChecked && !inactiveIsChecked) {
                  return null;
                } else if (activeChecked && !inactiveIsChecked) {
                  return i.status == "active";
                } else if (!activeChecked && inactiveIsChecked) {
                  return i.status == "inactive";
                } else {
                  return i;
                }
              })
              .slice(firstIndex, lastIndex)
              .map((member, index) => (
                <tr key={index}>
                  <td>{member.name}</td>
                  <td>{member.status}</td>
                  <td>{member.gender}</td>
                  <td>{member.points}</td>
                  <td>{member.id}</td>
                  <td>{member.email}</td>
                  <td>{member.phone}</td>
                  <td>{member.address}</td>
                  <td>{member.dob}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <ul>
          <MdOutlineKeyboardDoubleArrowLeft
            onClick={() => setCurrPage(1)}
            className="arrows"
          />

          <IoIosArrowBack onClick={prevPage} className="arrows" />

          {nums.map((n, i) => (
            <li
              key={i}
              onClick={() => changeCurrentPage(n)}
              className={`${currPage == n ? "active" : ""}`}
            >
              {n}
            </li>
          ))}

          <IoIosArrowForward onClick={nextPage} className="arrows" />

          <MdOutlineKeyboardDoubleArrowRight
            onClick={() => setCurrPage(6)}
            className="arrows"
          />
        </ul>
      </div>
    </div>
  );
};

export default FormPage;
