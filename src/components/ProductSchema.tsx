import { useEffect } from "react";

interface ProductSchemaProps {
  product: {
    id: number;
    title: string;
    description: string;
    image: string;
    imageBack?: string;
  };
}

const ProductSchema = ({ product }: ProductSchemaProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = `product-schema-${product.id}`;
    
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.title,
      "description": product.description,
      "image": [
        `https://rabinol.uz${product.image}`,
        ...(product.imageBack ? [`https://rabinol.uz${product.imageBack}`] : [])
      ],
      "brand": {
        "@type": "Brand",
        "name": "RABINOL"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "RABINOL Germany"
      },
      "countryOfOrigin": {
        "@type": "Country",
        "name": "Germany"
      },
      "offers": {
        "@type": "Offer",
        "url": `https://rabinol.uz/product/${product.id}`,
        "priceCurrency": "UZS",
        "price": "0",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "RABINOL Uzbekistan"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      }
    };
    
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);
    
    return () => {
      const existingScript = document.getElementById(`product-schema-${product.id}`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [product]);
  
  return null;
};

export default ProductSchema;
