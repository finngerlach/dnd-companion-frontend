import { Routes, Route } from "react-router-dom"
import IndividualCreate from "./IndividualCreate"
import IndividualEntry from "./IndividualEntry"
import IndividualList from "./IndividualList"
import LandingPage from "./LandingPage"

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/individuals' element={<IndividualList />} />
      <Route path='/individuals/create' element={<IndividualCreate />} />
      <Route path='/individuals/:id' element={<IndividualEntry />} />
      {/** <Route path='/location' element={<LocationList />} />
      <Route path='/location/:id' element={<LocationEntry />} /> */}
    </Routes>
  )
}
