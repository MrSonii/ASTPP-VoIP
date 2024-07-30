import React from 'react'

import "./index.css";
import { BACKSPACE, CALL, CALL_END, CONFERENCE, CROSS, HOLD, KEYPAD, MUTE, NEW_CALL, RECORD, SHUFFLE, TRANSFER, VIDEO_CALL } from '@/lib/config';
import DegitCell from "@/components/degitCell/DegitCell";
import CallCell from "@/components/callScreenCell/CallCell";
import { useAppSelector } from '@/store/hooks';

function Caller({ handlePopUpTigger }) {
  const [ callerInput, setCallerInuput ] = React.useState("");
  const [ userSelected, setUserSelected ] = React.useState(null);
  const [ dialing, setdialing ] = React.useState(false);
  
  const users = useAppSelector(state => state.user.users);
  const handlePhoneInput = e => setCallerInuput(e.target.value);


  const filteredProfiles = React.useMemo(() => {
    return users.filter(profile => 
      profile.name.toLowerCase().includes(callerInput.toLowerCase()) || profile.number.toLowerCase().includes(callerInput.toLowerCase())
    ).sort((a, b) => a.name.localeCompare(b.name));
  }, [callerInput]);

  const handleCall = prof => () => {
    setUserSelected(prof);
    setdialing(true);
  };

  const handleCallButton = () => {
    if(!!dialing) {
      setUserSelected(null);
      setdialing(false);
      setCallerInuput("");
    } else if(callerInput){
      setUserSelected({name: callerInput, number: ""});
      setdialing(true);
    }
  }

  return (
    <div className='wrapper'>
      <div className='caller-containder'>
        <div className='w-full'>
          <div className='w-full flex justify-end items-center pt-2 pr-2 pointer'>
            {!userSelected && <img src={CROSS} alt="close icon" width={30} onClick={handlePopUpTigger}/>}
          </div>
          <div className='w-full'>
            {!userSelected && <input type="text" className='phone-search-input' name="phone number" id="phone caller" onChange={handlePhoneInput} value={callerInput} placeholder='Enter Name/Number' autoFocus />}
            <div className='search-result'>
              {!!callerInput && !userSelected ? filteredProfiles.map(prof => 
                <div className='px-8 py-2 hover-search-bg mx-4 flex' onClick={handleCall(prof)} key={prof.number}>
                  <div>
                    <img src={prof.profilePic} alt="User Pic" width={50} className='rounded-full'/>
                  </div>
                  <div className='pl-4 text-[#b7b7b7]'>
                    <div>{prof.name}</div>
                    <div>{prof.number}</div>
                  </div>
                </div>
              ) : !!userSelected && <div className='w-full pt-12'>
                  <h1 className='text-center text-5xl white'>{userSelected.name}</h1>
                  <p className='text-center white'>{userSelected.number}</p>
                </div>}
            </div>
          </div>
        </div>
        <div className='dial-pad py-8'>
          {!!userSelected 
          ?
            <div className='button-cont flex flex-wrap mb-24 px-8'>
              <CallCell img={HOLD} text={"Hold"}/>
              <CallCell img={MUTE} text={"Mute"}/>
              <CallCell img={NEW_CALL} text={"New Call"}/>
              <CallCell img={CONFERENCE} text={"Conference"}/>
              <CallCell img={TRANSFER} text={"Transfer"}/>
              <CallCell img={SHUFFLE} text={"Att. Transfer"}/>
              <CallCell img={RECORD} text={"Record"}/>
              <CallCell img={KEYPAD} text={"Keypad"}/>
              <CallCell img={VIDEO_CALL} text={"Video"}/>
            </div>
          :
            <div className='button-cont flex flex-wrap'>
              <DegitCell digit="1" alpha="" setCallerInuput={setCallerInuput}/>
              <DegitCell digit="2" alpha="abc" setCallerInuput={setCallerInuput}/>
              <DegitCell digit="3" alpha="def" setCallerInuput={setCallerInuput}/>
              <DegitCell digit="4" alpha="ghi" setCallerInuput={setCallerInuput}/>
              <DegitCell digit="5" alpha="jkl" setCallerInuput={setCallerInuput}/>
              <DegitCell digit="6" alpha="mno" setCallerInuput={setCallerInuput}/>
              <DegitCell digit="7" alpha="pqrs" setCallerInuput={setCallerInuput}/>
              <DegitCell digit="8" alpha="tuv" setCallerInuput={setCallerInuput}/>
              <DegitCell digit="9" alpha="wxyz" setCallerInuput={setCallerInuput}/>
              <DegitCell digit="*" alpha="" setCallerInuput={setCallerInuput}/>
              <DegitCell digit="0" alpha="+" setCallerInuput={setCallerInuput}/>
              <DegitCell digit="#" alpha="" setCallerInuput={setCallerInuput}/>
            </div>
          }
          <div className='action-container flex w-full justify-around'>
            <img src={VIDEO_CALL} alt="video call" width={35} className='pointer' />
            <span className={`rounded-full p-6 ${!dialing ? "bg-green" : "bg-[#800000]"} pointer`} onClick={() => handleCallButton()}>
              {!dialing ? <img src={CALL} alt="call" width={35} /> : <img src={CALL_END} alt="call" width={35} />}
            </span>
            <img src={BACKSPACE} alt="back space" width={25} className='pointer' onClick={() => setCallerInuput(prev => prev.slice(0, -1))}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Caller