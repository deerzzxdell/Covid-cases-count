import axios from 'axios'
import { useState ,useEffect } from 'react'
import styled from 'styled-components';
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

const Body = styled.div`

  font-family: Verdana, Geneva, Tahoma, sans-serif;

`;

  return (
    <Body>
      <TotalCases covidCase = {covidData}/>
      <Cases covidData = {covidData}/>
    </Body>
  )
}

export default App;
