function sample(){

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }

}

function toggleDiv() {
    const div = document.getElementById("hide");
    div.style.display = div.style.display === "none" ? "block" : "none";
    // div.style.backgroundColor = "#ee5efd";
    // div.style.width = "200px"
    div.style.position = "relative"
    div.style.top = "50px"
    div.style.transitionDuration = "2s"
    div.style.left = "200px"
    // div.style.transform = "rotate(20deg)"
}

let arr = ["sample","kamal","demo"]

function seeMore() {
    const text = document.getElementById('website-info-idea')
    const text2 = document.getElementById('website-info-technical')
    text.classList.toggle("show")
    text2.classList.toggle("show")
}