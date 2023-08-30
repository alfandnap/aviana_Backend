# Irsx Back End Basic Test

## Deskripsi
Repository ini berisi serangkaian pertanyaan wawancara teknis yang dirancang untuk menilai kemampuan pelamar dalam Pengembangan Backend. Melalui pertanyaan-pertanyaan ini, kami bertujuan untuk memperoleh gambaran yang jelas mengenai kemampuan dan keahlian kandidat dalam Pengembangan Backend.

## Prasyarat
Sebelum memulai tugas ini, pastikan Anda telah memenuhi prasyarat sebagai berikut:

- Sudah memiliki pengetahuan dasar mengenai backend development
- Sudah mempunyai perangkat komputer yang memenuhi spesifikasi untuk menjalankan aplikasi React
- Sudah menginstal Node.js dan NPM pada komputer Anda

## Instruksi
- Lakukan clone repository ini ke komputer Anda
- Jawab semua pertanyaan yang ada pada file `README.md`
- Simpan perubahan pada file `App.js` dan `README.md` yang sudah Anda buat
- Kirim file `App.js` dan `README.md`  (dalam bentuk zip) yang sudah Anda jawab melalui email ke galang@hayumarket.com dengan Subject "TEST_FE_[NAMA]"

Pastikan Anda telah membaca dengan cermat instruksi dan pertanyaan yang ada sebelum memulai tugas.
 
---

### Question 1
Apa yang kamu ketahui mengenai Big O Notation? Big O Notation merupakan salah satu cara untuk mengukur seberapa efficient sebuah algoritma
terdapat 2 fungsi dalam file `question-1.js`, berapa kompleksitas waktu kedua fungsi tersebut?
### Answer 1
...
firstSortFunction = O(n^2)
secondSortFunction = O(n log n)

### Question 2
Diberikan sebuah `user_list_roles` sebagai berikut:
 - `transaction.create`
 - `transaction.update` 
 - `transaction.delete`
 - `transaction.read`
 - `banner.create`
 - `banner.update`
 - `banner.delete`
 - `banner.read`
 
Kamu diminta untuk membuat sebuah function yang dapat memvalidasi hak akses seorang user yang akan mengakses suatu resource dengan roles tertentu.

Rules: 
- Kerjakan code ini dalam file `question-2.js`
- di dalam file `question-2.js` terdapat sebuah fungsi bernama `checkUserAuthorized` yang akan me-return value `boolean`. Silahkan tulis kodemu dalam function tersebut.
- Kamu bebas memilih tipe data apapun untuk menyimpan data `user_list_roles`

### Answer 2
...


### Question 3

Buatlah sebuah fungsi yang dapat menghitung angka yang berurutan terpanjang dalam sebuah array yang tidak berurut
Buat algoritma yang dapat berjalan dengan kompleksitas waktu O(n).

Kamu dapat melihat detailnya pada `question-3.js`

### Answer 3
...


### Question 3
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| score       | decimal |
+-------------+---------+

Buatkan sql query untuk memberikan ranking dari yang tertinggi ke terendah.

Rules:
- score harus diurutkan dari yang terbesar ke terendah
- jika ada score yang memiliki nilai sama, maka keduanya memiliki rank yang sama

Contoh Response: 
+-------------+---------+
| score       | rank    |
+-------------+---------+
| 9           | 1       |
| 8.20        | 2       |
| 8.20        | 2       |
| 5.88        | 3       |
| 4.78        | 4       |
| 4.12        | 5       |
+-------------+---------+

Helper Query: 
```
CREATE TABLE question_1 (
  id INT NOT NULL AUTO_INCREMENT,
  score DECIMAL(5,2) NOT NULL,
  PRIMARY KEY (id)
);
```
```
INSERT INTO question_1 (score)
VALUES (ROUND(RAND() * 9 + 1, 2)),
       (ROUND(RAND() * 9 + 1, 2)),
       (ROUND(RAND() * 9 + 1, 2)),
       (ROUND(RAND() * 9 + 1, 2)),
       (ROUND(RAND() * 9 + 1, 2)),
       (ROUND(RAND() * 9 + 1, 2)),
       (ROUND(RAND() * 9 + 1, 2)),
       (ROUND(RAND() * 9 + 1, 2)),
       (ROUND(RAND() * 9 + 1, 2)),
       (ROUND(9, 2)),
       (ROUND(9, 2));
```
### Answer 3
```
SELECT score,
       DENSE_RANK() OVER (ORDER BY score DESC) AS rank
FROM question_1
ORDER BY score DESC;
```


### Question 4

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| product_id  | int     |
| toko_jaya   | int     |
| toko_rima   | int     |
| sinar_jaya  | int     |
+-------------+---------+
1. product_id adalah primary key dalam table
2. column `toko_jaya`, `toko_rima`, `sinar_jaya` melambangkan harga produk setiap toko
3. jika produk tidak ada dalam sebuah toko maka harga dalam store akan bernilai `null`

Buatkan query sql untuk menyusun ulang tabel Produk agar setiap baris memiliki product_id, store, dan price. Jika suatu produk tidak tersedia dalam toko maka jangan mengikutsertakan toko tersebut dalam hasil querymu

EXAMPLE: 
Input:
+------------+--------+--------+--------+--------+--
| product_id | toko_jaya | toko_rima | sinar_jaya  |
+------------+--------+--------+--------+
| 0          | 95        | 100       | 105         |
| 1          | 70        | null      | 80          |
+------------+--------+--------+--------+--------+--
Output:
+------------+--------+-------+
| product_id | store      | price |
+------------+--------+-------+
| 0          | toko_jaya  | 95    |
| 0          | toko_rima  | 100   |
| 0          | sinar_jaya | 105   |
| 1          | toko_jaya  | 70    |
| 1          | sinar_jaya | 80    |
+------------+--------+-------+----
Helper Query: 
```
CREATE TABLE products (
  product_id INT NOT NULL AUTO_INCREMENT,
  toko_jaya INT NULL,
  toko_rima INT NULL,
  sinar_jaya INT NULL,
  PRIMARY KEY (product_id)
);
```
```
INSERT INTO products (toko_jaya, toko_rima, sinar_jaya)
VALUES (90, 91, 89), (198, 188, null), (76, null, 74);
```

```
SELECT product_id, 'toko_jaya' AS store, toko_jaya AS price FROM products WHERE toko_jaya IS NOT null
UNION
SELECT product_id, 'toko_rima' AS store, toko_rima AS price FROM products WHERE toko_rima IS NOT null
UNION
SELECT product_id, 'sinar_jaya' AS store, sinar_jaya AS price FROM products WHERE sinar_jaya IS NOT null
ORDER BY product_id  ASC;
```