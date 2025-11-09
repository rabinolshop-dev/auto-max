import { useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import ProductDetailDialog from "./ProductDetailDialog";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";
import product5 from "@/assets/product-5.png";
import product6 from "@/assets/product-6.png";

const products = [
  {
    id: 1,
    title: "RABINOL Motor Engine Oil 0W-20 – High Performance 4L",
    image: product1,
    description: "RABINOL OW-20 Motor Oil – 4 litr, yuqori sifatli, Germaniyada ishlab chiqarilgan motor moyi. Har turdagi benzinli avtomobillar, turbo yoki tabiiy aspiratsiyali dvigatellar uchun mukammal ishlashni ta'minlaydi.",
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

Sotib olish: rabinolshop.com`
  },
  {
    id: 2,
    title: "RABINOL Special Tec DX1 5W-30 Motor Oil SN",
    image: product2,
    description: "RABINOL Special Tec DX1 5W-30 – yuqori samarali, 100% sintetik motor moyi, Germaniyada ishlab chiqarilgan. Tabiiy aspiratsiyali va turbo dvigatellar uchun ideal.",
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

Sotib olish: rabinolshop.com`
  },
  {
    id: 3,
    title: "RABINOL Special Tec ATF DEXRON-VI 6L",
    image: product3,
    description: "RABINOL ATF DEXRON-VI – yuqori sifatli, 100% virgin asosli avtomat transmissiya moyi. Turli avtomobil transmissiyalari, gidravlika va hidrostatik tizimlar uchun ideal.",
    fullDescription: `RABINOL Special Tec ATF DEXRON-VI – Automatic Transmission Oil 6L, High Performance

RABINOL ATF DEXRON-VI – premium sifatli avtomat transmissiya moyi bo'lib, 100% virgin asosli moylardan ishlab chiqarilgan. Zamonaviy qo'shimchalar texnologiyasi dvigatel va transmissiyani maksimal ishlashga tayyorlaydi, har xil avtomobil tizimlarida ishlatiladi:

• Avtomat transmissiyalar
• Gidravlik tizim
• Gidrostatik tizimlar

Xususiyatlari va afzalliklari:

• Yuqori moslashuvchanlik va muhrlarga moslik
• Past quyuqlik darajasi, keng harorat oralig'ida ishlash
• Eskirish, korroziya va depozit hosil bo'lishidan mukammal himoya
• Oxidatsiyaga yuqori chidamlilik
• Multigrade barqarorlik
• Tabiiy aspiratsiyali va turbo dvigatellar uchun mos

Tavsiya etilgan foydalanish:
RABINOL ATF DEXRON-VI barcha avtomat transmissiya tizimlari, gidravlika va boshqa mos tizimlar uchun tavsiya etiladi. Yuqori texnologiyali, uzoq muddatli xizmat ko'rsatadi va ishlab chiqaruvchilarning barcha standartlariga javob beradi.

Ogohlantirish:
• Teriga va ko'zga tegmasligi kerak, ayniqsa ishlatilgan moy bilan
• Ishdan keyin terini yaxshilab yuvish
• Kirlangan kiyimlarni yuvib qayta ishlatish
• Bolalar qo'lidan uzoqda saqlash

Sotib olish: rabinolshop.com`
  },
  {
    id: 4,
    title: "RABINOL Gear Oil 75W-85 GL-5",
    image: product4,
    description: "RABINOL Gear Oil 75W-85 GL-5 – yuqori sifatli, to'liq sintetik moy, benzin yo'lovchi avtomobillar osiylari uchun ideal. Eskirish, shlam va korroziyaga qarshi mukammal himoya.",
    fullDescription: `RABINOL Special Tec Gear Oil 75W-85 GL-5 – High Performance 1L

RABINOL Gear Oil 75W-85 GL-5 – to'liq sintetik, yuqori samarali transmissiya moyi bo'lib, benzin yo'lovchi avtomobillar osiylari va boshqa mos tizimlar uchun ishlab chiqarilgan. Zamonaviy qo'shimchalar texnologiyasi bilan ishlab chiqilgan bo'lib, eko-yoqilg'i samaradorligini oshiradi va dvigatel akslariga maksimal himoya beradi.

Xususiyatlari va afzalliklari:

• To'liq sintetik, yuqori sifatli multigrade moy
• Eskirish, shlam va korroziyaga mukammal himoya
• Yuqori issiqlik barqarorligi
• Shear va viskozite barqarorligi
• Yuqori yuk ostida ishonchli ishlash
• Eko-yoqilg'i samaradorligini oshiradi

Tavsiya etilgan foydalanish:
RABINOL Gear Oil 75W-85 GL-5 barcha benzin yo'lovchi avtomobillar osiylari va boshqa mos tizimlar uchun tavsiya etiladi. Shu jumladan, Mercedes Benz va boshqa ishlab chiqaruvchilarning tavsiyalariga mos.

Ogohlantirish:
• Teriga va ko'zga tegmasligi kerak, ayniqsa ishlatilgan moy bilan
• Ishdan keyin terini yaxshilab yuvish
• Kirlangan kiyimlarni yuvib qayta ishlatish
• Bolalar qo'lidan uzoqda saqlash

Sotib olish: rabinolshop.com`
  },
  {
    id: 5,
    title: "RABINOL Motor Engine Oil 10W-40 4L",
    image: product5,
    description: "RABINOL Motor Engine Oil 10W-40 – yuqori sifatli, yarim sintetik motor moyi, benzin yo'lovchi va tijorat avtomobillari uchun ideal.",
    fullDescription: `RABINOL Special Tec Motor Engine Oil 10W-40 – 4L, High Performance

RABINOL Motor Engine Oil 10W-40 yuqori samarali, yarim sintetik motor moyi bo'lib, 100% virgin oil asosida ishlab chiqarilgan. Zamonaviy qo'shimchalar texnologiyasi dvigatelga maksimal ishlash imkonini beradi va har turdagi avtomobil dvigatellarida ishlatilishi mumkin: tabiiy aspiratsiyali va turbo dvigatellar.

Xususiyatlari va afzalliklari:

• Yuqori sifatli multigrade motor moyi
• Eskirish va korroziyaga qarshi mukammal himoya
• Sludge va depozitlardan himoya
• Oxidatsiyaga yuqori chidamlilik
• Har xil sharoitlarda barqaror ishlash
• Evropa, Yaponiya va Amerika avtomobil ishlab chiqaruvchilar standartlariga mos

Tavsiya etilgan foydalanish:
RABINOL 10W-40 API SM/CF motor moyi barcha turdagi benzin yo'lovchi va tijorat avtomobillari uchun tavsiya etiladi. Shu jumladan, SM/CF va undan oldingi servis kategoriyalarini talab qiladigan dvigatellar uchun ham mos.

Ogohlantirish:
• Teriga va ko'zga tegmasligi kerak, ayniqsa ishlatilgan moy bilan
• Ishdan keyin terini yaxshilab yuvish
• Kirlangan kiyimlarni yuvib qayta ishlatish
• Bolalar qo'lidan uzoqda saqlash

Sotib olish: rabinolshop.com`
  },
  {
    id: 6,
    title: "RABINOL Special Tec DX2 5W-40",
    image: product6,
    description: "RABINOL DX2 5W-40 – yuqori sifatli, to'liq sintetik motor moyi, tabiiy aspiratsiyali va turbo dvigatellar uchun ideal.",
    fullDescription: `RABINOL Special Tec DX2 Motor Engine Oil 5W-40 – 4L, High Performance

RABINOL DX2 5W-40 yuqori samarali, to'liq sintetik motor moyi bo'lib, 100% virgin oil asosida ishlab chiqarilgan. Zamonaviy qo'shimchalar texnologiyasi dvigatelga maksimal ishlash imkonini beradi va har turdagi avtomobil dvigatellarida ishlatilishi mumkin: tabiiy aspiratsiyali va turbo dvigatellar.

Xususiyatlari va afzalliklari:

• Yuqori sifatli multigrade motor moyi
• Eskirish va korroziyaga qarshi mukammal himoya
• Sludge va depozitlardan himoya
• Oxidatsiyaga yuqori chidamlilik
• Har xil sharoitlarda barqaror ishlash
• Evropa, Yaponiya va Amerika avtomobil ishlab chiqaruvchilar standartlariga mos

Tavsiya etilgan foydalanish:
RABINOL DX2 5W-40 API SN motor moyi barcha turdagi benzin yo'lovchi va tijorat avtomobillari uchun tavsiya etiladi. Shu jumladan, SN va undan oldingi servis kategoriyalarini talab qiladigan dvigatellar uchun ham mos.

Ogohlantirish:
• Teriga va ko'zga tegmasligi kerak, ayniqsa ishlatilgan moy bilan
• Ishdan keyin terini yaxshilab yuvish
• Kirlangan kiyimlarni yuvib qayta ishlatish
• Bolalar qo'lidan uzoqda saqlash

Sotib olish: rabinolshop.com`
  },
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
