const _content = document.querySelector('.content__cards');
const _contentNum = document.getElementById('contentNum');
const _select = document.querySelector('.content__result__select');
const _addBtn = document.getElementById('addBtn');
let _data = [];

function init() {
  axios
    .get(
      'https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json'
    )
    .then(function (response) {
      _data = response.data.data;
      createList();
    })
    .catch(function (error) {
      alert('遠端資料異常');
      _content.innerHTML = `查無資料`;
    });
}
init();

function createList() {
  sortID();
  let str = '';
  _data.forEach((item) => {
    str += createCard(item);
  });
  _content.innerHTML = str;
  _contentNum.textContent = _data.length;
}

function sortID() {
  _data.sort(function (a, b) {
    return b.id - a.id;
  });
}

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
    newData = _data;
  } else {
    newData = _data.filter((item) => item.area === area);
  }
  newData.forEach((item) => {
    str += createCard(item);
  });
  _content.innerHTML = str;
  _contentNum.textContent = newData.length;
}
_select.addEventListener('change', selectArea);

function addNewTicket() {
  const formEl = document.getElementById('addTicket-form');
  let id = '';
  if (_data.length === 0) {
    id = 0;
  } else {
    id = _data[0].id + 1;
  }
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
  _data.push(newTicket);
  createList();
  alert('新增套票成功!!');
  formEl.reset();
  document.querySelector('.content__result__select').value = '地區搜尋';
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
