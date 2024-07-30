import "./dashboard.css";

import { SEARCH } from "@/lib/config";
import { useAppSelector } from "@/store/hooks";
import UserCard from "@/components/user-card/UserCard"
;
import { useState } from "react";


function DashBorad() {
  const usersRedux = useAppSelector(state => state.user.users);
  const [ users, setUsers ] = useState(usersRedux);
  const [ searchVal, setSearchVal ] = useState("");

  const handleSearch = e => {
    const filteredProfiles = usersRedux.filter(profile => 
        profile.name.toLowerCase().includes(e.target.value.toLowerCase()) || profile.number.toLowerCase().includes(e.target.value.toLowerCase())
      ).sort((a, b) => a.name.localeCompare(b.name));

    setSearchVal(e.target.value);
    setUsers(e.target.value ? filteredProfiles : usersRedux);
  };


  return (
    <div className="p-4 dashboard-cont">
      <div className="flex justify-between items-center bg-white p-3 rounded-lg">
        <div className="relative">
          <img src={SEARCH} alt="Search Icon" className="search-icon" />
          <input type="text" name="search input" className="search-input" placeholder="Search team" onChange={handleSearch} value={searchVal} />
        </div>
        <div>
          <select name="" id="" className="select-drop">
            <option value="All Groups" selected>All Groups</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
      </div>
      <div className="flex justify-start flex-wrap gap-4 py-4">
        {users.map(user => <UserCard {...user} key={user.number}/>)}
      </div>
    </div>
  )
}

export default DashBorad