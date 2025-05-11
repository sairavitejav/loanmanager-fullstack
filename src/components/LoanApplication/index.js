import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import HomeHeader from "../HomeHeader";
import "./index.css";

const LoanApplication = () => {
  const [name, setName] = useState("");
  const [loanAmount, setAmount] = useState("");
  const [loanTenure, setTenure] = useState("");
  const [employmentStatus, setEmpstat] = useState("");
  const [employmentAddress, setAddress] = useState("");
  const [loanReason, setReason] = useState("");
  const [terms, setTerms] = useState(false);
  const [terms2, setTerms2] = useState(false);

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const loanDetails = {
      id: uuidv4(),
      name,
      loanAmount,
      loanTenure,
      employmentStatus,
      employmentAddress,
      loanReason,
      loanStatus: "Pending",
      dateApplied: new Date().toLocaleDateString(),
    };

    const apiUrl = "https://loanmanager-backend.onrender.com/loans/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loanDetails),
    };
    const response = await fetch(apiUrl, options);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      alert("Loan application submitted successfully");
    } else {
      console.log("Error submitting loan application");
    }
    setName("");
    setAmount("");
    setTenure("");
    setEmpstat("");
    setAddress("");
    setReason("");
    setTerms(false);
    setTerms2(false);
  };

  const readName = (event) => {
    setName(event.target.value);
  };

  const readAmount = (event) => {
    setAmount(event.target.value);
  };

  const readTenure = (event) => {
    setTenure(event.target.value);
  };

  const readEMpStat = (event) => {
    setEmpstat(event.target.value);
  };

  const readAddress = (event) => {
    setAddress(event.target.value);
  };

  const readReason = (event) => {
    setReason(event.target.value);
  };

  const readTerms = () => {
    setTerms(true);
  };

  const readTerms2 = () => {
    setTerms2(true);
  };

  return (
    <>
      <HomeHeader />
      <div>
        <p className="Application-header">APPLICATION FOR A LOAN</p>
        <form className="loan-application-form" onSubmit={onFormSubmit}>
          <div className="inputs-container">
            <label className="input-label" htmlFor="name">
              Full name as it appears on bank account
            </label>
            <input
              onChange={readName}
              value={name}
              required
              className="input-field"
              type="text"
              id="name"
              placeholder="Full name as it appears on bank account"
            />
          </div>
          <div className="inputs-container">
            <label className="input-label" htmlFor="amount">
              How much do you need?
            </label>
            <input
              onChange={readAmount}
              value={loanAmount}
              required
              className="input-field"
              type="text"
              id="amount"
              placeholder="How much do you need?"
            />
          </div>
          <div className="inputs-container">
            <label className="input-label" htmlFor="tenure">
              Loan tenure (in months)
            </label>
            <input
              onChange={readTenure}
              value={loanTenure}
              required
              className="input-field"
              type="text"
              id="tenure"
              placeholder="Loan tenure (in months)"
            />
          </div>
          <div className="inputs-container">
            <label className="input-label" htmlFor="empstat">
              Employment Status
            </label>
            <input
              onChange={readEMpStat}
              value={employmentStatus}
              required
              className="input-field"
              type="text"
              id="empstat"
              placeholder="Employment Status"
            />
          </div>
          <div className="inputs-container">
            <label className="input-label" htmlFor="address">
              Employment Address
            </label>
            <input
              onChange={readAddress}
              value={employmentAddress}
              required
              className="input-field"
              type="text"
              id="address"
              placeholder="Employment Address"
            />
          </div>
          <div className="inputs-container">
            <label className="input-label" htmlFor="reason">
              Reason for loan
            </label>
            <textarea
              onChange={readReason}
              value={loanReason}
              required
              className="input-field"
              id="reason"
              placeholder="Reason for loan"
            />
          </div>
          <div>
            <input
              onChange={readTerms}
              checked={terms}
              type="checkbox"
              id="terms"
              value={terms}
              required
            />
            <label htmlFor="terms">
              I have read the important information and accept that by
              completing the application I will be bound by the terms{" "}
            </label>
          </div>
          <div>
            <input
              onChange={readTerms2}
              checked={terms2}
              type="checkbox"
              id="terms2"
              value={terms2}
              required
            />
            <label htmlFor="terms2">
              Any personal and credit information obtained may be disclosed from
              time to time to other lenders, credit bureaus or other credit
              reporting agencies.
            </label>
            <div className="submit-button">
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoanApplication;
