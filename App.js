import logo from './logo.svg';
import './App.css';
import Header from './compenents/Header';
function App() {
  return (
    <div className="App">
      <aside>
      <Header/>
      </aside>
      <header>
        <ul id="menu">
            <li><a href="App.js">Ana Sayfa</a></li>
            <li><a href="">Hakkımızda</a></li>
            <li><a href="">Mağaza</a></li>
        </ul>
      </header>
      <section>
          <h1 className='scümle1'>📍 Web Site'ye Hoş Geldiniz 📍 </h1>
          <h2 className='scümle1'>🔸 E-Ticaret Hakkında Her Şey Bu Web Sitede 🔸</h2>
          <h3 className='scümle2'> 📖 " Başarı sadece bir adım uzaklıktadır. Adımın büyüklüğünü sen belirlersin. "</h3>
         
      </section>
      <main>
        <h1 className='mcümle'>- Ticaret'te Başarının Sırrı -</h1>
        <h3 className='mcümle2'>🔸 Korkmadan Denemek</h3>
        <h3 className='mcümle2'>🔸 Başarılı Olanı Taklit Etme</h3>
        <h3 className='mcümle2'>🔸 Gerçekçi Olmak</h3>
        <h3 className='mcümle2'>🔸 Yeniliklere Adaptasyon</h3>
        <h3 className='mcümle2'>🔸 Müşteri Memnuniyeti</h3>
        <h1 className='mcümle'>- E-Ticaret Bazı İş Modelleri -</h1>
        <ul className='ulcümle'>📍Dropshipping Nedir ?(Stoksuz Satış)
          <li className='licümle'>🔸 stoğunuzda olmayan ve başka bir satıcıya veya üreticiye ait bir ürünün, kendi web siteniz veya bir e-ticaret platformunda (Amazon, Shopify, eBay, Hepsiburada, Gittigidiyor, N11, Trendyol v.b) bulunan sanal mağazanız üzerinden satıldığı bir E-Ticaret ( Online Satış ) metodudur.</li>
        </ul>
        <ul className='ulcümle2'>📍B2C(İşletme-Tüketici) Nedir ? 
          <li className='licümle2'>🔸 B2C iş modeli, ülkemizde en çok tercih edilen ve kullanılan modeldir. Anlam olarak baktığımızda, firmadan tüketiciye yönelik e-ticaret modeli olarak adlandırılır. Tüm e-ticaret siteleri birer B2C iş modeli örneğidir. Bu modelde firmalar ürün/hizmetlerini kendi sanal mağazalarında ya da birçok firmanın ürünlerini satışa sunduğu alışveriş portallarında satışa sunabilirler. Tüketiciler de aradıkları ürünleri, bu e-ticaret siteleri üzerinden bularak online alışveriş süreçlerini tamamlayabilirler.</li>
        </ul>
      </main>
      <content>
        <h1 className='cocümle'>🛒 E-Ticaret'te En Çok Satılan Ürünler 💰</h1>
        <h3 className='cocümle2'>🔸Telefon Aksesuarları</h3>
        <h3 className='cocümle2'>🔸Spor Kıyafetleri</h3>
        <h3 className='cocümle2'>🔸Spor Ekipmanlar</h3>
        <h3 className='cocümle2'>🔸Baskı Tişörtler</h3>
        <h3 className='cocümle2'>🔸Evcil Hayvan Ürünleri</h3>
        <h3 className='cocümle2'>🔸Kişiye Özel Hediyelik Eşyalar</h3>
        <h3 className='cocümle2'>🔸Çantalar</h3>
      </content>
      <footer>
        <h2 className='sonyazi'>Yapan Kişi : Başarcan Demirci</h2>
        <h2 className='sonyazi'>Konu : React Js Framework Yapısı</h2>
        <h3 className='sonyazi1'> "Bilginin efendisi olmak için çalışmanın uşağı olmak şarttır."</h3>
        <h3 className='sonyazi'>Bu Web Site React JS İle Yapılmıştır ...</h3>
      </footer>
    </div>
  );
}

export default App;
