var count = 0;
document.getElemetnById("myButton").onclick = function () {
    count++;
    if (count % 2 == 0){
        document.getElementById("demo").innerHTML = "";
    } else {
        //создадим элемент img
        var img = document.createElement("img");
        //установим источник изображения
        img.src = "../img/kit.jpg";
        document.getElementById("demo").appendChild(img);
    }
}