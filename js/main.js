


document.querySelectorAll('.storage .postamat__item').forEach(function (storItem) {
  storItem.onclick = function () {
      
    storItem.classList.toggle('postamat__item_active')

    let checkedItemsActive = storItemsCheck();

    document.querySelector('.zone__count').innerText = checkedItemsActive

    if( checkedItemsActive >= 1 ){

      document.querySelector('.storage__zone .zone__empty').style.display = 'none';
      document.querySelector('.storage__zone .zone__button').style.display = 'flex';

    } else {

      document.querySelector('.storage__zone .zone__empty').style.display = 'flex';
      document.querySelector('.storage__zone .zone__button').style.display = 'none';

    }

  }
})

function storItemsCheck() {

  let sumItems = 0

  for( let i = 0; i < document.querySelectorAll('.storage .postamat__item').length; i++ ){
    if( document.querySelectorAll('.storage .postamat__item')[i].classList.contains('postamat__item_active') ){
      sumItems++
    }
  }

  return sumItems;

}


document.querySelectorAll('.skins__block .skins__item').forEach(function (item) {
  item.onclick = function () {
    this.classList.toggle('skins__item_active')
  }
})

document.querySelectorAll('.balance__cost button').forEach(function (btn) {
  btn.onclick = function () {

    for( let a of document.querySelectorAll('.balance__cost li') ){
      a.classList.remove('li_active')
    }

    this.closest('li').classList.toggle('li_active')
  }
})

var element = document.querySelectorAll('.input-pincode input');

element.forEach(elem => {
  var patternMask = IMask(elem, {
    mask: '**** - **** - ****'
  });

  elem.addEventListener('keyup', function () {
    
    if( this.value.length <= 17 ){
      this.closest('form').querySelector('button').setAttribute('disabled', 'disabled')
      return;
    }
    this.closest('form').querySelector('button').removeAttribute('disabled')
    
  })

})




function openPopup(popup) {
  document.querySelectorAll('.popup__close, .popup__bgd').forEach(function (close) {
  
    document.querySelectorAll('.popup').forEach(function (pp) {
      pp.classList.remove('popup_active')
    })

  })

  document.querySelector('.popup-'+popup).classList.add('popup_active')

}

function openPopupChecking(popupPrev, popupSuccess, popupFail) {

  let time = 5;

  if( document.querySelector(`.popup-${popupPrev} input`).value == '1111 - 1111 - 1111' ){
    openPopup(popupSuccess)
  } else {
    openPopup(popupFail)

    time = 5;
    document.querySelector(`.popup-${popupFail} .code-fail__timer`).innerText = time;

    let timerFunc = setInterval(function () {

      time--;

      document.querySelector(`.popup-${popupFail} .code-fail__timer`).innerText = time;

    }, 1000)

    setTimeout(function () {

      document.querySelector(`.popup-add-coins-pin-code input`).value = '';
      openPopup('add-coins-pin-code')


      clearInterval(timerFunc)

    }, 5000)

  }
}


document.querySelectorAll('.popup-pull__item .item__delete').forEach(function (del) {
  del.onclick = function () {

    let th = this.closest('.popup-pull__item')
    this.closest('.popup-pull__item').classList.add('popup-pull__item_deleted')

    setTimeout(function () {
      th.remove()
    }, 300)

  }
})


document.querySelectorAll('.popup__close, .popup__bgd').forEach(function (close) {
  
  close.onclick = function () {
    document.querySelectorAll('.popup').forEach(function (pp) {
      pp.classList.remove('popup_active')
    })
  }

})


function showNotice(notice) {
  document.querySelector('.section-right__notice .notice__'+notice).classList.add('notice__item_active')

  setTimeout(function () {
    document.querySelector('.section-right__notice .notice__'+notice).classList.remove('notice__item_active')
  }, 2000)
}

if( document.querySelector('.day') ){

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    var clock = document.body;
    var daysSpan = clock.querySelector('.day span');
    var hoursSpan = clock.querySelector('.hour span');
    var minutesSpan = clock.querySelector('.min span');
    var secondsSpan = clock.querySelector('.sec span');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
  var deadline = new Date("Oct 10 2022 18:00:00 GMT+0300"); // for endless timer
  initializeClock('countdown', deadline);

}



document.querySelector('.header__burger').addEventListener('click', function () {
  document.querySelector('.burger__menu').classList.toggle('burger__menu_active')
})



document.querySelector('.lang__button').addEventListener('click', function () {
  this.parentNode.classList.toggle('header__lang_active')
})



for( let list of document.querySelectorAll('.list-players') ){

  for( let i = 0; i <= list.querySelectorAll('li').length; i++ ){

    let a = i - 3
    
    if( i >= 4 && list.querySelectorAll('li')[i] ){

      list.querySelectorAll('li')[i].style.display = 'none';

      list.querySelector('.num').classList.add('num_active')
      list.querySelector('.num').innerHTML = "+"+a

    }


  }

}



for( let list of document.querySelectorAll('.section-history__item') ){

  for( let i = 0; i <= list.querySelectorAll('li').length; i++ ){

    let a = i - 3
    
    if( i >= 3 && list.querySelectorAll('li')[i] ){

      list.querySelectorAll('li')[i].style.display = 'none';

      list.querySelector('.count').classList.add('count_active')
      list.querySelector('.count').innerHTML = "+"+a

    }

  }

}


for( let list of document.querySelectorAll('.resources__clothes .clothes__body') ){

  for( let i = 0; i <= list.querySelectorAll('li').length; i++ ){

    let a = i - 3
    
    if( i >= 3 && list.querySelectorAll('li')[i] ){

      list.querySelectorAll('li')[i].style.display = 'none';

      list.querySelector('.count').classList.add('count_active')
      list.querySelector('.count').innerHTML = "+"+a

    }

  }

}

document.querySelectorAll('.count.count_active').forEach(function (count) {
  count.onclick = function () {

    for( let it of this.closest('ul').querySelectorAll('li') ){
      it.style.display = 'flex'
    }

    this.remove()

  }
})

document.querySelectorAll('.section-history__item .item__delete').forEach(function (hisItem) {
  hisItem.onclick = function () {

    let th = this.closest('.section-history__item')
    this.closest('.section-history__item').classList.add('section-history__item_deleted')

    setTimeout(function () {
      th.remove()
    }, 300)

  }
})


document.querySelectorAll('.clothes__head').forEach(function (clHead) {
  clHead.onclick = function () {
    
    this.parentNode.querySelector('.clothes__body').classList.toggle('clothes__body_active')

  }
})


for( let tab of document.querySelectorAll('.tabs li') ){

  tab.addEventListener('click', function (e) {

    document.querySelectorAll('.tabs li').forEach(item => { item.classList.remove('li_active') })
    this.classList.add('li_active')

    let arrNum = Array.from(document.querySelectorAll('.tabs li')).indexOf(tab)


    document.querySelectorAll('.tabs__item').forEach(item => { item.classList.remove('tabs__item_active') })
    document.querySelectorAll('.tabs__item')[arrNum].classList.add('tabs__item_active')

  })

}


for( let chItem of document.querySelectorAll('.chatting__item') ){
  chItem.querySelector('.item__menu').addEventListener('click', function () {


    if( this.closest('.item__inner').querySelector('.item__dropdown').classList.contains('item__dropdown_active') ){
      this.closest('.item__inner').querySelector('.item__dropdown').classList.remove('item__dropdown_active')
    } else {
      for( let drp of document.querySelectorAll('.chatting__item .item__dropdown') ){
        drp.classList.remove('item__dropdown_active')
      }
      this.closest('.item__inner').querySelector('.item__dropdown').classList.add('item__dropdown_active')
    }

  })
}

document.querySelector('.section-right__bottom input').addEventListener('keyup', function () {
  document.querySelector('.section-right__bottom .maxl').innerHTML = this.value.length + '/150';
})


for( let close of document.querySelectorAll('.notice-bottom__close') ){
  close.addEventListener('click', function () {
    this.closest('.notice-bottom').classList.add('notice-bottom_remove')
  })
}


document.querySelectorAll('.section-right__top .top__item').forEach(function (itemTop, itemTopNum) {

  itemTop.addEventListener('click', function () {

    for( let itemTop1 of document.querySelectorAll('.section-right__switcher .section-right__item') ){
      itemTop1.classList.remove('section-right_active')
    }
    for( let itemTop1 of document.querySelectorAll('.section-right__top .top__item') ){
      itemTop1.classList.remove('top__item_active')
    }
    
    document.querySelectorAll('.section-right__switcher .section-right__item')[itemTopNum].classList.add('section-right_active')
    this.classList.add('top__item_active')

  })
})


if( document.querySelector('.section-right__airdrop .sleepers__buy') ){
  document.querySelector('.section-right__airdrop .sleepers__buy').onclick = function () {
    document.querySelector('.section-right__notice .notice__sleepers-bought').classList.add('notice__item_active')

    setTimeout(function () {
      document.querySelector('.section-right__notice .notice__sleepers-bought').classList.remove('notice__item_active')
    }, 2000)
  }
}


if(document.querySelector('.postamat__cart')){

  document.querySelectorAll('.postamat__item').forEach(function (btn) {
    btn.onclick = function () {
      document.querySelector('.section-right__notice .notice__add-cart').classList.add('notice__item_active')

      setTimeout(function () {
        document.querySelector('.section-right__notice .notice__add-cart').classList.remove('notice__item_active')
      }, 2000)
    }
  })

}

document.querySelectorAll('.airdrop__sleepers li').forEach(function (sleepers) {
  sleepers.addEventListener('click', function () {

    for( let btn of document.querySelectorAll('.airdrop__sleepers li') ){
      btn.querySelector('button').classList.remove('button_active')
    }

    this.querySelector('button').classList.add('button_active')

  })
})

document.querySelectorAll('.section-right__airdrop .airdrop__move ul li').forEach(function (btn) {

  if( document.querySelector('.section-map__map') ) {
    moveSleepers(btn)
  }

})



function moveSleepers(sleeper) {

  let currentDroppable = null;

  sleeper.querySelector('button').addEventListener('mousedown', function (event) {

    sleeper.style.position = 'absolute';
    sleeper.style.zIndex = 1000;

    let ii = sleeper;
    let cX = 0;
    let cY = 0;

    sleeper.classList.add('sleepers__item_moved')

    document.querySelector('body').append(sleeper);

    moveAt(event.pageX, event.pageY)

    function moveAt(pageX, pageY){
      cX = pageX - sleeper.offsetWidth / 2;
      cY = pageY - sleeper.offsetHeight / 2;

      sleeper.style.left = cX + 'px';
      sleeper.style.top = cY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      sleeper.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      sleeper.hidden = false;

      if(!elemBelow) return;

      let droppableBelow = elemBelow.closest('.section-map__map')

      if( currentDroppable != droppableBelow ){

        if(currentDroppable){
          leaveMap(sleeper)
        }
        currentDroppable = droppableBelow;
        if(currentDroppable){
          overMap(sleeper)
        }

      }

    }

    function leaveMap(item){
      currentDroppable.classList.remove('point-inner')

      // currentDroppable.append(item)
    }
    function overMap(item){
      currentDroppable.classList.add('point-inner')

      document.querySelector('body').append(sleeper);
    }

    document.addEventListener('mousemove', onMouseMove)

    document.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
      sleeper.onmouseup = null;

      sleeper.style.left = cX - currentDroppable.getBoundingClientRect().left + 'px';
      sleeper.style.top = cY - currentDroppable.getBoundingClientRect().top + 'px';
      currentDroppable.append(ii);

    }

    sleeper.ondragstart = function() {
      return false;
    };
    
  })
}

if(document.querySelector('.section-map__map')){

  let boundingTop = document.querySelector('.section-map__map').getBoundingClientRect().top
  let boundingLeft = document.querySelector('.section-map__map').getBoundingClientRect().left
  let sum = 1;

  document.querySelector('.section-map__map').addEventListener('wheel', function (event) {
    
    let count = event.deltaY / 100;

    boundingTop = document.querySelector('.section-map__map').getBoundingClientRect().top;
    boundingLeft = document.querySelector('.section-map__map').getBoundingClientRect().left;

    if( sum >= 1 ){
      sum -= count;
      this.style.transform = `scale(${sum})`;


      return;
    }
    sum = 1
  })

  document.querySelector('.section-map__map').onmousedown = function (event) {

    // boundingTop = document.querySelector('.section-map__map').getBoundingClientRect().top;
    // boundingLeft = document.querySelector('.section-map__map').getBoundingClientRect().left;

    if( !event.target.closest('.sleepers__item') ){

      let map = this;

      let shiftX = event.clientX - map.getBoundingClientRect().left;
      let shiftY = event.clientY - map.getBoundingClientRect().top;

      moveAt(event.clientX, event.clientY);

      function onMouseMove(event){
        moveAt(event.clientX, event.clientY)
      }

      function moveAt(pageX, pageY){

        let coodX = pageX - shiftX - boundingLeft;
        let coodY = pageY - shiftY - boundingTop;

        map.style.left = coodX + 'px';
        map.style.top = coodY + 'px';

        // map.style.transform = `translate(${-coodX}px, ${-coodY}px)`

      }
        
      document.addEventListener('mousemove', onMouseMove);

      document.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
      }

      map.ondragstart = function() {
        return false;
      };

    }
  }

}





document.querySelectorAll('.pererab .postamat__item').forEach(function (postItem) {
  let currentDroppable = null;
  postItem.onmousedown = function (event) {

      let currentDroppable = null;
      let postItemThis = this;

      let shiftX = event.clientX - postItemThis.getBoundingClientRect().left;
      let shiftY = event.clientY - postItemThis.getBoundingClientRect().top;

      document.querySelector('body').append(postItem)

      postItem.classList.add('pererab__item_moved')
      postItem.style.position = 'absolute';
      postItem.style.zIndex = 9;


      moveAt(event.clientX, event.clientY);

      function onMouseMove(event){
        moveAt(event.clientX, event.clientY)

        postItem.style.display = 'none';
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        postItem.style.display = 'flex';

        if(!elemBelow) return;

        let droppableBelow = elemBelow.closest('.pererab__zone')

        if(!currentDroppable){
          document.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;

            postItem.classList.remove('pererab__item_moved')
            postItem.style.position = 'relative';
            postItem.style.left = 'auto';
            postItem.style.top = 'auto';

            document.querySelector('.pererab .postamat__block').append(postItem)

            checkLengthList(document.querySelectorAll('.zone__list ul li').length)
          }
        }

        if( currentDroppable != droppableBelow ){

          if(currentDroppable){
            document.querySelector('.pererab__zone').style.background = 'transparent';
          }
          currentDroppable = droppableBelow;
          if(currentDroppable){
            droppableBelow.style.background = '#26293b';
            document.onmouseup = function () {
              document.removeEventListener('mousemove', onMouseMove);
              document.onmouseup = null;

              postItem.classList.remove('pererab__item_moved')
              postItem.style.position = 'relative';
              postItem.style.left = 'auto';
              postItem.style.top = 'auto';

              droppableBelow.querySelector('ul').append(postItem)

              checkLengthList(document.querySelectorAll('.zone__list ul li').length)
            }
          }
        }
      }

      function checkLengthList(length) {

        if( length > 0 ){
          document.querySelector('.pererab__zone .zone__empty').style.display = 'none';
          document.querySelector('.pererab__button .zone__empty').style.display = 'none';
          document.querySelector('.pererab__zone').style.background = 'transparent';

          document.querySelector('.zone__done').style.display = 'flex';

        } else {
          document.querySelector('.pererab__zone').style.background = 'transparent';
          document.querySelector('.pererab__zone .zone__empty').style.display = 'flex';
          document.querySelector('.pererab__button .zone__empty').style.display = 'flex';

          document.querySelector('.zone__done').style.display = 'none';
        }

        let sumCoins = 0;
        for( let i = 0; i < document.querySelectorAll('.zone__list li').length; i++ ){
          sumCoins += +document.querySelectorAll('.zone__list li')[i].querySelector('.item__price').innerText
        }

        document.querySelector('.zone__done .rht span').innerText = sumCoins

      }

      function moveAt(pageX, pageY){

        let coodX = pageX - shiftX;
        let coodY = pageY - shiftY;

        postItemThis.style.left = coodX + 'px';
        postItemThis.style.top = coodY + 'px';

      }
        
      document.addEventListener('mousemove', onMouseMove);

      document.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        document.onmouseup = null;
      }

      postItemThis.ondragstart = function() {
        return false;
      };

    
  }


})





document.querySelectorAll('.item__type_clothes').forEach(function (itemCl) {
  itemCl.onclick = function () {
    this.closest('.list-games__item').classList.toggle('list-games__item_open-clothes')
  }
})

document.querySelectorAll('.section-faq__item .item__head').forEach(function (itemFAQ) {
  itemFAQ.onclick = function () {
    this.closest('.section-faq__item').classList.toggle('section-faq__item_active')
  }
})


document.querySelectorAll('.section-fight__select button').forEach(function (btn, btnNum) {

  btn.onmousemove = function () {
    let attr = btn.getAttribute('data-persone')
    document.querySelector('.'+attr).classList.add('img_hover')
  }
  btn.onmouseout = function () {
    let attr = btn.getAttribute('data-persone')
    document.querySelector('.'+attr).classList.remove('img_hover')
  }
  btn.onclick = function () {
    let attr = btn.getAttribute('data-persone')
    document.querySelector('.'+attr).classList.toggle('img_clicked');
    btn.classList.toggle('button_active')
    let checkNumberClicked = 0;

    for( let check of document.querySelectorAll('.section-fight__select button') ){
      if( check.classList.contains('button_active') ){
        checkNumberClicked++;
      }
    }

    let arrayOfName = ['n', 'n', 'n'];

    for( let check1 of document.querySelectorAll('.section-fight__select button') ){

      if(checkNumberClicked > 1 && !check1.classList.contains('button_active') ){
        check1.classList.add('button_disabled')
      } else {
        check1.classList.remove('button_disabled')
      }

      
      if( check1.classList.contains('button_active') ){
        let numOfButtons = Array.from(document.querySelectorAll('.section-fight__select button')).indexOf(check1)
        arrayOfName[numOfButtons] = 's';
      }else{
        let numOfButtons = Array.from(document.querySelectorAll('.section-fight__select button')).indexOf(check1)
        arrayOfName[numOfButtons] = 'n';
      }

    }

    let nameOfImage = 'persone-'+arrayOfName.join('')+'.png';

    document.querySelector('.persone__start img').setAttribute('src', 'img/'+nameOfImage)



  }

})

document.querySelectorAll('.section-fight__select-hit button').forEach(function (btn, btnNum) {

  btn.onmousemove = function () {
    let attr = btn.getAttribute('data-persone')
    document.querySelector('.'+attr).classList.add('img_hover')
  }
  btn.onmouseout = function () {
    let attr = btn.getAttribute('data-persone')
    document.querySelector('.'+attr).classList.remove('img_hover')
  }
  btn.onclick = function () {
    let attr = btn.getAttribute('data-persone')
    document.querySelector('.'+attr).classList.toggle('img_clicked');
    btn.classList.toggle('button_active')
    let checkNumberClicked = 0;

    for( let check of document.querySelectorAll('.section-fight__select-hit button') ){
      if( check.classList.contains('button_active') ){
        checkNumberClicked++;
      }
    }

    let arrayOfName = ['n', 'n', 'n'];

    for( let check1 of document.querySelectorAll('.section-fight__select-hit button') ){

      if(checkNumberClicked > 1 && !check1.classList.contains('button_active') ){
        check1.classList.add('button_disabled')
      } else {
        check1.classList.remove('button_disabled')
      }

      
      if( check1.classList.contains('button_active') ){
        let numOfButtons = Array.from(document.querySelectorAll('.section-fight__select-hit button')).indexOf(check1)
        arrayOfName[numOfButtons] = 's';
      }else{
        let numOfButtons = Array.from(document.querySelectorAll('.section-fight__select-hit button')).indexOf(check1)
        arrayOfName[numOfButtons] = 'n';
      }
      
    }

  }

})


function minusingCoins() {
  let minusCoinsCount = +document.querySelector('.resources__coins_minus span').innerText

  let minusCounts = setInterval(function () {
    for( minusCoinsCount; minusCoinsCount >= 0; ){
      document.querySelector('.resources__coins_minus span').innerText = minusCoinsCount--;
      break;
    }
    if( minusCoinsCount == -1 ){
      document.querySelector('.resources__coins_minus').classList.add('resources__coins_none')
      clearInterval(minusCounts)
    }
  }, 20)
}

if(document.querySelector('.section-fight__confetti')){

  setTimeout(function () {
    document.querySelector('.section-fight__confetti_active img').setAttribute('src', 'img/confetti.gif')
    document.querySelector('.section-fight__confetti_active').style.opacity = '1';

    minusingCoins();

  }, 3000)

}


if( document.querySelector('.section-right__cart .buttons__buy') ){

  document.querySelector('.section-right__cart .buttons__buy').onclick = function () {

    document.querySelector('.postamat__cart_full').classList.remove('postamat__cart_show')
    document.querySelector('.postamat__cart_empty').classList.add('postamat__cart_show')

    document.querySelector('.section-right__cart-bought').classList.add('section-right__cart_active')

  }

}

if(document.querySelector('.postamat__cart_full')){


  document.querySelector('.postamat__cart_full').onclick = function () {
    document.querySelector('.section-right__cart').classList.toggle('section-right__cart_active')
  }
  document.querySelector('.section-right__cart .buttons__back').onclick = function () {
    document.querySelector('.section-right__cart').classList.toggle('section-right__cart_active')
  }

  document.querySelector('.cart-bought__close').onclick = function () {
    document.querySelector('.section-right__cart').classList.remove('section-right__cart_active')
    document.querySelector('.section-right__cart-bought').classList.remove('section-right__cart_active')
  }

  document.querySelectorAll('.cart__item .item__delete').forEach(function (itemDel) {
    itemDel.onclick = function () {

      let th = this.closest('.cart__item')
      this.closest('.cart__item').classList.add('cart__item_deleted')

      setTimeout(function () {
        th.remove()
      }, 300)

    }
  })

}



document.querySelector('.resources__button').onclick = function () {
  document.querySelector('.section-right__rules').classList.toggle('section-right__rules_active')
  this.classList.toggle('resources__button_active')
}


document.querySelectorAll('.smiles__switches button').forEach(function (sw) {
  sw.onclick = function () {
    
    for( let sw2 of document.querySelectorAll('.smiles__switches button') ){
      sw2.closest('li').classList.remove('li_active')
    }

    sw.closest('li').classList.add('li_active')
  }
})

document.querySelector('.section-right__bottom').onclick = function () {
  document.querySelector('.section-right__smiles').classList.toggle('section-right__smiles_active')
}

