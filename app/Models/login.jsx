

export default function Login(){
    return (
        <>
        <div className="popup" id="sign-popup">
          <h3>Sign In to your Account</h3>
          <div className="popup-form">
            <form>
              <div className="form-field">
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div className="form-field">
                <input type="text" name="password" placeholder="Password" />
              </div>
              <div className="form-cp">
                <div className="form-field">
                  <div className="input-field">
                    <input type="checkbox" name="ccc" id="cc1" />
                    <label htmlFor="cc1">
                      <span />
                      <small>Remember me</small>
                    </label>
                  </div>
                </div>
                <a href="#" title="">
                  Forgot Password?
                </a>
              </div>
              {/*form-cp end*/}
              <button type="submit" className="btn2">
                Sign In
              </button>
            </form>
            <a href="#" title="" className="fb-btn">
              {" "}
              <i className="fa fa-facebook" />
              Sign In With Facebook
            </a>
          </div>
        </div>
        {/*popup end*/}
        </>
    )
}