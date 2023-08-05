import React, { useState } from "react";
import "./question.css"


function Questions({ question, options, i, callback }) {

    let [res, setres] = useState("")
    return (
        <div className="question">
            <div className="question-inner">
                <div className="question-box">
                    <h1>Question No : {i + 1}</h1>
                    <p>
                        {question}
                    </p>

                    {

                        options.map((v, i) => {
                            return (
                                <div className="options">
                                    <input type="radio"
                                        onChange={(e) => setres(e.target.value)}
                                        name="select" id="" value={v} />
                                    <b> {v}</b>
                                </div>
                            )

                        })
                    }
                    <br />
                    <button className="btn"
                        onClick={() => callback(res)}
                    >Next</button>
                    <br />
                </div>


            </div>
        </div>
    )
}

export default Questions