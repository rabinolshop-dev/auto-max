import { useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import ProductDetailDialog from "./ProductDetailDialog";
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
import p9 from "@/assets/p8_front.png";
import p9back from "@/assets/p8_back.png";


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
    image: p9,
    imageBack: p9back,
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


const ProductsSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <section id="products" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium selection of RABINOL motor oils and automotive fluids
          </p>
        </div>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard
              imageBack={product.imageBack}
                title={product.title}
                image={product.image}
                description={product.description}
                onLearnMore={() => {
                  setSelectedProduct(product);
                  setDialogOpen(true);
                }}
              />
            </div>
          ))}
        </div>

        <ProductDetailDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          product={selectedProduct}
        />
      </div>
    </section>
  );
};

export default ProductsSection;
