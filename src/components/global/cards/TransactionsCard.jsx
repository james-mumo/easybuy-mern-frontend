import React from "react";

const TransactionsCard = () => {
  return (
    <div className="cardContainer p-3 flex flex-col dashcolor rounded-2xl gap-5">
      <div className="cardHeader flex flex-row justify-between">
        <span className="title font-bold">Transactions</span>
        <span className="options">...</span>
      </div>

      <div className="cardBody flex flex-col">
        {/*  */}
        <div className="cardTransactionItem flex flex-row">
          <span className="transactionIcon flex justify-center items-center p-1">
            🚀
          </span>
          <div className="transactionInfo flex flex-col justify-center items-start p-1">
            <span className="transactionHeader">Paypal</span>
            <span className="transactionType">Send Money</span>
          </div>
          <span className="transactionAmount items-center px-3 flex-1 flex right-0 justify-end">
            + 67,800 USD
          </span>
        </div>
        {/*  */}
        <div className="cardTransactionItem flex flex-row">
          <span className="transactionIcon flex justify-center items-center p-1">
            🚀
          </span>
          <div className="transactionInfo flex flex-col justify-center items-start p-1">
            <span className="transactionHeader">Paypal</span>
            <span className="transactionType">Send Money</span>
          </div>
          <span className="transactionAmount items-center px-3 flex-1 flex right-0 justify-end">
            + 67,800 USD
          </span>
        </div>
        {/*  */}
        <div className="cardTransactionItem flex flex-row">
          <span className="transactionIcon flex justify-center items-center p-1">
            🚀
          </span>
          <div className="transactionInfo flex flex-col justify-center items-start p-1">
            <span className="transactionHeader">Paypal</span>
            <span className="transactionType">Send Money</span>
          </div>
          <span className="transactionAmount items-center px-3 flex-1 flex right-0 justify-end">
            + 67,800 USD
          </span>
        </div>
        {/*  */}
        <div className="cardTransactionItem flex flex-row">
          <span className="transactionIcon flex justify-center items-center p-1">
            🚀
          </span>
          <div className="transactionInfo flex flex-col justify-center items-start p-1">
            <span className="transactionHeader">Paypal</span>
            <span className="transactionType">Send Money</span>
          </div>
          <span className="transactionAmount items-center px-3 flex-1 flex right-0 justify-end">
            + 67,800 USD
          </span>
        </div>
        {/*  */}
        <div className="cardTransactionItem flex flex-row">
          <span className="transactionIcon flex justify-center items-center p-1">
            🚀
          </span>
          <div className="transactionInfo flex flex-col justify-center items-start p-1">
            <span className="transactionHeader">Paypal</span>
            <span className="transactionType">Send Money</span>
          </div>
          <span className="transactionAmount items-center px-3 flex-1 flex right-0 justify-end">
            + 67,800 USD
          </span>
        </div>
        {/*  */}
      </div>
    </div>
  )
};

export default TransactionsCard;
