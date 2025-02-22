const proContainer = document.querySelector (".pro-container")
 

// Create An array of Objects

const features = [
    {
        id: 1, 
        image: "./images/Fresh2.jpg",
        title: "Fresh and Organic Produce",
        subheading: "Check out our fresh farm produce from vegetables to grains and livestock like cattle, chickens etc!",

    }
    ,
   {
        id: 2, 
        image: "./images/Delivery2.png",
        title: "Free Delivery",
        subheading: "We have one of the best delivery options out there without fear of borders or locations!",

    }
    ,
    {
        id: 3, 
        image: "./images/Pay2.jpg",
        title: "Easy Payments",
        subheading: "No matter the type of payment option you have, we are able to accomodate accordingly!",

    }

]


// Create a function 

function displayFeatures () {
    
    // Loop through the array 
    
    for (let i = 0; i< features.length; i++) {

       // Create a div container for each element in the array

        const pro = document.createElement ("div")
        pro.classList = "pro"
        const img = document.createElement ("img")
        img.src = features[i].image
        const span = document.createElement ("h1")
        span.textContent = features[i].title
        span.style.fontSize = "16px"
        const h5 = document.createElement ("h5")
        h5.style.color = "black"
        h5.style.fontSize = "13px"
        h5.textContent = features[i].subheading
        const button = document.createElement ("button")
        button.textContent = "Read More"
        button.classList = "button" 

        pro.append(img, span, h5, button)

        proContainer.appendChild(pro)
        

    }
}

displayFeatures ()









// Create an image element 

// Create an h1 as a title

// Create an h5 

// Create a button for each element in that array

// Add the image, h1, h5, button elements

// Add the div container to another container that we will get from the html