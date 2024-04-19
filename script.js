

let imageContainer=document.getElementById("image_container");

const apiKey="lLll158r7D9WGikZL4Z6SwcnImvCCmG99fRHyUoInnE";

async function featchImage(){
    const url=`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=5`;

    let result=await fetch(url);
    let data=await result.json();

    data.forEach(element => {
        let img=document.createElement("img");
        img.style.height="500px";
        img.style.width="500px";
        img.src=element.urls.small;
        imageContainer.appendChild(img);
    });
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    featchImage();
    }
  });

featchImage();