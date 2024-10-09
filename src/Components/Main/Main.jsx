import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import Home from "../Home/Home";
import "./Main.css";
import { Context } from "../../../context/Context";

function Main() {
  const {
    onSent,
    recentprompt,
    input,
    setInput,
    showdata,
    loading,
    resultdata,
  } = useContext(Context);

  return (
    <>
      <div className="container_box">
        <div className="box_00">
          <h1>Gemini</h1>
          <img src={assets.user_icon} alt="" />
        </div>
        <div className="box_01">
          {!showdata ? (
            <Home />
          ) : (
            <>
              <div className="question_content">
                <img src={assets.user_icon} alt="" />
                <p>{recentprompt}</p>
              </div>

              <div className="Ai_answer">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <>
                  <div className="loading">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                  </>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
                )}
              </div>
            </>
          )}
        </div>
        <div className="box_02">
          <div className="search_content">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              className="search_input"
              placeholder="Enter your prompt here..."
            />
            <div className="search_icon_box">
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>

          <h4 className="bottom_text">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Made by Akshdeep74644
          </h4>
        </div>
      </div>
    </>
  );
}

export default Main;
