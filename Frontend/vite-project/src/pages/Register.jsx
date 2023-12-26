import React from "react";

const Register = () => {
    return(
        <>
        <div className="container" style = {{width:"45%"}}>
            <h1 className="text-center my-3">Register User</h1>
            <form>
            <div className="mb-3 my-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampletext" aria-describedby="emailHelp"/>
  </div>


  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>


  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="d-grid gap-3 my-5">
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>

</form>
</div>
        </>
    )
}

export default Register