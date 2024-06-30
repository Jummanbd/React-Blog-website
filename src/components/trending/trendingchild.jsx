

const trendingchild = ({id, badgeText, images, title, decs}) => {
  return (
    <div className="trending-item mt-5" key={id}>
    <div className="trending-img">
        {badgeText ? (<span className='trend--badge'>{badgeText}</span>) : ""}
      
      <img src={images} alt="trend-img" />
    </div>
    <div className="trending-body">
       <div className="media pt-3">
          <div className="d-flex">
              <div className="trend-box"></div>
          </div>
          <div className="media-body">
            <div className="heading--section ms-2">
               <h4 className="sec-title">{title}</h4>
               <p className="sec_decs">{decs}</p>
            </div>
          </div>
       </div>
    </div>
  </div>
  )
}

export default trendingchild
