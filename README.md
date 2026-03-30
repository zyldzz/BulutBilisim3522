Sınav adı, türü ve zamanı takibi için React tabanlı modern bir arayüz hazırladım ve sayfayı AWS S3 Bucket üzerinden yayınladım.
AWS EC2 üzerinden sunucu açtım ve içine .NET 8.0 kurdum.
Web sitem (S3) ile sunucumun (EC2) güvenli bir şekilde haberleşebilmesi için API tarafında CORS izinlerini yapılandırdım.
Projeyi gereksiz dosyalardan (node_modules, bin, obj) arındırarak sadece çalışan kaynak kodları GitHub üzerinde paylaştım.
Canlı Web Sayfası (S3): http://bulutbilisim3522.s3-website.us-east-2.amazonaws.com/
Canlı API Çıktısı (EC2): http://18.189.3.22:5000/api/sinav
*Frontend kodlarını yerelinizde incelemek isterseniz, klasör içinde npm install ve ardından npm start komutlarını çalıştırmanız yeterlidir.
