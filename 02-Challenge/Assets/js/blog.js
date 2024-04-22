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
    var blogNumbers = localStorage.getItem("indexKey");
    for (let i = 0; i < blogNumbers; i++) {
        var newDiv = createParentDiv();
        fillBlog(newDiv, i);
    }

}

/* TAKES IN PARAMETER OF DIV, AND WILL FILL IN THE INFORMATION */

function fillBlog(newDiv, blogNumber){

    var blogInfo = downloadBlogPost(blogNumber);
    newDiv.children[2].innerHTML = "Posted by:" + blogInfo.Author;
    newDiv.children[0].innerHTML = blogInfo.Title;
    newDiv.children[1].innerHTML = blogInfo.Body;

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
   divEl.style.border = "thick solid #000";
   divEl.style.marginBottom = "10px";
   return divEl;
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
