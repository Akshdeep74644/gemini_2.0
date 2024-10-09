import React from 'react'
import { assets } from "../../assets/assets";

function Home() {
  return (
    <>
      <div className="text_content">
            <h1>Hello, Dev.</h1>
            <h2>How can I help you today?</h2>
          </div>

          <div className="category_content">
            <div className="c_box_00 c_box">
              <h3>Suggest beautiful places to see on an upcoming road trip</h3>

              <div className="icon_box">
                <img src={assets.compass_icon} alt="" />
              </div>
            </div>
            <div className="c_box_01 c_box">
              <h3>Briefly summarize this concept: urban planning</h3>

              <div className="icon_box">
                <img src={assets.bulb_icon} alt="" />
              </div>
            </div>
            <div className="c_box_02 c_box">
              <h3>Brainstorm team bonding activities for our work retreat</h3>

              <div className="icon_box">
                <img src={assets.message_icon} alt="" />
              </div>
            </div>
            <div className="c_box_03 c_box">
              <h3>Tell me about React js and React native</h3>

              <div className="icon_box">
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </div>
    </>
  )
}

export default Home
