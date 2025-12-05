import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ShowPasswordIcon } from "../icons/ShowPasswordIcon";
import { HidePasswordIcon } from "../icons/HidePasswordIcon";
import { SIGNIN_URL } from "../config/env";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    const isDisabled = !trimmedUsername || !trimmedPassword;

    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const response = await axios.post(SIGNIN_URL, {
            username,
            password
        });
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard");
    }

    return <div className="w-screen h-screen bg-gray-background
    flex justify-center items-center">
        <div className="bg-white rounded min-w-48 p-4 flex flex-col gap-4">
            <div className="text-2xl font-normal flex justify-center">
                Signin
            </div>

            <div className="flex flex-col gap-2">
                <Input ref={usernameRef} type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input ref={passwordRef} type={show ? "text" : "password"} placeholder="Password" value={password}
                endIcon={show ? <ShowPasswordIcon height={20} width={20} /> : <HidePasswordIcon height={20} width={20} />} 
                onIconClick={() => setShow((s) => !s)} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className="flex justify-center">
                <Button variant="primary" size="sm" text="Login" fullWidth={true} disabled={isDisabled} onClick={signin} />
            </div>

            <div className="flex justify-center gap-1">
                <div>New User?</div>
                <div className="text-purple-600 cursor-pointer" 
                onClick={() => navigate("/signup")}>
                    Create Account
                </div>
            </div>
        </div>
    </div>
}

export default Signin;