import './App.css';
import Questions from './Questions';
import { useState } from 'react';

function App() {

  let [currentindex, setcurrentindex] = useState(0)

  let [score, setscore] = useState(0)

  let [showres, setshowres] = useState(false)

  let obj = [
    {
      "Quiz": "HTML is the standard ____language for creating Web pages",
      "Options": [
        "scripting",
        "markup",
        "programming",
        "styling"
      ],
      "Correct_ans": "markup"
    },
    {
      "Quiz": "Which HTML element is used to define description data?",
      "Options": [
        "li",
        "Ol",
        "dl",
        "dd"
      ],
      "Correct_ans": "dd"
    },
    {
      "Quiz": "Which of the following element is responsible for making the text bold in HTML?",
      "Options": [
        "<pre>",
        "<a>",
        "<b>",
        "<br>"
      ],
      "Correct_ans": "<b>"
    },
    {
      "Quiz": "How to create an ordered list (a list with the list items in numbers) in HTML?",
      "Options": [
        "<ul>",
        "<ol>",
        "<dl>",
        "<li>"
      ],
      "Correct_ans": "<ol>"
    },
    {
      "Quiz": "4. What is the correct syntax of doctype in HTML5?",
      "Options": [
        "</doctype html>",
        "<doctype html>",
        "<doctype html!>",
        "<!doctype html>"
      ],
      "Correct_ans": "<!doctype html>"
    },
    {
      "Quiz": "Which of the following tag is used for inserting the largest heading in HTML?",
      "Options": [
        "head",
        "<h1>",
        "<h6>",
        "heading"
      ],
      "Correct_ans": "<h1>"
    },

  ]

  const callback = (data) => {
    console.log(data)
    if (data == obj[currentindex]["Correct_ans"]) {
      setscore(++score)

    }
    if (currentindex >= obj.length - 1) {
      setshowres(true)

    }
    else {
      setcurrentindex(++currentindex)

    }
  }

  return (

    <div className="app">
      <div className="app-inner">
        {/* {
      obj.map((v,i)=>{
        return(
          <h1>Question No : {i+1}</h1>
        )
      })
    } */}

        {
          showres ?
            <h1 className="score">Score 6 out of : {score}</h1>
            :
            <Questions
              question={obj[currentindex]["Quiz"]}
              options={obj[currentindex]["Options"]}
              i={currentindex}
              callback={callback} //function
            />
        }

      </div>
    </div>

  );
}

export default App;
