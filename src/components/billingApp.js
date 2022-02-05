import React, { useState, useEffect } from "react";
import RadioInput from "./radioInput";
const BillingApp = () => {
  const [billValue, setBillValue] = useState(0);
  const [percent, setpercent] = useState(0);
  const [gottedpercent, setgottedpercent] = useState(0);
  const [noOfPeople, setNoOfPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  


  const peopleHndlerHandler = (e) => {
    setNoOfPeople(e.target.value);
    setgottedpercent((percent * billValue) / 100)
  };

  useEffect(() => {
    setTipAmount(gottedpercent / noOfPeople ? gottedpercent / noOfPeople : 0);
    const totalamt = billValue / noOfPeople;
    setTotalAmount(totalamt + tipAmount ? totalamt + tipAmount : 0);
  }, [gottedpercent, tipAmount]);

  const resetAll = () => {
    setTotalAmount(0);
    setBillValue(0)
    setTipAmount(0);
    setgottedpercent(0)
  };

  return (
    <div className="billing-app-bg">
      <h2 className="heading">
        spli<span>tter</span>
      </h2>
      <form>
        <div className="form_wrapper">
          <div className="inner_wrapper">
            <div className="form">
              <div className="form-group">
                <label>Bill</label>
                <input
                  type="number"
                  placeholder="$0"
                  onChange={(e) => setBillValue(e.target.value)}
                />
              </div>
              <div className="tip_section">
                <p>select-tip</p>
                <div className="radio-button_wrapper">
                  <div className="input_group">
                    <RadioInput value={5} percent={setpercent} />
                    <label>5%</label>
                  </div>
                  <div className="input_group">
                    <RadioInput value={10} percent={setpercent} />
                    <label>10%</label>
                  </div>
                  <div className="input_group">
                    <RadioInput value={15} percent={setpercent} />
                    <label>15%</label>
                  </div>
                  <div className="input_group">
                    <RadioInput value={25} percent={setpercent} />
                    <label>25%</label>
                  </div>
                  <div className="input_group">
                    <RadioInput value={50} percent={setpercent} />
                    <label>50%</label>
                  </div>
                  <div className="input_group">
                    <input
                      type="text"
                      placeholder="Custom"
                      onChange={(e) => setpercent(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="number_of_people">
                <label>number of people</label>
                <input
                  type="number"
                  placeholder="$0"
                  onChange={peopleHndlerHandler}
                />
              </div>
            </div>

            <div className="display-section">
              <div className="display-section-inner">
                <div className="tip-and-lable-wrapper">
                  <span className="price-label">
                    Tip Amount
                    <br />
                    <span>/person</span>
                  </span>
                  <div className="price-value">${tipAmount} </div>
                </div>

                <div className="tip-and-lable-wrapper">
                  <span className="price-label">
                    Total Amount
                    <br />
                    <span>/person</span>
                  </span>
                  <div className="price-value">${totalAmount}</div>
                </div>

                <div className="btn-wrapper">
                  <button type="reset" onClick={resetAll}>
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BillingApp;
