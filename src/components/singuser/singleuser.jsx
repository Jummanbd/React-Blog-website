/* eslint-disable react/prop-types */
const Singleuser = ({badge, title, usersImag , userTitle, postdate}) => {
  return (
    <div className="post-user-item">
      <p className="badge ">{badge}</p>
      <h3 className="sec-title">{title}</h3>
      <div className="media pt-3">
        <div className="d-flex">
        <img src={usersImag} className='user-imgs' alt="" />
        </div>
        <div className="media-body">
        <div className="heading--section">
            <h4 className="sec-title">{userTitle}</h4>
            <p className="sec_decs">{postdate}</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Singleuser;
