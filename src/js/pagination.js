// console.log('pagination.shu');
let pageNum = 1;
let maxPage = 10;
s1.classList.toggle("accent");

const reNum = () => {
  s1.textContent = pageNum - 2;
  s2.textContent = pageNum - 1;
  s3.textContent = pageNum;
  s4.textContent = pageNum + 1;
  s5.textContent = pageNum + 2;

  s3.classList.add("accent");
};
// ============= listeners ==================
dec.addEventListener("click", () => {
  if (pageNum - 1 > 0) pageNum -= 1;
//   value.textContent = pageNum;
console.log(pageNum);

  if (pageNum === 1) {
    s1.classList.add("accent");
    s2.classList.remove("accent");
    return;
  }

  if (pageNum === 2) {
    s2.classList.toggle("accent");
    s3.classList.toggle("accent");
    return;
  }

  if (pageNum === maxPage-1) {
    s4.classList.toggle("accent");
    s5.classList.toggle("accent");
    return;
  }

  if (pageNum === maxPage-2) {
    s3.classList.toggle("accent");
    s4.classList.toggle("accent");
    return;
  }

  if(pageNum+2<maxPage)reNum();
  
});

inc.addEventListener("click", () => {
  if(pageNum<maxPage)pageNum += 1;
//   value.textContent = pageNum;
console.log(pageNum);


  if (pageNum === 2) {
    s1.classList.toggle("accent");
    s2.classList.toggle("accent");
  }

  if (pageNum === maxPage-1) {
    s3.classList.toggle("accent");
    s4.classList.toggle("accent");
  }

  if (pageNum === maxPage) {
    s4.classList.remove("accent");
    s5.classList.add("accent");
  }

  if (pageNum === 3) s2.classList.toggle("accent");

  if ((pageNum > 2)&&(pageNum+2<=maxPage)) reNum();
});
