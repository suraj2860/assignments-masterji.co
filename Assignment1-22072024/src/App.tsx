import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OtpForm from './components/otp-form/OtpForm';
import ProductList from './components/course-list/CourseList';
import Batches from './components/batches/Batches';
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<OtpForm />} />
          <Route path='/otp-form' element={<OtpForm />} />
          <Route path='/course-list' element={<ProductList />} />
          <Route path='/batches' element={<Batches />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
