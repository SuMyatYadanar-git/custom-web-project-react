import React from 'react'
import {withRouter} from 'react-router-dom'

const LoginScreen = props => {
    return (
        <div className="container">
            <div className="text-center font-weight-bold pt-5">Welcome!</div>
            <div className="text-center py-3 "> <span className="px-2"><i class="fas fa-lock"></i></span>Please login to this</div>

            <div className="d-flex justify-content-center align-items-center flex-lg-nowrap ">
                <div className="col-lg-6 col-md-10 col-sm-12 ">
                    <form>
                        <div className="form-group " >
                            <label>UserEmail :</label>
                            <input type="email" name="email" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Passwrod :</label>
                            <input type="password" name="password" className="form-control" />
                        </div>

                        <div >
                            <label />&nbsp;
                            <button type="button" class="btn btn-outline-secondary w-100"  >Login</button>
                        </div>
                    </form>
                    <div className="text-center py-2">forget password?</div>
                </div>
               
            </div>

        </div>
    )
}
export default withRouter(LoginScreen);