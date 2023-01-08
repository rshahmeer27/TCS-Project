import React, { useState, useEffect } from "react";

export default function ViewAttemptedQuiz({ std_id }) {
  const [AttemptedQuiz, setAttemptedQuiz] = useState([]);

  function downloadAttemptedQuiz() {
    fetch("/quizzes/:id")
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        // Set the file name
        a.download = "attempted-quiz.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/view-attempted-quiz/:${std_id}`
        );
        const json = await response.json();
        setAttemptedQuiz(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const data = {
    _id: "63b9ccce3c8288e477cf0764",
    name: "talha",
    rollno: "SP20-BCS-068",
    courses: [
      {
        code: "cs68",
        name: "cALCULUS",
        marks: 123,
        quiz: [
          {
            qid: "112",
            attempted: true,
            marks: 442,
          },
        ],
      },
    ],
  };
  // const attempted = data.filter(
  //   (div) => div.courses[0].quiz[0].attempted === "true"
  // );

  // return (
  //   <>
  //     {data._id},{data.name},{data.rollno},{data.courses[0].code},
  //     {data.courses[0].name}, {data.courses[0].marks},
  //     {data.courses[0].quiz[0].attempted},{data.courses[0].quiz[0].marks},
  //     {data.courses[0].quiz[0].qid}
  //   </>
  // );

  return (
    <div style={{ flex: 1 }}>
      <div
        style={{
          alignItems: "center",
          width: 400,
          marginLeft: "40%",
        }}
      >
        <h1>View Attempted Quiz</h1>
      </div>

      <div
        style={{
          backgroundColor: "lightgray",
          height: 500,
          borderRadius: 15,
          marginLeft: "10%",
          width: "80%",
          alignSelf: "centre",
        }}
      >
        <div
          style={{
            backgroundColor: "lightgrey",
            width: "95%",
            height: 10,
            justifyContent: "center",
            marginLeft: 10,
            marginTop: 25,
          }}
        ></div>

        {AttemptedQuiz.map((item) => (
          <div
            style={{
              backgroundColor: "white",
              width: "15%",

              borderRadius: 10,
              height: 200,
              justifyContent: "center",
              marginLeft: "40%",
              marginTop: 15,
              flexDirection: "row",
            }}
          >
            <view>
              <div
                style={{
                  marginLeft: "25%",
                  marginTop: 10,
                  width: 120,
                }}
              >
                Course:
              </div>
            </view>
            <div
              style={{
                marginLeft: "25%",
                width: 120,
              }}
            >
              {item.courses.name}
            </div>
            <view>
              <div
                style={{
                  marginLeft: "25%",
                  marginTop: 10,
                  width: 120,
                }}
              >
                Course Code:
              </div>
            </view>
            <div
              style={{
                marginLeft: "25%",
                width: 120,
              }}
            >
              {item.courses.code}
            </div>
            <view>
              <div
                style={{
                  marginLeft: "25%",
                  marginTop: 10,
                  width: 120,
                }}
              >
                Marks:
              </div>
            </view>
          
            {item.courses.quiz
              .filter((val) => val.courses.quiz.attempted === "true")
              .map((filterData) => (
                <div>
                  <div
                    style={{
                      marginLeft: "25%",
                      width: 120,
                    }}
                  >
                    {filterData.courses.quiz.marks}
                  </div>
                  <button
                    style={{
                      marginLeft: "25%",
                      color: "black",
                      fontSize: "16px",
                      marginLeft: "25%",
                      marginTop: "2%",
                      width: 200,
                      backgroundColor: "lightblue",
                      borderColor: "lightgray",
                      borderRadius: 3,
                    }}
                    type="button"
                    onClick={downloadAttemptedQuiz}
                  >
                    download Quiz
                  </button>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
