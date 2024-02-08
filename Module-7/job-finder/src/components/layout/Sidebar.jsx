import FilterList from "../filterlist/FilterList";

export default function Sidebar() {

  return (
    <div className="sidebar">
      <nav>
        <FilterList/>
      </nav>
    </div>
  )
}