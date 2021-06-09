// светлосерый под стрелкой - F7F7F7
// accent - FF6B08 (background: rgba(255, 107, 8, 1))

// тень над правой стрелкой в mobile:
// filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
// transform: matrix(-1, 0, 0, 1, 0, 0);

// 40x40 знакоместо под акцентированный номер страницы и фон стрелки
// 5 - радиус скруглений этих фонов

// font-family: Roboto;
// font-style: normal;
// font-weight: 500;
// font-size: 12px;
// line-height: 16px;/* identical to box height, or 133% */
// display: flex;
// align-items: center;
// color: #000000;

// m 20-40-19-[]-16-[]-17-40-16-[]-16-[]-20-40-20
// t 197-40-16-[7]-16-.1.1.-16-[]-16-[]-17-40-16-[]-16-[]-16-.1.1.-16-[]-10-40-197

// =>20-40-20-[]-16-[]-16-40-16-[]-16-[]-20-40-20

let pageNum = 1;
const maxPage = 10;
// let visPage = 5;

l1.classList.toggle("accent");

const scrollNum = () => {
  if (maxPage - pageNum === 1) {
    s1.textContent = pageNum - 3;
    s2.textContent = pageNum - 2;
    s3.textContent = pageNum - 1;
    s4.textContent = pageNum;
    s5.textContent = pageNum + 1;
    return;
  }

  if (pageNum === 1) {
    s1.textContent = pageNum;
    s2.textContent = pageNum + 1;
    s3.textContent = pageNum + 2;
    s4.textContent = pageNum + 3;
    s5.textContent = pageNum + 4;
    return;
  }

  if (pageNum === 2) {
    s1.textContent = pageNum - 1;
    s2.textContent = pageNum;
    s3.textContent = pageNum + 1;
    s4.textContent = pageNum + 2;
    s5.textContent = pageNum + 3;
    return;
  }

  if (maxPage === pageNum) return;

  s1.textContent = pageNum - 2;
  s2.textContent = pageNum - 1;
  s3.textContent = pageNum;
  s4.textContent = pageNum + 1;
  s5.textContent = pageNum + 2;
};

const accenting = () => {
  // value.textContent = pageNum; // убрать после отладки

  document.querySelector(".accent").classList.toggle("accent");

  if (pageNum === 1) return l1.classList.add("accent");
  if (pageNum === 2) return l2.classList.toggle("accent");
  if (pageNum === maxPage - 1) return l4.classList.toggle("accent");
  if (pageNum === maxPage) return l5.classList.add("accent");

  l3.classList.add("accent");
};

const scrollNumIfNeed = () => {
  // if (pageNum > 2 && pageNum + 2 <= maxPage) scrollNum();
  // if (pageNum > 2 && pageNum + 2 <= maxPage) scrollNum();
  // if (pageNum > 2)
  scrollNum();
};
// ============= listeners ==================
dec.addEventListener("click", () => {
  if (pageNum - 1 <= 0) return;
  pageNum -= 1;

  scrollNumIfNeed();
  accenting();
});

inc.addEventListener("click", () => {
  if (pageNum >= maxPage) return;
  pageNum += 1;

  scrollNumIfNeed();
  accenting();
});

l1.addEventListener("click", (click) => {
  if (pageNum !== +click.currentTarget.innerText) {
    pageNum = +click.currentTarget.innerText;
    scrollNumIfNeed();
    accenting();
  }
});

l2.addEventListener("click", (click) => {
  if (pageNum !== +click.currentTarget.innerText) {
    pageNum = +click.currentTarget.innerText;
    scrollNumIfNeed();
    accenting();
  }
});

l3.addEventListener("click", (click) => {
  if (pageNum !== +click.currentTarget.innerText) {
    pageNum = +click.currentTarget.innerText;
    scrollNumIfNeed();
    accenting();
  }
});

l4.addEventListener("click", (click) => {
  if (pageNum !== +click.currentTarget.innerText) {
    pageNum = +click.currentTarget.innerText;
    scrollNumIfNeed();
    accenting();
  }
});

l5.addEventListener("click", (click) => {
  if (pageNum !== +click.currentTarget.innerText) {
    pageNum = +click.currentTarget.innerText;
    scrollNumIfNeed();
    accenting();
  }
});
