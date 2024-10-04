/* eslint-disable react/prop-types */
export default function UserMiniDashboard({prop}) {

  const getTask = prop.filter(item => item.isDone === false)
  const getDone = prop.filter(item => item.isDone === true)

  // console.log("getTask: ", getTask);
  

  return (
    <div className="w-full flex flex-row justify-evenly">
      <div className="w-[50%] flex flex-col">
        <h1 className="text-[3.25rem] text-center font-mono">{getTask.length}</h1>
        <label className="text-center font-thin text-sm">To Do <br />Tasks</label>
      </div>
      <div className="w-[50%] flex flex-col">
        <h1 className="text-center text-[3.25rem] font-mono">{getDone.length}</h1>
        <label className="text-center font-thin text-sm">Completed <br /> Tasks</label>
      </div>
    </div>
  );
}
