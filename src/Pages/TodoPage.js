import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { insertToDB } from "../Components/PouchDb";
import GET_TODOS from "../utils/contants";
import TodoList from "./TodoList";
// import { ContextBoxData } from "../Components/ContextBox";

const TodoPage = () => {
  const [inputdata, setInputData] = useState("");
  // const [sumit, setSumit] = useState(0);

  const queryClient = useQueryClient();

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

  const { mutate } = useMutation(insertToDB, {
    onSuccess: () => {
      queryClient.invalidateQueries(GET_TODOS);
    },
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
      <div className="flex justify-center items-center">
        <form>
          <input
            name="mytodo"
            type="text"
            placeholder="Entertexthere"
            value={inputdata}
            onChange={itemEvent}
            className="border border-black"
          />
          <button onClick={handleButton}>ADD</button>
        </form>
      </div>
      <div className="flex justify-center items-center">
        <TodoList />
      </div>
    </div>
  );
};

export default TodoPage;
