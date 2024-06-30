
import sectiondata from '../../../../store/store';
import Slidemenu from './Slidemenu';
const Navbar = () => {
  return (
   <div>
        {sectiondata.headermenu.map((item, index) => <Slidemenu key={index} items={item}/>)}

   </div>
  )
}

export default Navbar
