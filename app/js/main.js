$(function () {
    $('.trials-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 550,
              settings: {
                arrows: false,
                dots: true
              }
            },
          
          ]
       
    })  
    $('.organization-slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 550,
              settings: {
                arrows: false,
                dots: true
              }
            },
          
          ]
       
    })  
    
})


window.addEventListener('DOMContentLoaded', () => {


    const menu = document.querySelector(".menu");
    const mobile = document.querySelector(".nav-icon");
  
    if(mobile){
        mobile.addEventListener("click", function () {
            this.classList.toggle("nav-icon--active");
            menu.classList.toggle("nav--active");
          });
    }



    const modalBtn = document.querySelectorAll('.btn-click');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('.modal__close');
    const test = calcScroll();


    if(modalBtn){
        modalBtn.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                modal.classList.add('show-modal');
                modal.classList.remove('hide-modal');
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${test}px`;
            })
        });
    }
    
    if(modalCloseBtn){
        modalCloseBtn.addEventListener('click', ()=>{
            modal.classList.add('hide-modal');
            modal.classList.remove('show-modal');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });

    }
    
    if(modal){
        modal.addEventListener('click', (e)=>{
            if(e.target == modal){
                modal.classList.add('hide-modal');
                modal.classList.remove('show-modal');
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });
    }
   

    document.addEventListener('keydown', (e)=>{
        if(e.code == 'Escape' && modal.classList.contains('show')){
            modal.classList.add('hide-modal');
            modal.classList.remove('show-modal');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    })

        // //УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ
        function calcScroll(){
            let div = document.createElement('div');
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';
            
            document.body.append(div);

            let scrollWidth = div.offsetWidth - div.clientWidth;
            
            div.remove();
            
            return scrollWidth;
            }
            //УБИРАЕМ ДЁРГАНИЕ МОДАЛЬНОГО ОКНА ПРИ ПОЯВЛЕНИИ


    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownBtn = document.querySelector('.dropdown-toggle');

    if(dropdownBtn){
        dropdownBtn.addEventListener('click', () => {
            dropdownMenu.classList.toggle('show-dropdown');
            dropdownBtn.classList.toggle('arrow-drop')
        })
    }

    


    const tabsItem = document.querySelector('.circle-test');
    const tabsItemBtn = document.querySelectorAll('.circle');
    const tabsContent = document.querySelectorAll('.carousel_item');

    function tabsHide(){
        tabsContent.forEach(item => {
            item.classList.add('hide-tabs');
            item.classList.remove('show-tabs');
        });

        tabsItemBtn.forEach(btn =>{
            btn.classList.remove('active-tabs');
        })
    }
    function tabsShow(i){
        tabsContent[i].classList.add('show-tabs');
        tabsContent[i].classList.remove('hide-tabs');
        tabsItemBtn[i].classList.add('active-tabs');
    }

    if(tabsItem && tabsItemBtn && tabsContent){
        tabsItem.addEventListener('click', (e)=>{
            const target = e.target;
            if(target && target.classList.contains('circle')){
                tabsItemBtn.forEach((item, i)=>{
                    if(target == item){
                        tabsHide();
                        tabsShow(i);
                    }
                
                })
            
            }
        })
    
        tabsHide();
        tabsShow(0);
    }
   

    
    const header = document.querySelector(".header");

   
    function up() {
        window.addEventListener('scroll', () => {
          if(window.scrollY > 10){
            header.classList.add('header-scroll');
          }else{
            header.classList.remove('header-scroll');
          }
        })
      }
      up();
      
        
           
    

})//