import React from "react";
import { useQuery } from "react-query";
import ItemListed from "../Components/ItemListed";
 import { getToDB } from "../Components/PouchDb";
 import { GET_TODOS } from "../utils/contants";
 // import ItemListed from "../Components/ItemListed";
 // import { BoxDataCollect } from "../Components/BoxData";

 const TodoList = () => {
   // const data = useContext(BoxDataCollect);

   const { data, error, isLoading } = useQuery(GET_TODOS, async () => {
     const taskList = await getToDB();
     return taskList;
   });

   console.log("data", data, "err", error, "isLoading", isLoading);

   // const deleteEverything = async () => {
   //   await deleteAll();
   //   // eslint-disable-next-line no-undef
   //   const ret = await data?.getTheData();
   //   console.log("coming ret", ret);
   // };

   // const deleteALLtask = async () => {
   //   await deleteTesAll();
   //   const ret = await data?.getTheData();
   //   console.log("coming ret", ret);
   // };

   console.log("Data Send", data);
   return (
     <div>
       {/* <button type="button" onClick={deleteEverything}>
        DESTROY DB
      </button>
      <button type="button" onClick={deleteALLtask}>
        DeleteALL
      </button> */}
       <ul>
         {data?.rows?.map((item) => (
           <>
             <li key={item.id}>{item.doc.task}</li>
             <ItemListed taskId={item.id} />
           </>
         ))}
         {/* {data?.rows?.map((itemvalue, i) => (
          <ItemListed
            task={itemvalue.doc.task}
            taskId={itemvalue.id}
            key={itemvalue.id}
            // getTheData={data?.getTheData}
            todoIndex={i}
          />
        ))} */}
       </ul>
     </div>
   );
 };

export default TodoList;
