import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ShowPasswordIcon } from "../icons/ShowPasswordIcon";
import { HidePasswordIcon } from "../icons/HidePasswordIcon";
import axios from "axios";
import { SIGNUP_URL } from "../config/env";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    const isDisabled = !trimmedUsername || !trimmedPassword;

    const navigate = useNavigate();

    async function signup() {
        const username = usernameRef.current?.value.trim();
        const password = passwordRef.current?.value.trim();
        await axios.post(SIGNUP_URL, {
            username,
            password
        });
        navigate("/signin");
    }

    return <div className="h-screen w-screen bg-gray-background
    flex justify-center items-center">
        <div className="bg-white rounded min-w-48 p-4 flex flex-col gap-4">
            <div className="text-2xl font-normal flex justify-center">
                Signup
            </div>
            <div className="flex flex-col gap-2">
                <Input ref={usernameRef} type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Input ref={passwordRef} type={show ? "text" : "password"} value={password} placeholder="Create Password" 
                endIcon={show ? <ShowPasswordIcon height={20} width={20} /> : <HidePasswordIcon height={20} width={20} />}
                onIconClick={() => setShow((s) => !s)} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            
            <div className="flex justify-center">
                <Button size="sm" variant="primary" text="Create Account" fullWidth={true} disabled={isDisabled}
                onClick={signup} />
            </div>

            <div className="flex gap-1 justify-center">
                <div>Existing User?</div>
                <div className="text-purple-600 cursor-pointer" 
                onClick={() => (navigate("/signin"))}>
                    Login
                </div>
            </div>
        </div>
    </div>
}

export default Signup;