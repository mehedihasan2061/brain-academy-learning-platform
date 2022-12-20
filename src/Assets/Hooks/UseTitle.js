import { useEffect } from "react"

const UseTitle = title=>{
    useEffect(()=>{
document.title = `${title} - Brains Academy`
    },[title])
}

export default UseTitle