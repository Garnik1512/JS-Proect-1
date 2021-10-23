let parent = document.querySelector(".parent")
let array = [{
    img: "./image/10.png",
    name: "Find best doctors",
    desc: "A planet is an astronomical"
}, {
    img: "./image/20.png",
    name: "Get Appointment",
    desc: "A flower, sometimes known flowering plants "
}, {
    img: "./image/30.png",
    name: "Happy Consultations",
    desc: "The giant panda Ailuropoda melanoleuca"
}]
for (let items of array) {
    console.log(items);
    let block = document.createElement("div")
    block.innerHTML = `<img  class="icon" src=${items.img} /> <h1>${items.name}</h1> <p>${items.desc}</p>`;
    parent.append(block)

}
let parent2 = document.querySelector(".parent2")
let arrays = [{
    img1: "./image2/100.png",
    username: "Find best doctors",
    descr: "A planet is an astronomical"
}, {
    img1: "./image2/200.jpg",
    username: "Get Appointment",
    descr: "A flower, sometimes known flowering plants "
}, {
    img1: "./image2/300.png",
    username: "Happy Consultations",
    descr: "The giant panda Ailuropoda melanoleuca"
}]
for (let items1 of arrays) {
    console.log(items1);
    let block1 = document.createElement("div")
    block1.innerHTML = `<img  class="icon" src=${items1.img1} /> <h1>${items1.username}</h1> <p>${items1.descr}</p>`;
    parent2.append(block1)

}
let serv = document.querySelector(".serv")
let link = "https://reqres.in/api/users?page=2";
let xml = new XMLHttpRequest();
xml.open("GET", link);
xml.onload = function () {
    if (xml.readyState === 4 && xml.status === 200) {
        let json = JSON.parse(xml.response)
        let user = json.data;
        console.log(user);
        for (let display1 of user.slice(0, 3)) {
            console.log(display1);

            let bl = document.createElement("div")
            bl.innerHTML = `<img src=${display1.avatar} /> <p>${display1.id}</p> <p>${display1.email}</p> `;
            serv.append(bl)
        }
        let btn = document.querySelector(".btn")
        btn.onclick = function () {
            for (let display1 of user.slice(3,6)) {
                console.log(display1);
    
                let bl = document.createElement("div")
                bl.innerHTML = `<img src=${display1.avatar} /> <p>${display1.id}</p> <p>${display1.email}</p> `;
                serv.append(bl)
            }
    }
}
    else {
        console.error("Error 404");
    }
};

xml.send();
console.log(xml);

