import { RiImageAddLine } from "react-icons/ri";
const Deshboardfrom = () => {
  return (
    <div className="deshboardfrom">
      <div className="deshboard-from-item mt-4">
      <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">Post Title *</label>
      <input type="text" className="form-control py-2 px-3" />
      </div>

      <div className="deshboard-from-item mt-4">
      <label className="form-label fw-medium">Post Excerpt *</label>
      <textarea className="form-control mt-0"rows="5"></textarea>
      <p className="sec_decs mt-1">Brief description for your article. URLs are hyperlinked.</p>
      </div>

       <div className="d-flex  justify-content-between responsive-input">
        <div className="deshboard-from-item mt-4 me-4">
        <label htmlFor="exampleFormControlTextarea1" className="form-label fw-medium">Category *</label>
        <select className="form-select form-control py-2 px-3" aria-label="Default select example">
          <option selected>-select-</option>
          <option value="1">Category 1</option>
          <option value="2">Category 2</option>
          <option value="3">Category 3</option>
      </select>
        </div>

        <div className="deshboard-from-item mt-4 me-4">
        <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">Post Title *</label>
        <input type="text" className="form-control py-2 px-3" />
        </div>
       </div>


      <div className="deshboard-from-item mt-4">
      <label  className="form-label fw-medium">Featured Image*</label>
       <div className="upload-file">
        <RiImageAddLine/>
       <input type="file" className="form-control upload-input py-2 px-3" />
       <p className="upload-sec_decs">PNG, JPG, GIF up to 2MB</p>
       </div>
      </div>

       <div className="deshboard-from-item mt-4">
      <label htmlFor="exampleFormControlTextarea1" className="form-label fw-medium">Post Excerpt *</label>
      <textarea className="form-control h-100 mt-0" rows="12" ></textarea>
      </div>
      <button className="theme-btn submit-btn mt-4 w-100">Sumit post</button>

    </div>
  )
}

export default Deshboardfrom
