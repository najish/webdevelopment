console.log("Hello from webdevelopment");
let x = document.getElementsByClassName('container');


function loadHtml(url) {
    fetch(url).then(response => {
        if(!response.ok) {
            throw new Error("status code is not ok");
        } 
        
    }).then(html => {
        x.innerHtml = html;
    }).catch(err => console.error(err));
}
loadHtml('container.html');