
function listYears(year) {
    var d = new Date();
    var year = d.getFullYear() - year
    if(year <= 0) {
        return 1
    }

    return year
}

var charms = {
    Linux: {
        years: listYears(2022)
    },
    Go: {
        years: listYears(2022)
    },
    Python: {
        years: listYears(2019)
    },
    Vue: {
        years: listYears(2018)
    },
    React: {
        years: listYears(2020)
    },
    Nodejs: {
        years: listYears(2018)
    }
}

const charmKeys = Object.keys(charms)
let i = 0;
while (i < charmKeys.length) {

    var el = document.getElementById("charms_box")
    
    var id1 = "a" + i
    var element_charm = document.createElement("div");
    element_charm.id = id1;
    element_charm.classList.add("charm");
    el.appendChild(element_charm)

    var id2 = "b" + i
    var imgDiv = document.createElement("div");
    imgDiv.id = id2;
    imgDiv.classList.add("charm_left");
    el = document.getElementById(id1);
    el.appendChild(imgDiv)

    var id3 = "c" + i
    var img = document.createElement("img");
    img.id = id3;
    img.style.width = "100%"
    img.src = "./images/" + charmKeys[i].toLowerCase() +".png"
    img.alt = charmKeys[i]
    el = document.getElementById(id2);
    el.appendChild(img)

    var id4 = "d" + i;
    element_charm = document.createElement("div");
    element_charm.id = id4;
    element_charm.classList.add("charm_right");
    el = document.getElementById(id1);
    el.appendChild(element_charm)

    var id5 = "e" + i;
    element_charm = document.createElement("div");
    element_charm.classList.add("title");
    element_charm.classList.add("display");
    element_charm.id = id5;
    el = document.getElementById(id4);
    el.appendChild(element_charm)

    var id6 = "f" + i;
    element_charm = document.createElement("img");
    element_charm.style.height = "50px"
    element_charm.src = "./images/" + "right_red_triangle" +".svg"
    element_charm.alt = "right triangle"
    element_charm.id = id6;
    el = document.getElementById(id5);
    el.appendChild(element_charm)

    var id7 = "g" + i;
    element_charm = document.createElement("h2");
    element_charm.innerHTML = charmKeys[i]
    element_charm.id = id7;
    element_charm.style.margin = "10px 0 0 0"
    el = document.getElementById(id5);
    el.appendChild(element_charm)

    var id8 = "h" + i;
    element_charm = document.createElement("div");
    element_charm.classList.add("charm_stamps");
    element_charm.id = id8;
    el = document.getElementById(id4);
    el.appendChild(element_charm)

    var id9 = "i" + i;
    element_charm = document.createElement("div");
    element_charm.id = id9;
    el = document.getElementById(id8);
    el.appendChild(element_charm)

    var id10 = "j" + i;
    element_charm = document.createElement("div");
    element_charm.id = id10;
    element_charm.classList.add("charm_years");
    el = document.getElementById(id8);
    el.appendChild(element_charm)

    var id11 = "k" + i;
    element_charm = document.createElement("p");
    element_charm.id = id11;
    element_charm.innerHTML = "Exexperience"
    el = document.getElementById(id10);
    el.appendChild(element_charm)

    var id12 = "my" + charmKeys[i];
    element_charm = document.createElement("h3");
    element_charm.id = id12;
    element_charm.style.marginTop = "0"
    element_charm.innerHTML = charms[charmKeys[i]].years + " years"
    el = document.getElementById(id10);
    el.appendChild(element_charm)

    i++;
}

var memorySwitch = false
window.addEventListener("resize", function(e) {
    var width = window.innerWidth
    if(width < 600) {
        memorySwitch = true
    } else {
        memorySwitch = true
    }
    
    
    if(memorySwitch) {
        var a = 0;
        while (a < charmKeys.length) {
            var el = document.getElementById("h" + a);
            if(width < 600) {
                el.style.visibility = "hidden"
                el.style.height = "0"
            } else {
                el.style.visibility = "visible"
                el.style.height = "200px"
            }
            a++
        }
        memorySwitch = false
    }
})