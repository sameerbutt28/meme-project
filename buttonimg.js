import memesData from "../components/memesdata"

export default function NewImg(){
    let url;
    function getmemeimage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
url= memesArray[randomNumber].url;
console.log(url)     
    }
    return(
      
        <div className="newimg">
              <p>{url}</p>
           <button onClick={getmemeimage} className="imgbutton"> 
           Get a new image
           </button>

        </div>
    )
}