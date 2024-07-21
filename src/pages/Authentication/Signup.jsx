import React, { useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth, fireDB } from "../../components/firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";

function Signup() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    if (userName === "" || email === "" || password === "") {
      return toast.error("All fields are required");
    } else {
      try {
        const users = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        console.log(users);

        const user = {
          name: userName,
          uid: users.user.uid,
          email: users.user.email,
          time: Timestamp.now(),
        };
        const userRef = collection(fireDB, "users");
        await addDoc(userRef, user);
        toast.success("Signup Succesfully");
        setUserName("");
        setEmail("");
        setPassword("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="mt-12">
        <section className="rounded-md p-2 bg-white">
          <div className="flex items-center justify-center my-3">
            <div
              className="bg-gray-100 xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md"
              style={{
                boxShadow: "4px 4px #323232",
                border: "1px solid #323232",
                borderRadius: "10px",
              }}
            >
              <div className="mb-2"></div>
              <h2 className="text-2xl font-bold leading-tight">
                Sign up to create account
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account?
                <NavLink
                  to="/login"
                  className="font-bold text-[#088178] underline"
                >
                  Sign In
                </NavLink>
              </p>
              <div className="mt-5">
                <div className="space-y-4">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      User Name
                    </label>
                    <div className="mt-2">
                      <input
                        style={{
                          boxShadow: "4px 4px #323232",
                          border: "1px solid #323232",
                          borderRadius: "5px",
                        }}
                        placeholder="Full Name"
                        type="text"
                        className="flex bg-white h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        style={{
                          boxShadow: "4px 4px #323232",
                          border: "1px solid #323232",
                          borderRadius: "5px",
                        }}
                        placeholder="Email"
                        type="email"
                        className="bg-white flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-base font-medium text-gray-900">
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        style={{
                          boxShadow: "4px 4px #323232",
                          border: "1px solid #323232",
                          borderRadius: "5px",
                        }}
                        placeholder="Password"
                        type="password"
                        className="flex h-10 bg-white w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <button
                    onClick={signup}
                    style={{
                      boxShadow: "4px 4px #323232",
                      border: "1px solid #323232",
                      borderRadius: "5px",
                    }}
                    className="inline-flex mt-5 w-full items-center justify-center rounded-md bg-[#088178] text-white px-3.5 py-2.5 font-semibold leading-7  hover:bg-[#08817950] hover:text-[#088178]"
                    type="submit"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Signup;
