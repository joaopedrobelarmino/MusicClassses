import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import PagePiano from './Components/Pages/PagePiano/PagePiano.jsx';
import PageViolao from './Components/Pages/PageViolao/PageViolao.jsx';
import PageGuitar from './Components/Pages/PageGuitar/PageGuitar.jsx';
import Address from './Components/Pages/Address/Address.jsx';
import Integrate from './Components/Pages/Integrate/Integrate.jsx';
import PageCourses from './Components/Pages/PageCourses/PageCourses.jsx';
import PageContact from './Components/Pages/PageContact/PageContact.jsx';
import PianoMorning from './Components/Pages/PagePiano/Classes/PianoMorning/PianoMorning.jsx';
import PianoAfternoon from './Components/Pages/PagePiano/Classes/PianoAfternoon/PianoAfternoon.jsx';
import PianoNight from './Components/Pages/PagePiano/Classes/PianoNight/PianoNight.jsx';
import ViolaoMorning from './Components/Pages/PageViolao/Classes/ViolaoMorning/ViolaoMorning.jsx';
import ViolaoAfternon from './Components/Pages/PageViolao/Classes/ViolaoAfternoon/ViolaoAfternon.jsx';
import ViolaoNight from './Components/Pages/PageViolao/Classes/ViolaoNight/ViolaoNight.jsx';
import GuitarMorning from './Components/Pages/PageGuitar/Classes/GuitarMorning/GuitarMorning.jsx';
import GuitarAfternoon from './Components/Pages/PageGuitar/Classes/GuitarAfternoon/GuitarAfternoon.jsx';
import GuitarNight from './Components/Pages/PageGuitar/Classes/GuitarNight/GuitarNight.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="GuitarAfternoon" element={<GuitarAfternoon />} />
        <Route path="GuitarMorning" element={<GuitarMorning />} />
        <Route path="GuitarNight" element={<GuitarNight />} />
        <Route path="ViolaoMorning" element={<ViolaoMorning />} />
        <Route path='ViolaoNight' element={<ViolaoNight />}/>
        <Route path="ViolaoAfternon" element={<ViolaoAfternon />} />
        <Route path="PianoMorning" element={<PianoMorning />} />
        <Route path="PianoAfternoon" element={<PianoAfternoon />} />
        <Route path="PianoNight" element={<PianoNight />} />
        <Route path="Contact" element={<PageContact />} />
        <Route path="Courses" element={<PageCourses />} />
        <Route path="Integrate" element={<Integrate />} />
        <Route path="Address" element={<Address />} />
        <Route path="Piano" element={<PagePiano />} />
        <Route path="Violao" element={<PageViolao />} />
        <Route path="Guitarra" element={<PageGuitar />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
