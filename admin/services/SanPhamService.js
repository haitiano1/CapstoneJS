//Danh sách sản phẩm

function SanPhamService(){

    //lấy danh sách sp
    this.layDanhSachSP = function (){
        var promise = axios({
            method: 'get',
            url: 'https://636e0829182793016f342cf4.mockapi.io/Products',
          });

        return promise;
        

    }

}