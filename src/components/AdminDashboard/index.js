import { useState, useEffect } from "react";
import { FaUsers } from "react-icons/fa6";
import { FaUserMinus } from "react-icons/fa6";
import { TbCash } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa6";
import { MdAccountBalance } from "react-icons/md";
import { TbUserScan } from "react-icons/tb";
import { FaSortAmountUp } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Header from "../Header";
import SideHeader from "../SideHeader";
import "./index.css";

const AdminDashboard = () => {
  const [verifiedLoansData, setVerifiedLoansData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortLoans, setSortedLoans] = useState("ascending");

  const getVerifiedLoans = async () => {
    const apiUrl = "https://loanmanager-backend.onrender.com/loans/";
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    if (response.ok) {
      const data = await response.json();
      const verifiedLoans = data.filter(
        (loan) =>
          loan.loanStatus === "Verified" || loan.loanStatus === "Approved"
      );
      setVerifiedLoansData(verifiedLoans);
      setLoading(false);
    } else {
      console.log("Error fetching verified loans data");
    }
  };

  useEffect(() => {
    getVerifiedLoans();
  }, []);

  const approveLoan = async (id) => {
    const apiUrl = `https://loanmanager-backend.onrender.com/loans/${id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loanStatus: "Approved",
      }),
    };
    const response = await fetch(apiUrl, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      getVerifiedLoans();
      alert("Loan Approved successfully");
    } else {
      console.log("Error verifying loan");
    }
  };

  const toogleLoanSort = () => {
    setSortedLoans((prevState) =>
      prevState === "ascending" ? "descending" : "ascending"
    );
  };

  const sortedLoans = [...verifiedLoansData].sort((a, b) => {
    if (sortLoans === "ascending") {
      return a.loanAmount - b.loanAmount;
    } else {
      return b.loanAmount - a.loanAmount;
    }
  });

  return (
    <>
      <Header />
      <div className="admin-dashboard">
        <SideHeader />
        <div className="admin-dashboard-content">
          <div className="admin-dashboard-header">
            <h1>Dashboard</h1>
          </div>
          <div className="admin-dashboard-cards">
            <div className="admin-dashboard-card">
              <FaUsers className="admin-card-icon" />
              <div className="admin-card-content">
                <p>200</p>
                <p>ACTIVE USERS</p>
              </div>
            </div>
            <div className="admin-dashboard-card">
              <FaUserMinus className="admin-card-icon" />
              <div className="admin-card-content">
                <p>100</p>
                <p>BORROWERS</p>
              </div>
            </div>
            <div className="admin-dashboard-card">
              <TbCash className="admin-card-icon" />
              <div className="admin-card-content">
                <p>550,000</p>
                <p>CASH DISBURSED</p>
              </div>
            </div>
            <div className="admin-dashboard-card">
              <FaRupeeSign className="admin-card-icon" />
              <div className="admin-card-content">
                <p>1,000,000</p>
                <p>CASH RECEIVED</p>
              </div>
            </div>
            <div className="admin-dashboard-card">
              <MdSavings className="admin-card-icon" />
              <div className="admin-card-content">
                <p>450,000</p>
                <p>SAVINGS</p>
              </div>
            </div>
            <div className="admin-dashboard-card">
              <FaUserCheck className="admin-card-icon" />
              <div className="admin-card-content">
                <p>30</p>
                <p>REPIAD LOANS</p>
              </div>
            </div>
            <div className="admin-dashboard-card">
              <MdAccountBalance className="admin-card-icon" />
              <div className="admin-card-content">
                <p>10</p>
                <p>OTHER ACCOUNTS</p>
              </div>
            </div>
            <div className="admin-dashboard-card">
              <TbUserScan className="admin-card-icon" />
              <div className="admin-card-content">
                <p>50</p>
                <p>LOANS</p>
              </div>
            </div>
          </div>
          <div className="admin-loan-container">
            <div className="admin-loan-card">
              <h1>Applied Loans</h1>
              <div className="admin-loan-card">
                <FaSortAmountUp
                  onClick={toogleLoanSort}
                  className="admin-filter-icons"
                />
                <p className="admin-filters-name">Sort</p>
                <FaFilter className="admin-filter-icons" />
                <p className="admin-filters-name">Filter</p>
              </div>
            </div>
            {loading ? (
              <div className="admin-loader-container">
                <h1>Loading...</h1>
              </div>
            ) : (
              <table className="loan-table">
                <thead>
                  <tr>
                    <th className="loan-table-th">Customer Name</th>
                    <th className="loan-table-th">Amount</th>
                    <th className="loan-table-th">Date Applied</th>
                    <th className="loan-table-th">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedLoans.map((loan) => (
                    <tr key={loan.id}>
                      <td className="loan-table-th">
                        <div className="officer-info">
                          <CgProfile />
                          <div>
                            <div>{loan.name}</div>
                            <small>Updated 1 day ago</small>
                          </div>
                        </div>
                      </td>
                      <td className="loan-table-th">
                        <div>{loan.loanAmount}</div>
                      </td>
                      <td className="loan-table-th">
                        <div>{loan.dateApplied}</div>
                      </td>
                      <td className="loan-table-th">
                        <button
                          className={
                            loan.loanStatus === "Verified"
                              ? "admin-verified-button"
                              : "admin-approved-button"
                          }
                          onClick={() => approveLoan(loan.id)}
                          type="button"
                        >
                          {loan.loanStatus}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminDashboard;
