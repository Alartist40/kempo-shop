// Full product catalog from kempo-shop.com
export const products = [
  // チャコール製品 (Charcoal Products)
  {
    id: 1, categoryId: 1, price: 2178, image: "https://placehold.co/300x300/8CBA26/white?text=Charcoal",
    ja: { name: "スーパーチャコール（活性炭）微粉末 180g", category: "チャコール製品", description: "高品質の活性炭パウダー。デトックスや健康維持に。" },
    en: { name: "Super Charcoal Powder 180g", category: "Charcoal Products", description: "Premium activated charcoal powder for detox and health maintenance." }
  },
  {
    id: 2, categoryId: 1, price: 6930, image: "https://placehold.co/300x300/8CBA26/white?text=Charcoal+1kg",
    ja: { name: "徳用：スーパーチャコール 微粉末 1kg", category: "チャコール製品", description: "お得な大容量パック。業務用にも最適。" },
    en: { name: "Super Charcoal Powder 1kg (Value)", category: "Charcoal Products", description: "Large value pack, ideal for regular use." }
  },
  {
    id: 3, categoryId: 1, price: 1958, image: "https://placehold.co/300x300/8CBA26/white?text=Shampoo",
    ja: { name: "チャコシャン (炭シャンプー)", category: "チャコール製品", description: "竹炭配合のナチュラルシャンプー。頭皮をすっきり洗浄。" },
    en: { name: "Charcoal Shampoo", category: "Charcoal Products", description: "Natural bamboo charcoal shampoo for deep cleansing." }
  },
  {
    id: 4, categoryId: 1, price: 754, image: "https://placehold.co/300x300/8CBA26/white?text=Soap",
    ja: { name: "竹炭石鹸 純澄（すみずみ）", category: "チャコール製品", description: "竹炭配合の洗顔・ボディソープ。" },
    en: { name: "Bamboo Charcoal Soap", category: "Charcoal Products", description: "Purifying soap with bamboo charcoal." }
  },

  // 健歩粉末調味料 (Kempo Seasonings)
  {
    id: 5, categoryId: 2, price: 810, image: "https://placehold.co/300x300/FFC107/white?text=Mayo",
    ja: { name: "インスタントカシューマヨ 150g", category: "健歩粉末調味料", description: "カシューナッツベースのヴィーガンマヨネーズ。" },
    en: { name: "Instant Cashew Mayo 150g", category: "Kempo Seasonings", description: "Vegan mayo made from cashew nuts." }
  },
  {
    id: 6, categoryId: 2, price: 842, image: "https://placehold.co/300x300/FFC107/white?text=Cheese",
    ja: { name: "インスタント・カシューチーズ 150g", category: "健歩粉末調味料", description: "乳製品不使用のチーズ風調味料。" },
    en: { name: "Instant Cashew Cheese 150g", category: "Kempo Seasonings", description: "Dairy-free cheese-style seasoning." }
  },
  {
    id: 7, categoryId: 2, price: 594, image: "https://placehold.co/300x300/FFC107/white?text=Yeast",
    ja: { name: "ニュートリショナルイースト", category: "健歩粉末調味料", description: "ビタミンB群豊富な栄養酵母。" },
    en: { name: "Nutritional Yeast", category: "Kempo Seasonings", description: "Vitamin B-rich nutritional yeast flakes." }
  },

  // 手当て・生活用品 (Life Goods)
  {
    id: 8, categoryId: 3, price: 1100, image: "https://placehold.co/300x300/4CAF50/white?text=Toothpaste",
    ja: { name: "乳酸菌生成エキスはみがき デントラクト", category: "手当て・生活用品", description: "乳酸菌エキス配合の歯磨き粉。" },
    en: { name: "Probiotic Toothpaste Dentract", category: "Life Goods", description: "Toothpaste with probiotic extract." }
  },
  {
    id: 9, categoryId: 3, price: 1320, image: "https://placehold.co/300x300/4CAF50/white?text=Eggplant+Salt",
    ja: { name: "なすの黒やき塩ハミガキ", category: "手当て・生活用品", description: "なすの黒焼き塩を使用した自然派歯磨き。" },
    en: { name: "Eggplant Black Salt Toothpaste", category: "Life Goods", description: "Natural toothpaste with roasted eggplant salt." }
  },

  // アレルギー対応 (Allergy-Friendly)
  {
    id: 10, categoryId: 4, price: 4320, image: "https://placehold.co/300x300/E91E63/white?text=Jabara",
    ja: { name: "じゃばらEx", category: "アレルギー対応", description: "花粉症対策サプリメント。" },
    en: { name: "Jabara Ex Supplement", category: "Allergy-Friendly", description: "Supplement for hay fever relief." }
  },
  {
    id: 11, categoryId: 4, price: 421, image: "https://placehold.co/300x300/E91E63/white?text=Rice+Pasta",
    ja: { name: "ライスパスタ スパゲティスタイル", category: "アレルギー対応", description: "グルテンフリーのお米パスタ。" },
    en: { name: "Rice Pasta Spaghetti Style", category: "Allergy-Friendly", description: "Gluten-free rice pasta." }
  },
  {
    id: 12, categoryId: 4, price: 821, image: "https://placehold.co/300x300/E91E63/white?text=Okara",
    ja: { name: "おからこんにゃく", category: "アレルギー対応", description: "おからとこんにゃくのヘルシー食材。" },
    en: { name: "Okara Konjac", category: "Allergy-Friendly", description: "Healthy food made from okara and konjac." }
  },

  // 書籍・メディア (Books & Media)
  {
    id: 13, categoryId: 5, price: 459, image: "https://placehold.co/300x300/9C27B0/white?text=Book",
    ja: { name: "医食農同源", category: "書籍・メディア", description: "健康と食に関する書籍。" },
    en: { name: "Food as Medicine", category: "Books & Media", description: "Book on health and nutrition." }
  },
  {
    id: 14, categoryId: 5, price: 2200, image: "https://placehold.co/300x300/9C27B0/white?text=Book+2",
    ja: { name: "自然を生かした治療法", category: "書籍・メディア", description: "自然療法に関する専門書。" },
    en: { name: "Natural Remedies", category: "Books & Media", description: "Guide to natural healing methods." }
  },
  {
    id: 15, categoryId: 5, price: 1202, image: "https://placehold.co/300x300/9C27B0/white?text=Charcoal+EN",
    ja: { name: "Charcoal - 英語版", category: "書籍・メディア", description: "炭の健康効果に関する英語書籍。" },
    en: { name: "Charcoal (English Edition)", category: "Books & Media", description: "Book on health benefits of charcoal." }
  },

  // 豆・穀類・麺類 (Beans, Grains, Noodles)
  {
    id: 16, categoryId: 6, price: 540, image: "https://placehold.co/300x300/795548/white?text=Beans",
    ja: { name: "有機黒豆 200g", category: "豆・穀類・麺類", description: "北海道産有機黒豆。" },
    en: { name: "Organic Black Beans 200g", category: "Beans & Grains", description: "Organic black beans from Hokkaido." }
  },
  {
    id: 17, categoryId: 6, price: 432, image: "https://placehold.co/300x300/795548/white?text=Oats",
    ja: { name: "オートミール 300g", category: "豆・穀類・麺類", description: "食物繊維豊富なオートミール。" },
    en: { name: "Oatmeal 300g", category: "Beans & Grains", description: "Fiber-rich oatmeal." }
  },

  // 飲み物 (Drinks)
  {
    id: 18, categoryId: 7, price: 1296, image: "https://placehold.co/300x300/03A9F4/white?text=Tea",
    ja: { name: "有機三年番茶 180g", category: "飲み物", description: "3年熟成の有機番茶。カフェイン少なめ。" },
    en: { name: "Organic 3-Year Bancha 180g", category: "Drinks", description: "Aged organic tea, low caffeine." }
  },
  {
    id: 19, categoryId: 7, price: 864, image: "https://placehold.co/300x300/03A9F4/white?text=Grain+Coffee",
    ja: { name: "穀物コーヒー", category: "飲み物", description: "カフェインフリーの穀物コーヒー。" },
    en: { name: "Grain Coffee", category: "Drinks", description: "Caffeine-free grain coffee alternative." }
  },

  // 健康補助食品 (Supplements)
  {
    id: 20, categoryId: 8, price: 3240, image: "https://placehold.co/300x300/FF5722/white?text=Supplement",
    ja: { name: "スピルリナ 100%", category: "健康補助食品", description: "栄養豊富なスピルリナサプリ。" },
    en: { name: "Spirulina 100%", category: "Supplements", description: "Nutrient-rich spirulina supplement." }
  },
  {
    id: 21, categoryId: 8, price: 2700, image: "https://placehold.co/300x300/FF5722/white?text=Enzyme",
    ja: { name: "酵素サプリ", category: "健康補助食品", description: "消化を助ける植物酵素。" },
    en: { name: "Enzyme Supplement", category: "Supplements", description: "Plant enzymes for digestion support." }
  },

  // ジューサー (Juicers)
  {
    id: 22, categoryId: 9, price: 43780, image: "https://placehold.co/300x300/607D8B/white?text=Juicer",
    ja: { name: "スロージューサー H-200", category: "ジューサー", description: "低速回転で栄養を逃さないジューサー。" },
    en: { name: "Slow Juicer H-200", category: "Juicers", description: "Low-speed juicer that preserves nutrients." }
  }
];

export const categories = [
  { id: 1, ja: "チャコール製品", en: "Charcoal Products" },
  { id: 2, ja: "健歩粉末調味料", en: "Kempo Seasonings" },
  { id: 3, ja: "手当て・生活用品", en: "Life Goods" },
  { id: 4, ja: "アレルギー対応", en: "Allergy-Friendly" },
  { id: 5, ja: "書籍・メディア", en: "Books & Media" },
  { id: 6, ja: "豆・穀類・麺類", en: "Beans & Grains" },
  { id: 7, ja: "飲み物", en: "Drinks" },
  { id: 8, ja: "健康補助食品", en: "Supplements" },
  { id: 9, ja: "ジューサー", en: "Juicers" }
];

export const translations = {
  en: {
    siteTitle: "Kempo Shop - Natural Health Products",
    heroTitle: "Natural Health Promotion",
    heroSubtitle: "Carefully selected products based on medical information from the Uchee Pines Institute (USA) and customer feedback.",
    categoriesTitle: "Categories",
    allProducts: "All Products",
    aboutUsTitle: "About Kempo",
    aboutUsText: "Established in 2003, Kempo strictly selects products that are truly useful for health, at fair prices.",
    contactTitle: "Contact",
    phone: "Phone",
    policiesTitle: "Information",
    shipping: "Shipping Info",
    returns: "Returns Policy",
    privacy: "Privacy Policy",
    guide: "Usage Guide",
    rights: "© 2026 Kempo Shop. All rights reserved.",
    login: "Login",
    register: "Register",
    cart: "Cart",
    addToCart: "Add to Cart",
    inStock: "In Stock",
    quantity: "Qty",
    taxIncluded: "(Tax Incl.)",
    nav: ["Home", "Company", "Guide", "Register", "Cart"],
    companyName: "Kempo Co., Ltd.",
    ceo: "CEO: Sheila Kawakami",
    established: "Established: December 3, 2003",
    viewDetails: "View details",
    added: "Added! ✓",
    cartEmpty: "Empty",
    cartEmptyMsg: "Your cart is empty",
    loggingIn: "Logging in...",
    loginSuccess: "Success!",
    loginTitle: "Member Login",
    emailLabel: "Email Address / ID",
    passwordLabel: "Password",
    noAccount: "Don't have an account?",
    registerLink: "Register here",
    loginSubmit: "Login",
    langToggleAria: "Switch to 日本語",
    navToggleAria: "Toggle navigation",
    skipToContent: "Skip to Content"
  },
  ja: {
    siteTitle: "健歩 - 自然健康食品",
    heroTitle: "自然健康増進",
    heroSubtitle: "Uchee Pines Institute（米国）からの医学情報とお客様のフィードバックに基づいて厳選された製品。",
    categoriesTitle: "カテゴリー",
    allProducts: "すべての商品",
    aboutUsTitle: "健歩について",
    aboutUsText: "2003年設立。健康に本当に役立つ製品を、適正価格で厳選してお届けしています。",
    contactTitle: "お問い合わせ",
    phone: "電話番号",
    policiesTitle: "ご案内",
    shipping: "配送について",
    returns: "返品について",
    privacy: "プライバシーポリシー",
    guide: "ご利用ガイド",
    rights: "© 2026 健歩. All rights reserved.",
    login: "ログイン",
    register: "会員登録",
    cart: "カート",
    addToCart: "カートに追加",
    inStock: "在庫あり",
    quantity: "数量",
    taxIncluded: "(税込)",
    nav: ["ホーム", "会社概要", "ご利用案内", "会員登録", "カート"],
    companyName: "株式会社 健歩",
    ceo: "代表取締役: 川上シーラ",
    established: "設立: 2003年12月3日",
    viewDetails: "詳細を見る",
    added: "追加しました！ ✓",
    cartEmpty: "空です",
    cartEmptyMsg: "カートは空です",
    loggingIn: "ログイン中...",
    loginSuccess: "成功しました！",
    loginTitle: "会員ログイン",
    emailLabel: "メールアドレス / ID",
    passwordLabel: "パスワード",
    noAccount: "アカウントをお持ちでないですか？",
    registerLink: "新規登録",
    loginSubmit: "ログイン",
    langToggleAria: "Englishに切り替え",
    navToggleAria: "ナビゲーションの切り替え",
    skipToContent: "本文へスキップ"
  }
};
