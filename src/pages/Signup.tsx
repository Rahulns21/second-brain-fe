import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ShowPasswordIcon } from "../icons/ShowPasswordIcon";
import { HidePasswordIcon } from "../icons/HidePasswordIcon";

function Signup() {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const isDisabled = !username || !password

    return <div className="h-screen w-screen bg-gray-background
    flex justify-center items-center">
        <div className="bg-white rounded min-w-48 p-4 flex flex-col gap-4">
            <div className="text-2xl font-normal flex justify-center">
                Signup
            </div>
            <div className="flex flex-col gap-2">
                <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Input type={show ? "text" : "password"} value={password} placeholder="Create Password" 
                endIcon={show ? <ShowPasswordIcon height={20} width={20} /> : <HidePasswordIcon height={20} width={20} />}
                onIconClick={() => setShow((s) => !s)} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            
            <div className="flex justify-center">
                <Button size="sm" variant="primary" text="Submit" fullWidth={true} disabled={isDisabled} />
            </div>
        </div>
    </div>
}

export default Signup;