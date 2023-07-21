// create your App component here
import React, {useEffect, useState} from "./react"

function App () {

    const [image, setImage] = useState(null)

    useEffect(()=> {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then((data)=> {
            setImage(data)
        })
    }, [])

    //if app is not working show a text before rendering
    if(!image) return <p>Loading ....</p>

    return <img src={image} alt="Random Dog"></img>
}

export default App