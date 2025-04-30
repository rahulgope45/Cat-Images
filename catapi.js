const URL = "https://api.thecatapi.com/v1/images/search"
const buttonofcat = document.querySelector("#buttonofcat")
const catkaimg =document.querySelector("#catkaimg")





//fetching api
const getImages = async() =>{
    try{ 
        console.log("Loading Images.....")
        let response = await fetch(URL)
        console.log("Response.")
        let data = await response.json()
        let catimgurl = data[0].url
        catkaimg.src =catimgurl
        console.log("Image succesfully imported")
    }catch(error){
        console.error("Failed to load Image ",error)

    }
   

}

//button fuction 
buttonofcat.addEventListener("click",getImages)

