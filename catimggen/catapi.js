const URL = "https://api.thecatapi.com/v1/images/search?limit=2"
const buttonofcat = document.querySelector("#buttonofcat")
const catkaimg =document.querySelector("#catkaimg")
const catkaimg2 =document.querySelector("#catkaimg2")





//fetching api
const getImages = async() =>{
    try{ 
        console.log("Loading Images.....")
        let response = await fetch(URL)
        console.log("Response.")
        let data = await response.json()
        let catimgurl = data[0].url
        let catimgurl2 = data[1].url
        catkaimg.src =catimgurl
        catkaimg2.src = catimgurl2
        console.log("Image succesfully imported")
    }catch(error){
        console.error("Failed to load Image ",error)

    }
   

}

//button fuction 
buttonofcat.addEventListener("click",getImages)

