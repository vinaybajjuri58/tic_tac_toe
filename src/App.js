import "./styles.css";
import { ButtonComponent } from "./Components/ButtonComponent";
import { useState, useEffect } from "react";
const initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((eachBox) => ({
  boxId: eachBox,
  user: null,
  isDisabled: false
}));
export default function App() {
  const [dataState, setDataState] = useState(initialArray);
  const [user, setUser] = useState("X");
  const [winner, setWinner] = useState(null);
  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      let xUser = dataState[i].user;
      if (
        xUser !== null &&
        dataState[i + 1].user === xUser &&
        dataState[i + 2].user === xUser
      ) {
        setWinner(xUser);
      }
      if (
        xUser !== null &&
        dataState[i + 3].user === xUser &&
        dataState[i + 6].user === xUser
      ) {
        setWinner(xUser);
      }
    }
    let user = dataState[0].user;
    if (
      user !== null &&
      dataState[4].user === user &&
      dataState[8].user === user
    ) {
      setWinner(user);
    }
    let xUser = dataState[2].user;
    if (
      xUser !== null &&
      dataState[4].user === xUser &&
      dataState[6].user === xUser
    ) {
      setWinner(xUser);
    }
  }, [dataState, setWinner]);

  const resetHandler = () => {
    setDataState(initialArray);
    setWinner(null);
  };

  const clickHandler = (boxId) => {
    setUser((initialValue) => (initialValue === "X" ? "O" : "X"));
    setDataState((initialData) => {
      const updatedData = initialData.map((box) =>
        box.boxId === boxId
          ? { ...box, user: user, isDisabled: true }
          : { ...box }
      );
      return updatedData;
    });
  };

  return (
    <div className="App">
      <h1>Tik-toc-toe</h1>
      <h3>User {user} choose your box</h3>
      <div className="button-container">
        {dataState.map((box) => {
          return (
            <ButtonComponent
              key={box.boxId}
              buttonId={box.boxId}
              user={box.user}
              disabled={box.isDisabled}
              clickHandler={clickHandler}
            />
          );
        })}
        {winner && <h2>Winner Of the Game is User {winner}</h2>}
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
}
