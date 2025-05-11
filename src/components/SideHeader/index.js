import { useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaTachometerAlt } from "react-icons/fa";
import { FiUserMinus } from "react-icons/fi";
import { TbUserScan } from "react-icons/tb";
import { FaUserCheck } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { FaChartBar } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaUserCog } from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { FaSignature } from "react-icons/fa";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { FaCalendarCheck } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaSignOutAlt } from "react-icons/fa";
import "./index.css";

const SideHeader = () => {
  const location = useLocation();
  const userName = location.pathname === "/verifier" ? "John Ohok" : "John Doe";

  return (
    <div className="side-header">
      <div className="side-header-profile">
        <CgProfile className="side-icons" />
        <p>{userName}</p>
      </div>
      <div className="side-header-tabs">
        <FaTachometerAlt className="side-icons" />
        <p>Dashboard</p>
      </div>
      <div className="side-header-tabs">
        <FiUserMinus className="side-icons" />
        <p>Borrowers</p>
      </div>
      <div className="side-header-tabs">
        <TbUserScan className="side-icons" />
        <p>Loans</p>
      </div>
      <div className="side-header-tabs">
        <FaUserCheck className="side-icons" />
        <p>Repayments</p>
      </div>
      <div className="side-header-tabs">
        <FaBalanceScale className="side-icons" />
        <p>Loan Parameters</p>
      </div>
      <div className="side-header-tabs">
        <CiCreditCard1 className="side-icons" />
        <p>Accounting</p>
      </div>
      <div className="side-header-tabs">
        <FaChartBar className="side-icons" />
        <p>Reports</p>
      </div>
      <div className="side-header-tabs">
        <IoDocumentText className="side-icons" />
        <p>Collateral</p>
      </div>
      <div className="side-header-tabs">
        <FaUserCog className="side-icons" />
        <p>Access Configuration</p>
      </div>
      <div className="side-header-tabs">
        <MdSavings className="side-icons" />
        <p>Savings</p>
      </div>
      <div className="side-header-tabs">
        <ImExit className="side-icons" />
        <p>Expenses</p>
      </div>
      <div className="side-header-tabs">
        <FaSignature className="side-icons" />
        <p>E-Signature</p>
      </div>
      <div className="side-header-tabs">
        <PiSuitcaseSimpleBold className="side-icons" />
        <p>Investor Accounts</p>
      </div>
      <div className="side-header-tabs">
        <FaCalendarCheck className="side-icons" />
        <p>Calendar</p>
      </div>
      <div className="side-header-tabs">
        <IoSettingsSharp className="side-icons" />
        <p>Settings</p>
      </div>
      <div className="side-header-tabs">
        <FaSignOutAlt className="side-icons" />
        <p>Signout</p>
      </div>
    </div>
  );
};
export default SideHeader;
