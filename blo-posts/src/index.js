import React from "react";
import ReactDOM from "react-dom";
import SingleComment from "./SingleComment";
import me1 from "./image/1.png";
import happu from "./image/2.png";
import me2 from "./image/me.png";
import UserCard from "./UserCard";
import "./styles.css";

const App = () => {
  const user = [
    { name: "Guri",  date: "Yesterday 12:31PM", text: "It's Amazing" },
    { name: "Happu", date: "Monday 10:00PM", text: "Hey That's Great News " },
    { name: "Gurvinder", date: "Today 08:50AM", text: "How Did This Happen" },
  ];

 
  return (
    <div className="check">
    <div className="ui comments  ">

    

      <UserCard>
      <SingleComment
        name={user[0].name}
        text={user[0].text}
        date={user[0].date}
        picture={me1}
      />
      </UserCard>

      <UserCard>
      <SingleComment
        name={user[1].name}
        text={user[1].text}
        date={user[1].date}
        picture={happu}
      />
      </UserCard>


      <UserCard>
      <SingleComment
        name={user[2].name}
        text={user[2].text}
        date={user[2].date}
        picture={me2}
      />
      </UserCard>
    </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
