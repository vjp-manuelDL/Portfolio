export type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

export type MenuSubcategory = {
  name: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  label: string;
  addon?: string;
  items?: MenuItem[];
  subcategories?: MenuSubcategory[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "clasicas",
    label: "Tostadas Clásicas",
    addon: "Añádele york +0,30 €",
    items: [
      { name: "Aceite", price: "1,00 €" },
      { name: "Tomate", price: "1,00 €" },
      { name: "Mantequilla y Mermelada", price: "1,00 €" },
      { name: "Paté", price: "1,00 €" },
      { name: "Cachuela", price: "1,00 €" },
    ],
  },
  {
    id: "especiales",
    label: "Tostadas Especiales",
    addon: "Añádele huevo frito o tortilla francesa +0,30 €",
    items: [
      {
        name: "Parisina",
        description: "Tomate con jamón york, queso gratinado y orégano",
        price: "1,70 €",
      },
      {
        name: "Extremeña",
        description: "Base de tomate con jamón ibérico",
        price: "2,20 €",
      },
      {
        name: "Americana",
        description: "Tomate con cheddar y bacon gratinado",
        price: "2,00 €",
      },
      {
        name: "Huevito",
        description: "Tomate con york, huevo frito y pimentón",
        price: "1,60 €",
      },
      {
        name: "Tortillita",
        description: "Tomate con york y tortilla francesa",
        price: "1,60 €",
      },
      {
        name: "Vegetal",
        description:
          "Mahonesa con lechuga, pimientos rojo y verde, tomate natural y queso rallado",
        price: "2,10 €",
      },
    ],
  },
  {
    id: "neptuno",
    label: "Tostadas Neptuno",
    addon: "Añádele huevo frito o tortilla francesa +0,30 €",
    items: [
      {
        name: "Revoltosa",
        description: "Tomate con huevos revueltos con bacon o jamón ibérico",
        price: "1,90 €",
      },
      {
        name: "Navarra",
        description: "Tomate con jamón ibérico y tortilla francesa",
        price: "2,50 €",
      },
      {
        name: "Ibérica",
        description: "Tomate con jamón ibérico y queso, gratinado opcional",
        price: "2,60 €",
      },
      {
        name: "Popeye",
        description:
          "Base de mantequilla, queso gratinado y espinacas salteadas con aceite de coco",
        price: "2,30 €",
      },
      {
        name: "Merceditas",
        description:
          "Base de tomate con pimientos rojo y verde, cebolla morada, queso gratinado y picante opcional",
        price: "2,40 €",
      },
      {
        name: "Mediterránea",
        description: "Tomate con atún, queso gratinado y orégano",
        price: "2,00 €",
      },
      {
        name: "Philadelphia",
        description: "Queso crema con rodajas de tomate natural",
        price: "1,90 €",
      },
      {
        name: "De Rulo",
        description:
          "Base de tomate, rodajas de tomate natural y rulo de cabra gratinado",
        price: "2,40 €",
      },
      {
        name: "Cremosa",
        description: "Crema de roquefort y nueces",
        price: "1,90 €",
      },
      {
        name: "Burgalesa",
        description:
          "Base de aceite con rodajas de tomate natural y queso fresco",
        price: "2,30 €",
      },
    ],
  },
  {
    id: "plato",
    label: "En el Plato",
    items: [
      {
        name: "Plato Combinado",
        description:
          "Combina hasta cuatro ingredientes de nuestra carta y crea tu plato combinado",
        price: "3,50 €",
      },
    ],
  },
  {
    id: "entrepanes",
    label: "Entrepanes",
    subcategories: [
      {
        name: "Sándwiches",
        items: [
          { name: "Mixto", price: "2,20 €" },
          { name: "Mixto con Huevo", price: "2,50 €" },
          { name: "Bacon, Queso y Huevo", price: "2,70 €" },
        ],
      },
      {
        name: "Montaditos",
        items: [
          { name: "Tortilla de Patatas", price: "2,00 €" },
          {
            name: "Lomo",
            description: "Con tomate natural y queso",
            price: "2,50 €",
          },
          {
            name: "Pollo",
            description: "Con lechuga, tomate natural y queso",
            price: "2,50 €",
          },
        ],
      },
      {
        name: "Camperos",
        items: [
          {
            name: "Jamón Ibérico",
            description: "Con tomate opcional",
            price: "3,60 €",
          },
          {
            name: "Queso Curado",
            description: "Con tomate opcional",
            price: "3,20 €",
          },
          {
            name: "Lomo",
            description: "Con tomate natural y queso",
            price: "3,60 €",
          },
          {
            name: "Pollo",
            description: "Con lechuga, tomate natural y queso",
            price: "3,60 €",
          },
        ],
      },
    ],
  },
  {
    id: "algo-mas",
    label: "Algo Más",
    items: [
      { name: "Pincho de Tortilla", price: "1,40 €" },
      {
        name: "Migas Extremeñas",
        description: "Con huevo opcional +0,30 €",
        price: "1,60 €",
      },
      {
        name: "Bol de Fruta Variada",
        description: "Con zumo de naranja o yogur",
        price: "2,80 €",
      },
    ],
  },
  {
    id: "bolleria",
    label: "Bollería",
    items: [
      { name: "Bizcocho Casero", price: "1,00 €" },
      { name: "Napolitana de Chocolate", price: "1,80 €" },
      {
        name: "Croissant",
        description: "Con mantequilla y mermelada",
        price: "1,80 €",
      },
      { name: "Croissant Mixto", price: "2,20 €" },
    ],
  },
];
