// toTop
$(function () {
  $('#toTop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 1000);
    return false;
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
});

let data = [
  {
    id: 0,
    name: '肥宅心碎賞櫻3日',
    imgUrl:
      'https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80',
    area: '高雄',
    description: '賞櫻花最佳去處。肥宅不得不去的超讚景點！',
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: '貓空纜車雙程票',
    imgUrl:
      'https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    area: '台北',
    description:
      '乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感',
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: '台中谷關溫泉會1日',
    imgUrl:
      'https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    area: '台中',
    description:
      '全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。',
    group: 20,
    price: 1765,
    rate: 7,
  },
];

let _list = document.querySelector('.dataList__card');
let count = document.getElementById('count');
const dataList = document.getElementById('dataList');

function init() {
  let str = '';
  let countNum = 0;
  data.forEach(function (item) {
    countNum+=1;
    let content = `<li class="card">
            <p class="card__area">${item.area}</p>
            <div class="card__photo">
              <img src="${item.imgUrl}" alt="" />
            </div>
            <div class="card__info">
              <p class="card__info__star">${item.rate}</p>
              <h3 class="card__info__title">${item.name}</h3>
              <p class="card__info__describe">
                ${item.description}
              </p>
              <div class="card__info__price">
                <p>
                  <i class="fa-solid fa-circle-exclamation"></i>剩下最後 ${item.group} 組
                </p>
                <div class="price">
                  <p>TWD</p>
                  <span>$${item.price}</span>
                </div>
              </div>
            </div>
          </li>`;
    str += content;
    _list.innerHTML = str;
  });
  count.textContent = countNum;
}
init();

function showList(e) {
  let select = document.getElementById('dataList').value;
  let countNum = 0;

  let str = '';
  data.forEach(function (item) {
    if (select === item.area) {
      countNum+=1;
      let content = `<li class="card">
            <p class="card__area">${item.area}</p>
            <div class="card__photo">
              <img src="${item.imgUrl}" alt="" />
            </div>
            <div class="card__info">
              <p class="card__info__star">${item.rate}</p>
              <h3 class="card__info__title">${item.name}</h3>
              <p class="card__info__describe">
                ${item.description}
              </p>
              <div class="card__info__price">
                <p>
                  <i class="fa-solid fa-circle-exclamation"></i>剩下最後 ${item.group} 組
                </p>
                <div class="price">
                  <p>TWD</p>
                  <span>$${item.price}</span>
                </div>
              </div>
            </div>
          </li>`;
      str += content;
    } else if(select === '地區搜尋'){
      countNum += 1;
      let content = `<li class="card">
            <p class="card__area">${item.area}</p>
            <div class="card__photo">
              <img src="${item.imgUrl}" alt="" />
            </div>
            <div class="card__info">
              <p class="card__info__star">${item.rate}</p>
              <h3 class="card__info__title">${item.name}</h3>
              <p class="card__info__describe">
                ${item.description}
              </p>
              <div class="card__info__price">
                <p>
                  <i class="fa-solid fa-circle-exclamation"></i>剩下最後 ${item.group} 組
                </p>
                <div class="price">
                  <p>TWD</p>
                  <span>$${item.price}</span>
                </div>
              </div>
            </div>
          </li>`;
      str += content;
    }
    _list.innerHTML = str;
  });
  count.textContent = countNum;

}
dataList.addEventListener('change', showList);

let _add = document.querySelector('.selectCard__button');
_add.addEventListener('click',function(){
  let name = document.getElementById('itemName').value;
  let imgUrl = document.getElementById('itemImg').value;
  let area = document.getElementById('itemArea').value;
  let description = document.getElementById('itemDescription').value;
  let group = document.getElementById('itemGroup').value;
  let price = document.getElementById('itemPrice').value;
  let rate = document.getElementById('itemRate').value;
  if(name ===''){
    alert('請填寫套票名稱');
    return;
  }else if(area === '請選擇景點地區'){
    alert('請選擇地區');
    return;
  }else if(description === ''){
    alert('請填寫描述');
    return;
  }
  let newData = {
    id: 2,
    name,
    imgUrl,
    area,
    description,
    group,
    price,
    rate,
  };
  data.push(newData);
  init();
})

// console.log(data);
