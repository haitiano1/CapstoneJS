var spService = new SanPhamService();

function layDanhSachSanPham() {
  var promise = spService.layDanhSachSP();

  promise.then(function (result) {
    //Hiển thị lên UI
    hienThiUI(result.data);
    // hienThiDashboard(result.data);
  });
  promise.catch(function (error) {
    console.log(error);
  });
}
layDanhSachSanPham();

function hienThiUI(mangSP) {
  var content = "";
  // console.log(mangSP)
  mangSP.map(function (sp) {
    content += `
            <div class="product__item col">
              <div class="product__bg">
                <div class="product__img">
                <img src="${sp.img}" alt="">
                  <div class="product__overlay">
                    <div>${sp.desc}</div>
                  </div>
                </div>
                <div class="product__text">
                  <h2 class="product__name"><b>${sp.name}</b></h2>
                  <h4 class="product__price"><b>$${sp.price}</b></h4>
                  <p>Camera trước: ${sp.frontCamera}</p>
                  <p>${sp.backCamera}</p>
                </div>
                <button class="btn-buy" id="addCart">THÊM VÀO GIỎ HÀNG</button>
              </div>
            </div>
    `;
  });
  document.querySelector("#product-list").innerHTML = content;
}

