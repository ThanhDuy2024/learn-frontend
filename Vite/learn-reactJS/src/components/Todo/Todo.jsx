import { useState } from "react"
import { useEffect } from "react";
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
  const [rawData, setRawData] = useState(todoList);
  const [search, setSearch] = useState("");
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataFinal, setDataFinal] = useState(rawData);
  useEffect(() => {
    if(search) {
      const regex = new RegExp(search, "i");
      const find = rawData.filter(item => regex.test(item.title));
      if(find.length > 0) {
        setRawData(find);
      } else {
        setRawData(todoList);
      }
    } else {
      setRawData(todoList);
    }
  }, [search]);

  useEffect(() => {
    const limit = 2;
    const pages = Math.ceil(rawData.length / limit);
    if(currentPage > pages || pages.length == 0) {
      setTotalPage(1);
    } else {
      setTotalPage(pages);
    }
    
    const pagination = rawData.slice(((currentPage - 1) * limit),  (currentPage - 1) * limit + limit);
    setDataFinal(pagination);
  }, [currentPage, rawData]);

  useEffect(() => {
    setRawData(todoList);
  }, [todoList])

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

  const handleChange = (event, id) => {
    const status = event.target.value;
    const tmpArray = [...todoList];
    const query = tmpArray.find(item => item.id === id);
    query.status = status;
    setTodoList(tmpArray);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = event.target.search.value;
    setSearch(keyword);
    event.target.search.value = "";
  }

  const handlePage = (page) => {
    setCurrentPage(page);
  }
  return (
    <div className="w-[900px] mx-auto mt-[100px] border border-black-600 p-4">
      <form action="" className="text-center" onSubmit={handleSubmit}>
        <input type="text" className="mr-[10px] border border-amber-950 outline-0 p-[5px]" placeholder="Enter your todo...." name="keyword"/>
        <button className="bg-blue-500 text-white p-[5px] cursor-pointer">Add todo</button>
      </form>

      <div className="w-[300px] mx-auto mt-[10px]">
        <form action="" onSubmit={handleSearch}>
          <input type="text" className="mr-[10px] border border-amber-950 outline-0 p-[5px]" placeholder="Search your to do" name="search"/>
          <button className="bg-blue-500 text-white p-[5px] cursor-pointer">Find</button>
        </form>
        <ul>
          {dataFinal.map((item) =>
            <>
              <li key={item.id} className={
                `mb-[5px] 
                  flex justify-between px-[5px]
                  ${item.status === "doing" ? "bg-blue-500 text-white" : ""} 
                  ${item.status === "completed" ? "bg-green-500 text-white" : ""}
                  ${item.status === "deleted" ? "bg-red-500 text-white" : ""}
                `}
              >
                {item.title}
                <span className="">
                  <select name="status" defaultValue={item.status} onChange={(event) => handleChange(event, item.id)}>
                    <option value="init">init</option>
                    <option value="doing">doing</option>
                    <option value="completed">completed</option>
                    <option value="deleted">deleted</option>
                  </select>
                  <button onClick={() => handleDelete(item.id)}>Xoa</button>
                </span>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="w-[300px] mx-auto mt-[10px]">
        {Array(totalPage).fill("").map((item, index) =>
          <button className={`border border-black w-[20px] mr-[5px] cursor-pointer ${currentPage == index + 1 ? "bg-blue-500 text-white" : ""}`} name="pagination" onClick={() => handlePage(index+1)}>{index+1}</button>
        )}
      </div>
    </div>
  )
}