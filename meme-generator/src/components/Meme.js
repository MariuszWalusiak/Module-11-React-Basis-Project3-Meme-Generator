import memesData  from "../memesData";
const Meme = () => {

    const getMemeImage =() => {
            const memesArray = memesData.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            let url = memesArray[randomNumber].url
            console.log(url)
    }

    return ( 
        <main> 
            <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text"
                    className="form--input"
                    />
                <input 
                    type="text" 
                    placeholder="Bottom text"
                    className="form--input"/>
                <button 
                    className="form--button" 
                    onClick={getMemeImage}
                >
                        Get a new meme image  🖼
                </button>
            </div>
        </main>
     );
}
 
export default Meme;