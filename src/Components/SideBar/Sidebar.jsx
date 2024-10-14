import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
import { Context } from "../../../context/Context";

function Sidebar() {
  const {prevprompt, setrecentPrompt, onSent} = useContext(Context)

  const sideBar = document.querySelector(".sidebar")

  const burgerBtn = ()=>{
    sideBar.classList.toggle("active");
  }
  return (
    <>
       <img className="menu" onClick={burgerBtn} src={assets.menu_icon} alt="" />
      <div className="sidebar">
        <div className="top_section">
          <div className="new_chat">
            <img src={assets.plus_icon} alt="" />
            <p>New </p>
          </div>
          <div className="recent">
            <p className="recent_title">Recent</p>
            {prevprompt.map((item, index)=>{
              return (
                <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>{item.slice(0,12)}...</p>
            </div>
              )
            })}
          </div>
        </div>

        <div className="bottom_section">
          <div className="bottom_item recent_title">
            <img src={assets.question_icon} alt="" />
            <p>Help</p>
          </div>
          <div className="bottom_item recent_title">
            <img src={assets.history_icon} alt="" />
            <p>Activity</p>
          </div>
          <div className="bottom_item recent_title">
            <img src={assets.setting_icon} alt="" />
            <p>Settings</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
