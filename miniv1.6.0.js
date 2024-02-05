////////////////////
// MARKET V.1.6.0 //
////////////////////

// [name, price, stock]
const fruits = [
    {name : 'Apple', price : 10000, stock : 5}, 
    {name : 'Grape', price : 15000, stock : 7}, 
    {name : 'Orange', price : 20000, stock : 8}, 
]

// function untuk menampilkan list buah
const createList = (arr, header, kind = 1) => {
    // variabel awal yang akan menyimpan list buah
    let list = `${header}\n\n`;

    // arr = fruits ==> {name, price, stock}
    // arr = carts ==> {name, price, qty}

    if (kind) {
        arr.forEach((val, i) => {
            // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variabel fruitlist
            const {name, price, stock} = val
            list += `${i}. ${name} || Rp.${price} || stock : ${stock}\n`;
        });
    } else {
        arr.forEach((val, i) => {
        // Setiap buahnya akan dibuatkan satu list dengan format tertentu dan ditambahkan ke variabel fruitlist
        const {name, price, qty} = val
        list += `${i}. ${name} || Rp.${price} || qty : ${qty}\n`;
    });
    }

    // Return list
    return list;
};

// while 'menu utama', akan menampilkan menu selama user belum memilih untuk keluar (pilihan 5)
while (true) {
    const menu = parseInt(
        prompt(`
        Apa yang ingin anda lakukan :
        1. Menampilkan daftar buah
        2. Menambah buah
        3. Menghapus buah
        4. Membeli buah
        5. Exit 
        `)
    );

        // Menu 1 : Menampilkan daftar buah 
        if (menu == 1) {
            // Menampilkan list buah
            alert(createList(fruits, "Daftar Buah"));

            // Menu 2 : Menambah buah
        } else if (menu == 2) {
            // Input nama, harga, stock untuk buah yang baru
            const name = prompt("Masukkan nama buah :");
            const price = parseInt(prompt("Masukkan jumlah harga satuan :"));
            const stock = parseInt(prompt("Masukkan jumlah stock :"));

            // Array yang sudah jadi di push ke array fruits 
            fruits.push({name, price, stock});

            // Menampilkan list buah 
            alert(createList(fruits, "Daftar Buah"));
            
            // Jika memilih menu 3, Mengahpus buah
        } else if ( menu == 3) {
            // Menampilkan daftar buah dan memilih buah untuk dihapus
            // Index dari buah terpilih akan disimpan ke variabel selIndex
            const selIndex = parseInt(prompt(createList(fruits, "Menghapus Buah")));
            
            // Menghapus satu data pada array
            fruits.splice(selIndex, 1);
            
            // Menampilkan list buah
            alert(createList(fruits, "Daftar Buah"));
            
            // Membeli buah 
        } else if (menu == 4) {
            const cart = [];
            
            // while 'memilih buah', akan berulang untuk memilih buah yang ingin dibelanjakan 
            while (true) {
                // Menampilkan daftar buah dan memilih buah untuk dibeli 
                const selIndex = parseInt(prompt(createList(fruits, "Membeli Buah")));
                // Menyimpan nama, harga dan stock buah yang terpilih ke dalam variabel tersendiri
                // fruits[1]
                const {name, price, stock} = fruits(selIndex);
                // Loop untuk 'input quantity' dari buah yang dipilih 
                while (true) {
                    // Jumlah stock yang ingin dibeli
                    var qty = parseInt(
                        prompt(`Masukkan quantity untuk ${name}, Stock : ${stock} `)
                        );
                        // Jika Qty yang diminta melebihi stock yang tersedia
                        if (qty > stock) {
                            alert(
                                `Quantity yang diminta ${qty}, melebihi jumlah stock ${stock}`
                                );
                            } else {
                                // Masukkan ke keranjang (cart)
                                carts.push({name, price, qty});
                                // kurangi stock buah yang dipesan 
                                fruits[selIndex].stock -= qty;
                                // keluar dari loop "Input Quantity"
                                break;
                            }
                            
                            // Tampilan isi keranjang 
                            cartList = createList(carts, "Keranjang", 0);
                            
                            const again = prompt(
                                `${cartList}\n\nIngin belanja lainnya ? ( ya / tidak )`
                                );  
                                
                                // Keluar dari loop "Choosing Fruit"
                                // tidak, TIDAK, tidaK ==> tidak
                                if (again.toLowerCase() == "tidak") {
                                    break;
                                }
                }
            }
                    
                            // Keluar dari while 'memilih buah', lanjutkan menghitung harga yang harus dibayar 
                            
                            // Menghitung total harga
                            const finalPrice = 0;
                            
                            carts.forEach((cart) => {
                                // total price per buah 
                                // price x Quantity, hasilnya dijadikan index ke 3 dari buah tersebut 
                                cart.total = cart.qty * cart.price;
                                
                                // final price keseluruhan
                                finalPrice += cart.total;
                            });
                            
                            // Menampilkan detail belanja
                            let finalReport = "";
                            
                            carts.forEach((cart) => {
                                const{name, price, qty, total} = cart;
                                finalReport += `${name} : ${price} x ${qty} = ${total}\n`;
                            });
                            
                            // While 'input uang', dijalankan untuk meminta inputan jumlah uang dari user 
                            // akan terus berulang selama uang yang dimasukkan oleh user masih kurang dari yang seharusnya
                            
                            while (true) {
                                // Menampilkan informasi belanja termasuk total uang yang harus dibayar 
                                const money = parseInt(prompt(`Detail Belanja\n\n${finalReport}\n\nTotal : ${finalPrice}`));
                                const margin = Math.abs(money - finalPrice);
                                
                                // Jika uang yang dimasukkan kurang dari yang seharusnya
                                if (money < finalPrice) {
                                    alert(
                                        `Uang yang anda masukkan kurang ${margin}, total belanja ${finalPrice}`
                        );
                    } else {
                        // jika uang yang diberikan melebihi dari yang seharusnya 
                        if (money > finalPrice) {
                            alert(`Terimakasih, uang kembalian anda ${margin}`);
                            // jika uang yang diberikan pas 
                        } else {
                            alert(`Terima kasih`);
                    }

                    // Keluar dari loop 'Bill'
                    break;
                }
            }
            // jika memilih menu 5, exit
        } else {
            // Keluar dari while 'menu utama'
            break;
        }
}