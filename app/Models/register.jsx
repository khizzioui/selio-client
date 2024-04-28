

export default function Register(){
    return (
        <>
            <div className="popup" id="register-popup">
            <h3>Register</h3>
            <div className="popup-form">
                <form>
                <div className="form-field">
                    <input type="text" name="username" placeholder="Username" />
                </div>
                <div className="form-field">
                    <input type="text" name="email" placeholder="Email" />
                </div>
                <div className="form-field">
                    <input type="text" name="password" placeholder="Password" />
                </div>
                <div className="form-cp">
                    <div className="form-field">
                    <div className="input-field">
                        <input type="checkbox" name="ccc" id="cc2" />
                        <label htmlFor="cc2">
                        <span />
                        <small>I agree with terms</small>
                        </label>
                    </div>
                    </div>
                    <a href="#" title="" className="signin-op">
                    Have an account?
                    </a>
                </div>
                {/*form-cp end*/}
                <button type="submit" className="btn2">
                    Register
                </button>
                </form>
            </div>
            </div>
            {/*popup end*/}
        
        </>
    )
}