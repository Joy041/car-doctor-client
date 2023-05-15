import { useContext, useRef, useState } from "react";
import img from '../../assets/images/login/login.svg';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CarContext } from "../../Routes/AuthProvider/AuthProvider";


const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef = useRef();
    const { login, passwordReset, googleLogin, githubLogin } = useContext(CarContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleLoginForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password, confirm)

        setError('')
        setSuccess('')

        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('Login successful')
                form.reset()
                navigate(from, { replace: true })
                console.log(loggedUser)
            })
            .catch(error => setError(error.message))
    }

    const handleForgetPass = () => {
        const email = emailRef.current.value
        passwordReset(email)
            .then(() => {
                alert('Check your email')
                return
            })
            .catch(error => setError(error.message))

    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            setSuccess('Login Successful')
            navigate(from, { replace: true })
            console.log(loggedUser)
        })
        .catch(error => setError(error.message))
    }

    const handleGithubLogin = () => {
        githubLogin()
        .then(result => {
            const loggedUser = result.user;
            setSuccess('Login Successful')
            navigate(from, { replace: true })
            console.log(loggedUser)
        })
        .catch(error => setError(error.message))
    }

    return (
        <div className="hero py-16 bg-base-200 mt-6">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 text-center lg:text-left w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <form onSubmit={handleLoginForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' ref={emailRef} required className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                                <label className="label">
                                    <a href="#" onClick={handleForgetPass} className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <p className='text-danger'>{error}</p>
                                <p className='text-success'>{success}</p>
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='form-control'>
                                <p className='mt-3 text-center'>Do not Have An Account ? <Link to='/register' className='text-decoration-none text-primary'>Register</Link></p>
                                <p className='text-center'>-----------------OR-----------------</p>
                                <button type="submit" onClick={handleGoogleLogin} className=' btn w-100 bg-white text-black border-dark fw-semibold'>
                                    <FaGoogle className='mr-1'></FaGoogle> Login with Google
                                </button>
                                <button type="submit" onClick={handleGithubLogin} className='btn w-100 bg-white text-black border-dark fw-semibold mt-4'>
                                    <FaGithub className='mr-1'></FaGithub> Login with Github
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;