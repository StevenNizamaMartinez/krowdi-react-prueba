import { createContext, useContext, useEffect, useState } from "react";
import { questions } from "../db/db";
import { toast } from "react-hot-toast";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [data,setData] = useState(questions)

  const saveVideosCompleted = (data) => {
    //Guarda los videos en y los envia al reclutador
    toast.success('Videos enviados al reclutador')
  }

  const saveVideoDb = (userId, questionId,urlVideo) => {
    //Guarda el video en la base de datos
    toast.success('Video guardado correctamente')
  }

  return (
    <AppContext.Provider value={{data,setData, saveVideosCompleted, saveVideoDb}}>
      {children}
    </AppContext.Provider>)
}

export const useAppContext = () => {
  return useContext(AppContext);
}
