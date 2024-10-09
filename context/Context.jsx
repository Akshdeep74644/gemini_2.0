import { createContext } from "react";
import runchat  from '../config/api'
import { useState } from "react";

export const Context = createContext();

const ContextProvider = (props) =>{

    const [showdata, setshowData] = useState(false);
    const [input, setInput] = useState("");
    const [recentprompt, setrecentPrompt] = useState(""); 
    const [prevprompt, setprevPrompt] = useState([]);
    const [loading, setLoading] = useState(false);
    const [resultdata, setresultData] = useState("")

    const typinganimate = (index, nextword)=>{
        setTimeout(() => {
            setresultData(prev => prev+nextword)
        }, 75*index);
    }


    const onSent = async (prompt)=>{
        setresultData("")
        setLoading(true)
        setshowData(true)
        setrecentPrompt(input)
        setprevPrompt(prev=>[...prev, input])
        const response = await runchat(input);
        let responseArray = response.split("**");
        let newArray = "";
        for (let i = 0; i < responseArray.length; i++) {
         if(i === 0 || i%2 !== 1){
                newArray += responseArray[i]
         }else{
                newArray += "<b>"+ responseArray[i] + "</b>"
         }
            
        }
        let newArray2 = newArray.split("*").join("</br>");
        let newArraysplit = newArray2.split(" ")
        for (let i = 0; i < newArraysplit.length; i++) {
            const nextword = newArraysplit[i]
            typinganimate(i, nextword+"  ")
            
        }
        setLoading(false)
        setInput("")
    } 


    const contextValue = {
        onSent,
        runchat,
        showdata,
        input,
        setInput,
        prevprompt,
        setprevPrompt,
        recentprompt,
        setrecentPrompt, 
        loading,
        resultdata 
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;  