import { svgs } from '../../assets/svgs';
import './SideNav.css';

const SideNav = () => {
  return (
    <div className="sideNav center-start column">
      <div className="sideNav-item">
        <svgs.GRAPH />
      </div>
      <div className="sideNav-item">
        <svgs.CROSS />
      </div>
      <div className="sideNav-item">
        <svgs.MONITOR />
      </div>
      <div className="sideNav-item">
        <svgs.PIE />
      </div>
      <div className="sideNav-item">
        <svgs.LOGOUT />
      </div>
    </div>
  );
};
export default SideNav;
