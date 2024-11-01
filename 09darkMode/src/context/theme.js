import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode : 'light',
    darkTheme : ()=>{},
    lightTheme : ()=>{},
}) 

export const ThemeProvider = ThemeContext.Provider

//coutom hooks

export default function useTheme(){
    return useContext(ThemeContext)
}

//----------------------------------------------------------

//ab hame 2 2 import ki zarorat nhhi / usecontext usercontext 2 2 ki import karne ki zarrorat nhi
//ham ne pichle 08 project me 2 2 import kar rahe the. syntex 
//ab hame sirf useTheme hi import karna hai bus.


//rap karne ke liye ThemeProvider longa

//themeMode : 'light',
//   darkTheme : ()=>{},
//   lightTheme : ()=>{}, [in value ka axis hona to useTheme use karonga.]

