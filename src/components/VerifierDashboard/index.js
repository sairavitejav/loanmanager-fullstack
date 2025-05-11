import { useState, useEffect } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { TbUserScan } from "react-icons/tb";
import { FaUserMinus } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { MdSavings } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { TbCash } from "react-icons/tb";
import { FaSortAmountUp } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { BallTriangle } from "react-loader-spinner";
import { CgProfile } from "react-icons/cg";
import Header from "../Header";
import SideHeader from "../SideHeader";
import "./index.css";

const VerifierDashboard = () => {
  const [pendingLoansData, setPendingLoansData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortLoans, setSortedLoans] = useState("ascending");

  const getPendingLoans = async () => {
    const apiUrl = "https://loanmanager-backend.onrender.com/loans/";
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    if (response.ok) {
      const data = await response.json();
      const pendingLoans = data.filter(
        (loan) =>
          loan.loanStatus === "Pending" || loan.loanStatus === "Verified"
      );
      setPendingLoansData(pendingLoans);
      setLoading(false);
    } else {
      console.log("Error fetching pending loans data");
    }
  };

  useEffect(() => {
    getPendingLoans();
  }, []);

  const verifyLoan = async (id) => {
    const apiUrl = `https://loanmanager-backend.onrender.com/loans/${id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loanStatus: "Verified",
      }),
    };
    const response = await fetch(apiUrl, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      getPendingLoans();
      alert("Loan verified successfully");
    } else {
      console.log("Error verifying loan");
    }
  };

  const toogleSorting = () => {
    setSortedLoans((prevState) => (prevState === "ascending" ? "descending" : "ascending"));
  }

  const sortedLoans = [...pendingLoansData].sort((a, b) => {
    if (sortLoans === "ascending") {
      return a.loanAmount - b.loanAmount;
    } else {
      return b.loanAmount - a.loanAmount;
    }
  }
  );

  return (
    <>
      <Header />
      <div className="verifier-dashboard">
        <SideHeader />
        <div className="verifier-dashboard-content">
          <div className="verifier-dashboard-header">
            <p>Dashboard</p>
            <FaGreaterThan />
            <h1>Loans</h1>
          </div>
          <div className="verifier-dashboard-cards">
            <div className="verifier-dashboard-card">
              <TbUserScan className="card-icon" />
              <div className="card-content">
                <p>50</p>
                <p>LOANS</p>
              </div>
            </div>
            <div className="verifier-dashboard-card">
              <FaUserMinus className="card-icon" />
              <div className="card-content">
                <p>100</p>
                <p>BORROWERS</p>
              </div>
            </div>
            <div className="verifier-dashboard-card">
              <TbCash className="card-icon" />
              <div className="card-content">
                <p>550,000</p>
                <p>CASH DISBURSED</p>
              </div>
            </div>
            <div className="verifier-dashboard-card">
              <FaUserCheck className="card-icon" />
              <div className="card-content">
                <p>450,000</p>
                <p>SAVINGS</p>
              </div>
            </div>
            <div className="verifier-dashboard-card">
              <MdSavings className="card-icon" />
              <div className="card-content">
                <p>30</p>
                <p>REPAID LOANS</p>
              </div>
            </div>
            <div className="verifier-dashboard-card">
              <FaRupeeSign className="card-icon" />
              <div className="card-content">
                <p>1,000,000</p>
                <p>CASH RECEIVED</p>
              </div>
            </div>
          </div>
          <div className="verifier-loan-container">
            <div className="verifier-loan-card">
              <h1>Applied Loans</h1>
              <div className="verifier-loan-card">
                <FaSortAmountUp onClick={toogleSorting} className="verifier-filter-icons" />
                <p className="verifier-filters-name">Sort</p>
                <FaFilter className="verifier-filter-icons" />
                <p className="verifier-filters-name">Filter</p>
              </div>
            </div>
            {loading ? (
              <div className="loader-container">
                <BallTriangle />
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
                          className={loan.loanStatus === "Pending" ? "pending-button" : "verified-button"}
                          onClick={() => verifyLoan(loan.id)}
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
export default VerifierDashboard;
