import { Routes, Route } from "react-router-dom"
import IndividualCreate from "./IndividualCreate"
import IndividualEntry from "./IndividualEntry"
import IndividualList from "./IndividualList"
import LandingPage from "./LandingPage"

export default function App() {
  return (
    <>
      <div className='p-4'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/individuals' element={<IndividualList />} />
          <Route path='/individuals/create' element={<IndividualCreate />} />
          <Route path='/individuals/:id' element={<IndividualEntry />} />
          {/** <Route path='/location' element={<LocationList />} />
      <Route path='/location/:id' element={<LocationEntry />} /> */}
        </Routes>
      </div>
      <hr />
      <div className='text-xs'>
        <span className='text-accent'>text-accent</span>
        <br />
        <span className='text-secondary'>text-secondary</span>
        <br />
        <span className='text-light'>text-light</span>
        <br />
        <span className='text-primary'>text-primary</span>
        <br />
        <span className='text-dark'>text-dark</span>
        <br />
        <span className='text-white'>text-white</span>
      </div>
    </>
  )
}
