import styles from "../styles/Meme.module.css"
import { Getmemes } from "../lib/fwetchnewmem"
import { useState } from "react"
export default function Meme() {
    const [memes, setMemes] = useState([])
    const [reset,setReset] = useState(false)
    const addmemes = async () => {
        const data = await getMemes()
        setMemes(data.data.memes)
        console.log(data.data.memes);
    }

    const resetmemes = () => {
        setReset(true)
    }
    
    if(reset){
        setReset(false)
        setMemes([])
        return(
            <> 
        <div className={styles.prerender}>
            <button onClick={addmemes}>Get Memes</button>
            <button onClick={resetmemes}>Reset</button>
        </div>
        </>
        )
    }
    return <div>
        <div id="test" className={styles.meme}>
                {memes.map(meme => (
                    <div key={meme.id}>
                        <img src={meme.url} width="400px" height="200px"/>
                    </div>
                ))}
                <button onClick={addmemes}>Get Memes</button>
                <button onClick={resetmemes}>Reset</button>
            </div>
    </div>
}

async function getMemes() {
    const data = await Getmemes()
    console.log(data)
    // for (let i = 0; i < data.data.memes.length; i++) {
    //     console.log(data.data.memes[i].name)
    // }
    return data
}                                               []