import React, { Component } from 'react';
import LicenseAndCert from './artifacts/LicenseAndCert.json';
import Web3 from 'web3';
import { LICENSES_LIST_ABI, LICENSES_LIST_ADDRESS } from './configs/licensesConfig';

import MyNavbar from './components/navbar.component';
import License from './components/license.component';

class App extends Component {

  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8454");
    const network = await web3.eth.net.getNetworkType();
    
    // read the account and put it in the state
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    // load smart contract
    const licensesList = new web3.eth.Contract(LICENSES_LIST_ABI, LICENSES_LIST_ADDRESS);
    this.setState({ licensesList });
    const licenseCount = await licensesList.methods.licenseAndCertCount().call();
    this.setState({ licenseCount });

    const licenses = await licensesList.methods.licenses(1).call();
    this.setState({ licenseName: licenses.professionalRole });
    this.setState({ state: licenses.state });
    this.setState({ professionalRole: licenses.professionalRole });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: '',
      licenseCount: 0,
      licenseName: '',
      state: '',
      professionalRole: ''
    }
  }

  render() {
    return (
      <div>
      <MyNavbar account={this.state.account}></MyNavbar>
        <div className="container">
          <h1>Hello World</h1>
          <p>Your account: {this.state.account}</p>
          <p>License Count: { this.state.licenseCount}</p>

          <License licenseName={this.state.licenseName} state={this.state.state} professionalRole={this.state.professionalRole}></License>
        </div>
      </div>
    );
  }
}

export default App;
