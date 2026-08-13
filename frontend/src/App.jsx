import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Inicio from './pages/Inicio.jsx'; import Denuncia from './pages/Denuncia.jsx'; import Consulta from './pages/Consulta.jsx'; import Seguimiento from './pages/Seguimiento.jsx';
export default function App(){return <Layout><Routes><Route path="/" element={<Inicio/>}/><Route path="/denuncia" element={<Denuncia/>}/><Route path="/consulta" element={<Consulta/>}/><Route path="/seguimiento" element={<Seguimiento/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes></Layout>}
