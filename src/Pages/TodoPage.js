import React, { useState } from "react";
import { useMutation } from "react-query";
import { insertToDB } from "../Components/PouchDb";
import TodoList from "./TodoList";
// import { ContextBoxData } from "../Components/ContextBox";

const TodoPage = () => {
  const [inputdata, setInputData] = useState("");
  // const [sumit, setSumit] = useState(0);

  // const data = useContext(ContextBoxData);

  const itemEvent = (e) => {
    setInputData(e.target.value);
  };

  // const handleButton = async (e) => {
  //   setSumit(sumit + 1);
  //   e.preventDefault();
  //   const newTodo = {
  //     task: inputdata,
  //   };
  //   // if (sumit % 2 === 0) {
  //   //   setInputData("");
  //   //   return;
  //   // }
  //   insertToDB(newTodo);
  //   // const responseID = await insertToDB(newTodo);
  //   // newTodo.id = responseID?.id;
  //   // const responseID2 = await insertToDB(newTodo);
  //   // newTodo.id = responseID2?.id;
  //   setInputData("");
  //   const ret = await data?.getTheData();
  //   console.log("coming ret", ret);
  // };

  const { mutate } = useMutation({
    mutationFn: (newTodoParam) => insertToDB(newTodoParam),
  });

  const handleButton = (event) => {
    event.preventDefault();
    const newTodoList = {
      task: inputdata,
    };
    mutate(newTodoList);
    setInputData("");
  };
  return (
    <div>
      <form>
        <input
          name="mytodo"
          type="text"
          placeholder="Entertexthere"
          value={inputdata}
          onChange={itemEvent}
        />
        <button onClick={handleButton}>ADD</button>
      </form>
      <TodoList />
    </div>
  );
};

export default TodoPage;
