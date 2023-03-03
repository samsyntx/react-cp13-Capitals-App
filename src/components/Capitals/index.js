import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]
class Capitals extends Component {
  state = {countryId: 'NEW_DELHI'}

  changeInputEle = event => {
    this.setState({countryId: event.target.value})
  }

  render() {
    const {countryId} = this.state
    const filteredCountryDetail = countryAndCapitalsList.filter(
      eachDetail => eachDetail.id === countryId,
    )
    const popObjectFromList = filteredCountryDetail.pop()

    const countryNameAsPerCapital = popObjectFromList.country

    return (
      <div className="main-container">
        <div className="content-container">
          <h1 className="main-container-heading">Countries And Capitals</h1>
          <div className="option-input-container">
            <select
              onChange={this.changeInputEle}
              id="capitalDisplayText"
              className="select-option-style"
            >
              {countryAndCapitalsList.map(eachCity => (
                <option key={eachCity.id} value={eachCity.id}>
                  {eachCity.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capitalDisplayText">
              is Capital of which country?
            </label>
          </div>
          <h1 className="showing-country-style">{countryNameAsPerCapital}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
