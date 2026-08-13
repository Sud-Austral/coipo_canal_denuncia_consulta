import { createContext, useContext, useState } from 'react';
import { casos as casosIniciales } from '../fixtures/casos.js';
const CanalContext = createContext(null);
export function CanalProvider({children}){
 const [casos,setCasos]=useState(casosIniciales);
 const registrarCaso=(tipo,datos)=>{
   const prefijo=tipo==='Denuncia'?'DEN':'CON'; const numero=String(Object.keys(casos).length+1).padStart(4,'0');
   const codigo=`${prefijo}-2026-${numero}`;
   const caso={codigo,tipo,estado:'Recibido',fecha:'12/08/2026',actualizacion:'12/08/2026',mensaje:'Su caso fue recibido correctamente.',datos};
   setCasos(prev=>({...prev,[codigo]:caso})); return codigo;
 };
 return <CanalContext.Provider value={{casos,registrarCaso}}>{children}</CanalContext.Provider>
}
export const useCanal=()=>useContext(CanalContext);
