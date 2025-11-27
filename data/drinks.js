export const drinks = [
  {
    id: 1,
    name: "Margarita",
    color: "#F7D358",
    category: "Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 13,
      level: "Medium"
    },
    description: "Clásico ácido y refrescante con un toque cítrico.",
    ingredients: [
      { name: "Tequila", amount: "50ml" },
      { name: "Triple Sec", amount: "25ml" },
      { name: "Jugo de limón", amount: "25ml" },
      { name: "Sal", amount: "Al gusto" }
    ],
    preparation: "Agitar todos los ingredientes con hielo y servir en vaso escarchado con sal.",
    images: {
      full: "Realistic professional photography of a Margarita cocktail served in a bar setting, cinematic lighting, shallow depth of field, condensation on the glass, 8k sharp ultra-detailed.",
      png: "Ultra-detailed studio product shot of a Margarita cocktail in a realistic glass, isolated on transparent background, no shadows, no props, 8k clean cut-out."
    },
    isPopular: true,
    price: 12.5
  },

  {
    id: 2,
    name: "Mojito",
    color: "#A8E6A3",
    category: "Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 10,
      level: "Low"
    },
    description: "Refrescante mezcla de menta, limón y ron.",
    ingredients: [
      { name: "Ron blanco", amount: "50ml" },
      { name: "Hierbabuena", amount: "6 hojas" },
      { name: "Lima", amount: "1/2" },
      { name: "Soda", amount: "Al gusto" }
    ],
    preparation: "Macerar la hierbabuena con la lima, añadir ron, hielo y completar con soda.",
    images: {
      full: "Ultra realistic mojito cocktail in a tall glass, mint leaves, crushed ice, cinematic lighting, condensation, 8k.",
      png: "Studio product shot mojito cocktail isolated on transparent background, crisp, sharp, 8k."
    },
    isPopular: true,
    price: 10
  },

  {
    id: 3,
    name: "Piña Colada",
    color: "#F6E5A6",
    category: "Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 8,
      level: "Low"
    },
    description: "Dulce, cremosa y tropical.",
    ingredients: [
      { name: "Ron blanco", amount: "50ml" },
      { name: "Crema de coco", amount: "30ml" },
      { name: "Jugo de piña", amount: "90ml" }
    ],
    preparation: "Mezclar todos los ingredientes con hielo picado y servir.",
    images: {
      full: "Realistic professional shot of a Piña Colada in a hurricane glass, tropical garnish, 8k detail.",
      png: "Studio isolated Piña Colada in a hurricane glass, clean cut-out, no shadows, 8k."
    },
    price: 11.5
  },

  {
    id: 4,
    name: "Old Fashioned",
    color: "#D18B47",
    category: "Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 32,
      level: "High"
    },
    description: "Clásico fuerte con notas de whisky y naranja.",
    ingredients: [
      { name: "Whisky bourbon", amount: "60ml" },
      { name: "Bitter", amount: "2 dash" },
      { name: "Azúcar", amount: "1 terrón" }
    ],
    preparation: "Disolver azúcar con bitter, luego agregar whisky y hielo.",
    images: {
      full: "Ultra detailed Old Fashioned cocktail photo, orange peel, big ice cube, dramatic lighting, 8k.",
      png: "Studio isolated Old Fashioned with large clear ice cube, sharp 8k cut-out."
    },
    price: 14
  },

  {
    id: 5,
    name: "Cosmopolitan",
    color: "#FF7E9E",
    category: "Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 20,
      level: "Medium"
    },
    description: "Dulce, cítrico y elegante.",
    ingredients: [
      { name: "Vodka", amount: "45ml" },
      { name: "Triple Sec", amount: "15ml" },
      { name: "Jugo de arándanos", amount: "30ml" }
    ],
    preparation: "Agitar con hielo y servir en copa Martini.",
    images: {
      full: "Cinematic professional photo of a Cosmopolitan cocktail with vibrant pink color, 8k.",
      png: "Isolated cosmopolitan martini glass, clean transparent background, 8k."
    },
    price: 13
  },

  {
    id: 6,
    name: "Daiquiri",
    color: "#E4F2F7",
    category: "Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 17,
      level: "Medium"
    },
    description: "Equilibrio perfecto entre dulce y ácido.",
    ingredients: [
      { name: "Ron blanco", amount: "50ml" },
      { name: "Jugo de limón", amount: "25ml" },
      { name: "Jarabe simple", amount: "20ml" }
    ],
    preparation: "Agitar con hielo y colar en copa fría.",
    images: {
      full: "Realistic daiquiri in coupe glass, subtle frost, bar lighting, 8k.",
      png: "Isolated daiquiri coupe glass, clean studio shot, 8k."
    },
    price: 11
  },

  {
    id: 7,
    name: "Sangría",
    color: "#B53A52",
    category: "Wine Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 7,
      level: "Low"
    },
    description: "Fresca mezcla de vino y frutas.",
    ingredients: [
      { name: "Vino tinto", amount: "150ml" },
      { name: "Frutas mixtas", amount: "Al gusto" },
      { name: "Refresco de naranja", amount: "50ml" }
    ],
    preparation: "Mezclar todo y dejar reposar mínimo 1 hora.",
    images: {
      full: "Realistic sangria pitcher with fruits, vibrant color, 8k.",
      png: "Studio isolated glass of sangria with fruit pieces, transparent background."
    },
    price: 9.5
  },

  {
    id: 8,
    name: "Aperol Spritz",
    color: "#FCA94C",
    category: "Spritz",
    alcohol: {
      type: "Alcoholic",
      abv: 11,
      level: "Low"
    },
    description: "Ligero, burbujeante y con sabor amargo dulce.",
    ingredients: [
      { name: "Aperol", amount: "60ml" },
      { name: "Prosecco", amount: "90ml" },
      { name: "Soda", amount: "30ml" }
    ],
    preparation: "Servir en copa grande con hielo.",
    images: {
      full: "Stylish sunset-lit Aperol Spritz with bubbles, orange slice, 8k detail.",
      png: "Clean isolated Aperol Spritz wine glass, transparent background, 8k."
    },
    price: 12
  },

  {
    id: 9,
    name: "Moscow Mule",
    color: "#C57940",
    category: "Cocktail",
    alcohol: {
      type: "Alcoholic",
      abv: 14,
      level: "Medium"
    },
    description: "Picante y refrescante con ginger beer.",
    ingredients: [
      { name: "Vodka", amount: "50ml" },
      { name: "Ginger beer", amount: "120ml" },
      { name: "Lima", amount: "15ml" }
    ],
    preparation: "Servir en taza de cobre con hielo.",
    images: {
      full: "High-detail realistic Moscow Mule in copper mug, frosty texture, 8k.",
      png: "Studio isolated copper mug with Moscow Mule, transparent background, 8k."
    },
    price: 12.5
  },

  {
    id: 10,
    name: "Limonada Frozen",
    color: "#D7F9FF",
    category: "Mocktail",
    alcohol: {
      type: "Non-alcoholic",
      abv: 0,
      level: "None"
    },
    description: "Refrescante, cítrica y perfecta para el calor.",
    ingredients: [
      { name: "Limón", amount: "2" },
      { name: "Hielo picado", amount: "1 taza" },
      { name: "Azúcar", amount: "2 cdas" }
    ],
    preparation: "Licuar todo hasta obtener textura frozen.",
    images: {
      full: "Crystal-clear realistic frozen lemonade with frosty glass, 8k.",
      png: "Isolated frozen lemonade cup, clean white background, 8k."
    },
    price: 6.5
  }

];
