import axios from "axios";
import react, { Component } from "react";

const api = axios.create({
  baseURL: 'https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all'
})

class App extends Component {

  constructor(props) {
    super()
    api.get('/').then(res => {
      console.log(res.data)
    })
  }

  render() {
    return (
      <div>
        <h1>Covid-19 Cases</h1>
      </div>
    )
  }
}

export default App;
