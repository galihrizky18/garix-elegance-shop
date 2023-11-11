import { Inertia } from "@inertiajs/inertia";
import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const Login = ({ berhasilRegister }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        const data = {
            username,
            password,
        };
        Inertia.post("/login", data);
    };

    useEffect(() => {
        console.log("Data berhasilRegister:", berhasilRegister);
    }, [berhasilRegister]);

    return (
        <div className="bg-gray-200 flex justify-center items-center h-screen">
            <Head title="Login" />

            <div className="body flex flex-col gap-3 w-[50%] h-[80%] ">
                <div className="logo bg-white rounded-xl">
                    <span className="flex justify-center items-center h-14 font-trocchi text-3xl text-sky-500">
                        {" "}
                        Garix Elegance Shop
                    </span>
                </div>
                <div className="form bg-white px-5 py-3 gap-3 w-full flex flex-col justify-center items-center rounded-xl">
                    <div className="title font-bold">
                        Masukan Username dan Password
                    </div>

                    <div className="w-full flex flex-col justify-center items-center gap-2">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            className="h-9 w-[60%] rounded-lg"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="h-9 w-[60%] rounded-lg"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className="tombol w-full flex justify-center mt-3">
                            <button
                                className="bg-sky-500 text-white w-[40%] h-9 rounded-xl"
                                onClick={() => handleLogin()}
                            >
                                <span className="text-xl font-bold font-exo">
                                    Login
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="registe w-full flex justify-end">
                        <Link href="/register">
                            <span className="text-sm font-roboto text-blue-800 hover:text-base">
                                Belum Punya Akun?
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
