import React from "react";

const AddBlog = () => {
    return(
        <>
        <div className="container" style = {{width:"45%"}}>
            <h1 className="text-center my-3">AddBlog</h1>
            <form>
            <div className="mb-3 my-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampletext" aria-describedby="emailHelp"/>
  </div>


  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>


  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">ImgUrl</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="d-grid gap-3 my-5">
  <button type="submit" className="btn btn-primary">AddBlog</button>
  </div>

</form>
</div>
        </>
    )
}

export default AddBlog