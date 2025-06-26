
export interface Product {
  id: string;
  name: {
    fr: string;
    ar: string;
  };
  category: {
    fr: string;
    ar: string;
  };
  price: number;
  description: {
    fr: string;
    ar: string;
  };
  image: string;
  cooperativeId: string;
  featured?: boolean;
}

export interface Cooperative {
  id: string;
  name: {
    fr: string;
    ar: string;
  };
  location: {
    fr: string;
    ar: string;
  };
  description: {
    fr: string;
    ar: string;
  };
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: {
      fr: "Huile d'Argan Pure",
      ar: "زيت أركان نقي",
    },
    category: {
      fr: "Huiles",
      ar: "الزيوت",
    },
    price: 150,
    description: {
      fr: "Huile d'argan pure, pressée à froid et extraite à la main par notre coopérative de femmes dans la région de Souss.",
      ar: "زيت أركان نقي، معصور على البارد ومستخرج يدويًا من قبل تعاونيتنا النسائية في منطقة سوس.",
    },
    image:
      "https://img.freepik.com/free-photo/healthy-argan-oil-composition_23-2148989084.jpg?ga=GA1.1.130018047.1738276886&semt=ais_hybrid&w=740",
    cooperativeId: "1",
    featured: true,
  },
  {
    id: "2",
    name: {
      fr: "Tapis Berbère Traditionnel",
      ar: "زربية أمازيغية تقليدية",
    },
    category: {
      fr: "Tapis",
      ar: "الزرابي",
    },
    price: 2500,
    description: {
      fr: "Magnifique tapis berbère fait main avec des motifs traditionnels de l'Atlas. Chaque pièce est unique et raconte une histoire.",
      ar: "زربية أمازيغية رائعة مصنوعة يدويًا بنقوش تقليدية من الأطلس. كل قطعة فريدة وتحكي قصة.",
    },
    image:
      "https://img.freepik.com/free-photo/multiple-carpets-grand-bazaar-istanbul-turkey_1268-21688.jpg?ga=GA1.1.130018047.1738276886&semt=ais_hybrid&w=740",
    cooperativeId: "2",
  },
  {
    id: "3",
    name: {
      fr: "Miel de Thym des Montagnes",
      ar: "عسل الزعتر الجبلي",
    },
    category: {
      fr: "Alimentaire",
      ar: "المأكولات",
    },
    price: 120,
    description: {
      fr: "Miel naturel récolté dans les montagnes du Haut Atlas, où les abeilles butinent principalement le thym sauvage.",
      ar: "عسل طبيعي يتم جمعه في جبال الأطلس الكبير، حيث تجمع النحل الرحيق بشكل رئيسي من الزعتر البري.",
    },
    image:
      "https://img.freepik.com/free-photo/honey-jars-line-with-leaves_23-2148132589.jpg?ga=GA1.1.130018047.1738276886&semt=ais_hybrid&w=740",
    cooperativeId: "3",
    featured: true,
  },
  {
    id: "4",
    name: {
      fr: "Savon Naturel au Ghassoul",
      ar: "صابون طبيعي بالغاسول",
    },
    category: {
      fr: "Cosmétiques",
      ar: "مستحضرات تجميل",
    },
    price: 45,
    description: {
      fr: "Savon artisanal fabriqué avec du ghassoul marocain, de l'huile d'olive et des huiles essentielles biologiques.",
      ar: "صابون حرفي مصنوع من الغاسول المغربي وزيت الزيتون والزيوت الأساسية العضوية.",
    },
    image:
      "https://img.freepik.com/free-photo/front-view-argan-product-assortment_23-2148955770.jpg?ga=GA1.1.130018047.1738276886&semt=ais_hybrid&w=740",
    cooperativeId: "1",
  },
  {
    id: "5",
    name: {
      fr: "Poterie Décorée à la Main",
      ar: "فخار مزخرف يدويًا",
    },
    category: {
      fr: "Poterie",
      ar: "الفخار",
    },
    price: 220,
    description: {
      fr: "Poterie traditionnelle de Safi, décorée à la main avec des motifs berbères authentiques et des couleurs vives.",
      ar: "فخار تقليدي من آسفي، مزخرف يدويًا بنقوش أمازيغية أصيلة وألوان زاهية.",
    },
    image:
      "https://img.freepik.com/premium-photo/close-up-human-hand-holding-multi-colored-pencils_1048944-6214785.jpg?ga=GA1.1.130018047.1738276886&semt=ais_hybrid&w=740",
    cooperativeId: "4",
    featured: true,
  },
  {
    id: "6",
    name: {
      fr: "Huile Essentielle de Rose de Damas",
      ar: "زيت عطري من ورد دمشقي",
    },
    category: {
      fr: "Huiles",
      ar: "الزيوت",
    },
    price: 280,
    description: {
      fr: "Huile essentielle pure de rose de Damas, distillée à la vapeur à partir de pétales de roses cueillies à la main dans la vallée du Dadès.",
      ar: "زيت عطري نقي من الورد الدمشقي، مقطر بالبخار من بتلات الورد المقطوفة يدويًا في وادي دادس.",
    },
    image:
      "https://img.freepik.com/free-photo/spa-composition-healthy-lifestyle-oil-petals_23-2148677996.jpg?ga=GA1.1.130018047.1738276886&semt=ais_hybrid&w=740",
    cooperativeId: "5",
  },
];

export const cooperatives: Cooperative[] = [
  {
    id: "1",
    name: {
      fr: "Coopérative Féminine Tislatine",
      ar: "تعاونية تيسلاتين النسائية",
    },
    location: {
      fr: "Région de Souss, Maroc",
      ar: "منطقة سوس، المغرب",
    },
    description: {
      fr: "Notre coopérative rassemble plus de 60 femmes qui produisent de l'huile d'argan et des cosmétiques naturels selon des méthodes traditionnelles.",
      ar: "تجمع تعاونيتنا أكثر من 60 امرأة ينتجن زيت الأركان ومستحضرات التجميل الطبيعية وفقًا للطرق التقليدية.",
    },
    image:
      "data:image/jpeg;base64,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",
    featured: true,
  },
  {
    id: "2",
    name: {
      fr: "Artisans du Tapis de l'Atlas",
      ar: "حرفيو زرابي الأطلس",
    },
    location: {
      fr: "Ouarzazate, Maroc",
      ar: "ورزازات، المغرب",
    },
    description: {
      fr: "Collectif d'artisans spécialisés dans la création de tapis berbères authentiques utilisant des techniques transmises de génération en génération.",
      ar: "مجموعة من الحرفيين المتخصصين في صناعة الزرابي الأمازيغية الأصيلة باستخدام تقنيات متوارثة عبر الأجيال.",
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7dCI0oja0ouf7B99o9oeinSJ-CAlgIroatQ&s",
  },
  {
    id: "3",
    name: {
      fr: "Coopérative Apicole de l'Atlas",
      ar: "تعاونية تربية النحل في الأطلس",
    },
    location: {
      fr: "Haut Atlas, Maroc",
      ar: "الأطلس الكبير، المغرب",
    },
    description: {
      fr: "Notre coopérative réunit des apiculteurs locaux qui produisent du miel de qualité supérieure dans un environnement naturel préservé.",
      ar: "تجمع تعاونيتنا مربي النحل المحليين الذين ينتجون عسلًا عالي الجودة في بيئة طبيعية محمية.",
    },
    image:
      "https://img.freepik.com/free-photo/close-up-beekeeper-collecting-honey_23-2150903519.jpg?ga=GA1.1.130018047.1738276886&semt=ais_hybrid&w=740",
    featured: true,
  },
  {
    id: "4",
    name: {
      fr: "Artisans Potiers de Safi",
      ar: "حرفيو الفخار بآسفي",
    },
    location: {
      fr: "Safi, Maroc",
      ar: "آسفي، المغرب",
    },
    description: {
      fr: "Groupe d'artisans-potiers perpétuant l'art ancestral de la poterie marocaine avec des techniques traditionnelles et des designs uniques.",
      ar: "مجموعة من الحرفيين-الفخاريين يواصلون فن الفخار المغربي القديم بتقنيات تقليدية وتصاميم فريدة.",
    },
    image:
      "https://img.freepik.com/free-photo/mutual-creative-work-adult-elegant-couple-casual-clothes-aprons-people-creating-bowl-pottery-wheel-clay-studio_1157-40110.jpg?ga=GA1.1.130018047.1738276886&semt=ais_hybrid&w=740",
    featured: true,
  },
  {
    id: "5",
    name: {
      fr: "Coopérative des Roses de Kalaat M'Gouna",
      ar: "تعاونية ورود قلعة مكونة",
    },
    location: {
      fr: "Vallée du Dadès, Maroc",
      ar: "وادي دادس، المغرب",
    },
    description: {
      fr: "Notre coopérative cultive et transforme la célèbre rose de Damas pour produire des eaux florales, des huiles essentielles et des produits cosmétiques.",
      ar: "تزرع تعاونيتنا وتعالج الورد الدمشقي الشهير لإنتاج المياه الزهرية والزيوت العطرية ومنتجات التجميل.",
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGAyEK4IJVfiv-Sf4AncbFu7BgsULoVA82Q&s",
  },
];

export const categories = [
  {
    id: "all",
    name: {
      fr: "Tous les Produits",
      ar: "جميع المنتجات"
    }
  },
  {
    id: "oils",
    name: {
      fr: "Huiles",
      ar: "الزيوت"
    }
  },
  {
    id: "carpets",
    name: {
      fr: "Tapis",
      ar: "الزرابي"
    }
  },
  {
    id: "food",
    name: {
      fr: "Alimentaire",
      ar: "المأكولات"
    }
  },
  {
    id: "cosmetics",
    name: {
      fr: "Cosmétiques",
      ar: "مستحضرات تجميل"
    }
  },
  {
    id: "pottery",
    name: {
      fr: "Poterie",
      ar: "الفخار"
    }
  }
];
