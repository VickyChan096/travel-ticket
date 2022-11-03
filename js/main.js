const data = [
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
const _content = document.querySelector('.content__cards');
const _contentNum = document.getElementById('contentNum');
const _select = document.querySelector('.content__result__select');
const _addBtn = document.getElementById('addBtn');

function createList() {
  let str = '';
  data.forEach((item) => {
    str += createCard(item);
  });
  _content.innerHTML = str;
  _contentNum.textContent = data.length;
}

function init() {
  createList();
}
init();

function createCard(item) {
  const content = `<li class="card">
            <p class="card__area">${item.area}</p>
            <div class="card__photo">
              <img src="${item.imgUrl}" />
            </div>
            <p class="card__rate">${item.rate}</p>
            <div class="card__info">
              <h3>${item.name}</h3>
              <h4>
                ${item.description}
              </h4>
              <div class="card__info__charge">
                <p><i class="fa-solid fa-circle-exclamation"></i>剩下最後${item.group}組</p>
                <p>TWD<span>$${item.price}</span></p>
              </div>
            </div>
          </li>`;
  return content;
}

function selectArea() {
  const area = _select.value;
  let str = '';
  let newData = [];

  if (area === '地區搜尋') {
    newData = data;
  } else {
    newData = data.filter((item) => item.area === area);
  }
  newData.forEach((item) => {
    str += createCard(item);
  });

  _content.innerHTML = str;
  _contentNum.textContent = newData.length;
}
_select.addEventListener('change', selectArea);

function addNewTicket() {
  const id = data[data.length - 1].id + 1;
  const name = document.getElementById('ticketName').value;
  const imgUrl = document.getElementById('ticketImg').value;
  const area = document.getElementById('ticketArea').value;
  const description = document.getElementById('ticketDescription').value;
  const group = document.getElementById('ticketGroup').value;
  const price = document.getElementById('ticketPrice').value;
  const rate = document.getElementById('ticketRate').value;
  const newTicket = {
    id,
    name,
    imgUrl,
    area,
    description,
    group,
    price,
    rate,
  };
  let message = '';
  if (name === '') {
    message += '請填寫套票名稱 \n';
  }
  if (imgUrl === '') {
    message += '請填寫圖片網址 \n';
  }
  if (area === '') {
    message += '請選擇景點地區 \n';
  }
  if (description === '') {
    message += '請填寫套票描述 \n';
  }
  if (group === '') {
    message += '請填寫套票組數 \n';
  }
  if (price === '') {
    message += '請填寫套票金額 \n';
  }
  if (rate === '') {
    message += '請填寫套票星級 \n';
  }
  if (message !== '') {
    alert(message);
    return;
  }
  data.push(newTicket);
  createList();
  alert('新增套票成功!!');
  document.getElementById('ticketName').value = '';
  document.getElementById('ticketDescription').value = '';
}
_addBtn.addEventListener('click', addNewTicket);

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
