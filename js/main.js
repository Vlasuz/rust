
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

    console.log(document.querySelectorAll('.tabs__item')[arrNum])

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

document.querySelectorAll('.postamat__item').forEach(function (btn) {
  btn.onclick = function () {
    document.querySelector('.section-right__notice .notice__add-cart').classList.add('notice__item_active')

    setTimeout(function () {
      document.querySelector('.section-right__notice .notice__add-cart').classList.remove('notice__item_active')
    }, 2000)
  }
})

document.querySelectorAll('.airdrop__sleepers li').forEach(function (sleepers) {
  sleepers.addEventListener('click', function () {

    for( let btn of document.querySelectorAll('.airdrop__sleepers li') ){
      btn.querySelector('button').classList.remove('button_active')
    }

    this.querySelector('button').classList.add('button_active')

  })
})


document.querySelectorAll('.section-right__airdrop .airdrop__move ul li').forEach(function (btn) {
  btn.querySelector('button').addEventListener('mousedown', function (e) {
    this.style.position = 'fixed';
    this.style.left = e.clientX+'px';
    this.style.top = e.clientY+'px';
    // this.style.width = 'auto';
  })
  window.addEventListener('mousemove', function (e) {
    if( btn.querySelector('button').style.position == 'fixed' ){
      btn.querySelector('button').style.left = (e.clientX - btn.querySelector('button').clientWidth / 2)+'px';
      btn.querySelector('button').style.top = e.clientY+'px';
    }
  })
  btn.querySelector('button').addEventListener('click', function () {
    this.style.position = 'static';
  })
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


setTimeout(function () {
  document.querySelector('.section-fight__confetti_active img').setAttribute('src', 'img/confetti.gif')
  document.querySelector('.section-fight__confetti_active').style.opacity = '1'
}, 3000)

