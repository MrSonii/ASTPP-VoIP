import { CALL, FAVOURITE, MESSAGE, MORE_VERT, V_CHAT } from "@/lib/config";
import "./index.css";

function UserCard({id, name, number, profilePic}) {
  return (
    <div className="p-4 bg-white rounded-md user-card flex flex-wrap content-between" id={id}>
      <div className='flex justify-start items-start w-full'>
        <div className='profile'>
          <img src={profilePic} alt={"profile pic"} width={50} className="rounded-full pointer"/>
        </div>
        <div className='contact pl-4'>
          <div className="">{name}</div>
          <div className="number">{number}</div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-4 w-full'>
        <img src={CALL} alt="call" width={20} className="pointer"/>
        <img src={V_CHAT} alt="v-chat" width={20} className="pointer"/>
        <img src={MESSAGE} alt="message" width={20} className="pointer"/>
        <img src={FAVOURITE} alt="favourite" width={20} className="pointer"/>
        <img src={MORE_VERT} alt="more" width={20} className="pointer"/>
      </div>
    </div>
  )
}

export default UserCard