var spService = new SanPhamService();

function layDanhSachSanPham() {
  var promise = spService.layDanhSachSP();

  promise.then(function (result) {
    //Hiển thị lên UI
    hienThiDashboard(result.data);
  });
  promise.catch(function (error) {
    console.log(error);
  });
}
layDanhSachSanPham();

function hienThiDashboard(mangSP) {
    var content = "";
  
    mangSP.map(function (sp) {
      content += `
        <tr>
        <td>${sp.id}</td>
        <td>${sp.name}</td>
        <td><img src="${sp.img}" alt="" style="width: 100px"></td>
        <td>$${sp.price}</td>
        <td>${sp.frontCamera}</td>
        <td>${sp.backCamera}</td>
        <td>${sp.screen}</td>
        <td>${sp.desc}</td>
        <td>${sp.type}</td>
        <td class="d-flex">
            <button class="btn btn-danger mr-2" >Xóa</button>
            <button class="btn btn-success" >Xem</button>
        </td>
        </tr>
      `;
    });
    document.querySelector("#tbodyTableList").innerHTML = content;
  }