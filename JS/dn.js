/*$(document).ready(function(){
    $("#slide img:eq(0)").addClass("ativo").show();
    var texto = $(".ativo").attr("alt");
    $("#slide").prepend("<p>"+texto+"</p>");

    setInterval(slide, 3000);
    
})

function slide(){
    var ativo = $(".ativo");
    if(ativo.next().length){
        ativo.fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
        var texto = $(".ativo").attr("alt");

        $("#slide p").hide().html(texto).delay(500).fadeIn();
        
    }else{
        ativo.fadeOut().removeClass("ativo");
        $("#slide img:eq(0)").fadeIn().addClass("ativo");
        var texto = $(".ativo").attr("alt");

        $("#slide p").hide().html(texto).delay(500).fadeIn();
    }
}*/



function toggleMenu2(){
    const toggle = document.querySelector('.toggle');
    const navegacao = document.querySelector('.navegacao');
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.close');

    toggle.classList.toggle('active');
    navegacao.classList.toggle('active');
    if(toggle.classList.contains('active')){
        menu.classList.toggle('hidden');
        close.classList.remove('hidden');
    }else{
        menu.classList.remove('hidden');
        close.classList.toggle('hidden');
    }

}

//Mostra e esconder menu
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
    
})

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
})


const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction))

document.addEventListener('mousemove', move)

function move(e){
    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed/120)

        layer.style.transform = `translate(${x}px) translateY(${y}px)`
    });
}

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

//Variaves modal
let imagens = document.querySelectorAll('.foto_img');
let modal = document.querySelector('.modal');
let modalImage = document.querySelector('#modalImg');
let btn_close = document.querySelector('#btn_close');
let srcVal = "";

//Evento de adicionar a imagens selecionada ao modal
for(let i = 0; i<imagens.length; i++){
    imagens[i].addEventListener('click', function(){
        srcVal = imagens[i].getAttribute('src');
        modalImage.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    })
}
//Fechamento do modal
btn_close.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
})
let fotoBox = document.querySelectorAll('.foto__box');
fotoBox.forEach(popup => popup.addEventListener('click', () =>{
    popup.classList.toggle('popup');
}))