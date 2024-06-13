import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Icons = () => {
  library.add(faGoogle, faFacebook);
  return <div>Icons</div>;
};

export default Icons;
