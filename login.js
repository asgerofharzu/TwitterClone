function control() {
    let invalids=document.querySelectorAll(":invalid").length,
        button=document.querySelector("button");
    console.log(invalids);
    if (invalids===0) {
        button.removeAttribute("id");
    } else {
        button.setAttribute("id","disabled");
    }
}
control();