import { useState } from "react"
export const Todo = () => {
  const data = [
    {
      id: 1,
      title: "Cong viec 1",
      status: "init"
    },
    {
      id: 2,
      title: "Cong viec 2",
      status: "doing"
    },
    {
      id: 3,
      title: "Cong viec 3",
      status: "completed"
    },
    {
      id: 4,
      title: "Cong viec 4",
      status: "deleted"
    }
  ]

  const [todoList, setTodoList] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        title: event.target.keyword.value,
        status: "init"
      }
    ])

    event.target.keyword.value = "";

    console.log(todoList);
  }

  const handleDelete = (id) => {
    const tmpData = todoList.filter(item => item.id !== id);
    setTodoList([
      ...tmpData
    ])
  }
  return (
    <div className="w-[900px] mx-auto mt-[100px] border border-black-600 p-4">
      <form action="" className="text-center" onSubmit={handleSubmit}>
        <input type="text" className="mr-[10px] border border-amber-950 outline-0 p-[5px]" placeholder="Enter your todo...." name="keyword"/>
        <button className="bg-blue-500 text-white p-[5px] cursor-pointer">Add todo</button>
      </form>

      <div className="w-[300px] mx-auto mt-[10px]">
        <ul>
          {todoList.map((item) =>
            <>
              <li className={
                `mb-[5px] 
                  flex justify-between px-[5px]
                  ${item.status === "doing" ? "bg-blue-500 text-white" : ""} 
                  ${item.status === "completed" ? "bg-green-500 text-white" : ""}
                  ${item.status === "deleted" ? "bg-red-500 text-white" : ""}
                `}
              >
                {item.title}
                <span className="">
                  <button onClick={() => handleDelete(item.id)}>Xoa</button>
                </span>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}