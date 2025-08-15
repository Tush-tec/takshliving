import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { register, error } = useAuth();
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    fullname: "",
    password: "",
    avatar: null,
  });

  const handleRegistration = (e) => {
    const { name, value, files } = e.target;

    setRegisterData((prevDetails) => ({
      ...prevDetails,
      [name]: name === "avatar" ? files[0] : value,
    }));
  };

  const handleOnRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(registerData).forEach((key) => {
      formData.append(key, registerData[key]);
    });

    await register(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-amber-50">
      <div className="w-full max-w-md p-8 flex flex-col gap-6 bg-white shadow-lg rounded-xl border border-amber-200">
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-14 h-14 mb-3 rounded-full bg-amber-100 text-amber-800">
            <LockClosedIcon className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-amber-900">
            Create Your Account
          </h1>
          <p className="text-sm text-amber-700 mt-1">
            Join our furniture family
          </p>
        </div>

        {error && (
          <p className="text-red-500 text-sm p-2 bg-red-50 rounded">{error}</p>
        )}

        <form className="flex flex-col gap-5 w-full">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-amber-800 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                placeholder="your@email.com"
                type="email"
                value={registerData.email}
                onChange={handleRegistration}
                name="email"
                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-amber-800 mb-1"
              >
                Username
              </label>
              <input
                id="username"
                placeholder="Choose a username"
                value={registerData.username}
                onChange={handleRegistration}
                name="username"
                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-amber-800 mb-1"
              >
                Full Name
              </label>
              <input
                id="fullname"
                placeholder="Your full name"
                value={registerData.fullname}
                onChange={handleRegistration}
                name="fullname"
                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-amber-800 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                placeholder="Create a password"
                type="password"
                value={registerData.password}
                onChange={handleRegistration}
                name="password"
                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-amber-800 mb-1"
              >
                Profile Photo (Optional)
              </label>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="avatar"
                  className="cursor-pointer bg-amber-100 text-amber-800 px-4 py-2 rounded-lg border border-amber-300 hover:bg-amber-200 transition text-sm"
                >
                  Choose File
                  <input
                    id="avatar"
                    type="file"
                    accept="image/*"
                    onChange={handleRegistration}
                    className="hidden"
                    name="avatar"
                  />
                </label>
                <span className="text-sm text-amber-600">
                  {registerData.avatar?.name || "No file chosen"}
                </span>
              </div>
            </div>
          </div>

          <Button
            disabled={Object.values(registerData).some(
              (val) => val === "" || val === null
            )}
            onClick={handleOnRegister}
            className="w-full py-3 bg-amber-700 hover:bg-amber-800 text-white font-medium rounded-lg transition transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Register
          </Button>
        </form>

        <div className="text-center text-sm text-amber-700">
          Already have an account?{" "}
          <a
            className="text-amber-800 font-medium hover:underline"
            href="/login"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
