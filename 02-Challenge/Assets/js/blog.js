var divTag



function formatBlogPost(){
 console.log(formatBlogPost);
}

/* method will be called as soon as second page loads*/
function loadBlogs(){
    registerVariables();

   /* var paragraphTag = document.getElementById("loadObject");

    var JSONObject = downloadBlogPost(0);

    console.log(paragraphTag);
    console.log(JSONObject);
    
    paragraphTag.innerHTML = JSONObject.Author +'|'+ JSONObject.Title +'|'+ JSONObject.Body;*/
    for (let i = 0; i < 100; i++) {
        createParentDiv();
    }
}

function registerVariables(){
    divTag = document.getElementById("exampleDiv");
}

function createParentDiv(){
   var divEl = document.createElement("div");
   /* put internal fields: title, author, body */
   createUserPar(divEl);
   createTitlePar(divEl);
   creatContentPar(divEl);

  
   document.getElementById("exampleDiv").appendChild(divEl); 
}

function createUserPar(parentDiv){
    var parEl = document.createElement("p");
    parentDiv.appendChild(parEl);
}

function createTitlePar(parentDiv) {
    var parEl = document.createElement("p");
    parentDiv.appendChild(parEl);
}

function creatContentPar(parentDiv) {
    var parEl = document.createElement("p");
    parentDiv.appendChild(parEl);
}
