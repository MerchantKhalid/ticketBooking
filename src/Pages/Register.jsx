import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGoogle,
  faFacebook,
  faGithub,
  faPinterest,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Register = () => {
  library.add(faGoogle, faFacebook, faGithub, faPinterest, faLinkedin);
  return (
    <div className="hero min-h-screen">
      <div className="hero-content">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-center tect-3xl font-bold text-blue-900">
            Please Register
          </h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-700">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input  border border-indigo-800"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-700">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input  border border-indigo-800"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-700">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input border border-indigo-800"
                required
              />
              <label className="label">
                <Link
                  to="#"
                  className="label-text-alt link link-hover text-blue-700"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn border border-indigo-800">Register</button>
            </div>
            <label className="label">
              <Link to="/signin" className="label-text-alt link link-hover">
                Already have an account? Please Login
              </Link>
            </label>
            <div className="divider text-blue-700">Continue with</div>
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={['fab', 'google']}
                size="md"
                className="text-red-500 mx-2"
              />
              <FontAwesomeIcon
                icon={['fab', 'facebook']}
                size="md"
                className="text-blue-600 mx-2"
              />
              <FontAwesomeIcon
                icon={['fab', 'github']}
                size="md"
                className="text-gray-800 mx-2"
              />
              <FontAwesomeIcon
                icon={['fab', 'pinterest']}
                size="md"
                className="text-red-600 mx-2"
              />
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                size="md"
                className="text-blue-700 mx-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
