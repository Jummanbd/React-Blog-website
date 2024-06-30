
const BillingAddress = () => {
  return (
    <div className="deshboardfrom">
      <div className="d-flex responsive-input">
            <div className="deshboard-from-item mt-4 me-4">
              <label htmlFor="exampleFormControlTextarea1" className="form-label fw-medium">Country *</label>
              <select className="form-select form-control py-2 px-3" aria-label="Default select example">
                <option selected>United States</option>
                <option value="1">Canada</option>
                <option value="2">Mexico</option>
                <option value="3">Bangladesh</option>
                <option value="3">Japan</option>
            </select>
            </div>
            <div className="deshboard-from-item mt-4 me-4">
              <label htmlFor="exampleFormControlTextarea1" className="form-label fw-medium">State/Pravince/Region *</label>
              <select className="form-select form-control py-2 px-3" aria-label="Default select example">
                <option selected>Haapai</option>
                <option value="1">Tongatapu</option>
                <option value="2">Vavau</option>
               
            </select>
            </div>
      </div>
      <div className="d-flex responsive-input">
            <div className="deshboard-from-item mt-4 me-2">
               <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">Address Line 1*</label>
               <input type="text" className="form-control py-2 px-3" />
           </div>
           <div className="deshboard-from-item mt-4 ms-2">
               <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">Address Line 2*</label>
               <input type="text" className="form-control py-2 px-3"/>
           </div>
        </div>

        <div className="d-flex responsive-input">
            <div className="deshboard-from-item mt-4 me-2">
               <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">City *</label>
               <input type="text" className="form-control py-2 px-3" placeholder="Example Doe" />
           </div>
           <div className="deshboard-from-item mt-4 ms-2">
               <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">Postal/Zip Code *</label>
               <input type="text" className="form-control py-2 px-3" placeholder="Doe"/>
           </div>
        </div>
        <button className="theme-btn submit-btn mt-4 w-100">Sumit post</button>
    </div>
  )
}

export default BillingAddress
