import {useEffect, useState} from "react"

const Meme = () => {

    const [meme,setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMeme,setAllMeme] = useState([])

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())                    //json()  return promise that resolves to a JavaScript object
        .then(memeData => setAllMeme(memeData.data.memes))
    },[])
    
    const getMemeImage = () => {
        const memesArray = allMeme
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        let url = memesArray[randomNumber].url
        
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
    }

    const handleChange = (event) => {

        const {name, value}= event.target

        setMeme(prevMemeState => {
            return {
                ...prevMemeState,
                [name]: value      //computed property
            }
        })
    }


    return ( 
        <main> 
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                    />
                <input 
                    type="text" 
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    />
                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                >
                        Get a new meme image  🖼
                </button>
            </div>
            <div className="meme">
                <img  src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
     );
}
 
export default Meme;