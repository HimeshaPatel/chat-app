import { Link } from "react-router-dom"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"

import useSignup from "../../hooks/useSignUP"

const SignUp = () => {
  const [input, setInput] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })

  const {loading, signup}=useSignup()

  const handleCheckboxChange = (gender) => {
    setInput({ ...input, gender });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(input);
    
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">Sign Up<span className="text-blue-500">ChatApp</span></h1>
        <form onSubmit={handleSubmit}> 
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input type="text" value={input.fullName}
             onChange={(e) => setInput({ ...input, fullName: e.target.value })}
              placeholder="Enter full name" 
              className="input input-bordered w-full h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" value={input.username}
             onChange={(e) => setInput({ ...input, username: e.target.value })}
             placeholder="Enter username"
             className="input input-bordered w-full h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input type="password" value={input.password}
             onChange={(e) => setInput({ ...input, password: e.target.value })}
             placeholder="Enter password" className="input input-bordered w-full h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>            
            <input type="text" value={input.confirmPassword}
             onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
             placeholder="Confirm password" className="input input-bordered w-full h-10" />
          </div>       
        
         <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={input.gender}/>
          <Link to="/login" className="text-sm hover:underline hover:text-blue-600  inline-block">
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      
      </div>
      </div>
  )
}

export default SignUp