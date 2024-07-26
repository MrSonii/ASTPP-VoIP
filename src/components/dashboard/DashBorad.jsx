import "./dashboard.css";

import { SEARCH } from "@/lib/config";
import { useAppSelector } from "@/store/hooks";
import UserCard from "@/components/user-card/UserCard"
;


function DashBorad() {
  const users = useAppSelector(state => state.user.users);

  return (
    <div className="p-4 dashboard-cont">
      <div className="flex justify-between items-center bg-white p-3 rounded-lg">
        <div className="relative">
          <img src={SEARCH} alt="Search Icon" className="search-icon"/>
          <input type="text" name="search input" className="search-input" placeholder="Search team" />
        </div>
        <div>
          <select name="" id="" className="select-drop">
            <option value="All Groups" selected>All Groups</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
      </div>
      <div className="flex justify-start flex-wrap gap-4 py-4">
        {users.map(user => <UserCard {...user}/>)}
      </div>
    </div>
  )
}

export default DashBorad