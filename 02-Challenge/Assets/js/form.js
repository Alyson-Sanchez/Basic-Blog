class blogPost{
    constructor(Author, Title, Body){
        this.Author = Author;
        this.Title = Title;
        this.Body = Body;
    }
}

var currentBlogIndex= 0;

//Changes the value of the id by inputting author,title and body. It then converts it into a string so the local storage can read it
var uploadBlogPost = function(author,title,body){
    var testBlog = new blogPost(author,title,body);

    //updates current index
    newKey();

    //Saves new blog post to current index
    localStorage.setItem(currentBlogIndex, JSON.stringify(testBlog));

    //updates index. parseInt - ensures that the current index is treated as a number and not a string. Int stands for integer.
    localStorage.setItem("indexKey", parseInt(currentBlogIndex) +1);

}

//Downloads information given to it via the id from the localStorage. Turns the string from the upload back into an object.
var downloadBlogPost = function(id){
    var retrievedBlog = JSON.parse (localStorage.getItem(id));
    //return STOPS the method!!!!
    return(retrievedBlog);
    
}

//This method is needed so that a new key is made with every submission, so nothing will get overridden by the system
var newKey = function (){
    var index = localStorage.getItem("indexKey");
    if (index == null) {
        //defaults to 0 if index does not have a value
        index=0;
    }
    currentBlogIndex= index;
}
