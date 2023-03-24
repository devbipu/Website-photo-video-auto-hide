    const showImgUrl = "https://via.placeholder.com/650x400?text=You+are+on+protected+mode";
    const targetNode = document.querySelector('body');

    // let selectors = ".x1w9j1nh img.xl1xv1r"

// document.addEventListener('DOMContentLoaded', function () {

//     document.getElementById('protectMood').addEventListener('change', function(e){
//         if(e.target.checked){
//             localStorage.setItem("protactionActive", true)
//         }else {
//             localStorage.setItem("protactionActive", false)
//         }
//     });




//     if(localStorage.getItem('protactionActive') == true){
//         document.getElementById('protectMood').checked = true;
//         // const observer = new MutationObserver(function(mutations) {
//         //   mutations.forEach(function(mutation) {
//         //     doAction()
//         //   });
//         // });
//         // const config = { attributes: false, childList: true, subtree: true };
//         // observer.observe(targetNode, config);
//     }else{
//         document.getElementById('protectMood').checked = false;
//         console.log("False")
//     }

// });



const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    replaceImages()
    replaceVideos()
  });
});
const config = { attributes: false, childList: true, subtree: true };
observer.observe(targetNode, config);


function replaceImages(){
    const imgs = document.querySelectorAll(".x1w9j1nh img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].src = showImgUrl;
    }
}



function replaceVideos(){
    const videos = document.querySelectorAll(".x1w9j1nh video");
    for (let i = 0; i < videos.length; i++) {
        videos[i].src = showImgUrl;
    }
}

