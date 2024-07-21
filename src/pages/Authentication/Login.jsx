import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../components/firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      toast.success("Signin Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Sigin Failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <section>
      <div className="flex mt-12 bg-white items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
        <div
          className="bg-gray-100 xl:mx-auto xl:w-full shadow-md p-4 xl:max-w-sm 2xl:max-w-md"
          style={{
            boxShadow: "4px 4px #323232",
            border: "1px solid #323232",
            borderRadius: "10px",
          }}
        >
          <div className="mb-2 flex justify-center" />
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-[#088178] ">
            Don't have an account?{" "}
            <NavLink to="/signup" className="font-bold underline">
              Create a free account
            </NavLink>
          </p>
          <div className="mt-8">
            <div className="space-y-5">
              <div>
                <label className="text-base font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2 bg-white">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      boxShadow: "4px 4px #323232",
                      border: "1px solid #323232",
                      borderRadius: "5px",
                    }}
                    placeholder="Email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    name="email"
                    value={email}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-gray-900">
                    Password
                  </label>
                  <a
                    className="text-sm font-semibold text-black hover:underline"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="mt-2 bg-white">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      boxShadow: "4px 4px #323232",
                      border: "1px solid #323232",
                      borderRadius: "5px",
                    }}
                    placeholder="Password"
                    type="password"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    name="password"
                    value={password}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={signin}
                  style={{
                    boxShadow: "4px 4px #323232",
                    border: "1px solid #323232",
                    borderRadius: "5px",
                  }}
                  className="inline-flex w-[150px] items-center justify-center rounded-md text-white bg-[#088178] px-3.5 py-2.5 font-semibold leading-7 hover:bg-[#08817950] hover:text-[#088178] "
                  type="submit"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
