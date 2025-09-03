import { Link } from "react-router"

export const Category = () => {
  return (
    <>
      <div class="p-4 sm:ml-64">
        <div className="text-[32px]">
          Danh sách danh mục
        </div>

        <div className="mt-[20px] flex items-center">
          <div className="mr-[20px]">
            <select name="" id="" defaultValue={"dis"} className="border border-black p-2 rounded-[5px]">
              <option value="dis" disabled>Lọc theo trạng thái</option>
              <option value="">Hoạt động</option>
              <option value="">Ngừng hoạt động</option>
            </select>
          </div>
          <div className="">
            <input type="text" placeholder="find your category...."
              className="border border-black h-[36px] p-4 w-[300px] rounded-[5px]"
            />
          </div>

          <div className="ml-[20px] cursor-pointer bg-blue-500 p-[12px] rounded-[5px] text-white">
            <Link to={"/admin/category/create"}>
              Add Category
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}