import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log("Logged user:", result.user);
        toast.success("Login Successful!");
        navigate(from, { replace: true });
      })
      .catch(err => toast.error(err.message));
  };

  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        toast.success("Social Login Successful");
        navigate(from, { replace: true });
      })
      .catch(err => toast.error(err.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Access thousands of scholarships today.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

            <div className="divider">OR</div>

            <button type="button" onClick={handleGoogle} className="btn btn-outline btn-accent">
              Sign in with Google
            </button>

            <p className="text-center mt-4 text-sm">
              New here? <Link to="/register" className="text-primary hover:underline">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
