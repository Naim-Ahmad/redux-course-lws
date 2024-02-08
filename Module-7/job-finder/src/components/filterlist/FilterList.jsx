import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSelectedTag } from "../../redux/filter/filterSlice";

export default function FilterList() {
  const dispatch = useDispatch()

  const handleFilter = e => {
    dispatch(toggleSelectedTag(e.target.parentNode.innerText))
  }

  return (
    <ul className="space-y-4">
      <li onClick={handleFilter}>
        <span className="main-menu menu-active" id="lws-alljobs-menu">
          <i className="fa-solid fa-briefcase"></i>
          <span> All Available Jobs</span>
        </span>
        <ul className="space-y-6 lg:space-y-2 ">
          <li>
            <button className="sub-menu" id="lws-internship-menu">
              <i className="fa-solid fa-stop !text-[#FF5757]"></i>
              Internship
            </button>
          </li>
          <li>
            <button className="sub-menu" id="lws-fulltime-menu">
              <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
              Full Time
            </button>
          </li>
          <li>
            <button className="sub-menu" id="lws-remote-menu">
              <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
              Remote
            </button>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/addNewJob" className="main-menu" id="lws-addJob-menu">
          <i className="fa-solid fa-file-circle-plus"></i>
          <span>Add NewJob</span>
        </Link>
      </li>
    </ul>
  )
}