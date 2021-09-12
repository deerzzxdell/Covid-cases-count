import axios from 'axios'
import { useState ,useEffect } from 'react'
import Cases from "./components/Cases";
import TotalCases from "./components/TotalCases";



const App = () => {
  const [covidData, setCovidData] = useState({
    cases: [],
})
    useEffect(() => {
    axios.get('https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all').then((res) => {
      console.log(res.data)
      setCovidData({cases: res.data})
    })  
  }
,[])
  return (
    <div className = "container">
      <TotalCases covidCase = {covidData}/>
      <Cases covidData = {covidData}/>
    </div>
  )
}

export default App;
