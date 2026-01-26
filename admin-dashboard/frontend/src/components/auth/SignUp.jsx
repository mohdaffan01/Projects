import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function SignUP() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-slate-800 to-blue-900 px-4">
      <div className="w-full max-w-5xl bg-slate-900/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Section */}
          <div className="hidden md:flex flex-col justify-center p-12 bg-linear-to-br from-slate-900 to-blue-900">
            <h2 className="text-4xl font-bold text-gray-100">Create Account ✨</h2>
            <p className="mt-4 text-gray-400 text-lg leading-relaxed">
              Join us and start building amazing things. Create your account
              to access all features and stay productive.
            </p>
          </div>

          {/* Right Section */}
          <div className="p-10">
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">
              Sign Up
            </h3>

            {/* Form */}
            <form className="space-y-5">
              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Choose a username"
                  className="w-full px-4 py-3 rounded-xl border text-white border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full px-4 py-3 text-white rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 rounded-xl text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                />
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-linear-to-r cursor-pointer from-blue-600 to-slate-700 text-white font-semibold text-lg shadow-lg hover:opacity-90 active:scale-95 transition"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="grow h-px bg-slate-700" />
              <span className="px-3 text-sm text-gray-400">OR</span>
              <div className="grow h-px bg-slate-700" />
            </div>

            {/* Google Signup */}
            <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 shadow-sm transition">
              <FcGoogle size={22} />
              <span className="font-medium cursor-pointer text-gray-200">Sign up with Google</span>
            </button>

            {/* Login text */}
            <p className="text-center text-gray-300 mt-6">
              Already have an account?{" "}
              <Link to="/login">
              <button className="text-blue-400 cursor-pointer font-semibold hover:underline">
                Login
              </button></Link>
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
