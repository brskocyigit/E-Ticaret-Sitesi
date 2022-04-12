//-->>Size Özel Ürünleri
document.querySelector('#sizeOzelButton1').addEventListener('click',loadInformationsRecom);
document.querySelector('#sizeOzelButton2').addEventListener('click',loadInformationsRecom);

function loadInformationsRecom(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','/json/sizeOzel.json',true);
    xhr.onload = function(){
        let info = JSON.parse(this.responseText);

        let html ="";

        info.forEach(info =>{
            if(info.params.shippingFee == "FREE"){
                info.params.shippingFee = "Ücretsiz Kargo";
            }
            else{
                info.params.shippingFee = "Kargo Ücretlidir";
                
            }
            
            html+= `
            <div class="mySlides">
                <img src="${info.image}" style="height:200px;width:200px;">
                <div class="name"><p>${info.name}\n</p></div>
                <div class="price"><p>${info.priceText}\n</p></div>
                <br>
                <div id="kargo" class="shipping"><p><i class="fa-solid fa-truck-fast"></i>${info.params.shippingFee}</p></div>    
            </div> `;
        });
        document.querySelector("#slideShow").innerHTML = html;
    }
    xhr.send();  
}

//-->>Tamir-Tadilat Ürünleri
document.querySelector('#tamirButton1').addEventListener('click',loadInformationsTamir);
document.querySelector('#tamirButton2').addEventListener('click',loadInformationsTamir);

function loadInformationsTamir(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','/json/tamir-tadilat.json',true);
    xhr.onload = function(){
        let info = JSON.parse(this.responseText);

        let html = "";

        info.forEach(info =>{

            if(info.params.shippingFee == "FREE"){
                info.params.shippingFee = "Ücretsiz Kargo";
            }
            else{
                info.params.shippingFee = "Kargo Ücretlidir";
            }


            html+= `
            <div class="mySlides">
                <img src="${info.image}" style="height:200px;width:200px;">
                <div class="name"><p>${info.name}\n</p></div>
                <div class="price"><p>${info.priceText}\n</p></div>
                <br>
                <div class="shipping"><p><i class="fa-solid fa-truck-fast"></i>${info.params.shippingFee}</p></div>
                <div><button class="btn btn-primary sepetButton">Sepete Ekle</button></div>
            </div>`;
        });
        document.querySelector("#slideShow").innerHTML = html;
    }
    xhr.send();
}

//-->>Mobilya Ürünleri
document.querySelector('#mobilyaButton1').addEventListener('click',loadInformationsMobilya);
document.querySelector('#mobilyaButton2').addEventListener('click',loadInformationsMobilya);

function loadInformationsMobilya(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','/json/mobilya.json',true);
    xhr.onload = function(){
        let info = JSON.parse(this.responseText);

        let html = ``;

        info.forEach(info =>{
            if(info.params.shippingFee == "FREE"){
                info.params.shippingFee = "Ücretsiz Kargo";
            }
            else{
                info.params.shippingFee = "Kargo Ücretlidir";
                
            }

            html+= `
            <div class="mySlides">
                <img src="${info.image}" style="height:200px;width:200px;">
                <div class="name"><p>${info.name}\n</p></div>
                <div class="price"><p>${info.priceText}\n</p></div>
                <br>
                <div class="shipping"><p><i class="fa-solid fa-truck-fast"></i>${info.params.shippingFee}</p></div>
                <div><button class="btn btn-primary sepetButton">Sepete Ekle</button></div>
            </div> `;
        });
        document.querySelector("#slideShow").innerHTML = html;
    }
    xhr.send();
}

//-->>Sağlık-Medikal Ürünleri
document.querySelector('#saglikButton1').addEventListener('click',loadInformationsSaglik);
document.querySelector('#saglikButton2').addEventListener('click',loadInformationsSaglik);

function loadInformationsSaglik(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','/json/saglik-medikal.json',true);
    xhr.onload = function(){
        let info = JSON.parse(this.responseText);

        let html = "";

        info.forEach(info =>{
            if(info.params.shippingFee == "FREE"){
                info.params.shippingFee = "Ücretsiz Kargo";
            }
            else{
                info.params.shippingFee = "Kargo Ücretlidir";
            }

            html+= `
            <div class="mySlides">
                <img src="${info.image}" style="height:200px;width:200px;">
                <div class="name"><p>${info.name}\n</p></div>
                <div class="price"><p>${info.priceText}\n</p></div>
                <br>
                <div class="shipping"><p><i class="fa-solid fa-truck-fast"></i>${info.params.shippingFee}</p></div>
                <div><button id="myBtn" class="btn btn-primary sepetButton">Sepete Ekle</button></div>
                
            </div> `;
        });
        document.querySelector("#slideShow").innerHTML = html;
    }
    xhr.send();
}

//-->>Dizüstü Bilgisayar (Laptop)
document.querySelector('#laptopButton1').addEventListener('click',loadInformationsLaptop);
document.querySelector('#laptopButton2').addEventListener('click',loadInformationsLaptop);

function loadInformationsLaptop(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','/json/laptop.json',true);
    xhr.onload = function(){
        let info = JSON.parse(this.responseText);

        let html = "";

        info.forEach(info =>{
            if(info.params.shippingFee == "FREE"){
                info.params.shippingFee = "Ücretsiz Kargo";
            }
            else{
                info.params.shippingFee = "Kargo Ücretlidir";
            }

            html+= `
            <div class="mySlides">
                <img src="${info.image}" style="height:200px;width:200px;">
                <div class="name"><p>${info.name}\n</p></div>
                <div class="price"><p>${info.priceText}\n</p></div>
                <br>
                <div class="shipping"><p><i class="fa-solid fa-truck-fast"></i>${info.params.shippingFee}</p></div>
                <div><button class="btn btn-primary sepetButton">Sepete Ekle</button></div>
            </div> `;
        });
        document.querySelector("#slideShow").innerHTML = html;
    }
    xhr.send();
}

//-->>Isıtma-Soğutma Sistemleri
document.querySelector('#ısıtma-sogutmaButton1').addEventListener('click',loadInformationsIsitma);
document.querySelector('#ısıtma-sogutmaButton2').addEventListener('click',loadInformationsIsitma);

function loadInformationsIsitma(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','/json/ısıtma-sogutma-sistemi.json',true);
    xhr.onload = function(){
        let info = JSON.parse(this.responseText);

        let html = "";

        info.forEach(info =>{
            if(info.params.shippingFee == "FREE"){
                info.params.shippingFee = "Ücretsiz Kargo";
            }
            else{
                info.params.shippingFee = "Kargo Ücretlidir";
            }

            html+= `
            <div class="mySlides">
                <img src="${info.image}" style="height:200px;width:200px;">
                <div class="name"><p>${info.name}\n</p></div>
                <div class="price"><p>${info.priceText}\n</p></div>
                <br>
                <div class="shipping"><p><i class="fa-solid fa-truck-fast"></i>${info.params.shippingFee}</p></div>
                <div> <button class="btn btn-primary sepetButton">Sepete Ekle</button></div>   
            </div> `;
        });
        document.querySelector("#slideShow").innerHTML = html;
    }
    xhr.send();
}

//-->>Carousel
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

//-->>Butona basınca carouselin gözükmesi için
function gizleGoster(ID) {
    var secilenID = document.getElementById(ID);
    if (secilenID.style.display == "none") {
      secilenID.style.display = "";
    }
     else {
      secilenID.style.display = "block";
    }
  }

//-->>Butona basınca carousel yön işaretleri ve #slideshow divinin gözükmesi için 
function myFunction(){
    document.getElementById("myBtn").style.display="block";
    document.getElementById("slideShow").style.display="block";  
    document.getElementById("prevButton").style.display="block";
    document.getElementById("nextButton").style.display="block";
}

//-->>Popup Alır
var modal = document.getElementById('myModal');

//-->>Kipi açan düğmeyi alır
var buton = document.getElementById("myBtn");

//-->>Kipi kapatan <span> öğesini edinir
var span = document.getElementsByClassName("close")[0];

//-->>Kullanıcı düğmeyi tıklattığında
buton.onclick = function() {
    modal.style.display = "block";
}

//-->>Kullanıcı <span> (x) düğmesini tıkladığında, popup
span.onclick = function() {
    modal.style.display = "none";
}

//-->>Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatır.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

