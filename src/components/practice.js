import React, { useState, useEffect } from "react";

const BillingApp = () => {
//   const [gottedpercent, setgottedpercent] = useState(0);
//   const [noOfPeople, setNoOfPeople] = useState(0);
//   const [tipAmount, setTipAmount] = useState(0);
//   const [totalAmount, setTotalAmount] = useState(0);
  
const [data, setData] = useState({
  bilvalue: "",
  percent: "",
  numOfPeople:""
});
const peopleHndlerHandler = (e) => {
    setData({ [e.target.name]: e.target.value });
    var total = (Number(Number(data.percent)) * (Number(data.bilvalue)) / 100);
    console.log("total", total);
    // setgottedpercent(total);
};
console.log("data", data);

//   useEffect(() => {
//     setTipAmount(gottedpercent / noOfPeople ? gottedpercent / noOfPeople : 0);
//     const totalamt = billValue / noOfPeople;
//     setTotalAmount(totalamt + tipAmount ? totalamt + tipAmount : 0);
//   }, [gottedpercent, tipAmount]);

  const resetAll = () => {
    // setTotalAmount(0);
    // setBillValue(0)
    // setTipAmount(0);
    // setgottedpercent(0)
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
                  name="bilvalue"
                  value={data.bilvalue}
                  onChange={(e) => setData({ [e.target.name]: e.target.value })}
                />
              </div>
              <div className="tip_section">
                <p>select-tip</p>
                <div className="radio-button_wrapper">
                  <div className="input_group">
                    <input
                      type="radio"
                      value={5}
                      name="percent"
                      value={data.percent}
                      onClick={(e) =>
                        setData({ [e.target.name]: e.target.value })
                      }
                    />
                    <label>5%</label>
                  </div>
                  <div className="input_group">
                    <input
                      type="radio"
                      value={10}
                      name="percent"
                      value={data.percent}
                      onClick={(e) =>
                        setData({ [e.target.name]: e.target.value })
                      }
                    />
                    <label>10%</label>
                  </div>
                  <div className="input_group">
                    <input
                      type="radio"
                      value={15}
                      name="percent"
                      value={data.percent}
                      onClick={(e) =>
                        setData({ [e.target.name]: e.target.value })
                      }
                    />
                    <label>15%</label>
                  </div>
                  <div className="input_group">
                    <input
                      type="radio"
                      value={25}
                      name="percent"
                      value={data.percent}
                      onClick={(e) =>
                        setData({ [e.target.name]: e.target.value })
                      }
                    />
                    <label>25%</label>
                  </div>
                  <div className="input_group">
                    <input
                      type="radio"
                      value={50}
                      name="percent"
                      value={data.percent}
                      onClick={(e) =>
                        setData({ [e.target.name]: e.target.value })
                      }
                    />
                    <label>50%</label>
                  </div>
                  <div className="input_group">
                    <input
                      type="text"
                      placeholder="Custom"
                      name="percent"
                      value={data.percent}
                      onChange={(e) =>
                        setData({ [e.target.name]: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="number_of_people">
                <label>number of people</label>
                <input
                  type="number"
                  placeholder="$0"
                  name="numOfPeople"
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
                  <div className="price-value">$</div>
                </div>

                <div className="tip-and-lable-wrapper">
                  <span className="price-label">
                    Total Amount
                    <br />
                    <span>/person</span>
                  </span>
                  <div className="price-value">$</div>
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
