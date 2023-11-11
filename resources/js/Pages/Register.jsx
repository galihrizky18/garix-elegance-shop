import React, { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

const Register = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [passowrd, setPassword] = useState();

    const handleSubmit = () => {
        const data = {
            firstName,
            lastName,
            email,
            username,
            passowrd,
        };

        Inertia.post("/register", data);
    };

    return (
        <div className="bg-gray-200 flex justify-center items-center h-screen">
            <Head title="Register" />
            <div className="body flex flex-col gap-3 w-[50%] h-[80%]">
                <div className="logo bg-white rounded-xl shadow-lg">
                    <span className="flex justify-center items-center h-14 font-trocchi text-3xl text-sky-500">
                        {" "}
                        Registerasi
                    </span>
                </div>

                <div className="form bg-white flex flex-col gap-3 px-5 py-3 rounded-xl shadow-lg">
                    <div className="title font-bold flex justify-center items-center">
                        Isi Data Sesuai Form
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            placeholder="First Name"
                            className="h-9 w-[60%] rounded-lg"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            placeholder="Last Name"
                            className="h-9 w-[60%] rounded-lg"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="h-9 w-[60%] rounded-lg"
                            onChange={(e) => setEmail(e.target.value)}
                        />
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

                        <div className="tombol w-full flex justify-center mt-5 mb-5">
                            <button
                                className="h-9 w-[60%] rounded-lg bg-sky-500 text-white hover:text-lg hover:bg-sky-600"
                                onClick={() => handleSubmit()}
                            >
                                Submit
                            </button>
                        </div>

                        <div className="login mx-10 mb-5">
                            <Link
                                href="/"
                                className="text-blue-800 hover:text-lg"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
