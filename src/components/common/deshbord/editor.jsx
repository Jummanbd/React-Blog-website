

const Editor = () => {
  return (
    <div className="editor-wrpa deshboardfrom">
        <div className="d-flex responsive-input">
            <div className="deshboard-from-item mt-4 me-2">
               <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">First name *</label>
               <input type="text" className="form-control py-2 px-3" placeholder="Example Doe" />
           </div>
           <div className="deshboard-from-item mt-4 ms-2">
               <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">Last name *</label>
               <input type="text" className="form-control py-2 px-3" placeholder="Doe"/>
           </div>
        </div>

        <div className="d-flex responsive-input">
            <div className="deshboard-from-item mt-4 me-2">
               <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">Current password *</label>
               <input type="text" className="form-control py-2 px-3" placeholder="***"/>
           </div>
           <div className="deshboard-from-item mt-4 ms-2">
               <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">New password *</label>
               <input type="text" className="form-control py-2 px-3" placeholder="example@example.com"/>
           </div>
        </div>

        <div className="deshboard-from-item mt-4">
          <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">Email address *</label>
         <input type="text" className="form-control py-2 px-3" />
      </div>
      <button className="theme-btn submit-btn mt-4 w-100">Sumit post</button>

    </div>
  )
}

export default Editor
