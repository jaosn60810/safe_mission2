const programBtnGroup = document.querySelector('.programBtns');

programBtnGroup.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.nodeName !== 'A') {
    return;
  }

  // 切換按下按鈕樣式
  const programBtns = programBtnGroup.querySelectorAll('.btn');
  programBtns.forEach((item) => {
    item.classList.remove('active');
  });
  e.target.classList.toggle('active');

  // 更換文字
  const newNumText = e.target.textContent; // 按鈕上的字串
  const newNumLen = newNumText.length;
  let newNum = e.target.textContent.slice(0, newNumLen - 1); // 拿出數字的部分
  const nums = document.querySelectorAll('.num'); // 訂閱用戶數下的數字
  const basicMonthlyCost = document.querySelector('#basicMonthlyCost'); // 基本版 試算每月的費用
  const standardMonthlyCost = document.querySelector('#standardMonthlyCost'); // 標準版  試算每月的費用

  nums.forEach((item) => {
    let biggerIcon = '';
    let formatNum = 0;

    // 更換訂閱用戶數下的數字
    item.textContent = newNum;
    formatNum = newNum;

    // 如果遇到 >25000
    if (newNum[0] === '>') {
      // 去除字串裡的 >
      formatNum = newNum.slice(1);
      biggerIcon = '>';
      // 訂閱用戶數下的數字加上 > 會太大，換小一點的字
      item.classList.remove('fs-2');
      item.classList.add('fs-3');
    }

    // 更改 試算每月的費用數字
    basicMonthlyCost.textContent =
      biggerIcon + numberWithCommas((formatNum / 10000) * 600);
    standardMonthlyCost.textContent =
      biggerIcon + numberWithCommas((formatNum / 10000) * 1600);
  });
});

// 加上千分號
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
