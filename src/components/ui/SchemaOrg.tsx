"use client";

export default function SchemaOrg() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "PotolokBel",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "@id": "",
    "url": "https://potolokbel.ru",
    "telephone": "+74950000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Арбат, 1",
      "addressLocality": "Москва",
      "postalCode": "101000",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 55.7522,
      "longitude": 37.6156
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Установка натяжных потолков",
    "provider": {
      "@type": "LocalBusiness",
      "name": "PotolokBel"
    },
    "areaServed": {
      "@type": "City",
      "name": "Москва"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Виды натяжных потолков",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Теневые натяжные потолки"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Парящие натяжные потолки"
          }
        }
      ]
    }
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Сколько стоит натяжной потолок в Москве?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Стоимость премиальных решений начинается от 1500 руб/м² под ключ."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
