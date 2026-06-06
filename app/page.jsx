"use client";

import { useState, useEffect } from "react";
import {
  Utensils,
  Trees,
  Users,
  Flame,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock3,
  Info,
  Instagram,
  Navigation,
  Search,
  CalendarHeart,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Wheat,
  EggFried,
  Sandwich,
  Coffee,
  GlassWater,
  Croissant,
  Drumstick,
  Soup,
  Menu as MenuIcon,
  X,
  Home,
} from "lucide-react";

const reserveSlides = [
  {
    key: "kahvalti",
    label: "Serpme Kahvaltı",
    title: "Organik köy kahvaltısı",
    img: "/foto/kahvaltı_yeni.png",
    hours: "09:00 – 15:00",
    duration: "Her gün",
    minPeople: "En az 2 kişi",
    desc: "Yöresel peynirler, zeyinler, tahin, pekmez, bal, tereyağı, el yapımı reçeller, zeytin salatası, sucuklu yumurta, patates kızartması, domates-salatalık-peynir tabağı ve hamur işi tabağı ile serpme kahvaltı deneyimi.",
    points: [
      "Yöresinden gelen organik ürünler",
      "Sınırsız çay dahil",
      "Bahçe veya köy odası seçeneği",
    ],
  },
  {
    key: "mangal",
    label: "Kendin Pişir, Kendin Ye",
    title: "Bahçede mangal keyfi",
    img: "/foto/mangal.jpg",
    hours: "18ç:00 – 22:00",
    duration: "Yaz Sezonu",
    minPeople: "5 kişilik servis dahil",
    desc: "Mekan kullanımı, mangal, köz ve çoban salata dahil. Etinizi kendiniz pişirin, sevdiklerinizle doğada keyifli saatler geçirin.",
    points: [
      "Mangal + köz + salata dahil",
      "5 kişiden fazlası için ek servis ücreti",
      "Rezervasyon zorunlu",
    ],
  },
  {
    key: "grup",
    label: "Özel Günler & Gruplar",
    title: "Organizasyonlarınız için",
    img: "/foto/evlilik_teklifi.jpg",
    hours: "Esnek saatler",
    duration: "Özel rezervasyon",
    minPeople: "Grup için arayın",
    desc: "Doğum günü, evlilik teklifi, yıl dönümü, iş yemeği veya sınıf buluşması. Özel günlerinizde mekanı ayırtabilir, size özel menü hazırlatabilirsiniz.",
    points: [
      "Tam mekan rezervasyonu",
      "Özel menü ve servis",
      "Detaylar için bizi arayın",
    ],
  },
];

const reviews = [
  {
    name: "Ayşe K.",
    date: "2 hafta önce",
    rating: 5,
    text: "Ankara'da bulabileceğiniz en samimi köy kahvaltısı. Yöresel ürünler gerçekten taptaze, özellikle Trabzon tereyağı ve petek bal harika. Mutlaka rezervasyon yaptırın!",
    avatar: "A",
  },
  {
    name: "Mehmet Y.",
    date: "1 ay önce",
    rating: 5,
    text: "Ailecek gittik, çocuklar parkta çok eğlendi, biz de sakin bir ortamda kahvaltımızı yaptık. Servis gayet hızlı, porsiyonlar bereketli. Kesinlikle tekrar geleceğiz.",
    avatar: "M",
  },
  {
    name: "Zeynep D.",
    date: "1 ay önce",
    rating: 5,
    text: "Semaverde çay ve katmer inanılmaz! Evlilik yıl dönümümüz için tercih ettik, mekan sahipleri çok ilgili. Herkese tavsiye ederim.",
    avatar: "Z",
  },
  {
    name: "Ali R.",
    date: "2 ay önce",
    rating: 4,
    text: "Yöresel lezzetler açısından çok zengin bir menü. Sucuklu yumurta ve menemen harikaydı. Hafta sonu biraz kalabalık oluyor, rezervasyon şart.",
    avatar: "A",
  },
  {
    name: "Fatma B.",
    date: "3 ay önce",
    rating: 5,
    text: "Ankara'nın en iyi kahvaltı mekanlarından biri kesinlikle. Organik ürünler, temiz hava, aile ortamı. Mangal konsepti için yaz sezonunu bekliyoruz!",
    avatar: "F",
  },
  {
    name: "Ozan T.",
    date: "3 ay önce",
    rating: 5,
    text: "Şehrin gürültüsünden kaçıp doğada kahvaltı yapmak isteyenler için ideal. Kuymak ve anne patatesini denemelisiniz. Fiyat/performans çok iyi.",
    avatar: "O",
  },
  {
    name: "Elif S.",
    date: "4 ay önce",
    rating: 5,
    text: "Çok güzel bir mekan, bahçe kahvaltısı tam istediğim gibi oldu. Yöresel peynir çeşitleri bayağı fazla, hepsi lezzetliydi. Teşekkürler Gahvaltı Ankara!",
    avatar: "E",
  },
];

const products = [
  {
    name: "Trabzon Tereyağı",
    price: "650₺",
    img: "/foto/tereyağı.jpeg",
    desc: "Trabzon'un enfes birinci sınıf tereyağını sizler için getirtiyoruz. Gerçekten en iyi ürünü en iyi fiyata, en iyi yerinden alıp sizlerle buluşturuyoruz.",
  },
  {
    name: "Afyon Dana Eti Sucuk",
    price: "850₺",
    img: "/foto/sucuk.PNG",
    desc: "Afyon'un en kaliteli sucuklarından birini sofranıza getiriyoruz.\n\nÜrünün kendi görselidir.",
  },
  {
    name: "Kars Taze Teker Kaşar",
    price: "650₺",
    img: "/foto/kaşar.jpg",
    desc: "Kars'ın kendine has lezzetini taşıyan taze teker kaşarımızı kahvaltı sofralarınıza getiriyoruz.",
  },
  {
    name: "Konya Bozkır Tahin",
    price: "325₺",
    img: "/foto/tahin.jpg",
    desc: "Muhteşem bir şekilde çifte kavrulmuş tahinimizin tadı damağınızda kalacak.",
  },
  {
    name: "Nevşehir Üzüm Pekmezi",
    price: "275₺",
    img: "/foto/pekmez.jpg",
    desc: "Nevşehir'in bereketli bağlarından gelen üzüm pekmezimiz doğal tadıyla sofralarınıza eşlik eder.",
  },
  {
    name: "Sivas Petek Bal",
    price: "550₺",
    img: "/foto/petek_bal.jpg",
    desc: "Sivas yöresinden gelen petek balımızı doğal aroması ve yoğun lezzetiyle sizlere sunuyoruz.",
  },
  {
    name: "Balıkesir Soğuk Sıkım Zeytinyağı",
    price: "375₺",
    img: "/foto/zeytinyağı.jpg",
    desc: "Zeytinyağımız %100 doğaldır. Kokusu yoktur, acı tat bırakmaz. 0,3 gibi bir asit oranına sahiptir.\n\nÜrünün kendi görselidir.",
  },
  {
    name: "Hatay Yöresel Peynirleri",
    price: "550₺",
    img: "/foto/peynir.jpg",
    desc: "Hatay'ın zengin peynir kültüründen seçtiğimiz yöresel peynirleri kahvaltı sofralarınıza getiriyoruz.",
  },
  {
    name: "Bitlis/Sivas Süzme Bal",
    price: "600₺",
    img: "/foto/süzme_bal.png",
    desc: "Bitlis'in en nadide balını kendi topraklarından sizin için getirtiyoruz. Sağlığınızı ve bütçenizi önemsiyoruz.",
  },
  {
    name: "Erzincan Koyun Tulum",
    price: "750₺",
    img: "/foto/tulum.jpg",
    desc: "Erzincan yöresinin güçlü aromalı koyun tulum peynirini, kahvaltınızın en özel lezzetlerinden biri olarak sunuyoruz.",
  },
  {
    name: "Kars Çeçil Peyniri",
    price: "450₺",
    img: "/foto/çeçil.jpg",
    desc: "Kars'tan gelen tel tel ayrılan çeçil peyniri, kahvaltı sofralarınıza yöresel bir lezzet katar.",
  },
  {
    name: "Gemlik Siyah/Yeşil Zeytin",
    price: "250₺ – 350₺",
    img: "/foto/zeytin.jpg",
    desc: "Gemlik Siyah Jumbo Gold Zeytin ve Gemlik Yeşil Çizik Gold Zeytin çeşitlerimiz stok durumuna göre değişiklik gösterebilir. Bizden her zaman bilgi alabilirsiniz.",
  },
  {
    name: "Gaziantep Salça (Domates/Biber)",
    price: "175₺ – 225₺",
    img: "/foto/salça.jpg",
    desc: "Gaziantep yöresinden gelen domates ve biber salçalarımız yemeklerinize doğal ve yoğun bir lezzet katar.",
  },
  {
    name: "Gaziantep Çam Kozalak Özü",
    price: "350₺",
    img: "/foto/kozalak.jpg",
    desc: "Bağışıklık sistemini güçlendirir, solunum yollarını destekler.",
  },
  {
    name: "Gaziantep Keçiboynuzu Özü",
    price: "350₺",
    img: "/foto/keçiboynuzu_pekmezi.jpg",
    desc: "Öksürüğe birebir olması için, yoğun talep üzerine getirtiyoruz.",
  },
  {
    name: "Gaziantep Karadut Özü",
    price: "350₺",
    img: "/foto/karadut_özü.jpg",
    desc: "Hem lezzeti hem de bağışıklık sistemimize olan yararı ile vazgeçemeyeceğiniz bir tat olacak.",
  },
  {
    name: "Gaziantep Baharat Çeşitleri",
    price: "100₺ / paket",
    img: "/foto/baharat.jpg",
    desc: "100 liralık paketler halinde satılmaktadır.\n\nTatlı/Acı Pul Biber, Karabiber, İsot, Sumak, Nane, Kekik, Köfte Harcı, Tatlı/Acı Toz Biber ve Kimyon çeşitleri bulunur.",
  },
];

const menuCategories = [
  {
    title: "Geleneksel Favoriler",
    subtitle: "Sofranızın baş tacı",
    icon: Soup,
    cover: "/foto/kahvaltı_yeni.png",
    highlight: "Serpme Kahvaltı",
    items: [
      {
        name: "Serpme Kahvaltı",
        desc: "09:00–15:00 arası · en az 2 kişi · sınırsız çay dahil",
        star: true,
      },
      { name: "Yeşillik ve Peynir Tabağı" },
      { name: "Hamur İşi Tabağı", desc: "4 çeşit" },
      { name: "Anne Patatesi", desc: "sade veya karışık(biberli soslu)" },
      { name: "Kuymak" },
    ],
  },
  {
    title: "Menemen",
    subtitle: "Tavada, cızır cızır",
    icon: EggFried,
    cover: "/foto/kavurmalı_menemen.jpg",
    items: [
      { name: "Sade Menemen" },
      { name: "Sucuklu Menemen" },
      { name: "Kıymalı Menemen" },
      { name: "Kavurmalı Menemen" },
    ],
  },
  {
    title: "Kendin Pişir, Kendin Ye",
    subtitle: "Mangal keyfi, aile buluşması",
    icon: Flame,
    cover: "/foto/mangal.jpg",
    badge: "YAZ SEZONU",
    items: [
      {
        name: "Mangal",
        desc: "18:00–22:00 · 5 kişilik servis, mangal ve köz dahil",
        star: true,
      },
      { name: "Çoban Salata" },
      { name: "Demlikte Çay" },
      { name: "Semaverde Çay" },
    ],
  },
  {
    title: "Yumurta",
    subtitle: "Sahanda, köy yumurtasıyla",
    icon: EggFried,
    cover: "/foto/tereyağlı_yumurta.png",
    items: [
      { name: "Sahanda Tereyağlı Yumurta" },
      { name: "Sahanda Sucuk" },
      { name: "Sucuklu Yumurta" },
      { name: "Kıymalı Yumurta" },
      { name: "Kavurmalı Yumurta" },
    ],
  },
  {
    title: "Hamur İşleri",
    subtitle: "El yapımı, sıcak sıcak",
    icon: Croissant,
    cover: "/foto/katmer.png",
    items: [
      { name: "Yağlı / Yağsız Bazlama" },
      { name: "Gözleme", desc: "sade veya peynirli" },
      { name: "Sigara Böreği", desc: "6'lı porsiyon · patatesli" },
      { name: "Pişi", desc: "6'lı porsiyon" },
    ],
  },
  {
    title: "Tost",
    subtitle: "Ekmek ya da bazlama",
    icon: Sandwich,
    cover: "/foto/karışık_tost.jpg",
    note: "Tost çeşitlerimiz ekmek ya da bazlama ile yapılabilmektedir.",
    items: [
      { name: "Kaşarlı Tost" },
      { name: "Sucuklu Tost" },
      { name: "Karışık Tost", desc: "sucuklu & kaşarlı" },
      { name: "Kavurmalı Kaşarlı Tost" },
    ],
  },
  {
    title: "Sıcak İçecekler",
    subtitle: "Semaverden süzülen sıcaklık",
    icon: Coffee,
    cover: "/foto/türk_kahvesi.jpg",
    items: [
      { name: "Bardakta Çay" },
      { name: "Türk Kahvesi / Dibek Kahvesi" },
      { name: "Duble Türk Kahvesi / Dibek Kahvesi" },
      { name: "Sütlü Türk Kahvesi" },
      { name: "3'ü 1 Arada / 2'si 1 Arada" },
      { name: "Sıcak Çikolata" },
      { name: "Sahlep" },
    ],
  },
  {
    title: "Soğuk İçecekler",
    subtitle: "Buz gibi, ferahlatıcı",
    icon: GlassWater,
    cover: "/foto/ayran.jpg",
    items: [
      { name: "Su" },
      { name: "Açık Ayran" },
      { name: "Sıkma Portakal Suyu" },
      { name: "Churchill" },
      { name: "Şişe Gazoz" },
      { name: "Teneke İçeçek Çeşitleri" },
      { name: "Kutu Süt Çeşitleri" },
      { name: "Sade / Meyveli Soda" },
    ],
  },
];

const events = [
  {
    title: "Öğretmenler Buluşması",
    date: "16 Haziran 2023",
    img: "/foto/öğretmen.jpg",
  },
  {
    title: "Evlilik Teklifi",
    date: "17 Haziran 2023",
    img: "/foto/evlilik_teklifi.jpg",
  },
  {
    title: "İlk Mangal Partisi",
    date: "8 Temmuz 2023",
    img: "/foto/mangal_partisi.jpg",
  },
  {
    title: "Doğum Günü Partisi",
    date: "9 Temmuz 2023",
    img: "/foto/doğum_günü.jpg",
  },
  {
    title: "Evlilik Yıl Dönümü",
    date: "20 Temmuz 2023",
    img: "/foto/evlilik_yıldönümü.jpg",
  },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=gahvaltiankara+Kızılca+Mahallesi+Mamak+Ankara";

export default function Page() {
  const [visibleCount, setVisibleCount] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisibleCount(w <= 900 ? 1 : w <= 1100 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const [reviewIdx, setReviewIdx] = useState(0);
  const maxIdx = Math.max(0, reviews.length - visibleCount);

  useEffect(() => {
    const t = setInterval(() => {
      setReviewIdx((i) => (i >= maxIdx ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(t);
  }, [maxIdx]);

  const prevReview = () => setReviewIdx((i) => (i <= 0 ? maxIdx : i - 1));
  const nextReview = () => setReviewIdx((i) => (i >= maxIdx ? 0 : i + 1));

  const [eventIdx, setEventIdx] = useState(0);
  const eventVisible = visibleCount;
  const eventMax = Math.max(0, events.length - eventVisible);
  useEffect(() => {
    const t = setInterval(() => {
      setEventIdx((i) => (i >= eventMax ? 0 : i + 1));
    }, 4500);
    return () => clearInterval(t);
  }, [eventMax]);
  const prevEvent = () => setEventIdx((i) => (i <= 0 ? eventMax : i - 1));
  const nextEvent = () => setEventIdx((i) => (i >= eventMax ? 0 : i + 1));

  const [form, setForm] = useState({
    name: "",
    phone: "",
    people: "",
    datetime: "",
    type: "Kahvaltı",
    message: "",
  });
  const onField = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleReserve = (e) => {
    e.preventDefault();
    const lines = [
      "*Yeni Rezervasyon Talebi*",
      "",
      `*Ad Soyad:* ${form.name}`,
      `*Telefon:* ${form.phone}`,
      `*Kişi Sayısı:* ${form.people}`,
      `*Tarih & Saat:* ${form.datetime}`,
      `*Organizasyon:* ${form.type}`,
      form.message ? `*Mesaj:* ${form.message}` : "",
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/905336545047?text=${text}`, "_blank");
  };

  const [reserveIdx, setReserveIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setReserveIdx((i) => (i + 1) % reserveSlides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);
  const closeNav = () => setNavOpen(false);

  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const avgRating = (
    reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          <span className="mark">
            <img src="/foto/logo_yeni.png" alt="" />
          </span>
          <span className="nav-logo-text">
            <span className="n1">Gahvaltı</span>
            <span className="n2">ankara köy sofrası</span>
          </span>
        </div>
        <div className="nav-menu">
          <a href="#home" className="active">
            Ana Sayfa
          </a>
          <a href="#about">Hakkımızda</a>
          <a href="#products">Ürünler</a>
          <a href="#menu">Menü</a>
          <a href="#events">Organizasyonlar</a>
          <a href="#reserve">Rezervasyon</a>
          <a href="#contact">İletişim</a>
        </div>
        <div className="nav-right">
          <a href="tel:05386787938" className="nav-cta-desktop">
            <Phone size={14} /> Ara
          </a>
          <button
            className="nav-toggle"
            onClick={() => setNavOpen((v) => !v)}
            aria-label={navOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {navOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={"nav-drawer" + (navOpen ? " open" : "")}
        onClick={closeNav}
      >
        <div className="nav-drawer-inner" onClick={(e) => e.stopPropagation()}>
          <a href="#home" onClick={closeNav}>
            Ana Sayfa
          </a>
          <a href="#about" onClick={closeNav}>
            Hakkımızda
          </a>
          <a href="#products" onClick={closeNav}>
            Ürünler
          </a>
          <a href="#menu" onClick={closeNav}>
            Menü
          </a>
          <a href="#events" onClick={closeNav}>
            Organizasyonlar
          </a>
          <a href="#reserve" onClick={closeNav}>
            Rezervasyon
          </a>
          <a href="#contact" onClick={closeNav}>
            İletişim
          </a>
          <div className="nav-drawer-cta">
            <a
              href="tel:05386787938"
              className="btn btn-primary"
              onClick={closeNav}
            >
              <Phone size={16} /> 0538 678 7938
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-copy">
          <span className="tag hero-tag">
            🌾 Kendi Bahçemizde, Kendi Ailemizle
          </span>
          <h1>
            Gerçek bir köyde,
            <br />
            yöresel kahvaltı deneyimi
          </h1>
          <p className="lead">
            Ankara'da ilk ve tek, yöreseninden gelen ürünlerle organik bir köy
            kahvaltısı...
            <br />
            Sınırsız çay, yöresel peynirler, taze bazlama — tam bir aile sabahı.
          </p>
          <div className="ctas">
            <a href="#reserve" className="btn btn-primary">
              Yerimizi Ayıralım
            </a>
            <a href="#menu" className="btn btn-outline">
              Menüyü Keşfedelim
            </a>
          </div>
          <div className="stats">
            <div className="stat">
              <b>1000+</b>
              <span>Mutlu Misafir</span>
            </div>
            <div className="stat">
              <b>100%</b>
              <span>Organik Ürünler</span>
            </div>
            <div className="stat">
              <b>09–15</b>
              <span>Her Gün Açık</span>
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img
            src={encodeURI("/foto/kahvaltı_yeni.png")}
            alt="Serpme kahvaltı"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="about-img">
          <img src={encodeURI("/foto/hakkımızda.jpg")} alt="Hakkımızda" />
        </div>
        <div>
          <span className="eyebrow">— Hakkımızda</span>
          <h2>Aile sofrasından, sizin sofranıza</h2>
          <p>
            Büyük bir çoğunluğu yöresinden sofralarımıza gelen ürünleri
            kullanarak ve çok emek vererek kendi bahçesinde bu küçük işletmeyi
            açan bir aileyiz. Sizlere özlediğiniz köy hayatında unutamayacağınız
            samimi, sıcak ve sağlıklı bir köy kahvaltısını sunmak ve
            memnuniyetinize sahip olmak için çalışıyoruz.
          </p>
          <p>
            Ankara şehir merkezine en yakın köylerden birinde, köy odalarında,
            kış bahçelerinde veya bahçede ağaçların arasında kahvaltı, yöresel
            lezzetler ve yöresel köy pazarında organik ürünleri tadına bakarak
            alma fırsatı sunuyoruz.
          </p>
          <p className="italic">
            Aile, arkadaş, iş toplantıları, iş yemekleri… Yöresel gıdaya hasret
            herkesi bekliyoruz.
          </p>
          <a href="#contact" className="btn btn-dark" style={{ marginTop: 12 }}>
            Bizimle İletişime Geçin
          </a>
        </div>
      </section>

      {/* WHY + STORY — Neden Biz · Bir günümüz (yan yana) */}
      <section className="why-story">
        <div className="ws-col">
          <div className="ws-head">
            <span className="eyebrow">— Neden Biz</span>
            <h2>Neden aileler bizi seçiyor?</h2>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon olive" aria-hidden="true">
                🍯
              </div>
              <div className="why-body">
                <h3>Lezzet</h3>
                <p>
                  Türkiye'nin farklı yerlerinden gelen doğal ve lezzetli ürünler
                  ile sizlere sağlıklı bir kahvaltı sunuyoruz.
                </p>
              </div>
            </div>
            <div className="why-card">
              <div className="why-icon terra" aria-hidden="true">
                🌳
              </div>
              <div className="why-body">
                <h3>Çevre</h3>
                <p>
                  Sessiz, sakin, huzur verici, minik dostlarımızla ve ağaçların
                  arasında unutamayacağınız bir köy mekanı sizleri bekliyor.
                </p>
              </div>
            </div>
            <div className="why-card">
              <div className="why-icon mustard" aria-hidden="true">
                🛝
              </div>
              <div className="why-body">
                <h3>Ortam</h3>
                <p>
                  Çocuklarınız parkımızda eğlenirken sizin de güzel vakit
                  geçirebileceğiniz, rahat ve doğal bir aile ortamı ile sizleri
                  karşılıyoruz.
                </p>
              </div>
            </div>
            <div className="why-card">
              <div className="why-icon forest" aria-hidden="true">
                🔥
              </div>
              <div className="why-body">
                <h3>Size Özel</h3>
                <p>
                  Kendin pişir kendin ye konseptimiz sayesinde, sizlere
                  sevdikleriniz ile gelip mangal keyfi yapma imkanı sağlıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ws-col">
          <div className="ws-head">
            <span className="eyebrow">✦ 2023'TEN BERİ ✦</span>
            <h2 className="story-h2">Bir köy sabahı, bir aile sofrası</h2>
            <p className="ws-lead">Size bir günümüzü anlatalım.</p>
          </div>
          <div className="story-list">
            <div className="story-item">
              <div className="story-left">
                <span className="story-time">07.30</span>
                <span className="story-line" />
              </div>
              <div className="story-body">
                <h3>Ocak yanar, tereyağ kavrulur</h3>
                <p>
                  Komşu köyden gelen taze sütle kahvaltı hazırlığı başlar.
                  Bazlama hamuru tezgâhta yoğrulur.
                </p>
              </div>
            </div>
            <div className="story-item">
              <div className="story-left">
                <span className="story-time">09.00</span>
                <span className="story-line" />
              </div>
              <div className="story-body">
                <h3>Kapı açılır, aileler gelir</h3>
                <p>
                  Çocuklar bahçeye, kedilerin yanına koşar. Büyükler bahçe
                  masasına ya da köy odasına yerleşir.
                </p>
              </div>
            </div>
            <div className="story-item">
              <div className="story-left">
                <span className="story-time">10.30</span>
                <span className="story-line" />
              </div>
              <div className="story-body">
                <h3>Sofra kurulur</h3>
                <p>
                  Yöresel peynirler, reçeller, sıcak bazlama, menemen, sınırsız
                  çay. Acele yok.
                </p>
              </div>
            </div>
            <div className="story-item story-item-last">
              <div className="story-left">
                <span className="story-time">13.00</span>
              </div>
              <div className="story-body">
                <h3>Köy pazarından alışveriş yapılır</h3>
                <p>
                  Beğendiğiniz peynirden, baldan, zeytinyağından yanınızda
                  götürün.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="products">
        <div className="section-head">
          <span className="eyebrow">— Yöresinden gelen ürünlerimiz</span>
          <h2>Türkiye'nin dört bir yanından sofranıza</h2>
          <p>
            Sağlığınızı kendi sağlığımız gibi düşünerek çıktığımız bu yolda,
            %100 doğal organik besinleri yörelerinden temin ederek kahvaltımızda
            sizlere sunuyoruz.
            <br />
            <br />
            Beğendiğiniz ürünlerden hemen sipariş verebilir, en kaliteli ürüne
            bizimle ulaşabilirsiniz.
            <br />
            <br />
            (Görseller temsilidir, değişiklik gösterebilir.)
          </p>
        </div>
        <div className="prod-grid">
          {products.map((p) => (
            <div className="card" key={p.name} tabIndex={0}>
              <div
                className="card-img"
                style={{ backgroundImage: `url(${encodeURI(p.img)})` }}
              />
              <div className="product-desc">{p.desc}</div>
              <div className="card-body">
                <h3>{p.name}</h3>
                <span className="price">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PACK — Aile Paketi (şimdilik gizli) */}
      {false && (
        <section className="pack">
          <div className="pack-inner">
            <span className="eyebrow">— Aile Menüsü</span>
            <h2>2 büyük + 2 çocuk</h2>
            <p className="pack-lead">
              Serpme kahvaltı + çocuklara özel süt, meyve, peynirli bazlama —
              doyasıya paylaşın.
            </p>
            <div className="pack-card">
              <div className="pack-card-head">
                <h3>Aile Paketi</h3>
                <span className="price">1.200₺</span>
              </div>
              <ul className="pack-list">
                <li>
                  <span className="tick">✓</span> Serpme kahvaltı (2 kişi)
                </li>
                <li>
                  <span className="tick">✓</span> Çocuk tabakları: süt, peynir,
                  meyve
                </li>
                <li>
                  <span className="tick">✓</span> Sınırsız çay + sıcak süt
                </li>
                <li>
                  <span className="tick">✓</span> Oyun parkı, güvenli bahçe
                </li>
              </ul>
            </div>
            <div className="pack-cta">
              <a href="#reserve" className="btn btn-primary">
                Ailemiz için yer ayırt
              </a>
            </div>
          </div>
        </section>
      )}

      {/* MENU */}
      <section id="menu" className="menu">
        <div className="section-head">
          <span className="eyebrow">— Menümüz</span>
          <h2>Soframızdaki lezzetleri keşfedin</h2>
          <p>
            Ankara'da gerçek köy kahvaltısı ve organik ürün pazarının olduğunu
            biliyor muydunuz? Bilmiyorsanız tam yerine geldiniz.
          </p>
        </div>
        <div className="menu-grid">
          {menuCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <article className="menu-card" key={cat.title}>
                <div
                  className="menu-cover"
                  style={{ backgroundImage: `url(${encodeURI(cat.cover)})` }}
                >
                  <div className="menu-cover-overlay" />
                  <div className="menu-cover-icon">
                    <Icon size={22} />
                  </div>
                  {cat.badge && <span className="menu-badge">{cat.badge}</span>}
                </div>
                <div className="menu-card-body">
                  <div className="menu-card-head">
                    <h3>{cat.title}</h3>
                    <span className="menu-subtitle">{cat.subtitle}</span>
                  </div>
                  {cat.note && (
                    <div className="menu-note">
                      <Info size={14} /> {cat.note}
                    </div>
                  )}
                  <ul className="menu-list">
                    {cat.items.map((item) => (
                      <li
                        key={item.name}
                        className={item.star ? "featured" : ""}
                      >
                        <span className="dot" />
                        <div className="item-text">
                          <span className="item-name">
                            {item.name}
                            {item.star && (
                              <Star size={12} fill="#c9622a" color="#c9622a" />
                            )}
                          </span>
                          {item.desc && (
                            <span className="item-desc">{item.desc}</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="events">
        <div className="section-head">
          <span className="eyebrow">— Organizasyonlar</span>
          <h2>Bizde gerçekleşen özel anlar</h2>
          <p>
            Özel günlerinizde bizi tercih ettiğiniz için teşekkür ederiz.
            Gelecekteki organizasyonlarımıza da davetli olduğunuzu bilmenizi
            isteriz.
          </p>
        </div>
        <div className="events-carousel">
          <button
            className="rv-nav prev"
            onClick={prevEvent}
            aria-label="Önceki"
          >
            <ChevronLeft size={22} />
          </button>
          <div className="rv-viewport">
            <div
              className="events-track"
              style={{
                transform: `translateX(calc(-${eventIdx} * (100% / ${eventVisible} + 7px)))`,
              }}
            >
              {events.map((e) => (
                <div className="event-card" key={e.title}>
                  <div
                    className="event-img"
                    style={{ backgroundImage: `url(${encodeURI(e.img)})` }}
                  >
                    <div className="event-img-overlay">
                      <span className="event-date-chip">{e.date}</span>
                    </div>
                  </div>
                  <div className="event-body">
                    <h3>{e.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="rv-nav next"
            onClick={nextEvent}
            aria-label="Sonraki"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="rv-dots">
          {Array.from({ length: eventMax + 1 }).map((_, i) => (
            <button
              key={i}
              className={"rv-dot" + (i === eventIdx ? " active" : "")}
              onClick={() => setEventIdx(i)}
              aria-label={`Slayt ${i + 1}`}
            />
          ))}
        </div>

        <div className="event-cta-banner">
          <div>
            <CalendarHeart size={28} />
            <div>
              <h3>Grup Rezervasyonu</h3>
              <p>
                Özel günleriniz için mekanı ayırtın. Detaylar için bizi arayın.
              </p>
            </div>
          </div>
          <a href="tel:05386787938" className="btn btn-primary">
            0538 678 7938
          </a>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews">
        <div className="section-head">
          <span className="eyebrow">— Google Yorumları</span>
          <h2>Misafirlerimiz ne diyor?</h2>
          <div className="rating-summary">
            <span className="big">{avgRating}</span>
            <div>
              <div className="stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={18} fill="#f5b301" color="#f5b301" />
                ))}
              </div>
              <span className="count">{reviews.length}+ Google yorumu</span>
            </div>
          </div>
        </div>

        <div className="reviews-carousel">
          <button
            className="rv-nav prev"
            onClick={prevReview}
            aria-label="Önceki"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="rv-viewport">
            <div
              className="rv-track"
              style={{
                transform: `translateX(calc(-${reviewIdx} * (100% / ${visibleCount} + 8px)))`,
              }}
            >
              {reviews.map((r, i) => (
                <article className="rv-card" key={i}>
                  <Quote size={28} className="rv-quote" />
                  <div className="rv-stars">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star key={k} size={14} fill="#f5b301" color="#f5b301" />
                    ))}
                  </div>
                  <p className="rv-text">{r.text}</p>
                  <div className="rv-author">
                    <div className="rv-avatar">{r.avatar}</div>
                    <div>
                      <div className="rv-name">{r.name}</div>
                      <div className="rv-date">{r.date}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            className="rv-nav next"
            onClick={nextReview}
            aria-label="Sonraki"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="rv-dots">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button
              key={i}
              className={"rv-dot" + (i === reviewIdx ? " active" : "")}
              onClick={() => setReviewIdx(i)}
              aria-label={`Slayt ${i + 1}`}
            />
          ))}
        </div>

        <div className="rv-cta">
          <a
            href="https://www.google.com/maps/search/?api=1&query=gahvaltiankara"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            Tüm yorumları Google'da gör
          </a>
        </div>
      </section>

      {/* RESERVE */}
      <section id="reserve" className="reserve">
        <div className="reserve-left">
          <span className="eyebrow">— Rezervasyon</span>
          <h2>Hemen yerinizi ayıralım</h2>
          <p className="lead">
            Siz de bizim aramıza katılmak ve bu güzel mekanın tadını
            sevdiklerinizle çıkarmak isterseniz bizimle iletişime
            geçebilirsiniz.
          </p>

          <div className="reserve-tabs">
            {reserveSlides.map((s, i) => (
              <button
                key={s.key}
                className={"reserve-tab" + (i === reserveIdx ? " active" : "")}
                onClick={() => setReserveIdx(i)}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div className="reserve-slider">
            <div
              className="reserve-track"
              style={{ transform: `translateX(-${reserveIdx * 100}%)` }}
            >
              {reserveSlides.map((s) => (
                <div className="reserve-slide" key={s.key}>
                  <div
                    className="reserve-img"
                    style={{ backgroundImage: `url(${encodeURI(s.img)})` }}
                  >
                    <div className="reserve-img-overlay">
                      <h3>{s.title}</h3>
                      <span className="reserve-hours">
                        <Clock3 size={14} /> {s.hours} · {s.duration}
                      </span>
                    </div>
                  </div>
                  <div className="reserve-meta">
                    <div className="reserve-chip">
                      <Users size={14} /> {s.minPeople}
                    </div>
                    <p>{s.desc}</p>
                    <ul>
                      {s.points.map((p) => (
                        <li key={p}>
                          <span className="tick">✓</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="note-box">
            <Info size={20} />
            <p>Grup rezervasyonları için lütfen bizimle iletişime geçiniz.</p>
          </div>
        </div>

        <form className="form-card" onSubmit={handleReserve}>
          <h3>Rezervasyon Formu</h3>
          <div className="field">
            <label>İsim Soyisim</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={onField("name")}
            />
          </div>
          <div className="field-row">
            <div className="field">
              <label>Telefon</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={onField("phone")}
              />
            </div>
            <div className="field">
              <label>Kişi Sayısı</label>
              <input
                type="number"
                min="1"
                required
                value={form.people}
                onChange={onField("people")}
              />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label>Tarih & Saat</label>
              <input
                type="datetime-local"
                required
                value={form.datetime}
                onChange={onField("datetime")}
              />
            </div>
            <div className="field">
              <label>Organizasyon Tipi</label>
              <select value={form.type} onChange={onField("type")}>
                <option>Kahvaltı</option>
                <option>Mangal</option>
                <option>Diğer</option>
              </select>
            </div>
          </div>
          <div className="field">
            <label>Mesaj</label>
            <textarea
              rows={4}
              placeholder="Özel bir istediğiniz varsa buradan belirtebilirsiniz."
              value={form.message}
              onChange={onField("message")}
            />
          </div>
          <button type="submit" className="wa-btn">
            <Instagram size={16} style={{ display: "none" }} />
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19.05 4.91A10 10 0 0 0 12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.47 1.34 4.98L2 22l5.19-1.36a9.97 9.97 0 0 0 4.84 1.23h.01c5.52 0 10-4.48 10-10a9.95 9.95 0 0 0-2.99-6.96zM12.04 20.13h-.01a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.08.81.82-3-.19-.31a8.13 8.13 0 0 1-1.26-4.36c0-4.5 3.66-8.15 8.16-8.15 2.18 0 4.23.85 5.77 2.39a8.09 8.09 0 0 1 2.39 5.77c0 4.5-3.66 8.15-8.14 8.15zm4.47-6.11c-.24-.12-1.45-.72-1.68-.8-.23-.08-.39-.12-.55.12-.16.24-.64.8-.78.96-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.97-1.22-.73-.65-1.22-1.45-1.37-1.69-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.83-.84 2.02 0 1.19.86 2.34.98 2.5.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.45-.59 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.1-.22-.16-.46-.28z" />
            </svg>
            WhatsApp ile Gönder
          </button>
          <span className="wa-hint">
            Form bilgileri WhatsApp üzerinden 0533 654 5047'ye iletilir.
          </span>
        </form>
      </section>

      {/* LOCATION */}
      <section id="contact" className="location">
        <div className="section-head">
          <span className="eyebrow">— İletişim</span>
          <h2>Bizi Ankara'da bulun</h2>
          <p>
            Mamak, Kızılca Mahallesi'nde şehre yakın bir köy ortamında sizi
            bekliyoruz.
          </p>
        </div>
        <div className="location-body">
          <iframe
            className="map"
            src="https://www.google.com/maps?q=gahvaltiankara+Kızılca+Mahallesi+Mamak+Ankara&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Gahvaltı Ankara konumu"
          />
          <div className="loc-card">
            <h3>İletişim</h3>
            <div className="loc-row">
              <MapPin size={20} />
              <div>
                <div className="label">Adres</div>
                <div className="value">
                  Kızılca Mahallesi Günay Caddesi No:13, Mamak / ANKARA
                </div>
              </div>
            </div>
            <div className="loc-row">
              <Phone size={20} />
              <div>
                <div className="label">Telefon</div>
                <div className="value">
                  <strong>0538 678 7938</strong>
                </div>
              </div>
            </div>
            <div className="loc-row">
              <Mail size={20} />
              <div>
                <div className="label">E-posta</div>
                <div className="value">gahvaltiankara@gmail.com</div>
              </div>
            </div>
            <div className="loc-row">
              <Clock3 size={20} />
              <div>
                <div className="label">Çalışma Saatleri</div>
                <div className="value">Her gün · 09:00 – 15:00</div>
              </div>
            </div>
            <hr />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <Navigation size={16} /> Google Maps'te Aç
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="footer-col">
            <div className="brand">
              <img src="/foto/logo_yeni.png" alt="" />
              <span>Gahvaltı</span>
            </div>
            <p>
              Yöresinden gelen organik ürünlerle hazırlanan, Ankara'nın köy
              kahvaltısı. Mamak, Kızılca Mahallesi'nde hizmet veriyoruz.
            </p>
            <a
              className="insta"
              href="https://www.instagram.com/gahvaltiankara06/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={18} /> @gahvaltiankara06
            </a>
          </div>
          <div className="footer-col">
            <h4>— Sayfalar</h4>
            <a href="#home">Ana Sayfa</a>
            <a href="#about">Hakkımızda</a>
            <a href="#products">Ürünler</a>
            <a href="#menu">Menü</a>
            <a href="#events">Organizasyonlar</a>
          </div>
          <div className="footer-col">
            <h4>— İletişim</h4>
            <p>Kızılca Mah. Günay Cad. No:13</p>
            <p>Mamak / ANKARA</p>
            <p>0538 678 7938</p>
            <p>gahvaltiankara@gmail.com</p>
          </div>
          <div className="footer-col">
            <h4>— Çalışma Saatleri</h4>
            <p className="strong">Serpme Kahvaltı</p>
            <p>Her gün · 09:00 – 15:00</p>
            <p className="strong">Mangal (Yaz Sezonu)</p>
            <p>18:00 – 22:00</p>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bot">
          <span>© 2023 Gahvaltı Ankara. Tüm hakları saklıdır.</span>
          <span>www.gahvaltiankara.com.tr</span>
        </div>
      </footer>

      <button
        className={"back-to-top" + (showTop ? " show" : "")}
        onClick={scrollTop}
        aria-label="Sayfanın başına dön"
      >
        <Home size={20} />
      </button>
    </>
  );
}
