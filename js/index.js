let homeAppart = document.querySelectorAll('.top-rent_hebergement_box.details');

let mobileMenu = document.querySelector('.iconmenu')

for (let i=0;i<1;i++){

    if(i=0){
        mobileMenu
        .addEventListener('click',function(e){
            document.querySelector('.menu').style.zIndex = '-3'
        })
    }

}


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




