import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import smallimg01 from '../../../assets/images/small-avatar-1.jpg';
import smallimg02 from '../../../assets/images/small-avatar-2.jpg';
import smallimg03 from '../../../assets/images/small-avatar-3.jpg';
const Posts = () => {
  return (
    <div className="post-table">
      <table className="table  table-border ">
        <thead>
            <tr>
            <th scope="col">ARTICLE</th>
            <th scope="col">STATUS</th>
            <th scope="col">PAYMENT</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="col">
               <div className="media my-3 table-items">
                <div className="flex-shrink-0">
                    <img src={smallimg01} className="table-img" alt="img" />
                </div>
                 <h5 className="sec-title">Tokyo Fashion Week Is Making Itself Great Again</h5>
               </div>
            </th>
            <td scope="col" ><span className="badge text-bg-success my-3" >Action</span></td>
            <td scope="col"><p className="my-3 table-decs ">Not Applicable</p></td>
            <td scope="col">
                <div className="d-flex table-icons my-3">
                 <Link to="/"><CiEdit /></Link>
                 <Link to="/"><AiOutlineDelete/></Link>
                </div>
            </td>
            </tr>

            <tr>
            <th scope="col">
               <div className="media my-3 table-items">
                <div className="flex-shrink-0">
                    <img src={smallimg02} className="table-img" alt="img" />
                </div>
                 <h5 className="sec-title">Traveling Tends to Magnify All Human Emotions</h5>
               </div>
            </th>
            <td scope="col" ><span className="badge text-bg-success my-3" >Action</span></td>
            <td scope="col"><p className="my-3 table-decs ">Not Applicable</p></td>
            <td scope="col">
                <div className="d-flex table-icons my-3">
                 <Link to="/"><CiEdit /></Link>
                 <Link to="/"><AiOutlineDelete/></Link>
                </div>
            </td>
            </tr>

            <tr>
            <th scope="col">
               <div className="media my-3 table-items">
                <div className="flex-shrink-0">
                    <img src={smallimg03} className="table-img" alt="img" />
                </div>
                 <h5 className="sec-title">Interior Design: Hexagon is the New Circle in 2018</h5>
               </div>
            </th>
            <td scope="col" ><span className="badge text-bg-success my-3" >Action</span></td>
            <td scope="col"><p className="my-3 table-decs ">Not Applicable</p></td>
            <td scope="col">
                <div className="d-flex table-icons my-3">
                 <Link to="/"><CiEdit /></Link>
                 <Link to="/"><AiOutlineDelete/></Link>
                </div>
            </td>
            </tr>

            <tr>
            <th scope="col">
               <div className="media my-3 table-items">
                <div className="flex-shrink-0">
                    <img src={smallimg01} className="table-img" alt="img" />
                </div>
                 <h5 className="sec-title">Tokyo Fashion Week Is Making Itself Great Again</h5>
               </div>
            </th>
            <td scope="col" ><span className="badge text-bg-success my-3" >Action</span></td>
            <td scope="col"><p className="my-3 table-decs ">Not Applicable</p></td>
            <td scope="col">
                <div className="d-flex table-icons my-3">
                 <Link to="/"><CiEdit /></Link>
                 <Link to="/"><AiOutlineDelete/></Link>
                </div>
            </td>
            </tr>

            <tr>
            <th scope="col">
               <div className="media my-3 table-items">
                <div className="flex-shrink-0">
                    <img src={smallimg02} className="table-img" alt="img" />
                </div>
                 <h5 className="sec-title">Traveling Tends to Magnify All Human Emotions</h5>
               </div>
            </th>
            <td scope="col" ><span className="badge text-bg-success my-3" >Action</span></td>
            <td scope="col"><p className="my-3 table-decs ">Not Applicable</p></td>
            <td scope="col">
                <div className="d-flex table-icons my-3">
                 <Link to="/"><CiEdit /></Link>
                 <Link to="/"><AiOutlineDelete/></Link>
                </div>
            </td>
            </tr>

            <tr>
            <th scope="col">
               <div className="media my-3 table-items">
                <div className="flex-shrink-0">
                    <img src={smallimg03} className="table-img" alt="img" />
                </div>
                 <h5 className="sec-title">Interior Design: Hexagon is the New Circle in 2018</h5>
               </div>
            </th>
            <td scope="col" ><span className="badge text-bg-success my-3" >Action</span></td>
            <td scope="col"><p className="my-3 table-decs ">Not Applicable</p></td>
            <td scope="col">
                <div className="d-flex table-icons my-3">
                 <Link to="/"><CiEdit /></Link>
                 <Link to="/"><AiOutlineDelete/></Link>
                </div>
            </td>
            </tr>
        </tbody>
     </table>
    </div>
  )
}

export default Posts;
