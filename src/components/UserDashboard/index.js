import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TbUserScan } from "react-icons/tb";
import { MdCurrencyRupee } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaSortAmountUp } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { BallTriangle } from "react-loader-spinner";
import { CgProfile } from "react-icons/cg";
import HomeHeader from "../HomeHeader";
import "./index.css";

const UserDashboard = () => {
  const [loansData, setLoansData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [sortLoans, setSortedLoans] = useState("ascending");
  
  const navigate = useNavigate();

  const getLoansData = async () => {
      const loansApiUrl = "https://loanmanager-backend.onrender.com/loans/";
      const options = {
        method: "GET",
      };
      const response = await fetch(loansApiUrl, options);
      if (response.ok) {
        const data = await response.json();
        setLoansData(data);
        setLoading(false);
      } else {
        console.log("Error fetching loans data");
      }
    };

  useEffect(() => {
    getLoansData();
  }, []);

  const applyLoan = () => {
    navigate("/loan-application");
  };

  const readUserSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredLoans = loansData.filter(loan => (
    loan.name.toLowerCase().includes(searchInput.toLowerCase())
  ))

  const toggleSorting = () => {
    setSortedLoans(prevState => (prevState === "ascending" ? "descending" : "ascending"));
  }

  const sortedLoans = [...filteredLoans].sort((a, b) => {
    if (sortLoans === "ascending") {
      return a.loanAmount - b.loanAmount;
    } else {
      return b.loanAmount - a.loanAmount;
    }
  }
  );

  return (
    <>
      <HomeHeader />
      <div className="user-dashboard">
        <div className="user-detailed-container">
          <div className="user-inner-container">
            <TbUserScan className="user-scan" />
            <div>
              <p className="deposit-head">DEPOSIT</p>
              <div className="currency">
                <MdCurrencyRupee className="ruppee-icon" />
                <p className="value">0.0</p>
              </div>
            </div>
          </div>
          <div>
            <button onClick={applyLoan} type="button" className="loan-button">
              Get a Loan
            </button>
          </div>
        </div>
        <div className="transactions-container">
          <div className="borrow">
            <p className="transaction">Borrow Cash</p>
          </div>
          <div className="transact">
            <p className="transaction">Transact</p>
          </div>
          <div className="deposit">
            <p className="transaction">Deposit Cash</p>
          </div>
        </div>
        <div className="search-container">
          <div className="input-container">
            <FaSearch className="search-icon" />
            <input
              onChange={readUserSearch}
              value={searchInput}
              type="search"
              placeholder="Search for loans"
              className="input"
            />
          </div>
        </div>
        <div className="loan-container">
          <div className="loan-card">
            <h1>Applied Loans</h1>
            <div className="loan-card">
              <FaSortAmountUp className="filter-icons" onClick={toggleSorting} />
              <p className="filters-name">Sort</p>
              <FaFilter className="filter-icons" />
              <p className="filters-name">Filter</p>
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
                  <th className="loan-table-th">Loan Applicant</th>
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
                      <p
                        className={
                          loan.loanStatus === "Pending"
                            ? "pending-class"
                            : loan.loanStatus === "Verified"
                            ? "verified-class"
                            : "approved-class"
                        }
                      >
                        {loan.loanStatus}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
export default UserDashboard;
