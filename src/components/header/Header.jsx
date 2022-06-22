import { svgs } from '../../assets/svgs/';
import './Header.css';

const Header = () => {
  return (
    <div className="header center-between">
      <div className="center-between">
        <div className="logo">{<svgs.LOGO />}</div>
        <div className="">{<svgs.MENU />}</div>
      </div>
      <div className="center-between">
        <div className="avatar">
          <span className="avatar-text">JD</span>
        </div>
        <div className="l-blue">John Doe</div>
      </div>
    </div>
  );
};
export default Header;
