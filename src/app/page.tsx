"use client";

//config Imports;
import { BrandIcon, G_ICON } from "../lib/config";

//component Imports;
import Input from "../components/inputs/Input";
import { useState } from "react";
import { useAppSelector } from "../store/store";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const [ extnsionNumber, setEmail ] = useState("");
  const [ passCode, setPassCode ] = useState("");
  const [ credValid, setCredValid ] = useState(undefined);

  const defaultUser = useAppSelector(state => state.counter.defaultUser);

  const handleSignIn = () => {
    if(extnsionNumber === defaultUser.extensionNumber && passCode === defaultUser.passCode) {
      setCredValid(true);
      setTimeout(() => {
        router.push(`/userDashboard/${defaultUser.extensionNumber}`);
      }, 500);
    } else {
      setCredValid(false);
    }
  };

  return (
    <main className="main-container">
      <div className="login-contianer">
        <header className="login-header mb-6">
          <img src={BrandIcon} alt="ASTPP Brand Icon" className="brand-logo"/>
          <p className="welcome-greet">Welcome Back !</p>
          <small className="grey">Sign in to continue to ASTPP</small>
        </header>

        <div>
          <div>
            <Input type="number" htmlFor="extnsionNumber" label="Extension Number (hint-9876)" placeholder="Enter extension number" name="extnsionNumber" value={extnsionNumber} onChange={(e:any) => setEmail(e.target.value)}/>
          </div>
          <div className="mt-4 mb-6">
            <Input type="text" htmlFor="passcode" label="Password (hint-1234)" placeholder="Enter password" name="passcode" value={passCode} forgotPass={true} onChange={(e:any) => setPassCode(e.target.value)}/>
          </div>

          {credValid === true ? <small className="green">Signed In</small> : credValid === false && <small className="red">Please enter valid credentials</small>}

          <button className="sign-in" onClick={handleSignIn} disabled={!extnsionNumber || !passCode}>Sign In</button>

          <p className="my-4 text-center gray">or</p>
          
          <button className="g-sign-in">
            <img src={G_ICON} alt="Google Icon" width={20} height={20} className="mr-2"/>
            Sign In with Google
          </button>
        </div>
      </div>
    </main>
  );
}
