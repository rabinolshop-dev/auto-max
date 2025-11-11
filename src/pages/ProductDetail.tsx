import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, Package, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductSchema from "@/components/ProductSchema";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

import p1 from "@/assets/p1_front.png";
import p1back from "@/assets/p1_back.png";
import p2 from "@/assets/p2_front.png";
import p2back from "@/assets/p2_back.png";
import p3 from "@/assets/p3_front.png";
import p3back from "@/assets/p3_back.png";
import p4 from "@/assets/p4_front.png";
import p4back from "@/assets/p4_back.png";
import p5 from "@/assets/p5_front.png";
import p5back from "@/assets/p5_back.png";
import p6 from "@/assets/p6_front.png";
import p6back from "@/assets/p6_back.png";
import p7 from "@/assets/p7_front.png";
import p7back from "@/assets/p7_back.png";
import p8 from "@/assets/p8_front.png";
import p8back from "@/assets/p8_back.png";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    title: "RABINOL Motor Engine Oil 0W-20 – High Performance 4L",
    image: p1,
    imageBack: p1back,
    description:
      "RABINOL OW-20 Motor Oil – 4 litr, yuqori sifatli, Germaniyada ishlab chiqarilgan motor moyi. Har turdagi benzinli avtomobillar, turbo yoki tabiiy aspiratsiyali dvigatellar uchun mukammal ishlashni ta'minlaydi.",
    fullDescription: `RABINOL OW-20 Motor Engine Oil – 4L, High Performance

RABINOL OW-20 yuqori samarali motor moyi bo'lib, 100% eng yuqori sifatli birinchi bosim moydan ishlab chiqarilgan. Zamonaviy qo'shimchalar texnologiyasi bilan jihozlangan bo'lib, dvigatelga maksimal ishlash imkonini beradi va har qanday avtomobil dvigatelida ishlaydi.

Xususiyatlari va afzalliklari:

• Yuqori sifatli multigrade motor moyi
• Eskirish va korroziyaga qarshi mukammal himoya
• Oxidatsiyaga yuqori chidamlilik
• Sludge va depozitlardan himoya
• Tabiiy aspiratsiyali va turbo zaryadlangan dvigatellar uchun mos
• Evropa, Yaponiya va Amerika avtomobil ishlab chiqaruvchilari standartlariga mos

Tavsiya etilgan foydalanish:
RABINOL OW-20 APl.SP motor moyi barcha turdagi benzinli yo'lovchi va tijorat avtomobillari uchun tavsiya etiladi. Shu jumladan, SP va undan oldingi servis kategoriyalarini talab qiladigan dvigatellar uchun ham mos.

Ogohlantirish:
• Teriga va ko'zga tegmasligi kerak, ayniqsa ishlatilgan moy bilan
• Ishdan keyin terini yaxshilab yuvish
• Kirlangan kiyimlarni yuvib qayta ishlatish
• Bolalar qo'lidan uzoqda saqlash

Sotib olish: rabinol.uz`
  },
  {
    id: 2,
    title: "RABINOL Special Tec DX1 5W-30 Motor Oil SN – High Performance 4L",
    image: p2,
    imageBack: p2back,
    description:
      "RABINOL Special Tec DX1 5W-30 – yuqori samarali, 100% sintetik motor moyi, Germaniyada ishlab chiqarilgan. Tabiiy aspiratsiyali va turbo dvigatellar uchun ideal.",
    fullDescription: `RABINOL Special Tec DX1 5W-30 Motor Engine Oil – 4L, High Performance

RABINOL Special Tec DX1 5W-30 yuqori samarali motor moyi bo'lib, to'liq sintetik, eng yuqori sifatli birinchi bosim moydan ishlab chiqarilgan. Zamonaviy qo'shimchalar texnologiyasi dvigatelga maksimal ishlash imkonini beradi va har turdagi avtomobil dvigatellarida ishlatilishi mumkin.

Xususiyatlari va afzalliklari:

• Yuqori sifatli multigrade motor moyi
• Sludge va depozitlarni kamaytiradi
• Eskirish va korroziyaga qarshi mukammal himoya
• Oxidatsiyaga yuqori chidamlilik
• Tabiiy aspiratsiyali va turbo zaryadlangan dvigatellar uchun mos
• Dexos va API SP standartlariga mos

Tavsiya etilgan foydalanish:
RABINOL Special Tec DX1 5W-30 barcha turdagi benzinli yo'lovchi va tijorat avtomobillari uchun tavsiya etiladi. Shu jumladan, SP va undan oldingi servis kategoriyalarini talab qiladigan dvigatellar uchun ham mos.

Ogohlantirish:
• Teriga va ko'zga tegmasligi kerak, ayniqsa ishlatilgan moy bilan
• Ishdan keyin terini yaxshilab yuvish
• Kirlangan kiyimlarni yuvib qayta ishlatish
• Bolalar qo'lidan uzoqda saqlash

Sotib olish: rabinol.uz`
  },
  {
    id: 3,
    title: "RABINOL Special Tec DX1 5W-30 Motor Oil – High Performance 4L",
    image: p3,
    imageBack: p3back,
    description:
      "RABINOL Special Tec DX1 5W-30 – yuqori samarali, 100% sintetik motor moyi, Germaniyada ishlab chiqarilgan. Tabiiy aspiratsiyali va turbo dvigatellar uchun ideal.",
    fullDescription: `RABINOL Special Tec DX1 5W-30 Motor Engine Oil – 4L, High Performance

RABINOL Special Tec DX1 5W-30 yuqori samarali motor moyi bo'lib, to'liq sintetik, eng yuqori sifatli birinchi bosim moydan ishlab chiqarilgan. Zamonaviy qo'shimchalar texnologiyasi dvigatelga maksimal ishlash imkonini beradi va har turdagi avtomobil dvigatellarida ishlatilishi mumkin.

Xususiyatlari va afzalliklari:

• Yuqori sifatli multigrade motor moyi
• Sludge va depozitlarni kamaytiradi
• Eskirish va korroziyaga qarshi mukammal himoya
• Oxidatsiyaga yuqori chidamlilik
• Tabiiy aspiratsiyali va turbo zaryadlangan dvigatellar uchun mos
• Dexos va API SP standartlariga mos

Tavsiya etilgan foydalanish:
RABINOL Special Tec DX1 5W-30 barcha turdagi benzinli yo'lovchi va tijorat avtomobillari uchun tavsiya etiladi.

Ogohlantirish:
• Teriga va ko'zga tegmasligi kerak, ayniqsa ishlatilgan moy bilan
• Ishdan keyin terini yaxshilab yuvish
• Kirlangan kiyimlarni yuvib qayta ishlatish
• Bolalar qo'lidan uzoqda saqlash

Sotib olish: rabinol.uz`
  },
  {
    id: 4,
    title: "RABINOL Special Tec ATF DEXRON-VI – Automatic Transmission Oil 6L",
    image: p4,
    imageBack: p4back,
    description:
      "RABINOL ATF DEXRON-VI – yuqori sifatli, 100% virgin asosli avtomat transmissiya moyi. Turli avtomobil transmissiyalari, gidravlika va hidrostatik tizimlar uchun ideal.",
    fullDescription: `RABINOL Special Tec ATF DEXRON-VI – Automatic Transmission Oil 6L, High Performance

RABINOL ATF DEXRON-VI – premium sifatli avtomat transmissiya moyi bo'lib, 100% virgin asosli moylardan ishlab chiqarilgan. Zamonaviy qo'shimchalar texnologiyasi transmissiyani maksimal ishlashga tayyorlaydi.

Xususiyatlari va afzalliklari:

• Yuqori moslashuvchanlik va muhrlarga moslik
• Past quyuqlik darajasi, keng harorat oralig'ida ishlash
• Eskirish, korroziya va depozit hosil bo'lishidan mukammal himoya
• Oxidatsiyaga yuqori chidamlilik
• Multigrade barqarorlik

Tavsiya etilgan foydalanish:
Barcha avtomat transmissiya tizimlari, gidravlika va boshqa mos tizimlar uchun tavsiya etiladi.

Ogohlantirish:
• Teriga va ko'zga tegmasligi kerak
• Ishdan keyin terini yuvish
• Bolalar qo'lidan uzoqda saqlash

Sotib olish: rabinol.uz`
  },
  {
    id: 5,
    title: "RABINOL Special Tec Gear Oil 75W-85 GL-5 – High Performance 1L",
    image: p5,
    imageBack: p5back,
    description:
      "RABINOL Gear Oil 75W-85 GL-5 – yuqori sifatli, to'liq sintetik moy, benzin yo'lovchi avtomobillar osiylari uchun ideal.",
    fullDescription: `RABINOL Special Tec Gear Oil 75W-85 GL-5 – High Performance 1L

To'liq sintetik, yuqori samarali transmissiya moyi bo'lib, eko-yoqilg'i samaradorligini oshiradi va dvigatel akslarini himoya qiladi.

Xususiyatlari:

• Eskirish, shlam va korroziyaga mukammal himoya
• Yuqori issiqlik va shear barqarorligi
• Yuqori yuk ostida ishonchli ishlash

Tavsiya etilgan foydalanish:
Barcha benzin yo'lovchi avtomobillar osiylari uchun tavsiya etiladi.

Ogohlantirish:
• Teriga va ko'zga tegmasligi kerak
• Ishdan keyin terini yuvish
• Bolalar qo'lidan uzoqda saqlash

Sotib olish: rabinol.uz`
  },
  {
    id: 6,
    title: "RABINOL Special Tec Gear Oil 75W-90 GL-5 – High Performance 1L",
    image: p6,
    imageBack: p6back,
    description:
      "RABINOL Gear Oil 75W-90 GL-5 – yuqori sifatli, to'liq sintetik transmissiya moyi, benzin yo'lovchi avtomobillar osiylari uchun ideal.",
    fullDescription: `RABINOL Special Tec Gear Oil 75W-90 GL-5 – High Performance 1L

RABINOL Gear Oil 75W-90 GL-5 – to'liq sintetik, yuqori samarali transmissiya moyi. Yuqori yuk ostida ishonchli ishlashni ta'minlaydi.

Xususiyatlari:
• Eskirish, shlam va korroziyaga qarshi himoya
• Yuqori issiqlik va viskozite barqarorligi
• Eko-yoqilg'i samaradorligini oshiradi

Tavsiya etilgan foydalanish:
Mercedes-Benz va boshqa ishlab chiqaruvchilar standartlariga mos.

Ogohlantirish:
• Teriga va ko'zga tegmasligi kerak
• Ishdan keyin terini yuvish
• Bolalar qo'lidan uzoqda saqlash

Sotib olish: rabinol.uz`
  },
  {
    id: 7,
    title: "RABINOL Special Tec Motor Engine Oil 10W-40 – High Performance 4L",
    image: p7,
    imageBack: p7back,
    description:
      "RABINOL Motor Engine Oil 10W-40 – yuqori sifatli, yarim sintetik motor moyi, benzin yo'lovchi va tijorat avtomobillari uchun ideal.",
    fullDescription: `RABINOL Special Tec Motor Engine Oil 10W-40 – 4L, High Performance

RABINOL Motor Engine Oil 10W-40 – yarim sintetik, yuqori samarali motor moyi. Tabiiy aspiratsiyali va turbo dvigatellar uchun mos.

Xususiyatlari:
• Eskirish va korroziyaga qarshi himoya
• Sludge va depozitlardan himoya
• Har xil sharoitlarda barqaror ishlash

Tavsiya etilgan foydalanish:
API SM/CF talablariga mos barcha benzinli avtomobillar uchun.

Sotib olish: rabinol.uz`
  },
  {
    id: 8,
    title: "RABINOL Special Tec DX1 Motor Engine Oil 10W-40 – High Performance 4L",
    image: p8,
    imageBack: p8back,
    description:
      "RABINOL DX1 10W-40 – yuqori sifatli, to'liq sintetik motor moyi, benzin yo'lovchi va tijorat avtomobillari uchun ideal.",
    fullDescription: `RABINOL Special Tec DX1 Motor Engine Oil 10W-40 – 4L, High Performance

To'liq sintetik, yuqori samarali motor moyi. Tabiiy aspiratsiyali va turbo dvigatellar uchun mukammal.

Xususiyatlari:
• Eskirish va korroziyaga qarshi himoya
• Sludge va depozitlardan himoya
• Har xil sharoitlarda barqaror ishlash

Tavsiya etilgan foydalanish:
API SM/CF talablariga javob beradi.

Sotib olish: rabinol.uz`
  },
  {
    id: 9,
    title: "RABINOL Special Tec DX2 Motor Engine Oil 5W-40 – High Performance 4L",
    image: p8,
    imageBack: p8back,
    description:
      "RABINOL DX2 5W-40 – yuqori sifatli, to'liq sintetik motor moyi, tabiiy aspiratsiyali va turbo dvigatellar uchun ideal.",
    fullDescription: `RABINOL Special Tec DX2 Motor Engine Oil 5W-40 – 4L, High Performance

To'liq sintetik, yuqori samarali motor moyi. 100% virgin oil asosida ishlab chiqarilgan.

Xususiyatlari:
• Eskirish va korroziyaga qarshi mukammal himoya
• Oxidatsiyaga yuqori chidamlilik
• Har xil sharoitlarda barqaror ishlash

Tavsiya etilgan foydalanish:
API SN motor moyi, barcha benzinli avtomobillar uchun mos.

Sotib olish: rabinol.uz`
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    if (!containerRef.current || !imageRef.current || !contentRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: "power3.out" }
    );

    const features = containerRef.current.querySelectorAll(".feature-item");
    gsap.fromTo(
      features,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: features[0],
          start: "top 80%",
        },
      }
    );
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90">
              <ArrowLeft className="mr-2" size={18} />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{product.title} | RABINOL Motor Moylari - Germaniyada ishlab chiqarilgan</title>
        <meta name="description" content={`${product.description} - RABINOL premium motor moyi O'zbekistonda. German sifati, yuqori ishlash, ishonchli himoya.`} />
        <meta name="keywords" content={`rabinol, rabinol oil, rabinol moylari, ${product.title}, german motor oil, motor oil uzbekistan`} />
        <link rel="canonical" href={`https://rabinol.uz/product/${product.id}`} />
        
        <meta property="og:title" content={`${product.title} | RABINOL Motor Moylari`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={`https://rabinol.uz${product.image}`} />
        <meta property="og:url" content={`https://rabinol.uz/product/${product.id}`} />
        <meta property="og:type" content="product" />
        
        <meta name="twitter:title" content={`${product.title} | RABINOL Motor Moylari`} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={`https://rabinol.uz${product.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <ProductSchema product={product} />
      <Navigation />
      
      <div className="pt-32 pb-20 min-h-screen" ref={containerRef}>
        <div className="container mx-auto px-4">
          <Link to="/#products">
            <Button variant="ghost" className="mb-8 hover:text-primary">
              <ArrowLeft className="mr-2" size={18} />
              Back to Products
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images Carousel */}
            <div ref={imageRef} className="automotive-card p-4 rounded-2xl">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-4">
                      <img
                        src={product.image}
                        alt={`${product.title} - Rabinol motor moyi Germaniyada ishlab chiqarilgan yuqori sifatli moy`}
                        className="w-full h-auto rounded-lg object-contain"
                      />
                    </div>
                  </CarouselItem>
                  {product.imageBack && (
                    <CarouselItem>
                      <div className="p-4">
                        <img
                          src={product.imageBack}
                          alt={`${product.title} orqa tomoni - Rabinol motor moyi German sifati`}
                          className="w-full h-auto rounded-lg object-contain"
                        />
                      </div>
                    </CarouselItem>
                  )}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-primary/90 hover:bg-primary text-white border-0" />
                <CarouselNext className="right-2 bg-primary/90 hover:bg-primary text-white border-0" />
              </Carousel>
            </div>

            {/* Product Info */}
            <div ref={contentRef} className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                  {product.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="automotive-card p-6 rounded-xl space-y-4">
                <div className="flex items-center gap-3 feature-item">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Shield className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Premium Quality</h3>
                    <p className="text-sm text-muted-foreground">German Engineering</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 feature-item">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Zap className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">High Performance</h3>
                    <p className="text-sm text-muted-foreground">Advanced Formula</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 feature-item">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Package className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Certified Product</h3>
                    <p className="text-sm text-muted-foreground">International Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div className="automotive-card p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Product Details</h2>
            <div className="prose prose-invert max-w-none">
              <pre className="whitespace-pre-wrap font-sans text-foreground/90 leading-relaxed">
                {product.fullDescription}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
