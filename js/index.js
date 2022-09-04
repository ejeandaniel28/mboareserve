let menuIcon = document.querySelector('.iconmenu'); //USED FOR TOGLE MENU
let menuList = document.querySelector('#menu');  // USED FOR TOGLE MENU



//        TOGGLE FOR TOGLE MENU
menuIcon.addEventListener('click',function(e){
    e.preventDefault()
    if(!(menuList.style.zIndex =='1')){
        menuList.style.zIndex = '1'
    }
    else{
        menuList.style.zIndex = '-1'
    }
})




let homeAppart = document.querySelectorAll('.top-rent_hebergement_box.details');
// Boucle pour ouverture des lien contenue dans dans chaque conteneur a l'acceuil
for (let i = 0;i<homeAppart.length;i++){

    homeAppart[i].parentNode
    .addEventListener('click',function(){
    window.open(this.firstElementChild.href,'_self')
})

}

let selectLink = () =>{
    document
    .querySelector('#searchform')
    .setAttribute('action',document.querySelector('#rechercher').value)
}

document
    .querySelector('#searchform')
    .setAttribute('action',document.querySelector('#rechercher').value)

document
.querySelector('#rechercher')
.addEventListener('change',function(){
    selectLink();
})
