import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { useMutation, useQueryClient } from "react-query";
import { removeToDB, updateDB } from "./PouchDb";
import GET_TODOS from "../utils/contants";

// eslint-disable-next-line react/prop-types
const ItemListed = ({ taskId }) => {
  // const removeTodo = async () => {
  //   await removeToDB(taskId);
  //   await getTheData();
  // };

  const [editTask, setEditTask] = useState("");
  const queryClient = useQueryClient();

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: () => removeToDB(taskId),
  });

  const remove = (event) => {
    event.preventDefault();
    mutate();
  };

  console.log("isLoading ", isLoading, "isSucess", isSuccess, "Error", isError);

  const {
    mutate: isMutate,
    isLoading: isLoader,
    isSuccess: isSuccer,
    isError: isErr,
  } = useMutation({
    mutationFn: () => updateDB(taskId, { task: editTask }),
    onSuccess: () => {
      queryClient.invalidateQueries(GET_TODOS);
    },
  });

  const edit = (event) => {
    event.preventDefault();
    isMutate();
  };

  console.log(
    "isLoader",
    isLoader,
    "isSuccer",
    isSuccer,
    "isErr",
    isErr,
    "isMute",
    isMutate
  );

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setEditTask(e.target.value);
        }}
      />
      <button type="button" onClick={edit}>
        Edit
      </button>
      {/* <li>{task}</li> */}
      <button type="button" onClick={remove}>
        X
      </button>
    </div>
  );
};

export default memo(ItemListed);

ItemListed.PropType = {
  task: PropTypes.string,
  taskId: PropTypes.string,
  getToDBFun: PropTypes.func,
};

ItemListed.defaultProps = {
  task: "sample task",
  taskId: "no id",
  getToDBFun: () => {},
};
