//i have to fetch all the links from a given page which contains this text



let a = document.links;

Array.from(a).forEach(function(element){
     if(element.href.includes("javascript"))
    {
           console.log(element.href);
    }
});

 // we can also do print element.href
    


