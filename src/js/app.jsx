import React from "react";

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
      result: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }
  calculate() {
    const rate = parseFloat(this.state.rate) / 1200;
    const balance = parseFloat(this.state.balance);
    const term = parseFloat(this.state.term) * 12;
    const num = rate * Math.pow(1 + rate, term);
    const den = Math.pow(1 + rate, term) - 1;

    const plan = balance * (num / den);
    const result = plan.toFixed(2);
    alert("plan" + plan);
    alert("result" + result);
    this.setState({
      result: result
    });

    return result;
  }
  handleEvent(e) {
    e.preventDefault();
    this.calculate();
  }
  // handleBalance(event){

  // }
  // handleRate(event){
    
  // }
  // handleInterest(event){
    
  // }


  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {

    return (
      <div className="container">
        <h3>Mortgage Calculator</h3>
        <form className="form=horizontal">
          <label htmlFor="balance" className="col-sm-2 control-label">
            Loan Balance
          </label>
          <div className="col-sm-10">
            <input
              name="balance"
              min="1"
              max="999999"
              onChange={this.handleChange}
              type="number"
              
            />
          </div>
          <label htmlFor="rate" className="col-sm-2 control-label">
            Interest rate %
          </label>
          <div className="col-sm-10">
            <input
              name="rate"
              onChange={this.handleChange}
              type="number"
              step="0.1"
            />
          </div>
          <label className="col-sm-2 control-label">Loan Terms</label>
          <div className="col-sm-10">
            <select
              onChange={this.handleChange}
              name="term"
              
            >
              <option>15</option>
              <option>30</option>
            </select>
          </div>
          <div className="col-sm-10">
            <label className="col-sm-2 control-label">Monthly Payment</label>
            <div className="col-sm-10">
              <button
                name="submit"
                className="btn btn-primary"
                onClick={this.handleEvent}
              >
                Submit
              </button>
              <div className="col-sm-12">
                <div id="output" type="string">
                  ${this.state.result} is your monthly payment.
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
