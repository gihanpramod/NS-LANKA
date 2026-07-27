/* ==========================================================================
   NS LANKA ELECTRONIC SPARE PARTS - JAVASCRIPT APP ENGINE
   - Multilingual Support (EN, TA, SI)
   - Auto Horizontal Poster Carousel
   - Expandable Categories Menu
   - Interactive Tab Router (11 Tabs)
   - Product Catalog & Search Autocomplete
   - Cart Drawer & Checkout Flow
   - Admin Login Simulator
   - Order Tracker Simulator
   ========================================================================== */

// --- MULTILINGUAL TRANSLATION DICTIONARY ---
const i18n = {
  en: {
    hotline: "Hotline: +94 11 234 5678 / +94 77 123 4567 / +94 72 426 7905",
    delivery_note: "Island-wide Fast Delivery Across Sri Lanka",
    search_placeholder: "Search spare parts (e.g. Blender blade, Capacitor, Heating element)...",
    user_login: "User Login",
    admin_login: "Admin Login",
    cart: "Cart",
    all_categories: "All Categories",
    // Tabs
    tab_home: "Home",
    tab_product: "Product",
    tab_about: "About",
    tab_career: "Career",
    tab_gallery: "Gallery",
    tab_social: "Social Media",
    tab_contact: "Contact Us",
    tab_track: "Track order",
    tab_faq: "FAQ",
    tab_review: "Review",
    // Categories
    cat_blender: "Blender parts",
    cat_rice_cooker: "Rice cooker spare parts",
    cat_kettle: "Electric kettle spare parts",
    cat_pressure_cooker: "Pressure cooker spare parts",
    cat_fan: "Fan spare parts",
    cat_gas_cooker: "Gas cooker spare parts",
    cat_oven: "Oven spare parts",
    cat_washing_machine: "Washing machine spare parts",
    cat_refrigerator: "Refrigerator spare parts",
    cat_air_conditioner: "Air conditioner spare parts",
    cat_water_pump: "Water pump spare parts",
    cat_power_tools: "Power tools spare parts",
    cat_capacitor: "Motor capacitor",
    cat_gadgets: "Electrical gadgets",
    cat_power_supplies: "AC DC power supplies",
    cat_av_connectors: "Audio video connectors",
    cat_av_cables: "Audio video cables",
    cat_wall_brackets: "LCD/LED wall brackets",
    cat_soldering: "Soldering Accessories",
    cat_microphones: "Microphones",
    // Hero
    hero_title: "100% Genuine Electronic Spare Parts in Sri Lanka",
    hero_subtitle: "Your Trusted One-Stop Store for Home Appliances & Industrial Spare Components.",
    hero_cta1: "Shop Parts Now",
    hero_cta2: "Explore Categories",
    // Home Sections
    new_arrivals_title: "New Arrivals & Featured Spare Parts",
    new_arrivals_sub: "Top Quality Guaranteed Components",
    reviews_title: "Customer Reviews & Feedback",
    reviews_sub: "Trusted by 50,000+ Technicians & Households",
    awards_title: "Achievements & Awards",
    awards_sub: "Excellence in Electronic Spare Parts Distribution",
    // Feature Cards
    card1_title: "Warranty Assured",
    card1_desc: "All spare parts undergo strict quality testing with 100% replacement warranty support.",
    card2_title: "Custom Orders",
    card2_desc: "Can't find a rare or obsolete part? We source & custom import components for you.",
    card3_title: "Home Delivery",
    card3_desc: "Fast island-wide courier delivery right to your doorstep within 24 to 48 hours.",
    // Stats
    stat_years: "15+ Years",
    stat_years_lbl: "Industry Experience",
    stat_parts: "25,000+",
    stat_parts_lbl: "Spare Parts in Stock",
    stat_customers: "50,000+",
    stat_customers_lbl: "Satisfied Customers",
    stat_deliveries: "100%",
    stat_deliveries_lbl: "Island-wide Reach",
    // Buttons & Misc
    add_to_cart: "Add to Cart",
    buy_now: "Buy Now",
    quick_view: "Quick View",
    out_of_stock: "Out of Stock",
    in_stock: "In Stock",
    category_empty: "This category is not available at the moment.",
    retail: "Retail",
    wholesale: "Wholesale",
    whatsapp_inquiry: "Inquire via WhatsApp",
    wholesale_min_notice: "Minimum 10 units required for bulk purchase",
    wholesale_qty: "Quantity",
    wholesale_send: "Send Inquiry",
    checkout_title: "Checkout",
    form_name: "Full Name",
    form_whatsapp: "WhatsApp Number",
    form_address: "Delivery Address",
    form_district: "District",
    form_postal: "Postal Code",
    form_payment: "Payment Method",
    form_place_order: "Place Order",
    form_cod: "Cash on Delivery",
    form_bank: "Bank Transfer",
    review_title: "Write a Review",
    review_subtitle: "Share your experience with our products to help other customers make informed decisions.",
    review_product: "Select Product",
    review_rating: "Your Rating",
    review_comment: "Your Review",
    review_comment_placeholder: "Tell us about your experience with this product...",
    review_name: "Your Name",
    review_submit: "Submit Review",
    review_success: "Thank you! Your review has been submitted successfully.",
    review_write: "Write a Review"
  },
  
  ta: {
    hotline: "ஹோட்லைன்: +94 11 234 5678 / +94 77 123 4567 / +94 72 426 7905",
    delivery_note: "இலங்கை முழுவதும் விரைவான விநியோகம்",
    search_placeholder: "திரிபாகங்களைத் தேடுங்கள் (எ.கா. பிளெண்டர் பிளேடு, கெபாசிட்டர்)...",
    user_login: "பயனர் உள்நுழைவு",
    admin_login: "நிர்வாகி உள்நுழைவு",
    cart: "கூடை",
    all_categories: "அனைத்து வகைகள்",
    // Tabs
    tab_home: "முகப்பு",
    tab_product: "தயாரிப்புகள்",
    tab_about: "எங்களைப் பற்றி",
    tab_career: "வேலை வாய்ப்பு",
    tab_gallery: "கேலரி",
    tab_social: "சமூக ஊடகம்",
    tab_contact: "தொடர்பு கொள்ள",
    tab_track: "ஆர்டரைக் கண்காணிக்க",
    tab_faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    tab_review: "மதிப்பாய்வு",
    // Categories
    cat_blender: "பிளெண்டர் பாகங்கள்",
    cat_rice_cooker: "ரைஸ் குக்கர் உதிரி பாகங்கள்",
    cat_kettle: "மின்சார கெட்டில் உதிரி பாகங்கள்",
    cat_pressure_cooker: "பிரஷர் குக்கர் உதிரி பாகங்கள்",
    cat_fan: "மின்விசிறி உதிரி பாகங்கள்",
    cat_gas_cooker: "கேஸ் குக்கர் உதிரி பாகங்கள்",
    cat_oven: "அவன் உதிரி பாகங்கள்",
    cat_washing_machine: "வாஷிங் மெஷின் உதிரி பாகங்கள்",
    cat_refrigerator: "ரெஃப்ரிஜரேட்டர் உதிரி பாகங்கள்",
    cat_air_conditioner: "ஏர் கண்டிஷனர் உதிரி பாகங்கள்",
    cat_water_pump: "வாட்டர் பம்ப் உதிரி பாகங்கள்",
    cat_power_tools: "பவர் டூல்ஸ் உதிரி பாகங்கள்",
    cat_capacitor: "மோட்டார் கெபாசிட்டர்",
    cat_gadgets: "மின்சார சாதனங்கள்",
    cat_power_supplies: "AC DC பவர் சப்ளைகள்",
    cat_av_connectors: "ஆடியோ வீடியோ இணைப்பிகள்",
    cat_av_cables: "ஆடியோ வீடியோ கேபிள்கள்",
    cat_wall_brackets: "LCD/LED சுவர் பிராக்கெட்டுகள்",
    cat_soldering: "சால்டரிங் பாகங்கள்",
    cat_microphones: "மைக்ரோஃபோன்கள்",
    // Hero
    hero_title: "இலங்கையில் 100% அசல் மின்னணு உதிரி பாகங்கள்",
    hero_subtitle: "வீட்டு உபயோகப் பொருட்கள் மற்றும் தொழில்துறை உதிரி பாகங்களுக்கான நம்பிக்கையான மையம்.",
    hero_cta1: "இப்போதே வாங்கவும்",
    hero_cta2: "வகைகளைப் பார்க்கவும்",
    // Home Sections
    new_arrivals_title: "புதிய வரவுகள் & சிறப்பு உதிரி பாகங்கள்",
    new_arrivals_sub: "உயர்தர உத்தரவாதம் அளிக்கப்பட்ட பாகங்கள்",
    reviews_title: "வாடிக்கையாளர் கருத்துக்கள்",
    reviews_sub: "50,000+ தொழில்நுட்ப வல்லுனர்களால் நம்பப்பட்டது",
    awards_title: "சாதனைகள் மற்றும் விருதுகள்",
    awards_sub: "மின்னணு உதிரி பாகங்கள் விநியோகத்தில் சிறப்பு",
    // Feature Cards
    card1_title: "உத்தரவாதம் அளிக்கப்பட்டுள்ளது",
    card1_desc: "அனைத்து உதிரி பாகங்களும் கடுமையான தரப் பரிசோதனைக்கு உட்படுத்தப்படுகின்றன.",
    card2_title: "சிறப்பு ஆர்டர்கள்",
    card2_desc: "அரிதான உதிரி பாகங்கள் கிடைக்கவில்லையா? உங்களுக்காக பிரத்யேகமாக இறக்குமதி செய்கிறோம்.",
    card3_title: "வீட்டு விநியோகம்",
    card3_desc: "24 முதல் 48 மணி நேரத்திற்குள் உங்கள் வீட்டிற்கே விரைவான கூரியர் விநியோகம்.",
    // Stats
    stat_years: "15+ ஆண்டுகள்",
    stat_years_lbl: "தொழில்முறை அனுபவம்",
    stat_parts: "25,000+",
    stat_parts_lbl: "இருப்பில் உள்ள பாகங்கள்",
    stat_customers: "50,000+",
    stat_customers_lbl: "திருப்திகரமான வாடிக்கையாளர்கள்",
    stat_deliveries: "100%",
    stat_deliveries_lbl: "இலங்கை தழுவிய விநியோகம்",
    // Buttons & Misc
    add_to_cart: "கூடையில் சேர்க்கவும்",
    buy_now: "இப்போது வாங்கவும்",
    quick_view: "விரைவுப் பார்வை",
    out_of_stock: "இருப்பில் இல்லை",
    in_stock: "இருப்பில் உள்ளது",
    category_empty: "இந்த வகை தற்போது கிடைக்கவில்லை.",
    retail: "சில்லறை",
    wholesale: "மொத்த",
    whatsapp_inquiry: "வாட்ஸ்அப்பில் விசாரிக்க",
    wholesale_min_notice: "மொத்த கொள்முதலுக்கு குறைந்தது 10 பொருட்கள் தேவை",
    wholesale_qty: "அளவு",
    wholesale_send: "விசாரணையை அனுப்பவும்",
    checkout_title: "கொடுக்கல் வாங்கல்",
    form_name: "முழு பெயர்",
    form_whatsapp: "வாட்ஸ்அப் எண்",
    form_address: "முகவரி",
    form_district: "மாவட்டம்",
    form_postal: "அஞ்சல் குறியீடு",
    form_payment: "கட்டண முறை",
    form_place_order: "ஆர்டரை உறுதிப்படுத்த",
    form_cod: "பணம் செலுத்தும் முறை",
    form_bank: "வங்கி இடமாற்றம்",
    review_title: "மதிப்பாய்வு எழுதவும்",
    review_subtitle: "எங்கள் தயாரிப்புகள் குறித்த உங்கள் அனுபவத்தைப் பகிர்ந்து, மற்ற வாடிக்கையாளர்களுக்கு உதவுங்கள்.",
    review_product: "தயாரிப்பைத் தேர்ந்தெடுக்கவும்",
    review_rating: "உங்கள் மதிப்பீடு",
    review_comment: "உங்கள் மதிப்பாய்வு",
    review_comment_placeholder: "இந்த தயாரிப்பு குறித்த உங்கள் அனுபவத்தைச் சொல்லுங்கள்...",
    review_name: "உங்கள் பெயர்",
    review_submit: "மதிப்பாய்வை சமர்ப்பிக்கவும்",
    review_success: "நன்றி! உங்கள் மதிப்பாய்வு வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது.",
    review_write: "மதிப்பாய்வு எழுதவும்"
  },

  si: {
    hotline: "ක්ෂණික ඇමතුම්: +94 11 234 5678 / +94 77 123 4567 / +94 72 426 7905",
    delivery_note: "දිවයින පුරා වේගවත් නිවසටම බෙදාහැරීම",
    search_placeholder: "අමතර කොටස් සොයන්න (උදා: බ්ලෙන්ඩර් බ්ලේඩ්, කැපෑසිටර්)...",
    user_login: "පරිශීලක පිවිසුම",
    admin_login: "ඇඩ්මින් පිවිසුම",
    cart: "කාට් එක",
    all_categories: "සියලු කාණ්ඩ",
    // Tabs
    tab_home: "මුල් පිටුව",
    tab_product: "නිෂ්පාදන",
    tab_about: "අප ගැන",
    tab_career: "රැකියා",
    tab_gallery: "ඡායාරූප ගැලරිය",
    tab_social: "සමාජ මාධ්‍ය",
    tab_contact: "අප හා සම්බන්ධ වන්න",
    tab_track: "ඇණවුම පරීක්ෂා කරන්න",
    tab_faq: "නිතර අසන ප්‍රශ්න",
    tab_review: "සමාලෝචනය",
    // Categories
    cat_blender: "බ්ලෙන්ඩර් අමතර කොටස්",
    cat_rice_cooker: "රයිස් කුකර් අමතර කොටස්",
    cat_kettle: "විදුලි කේතල අමතර කොටස්",
    cat_pressure_cooker: "ප්‍රෙෂර් කුකර් අමතර කොටස්",
    cat_fan: "ෆෑන් අමතර කොටස්",
    cat_gas_cooker: "ගෑස් කුකර් අමතර කොටස්",
    cat_oven: "අවන් අමතර කොටස්",
    cat_washing_machine: "වොෂින් මැෂින් අමතර කොටස්",
    cat_refrigerator: "ශීතකරණ අමතර කොටස්",
    cat_air_conditioner: "එයාර් කන්ඩිෂනර් අමතර කොටස්",
    cat_water_pump: "වෝටර් පම්ප් අමතර කොටස්",
    cat_power_tools: "පවර් ටූල්ස් අමතර කොටස්",
    cat_capacitor: "මෝටර් කැපෑසිටර්",
    cat_gadgets: "විදුලි මෙවලම් හා ගැජට්",
    cat_power_supplies: "AC DC පවර් සප්ලයි",
    cat_av_connectors: "ඕඩියෝ වීඩියෝ කනෙක්ටර්",
    cat_av_cables: "ඕඩියෝ වීඩියෝ කේබල්",
    cat_wall_brackets: "LCD/LED බිත්ති බ්‍රැකට්",
    cat_soldering: "පාස්සන (Soldering) උපාංග",
    cat_microphones: "මයික්‍රෆෝන",
    // Hero
    hero_title: "ශ්‍රී ලංකාවේ 100% විශ්වාසනීය ඉලෙක්ට්‍රොනික් අමතර කොටස්",
    hero_subtitle: "ඔබගේ ගෘහස්ථ සහ කාර්මික ඉලෙක්ට්‍රොනික් අමතර කොටස් සඳහා එකම වහලක් යටින්.",
    hero_cta1: "දැන් මිලදී ගන්න",
    hero_cta2: "කාණ්ඩ බලන්න",
    // Home Sections
    new_arrivals_title: "නව පැමිණීම් සහ විශේෂ අමතර කොටස්",
    new_arrivals_sub: "ඉහළම ගුණාත්මකභාවය සහ වගකීම සහිතයි",
    reviews_title: "පාරිභෝගික අදහස් සහ සමාලෝචන",
    reviews_sub: "50,000+ වැඩි ඉලෙක්ට්‍රොනික් ශිල්පීන්ගේ විශ්වාසය",
    awards_title: "ජයග්‍රහණ සහ සම්මාන",
    awards_sub: "ඉලෙක්ට්‍රොනික් අමතර කොටස් ක්ෂේත්‍රයේ විශිෂ්ටත්වය",
    // Feature Cards
    card1_title: "වගකීම සහතිකයි",
    card1_desc: "සියලුම අමතර කොටස් උසස් ප්‍රමිතියෙන් යුතු අතර 100% ප්‍රතිස්ථාපන වගකීමක් සහිතයි.",
    card2_title: "විශේෂ ඇණවුම් (Custom Orders)",
    card2_desc: "සොයාගැනීමට අපහසු දුර්ලභ අමතර කොටස් අප විසින් විශේෂයෙන් ගෙන්වා දෙනු ලැබේ.",
    card3_title: "නිවසටම ගෙනැවිත් දීම",
    card3_desc: "පැය 24-48 අතර කාලයක් ඇතුලත දිවයින පුරා ඕනෑම ස්ථානයකට නිවසටම ගෙනැවිත් දීම.",
    // Stats
    stat_years: "වසර 15+",
    stat_years_lbl: "ක්ෂේත්‍රයේ පළපුරුද්ද",
    stat_parts: "25,000+",
    stat_parts_lbl: "තොගයේ ඇති අමතර කොටස්",
    stat_customers: "50,000+",
    stat_customers_lbl: "තෘප්තිමත් පාරිභෝගිකයින්",
    stat_deliveries: "100%",
    stat_deliveries_lbl: "දිවයින පුරා බෙදාහැරීම",
    // Buttons & Misc
    add_to_cart: "කාට් එකට එක් කරන්න",
    buy_now: "දැන් මිලදී ගන්න",
    quick_view: "ඉක්මන් බැලීම",
    out_of_stock: "තොග අවසන්",
    in_stock: "තොග ඇත",
    category_empty: "මෙම කාණ්ඩය දැනට ලබා ගත නොහැක.",
    retail: "සිල්ලර",
    wholesale: "තොග",
    whatsapp_inquiry: "WhatsApp ඔස්සේ විමසන්න",
    wholesale_min_notice: "තොග මිලදී ගැනීම සඳහා අවම වශයෙන් 10 ක් අවශ්‍යයි",
    wholesale_qty: "ප්‍රමාණය",
    wholesale_send: "විමසුම යවන්න",
    checkout_title: "ගෙවීම්",
    form_name: "සම්පූර්ණ නම",
    form_whatsapp: "WhatsApp අංකය",
    form_address: "ලිපිනය",
    form_district: "දිස්ත්‍රික්කය",
    form_postal: "තැපැල් කේතය",
    form_payment: "ගෙවීම් ක්‍රමය",
    form_place_order: "ඇණවුම තහවුරු කරන්න",
    form_cod: "ගෙවීම් ලැබුණු පසු",
    form_bank: "බැංකු හුවමාරුව",
    review_title: "සමාලෝචනයක් ලියන්න",
    review_subtitle: "අපගේ නිෂ්පාදන පිළිබඳ ඔබේ අත්දැකීම් බෙදාගෙන අනෙකුත් පාරිභෝගිකයින්ට උදව් කරන්න.",
    review_product: "නිෂ්පාදනය තෝරන්න",
    review_rating: "ඔබේ ශ්‍රේණිගත කිරීම",
    review_comment: "ඔබේ සමාලෝචනය",
    review_comment_placeholder: "මෙම නිෂ්පාදනය පිළිබඳ ඔබේ අත්දැකීම් අපට කියන්න...",
    review_name: "ඔබේ නම",
    review_submit: "සමාලෝචනය යොමු කරන්න",
    review_success: "ස්තුතියි! ඔබේ සමාලෝචනය සාර්ථකව යොමු කර ඇත.",
    review_write: "සමාලෝචනයක් ලියන්න"
  }
};

let currentLang = 'en';

// --- SAMPLE PRODUCT DATABASE WITH WORKSPACE IMAGES ---
const productsData = [
  {
    id: 101,
    title: "Heavy Duty Blender Copper Motor 9520 (750W)",
    category: "cat_blender",
    categoryName: "Blender Parts",
    price: 3450,
    oldPrice: 4200,
    rating: 4.9,
    badge: "bestseller",
    badgeText: "BEST SELLER",
    image: "Images/Blender and Parts/High-Speed-Customized-Pure-Copper-9520-9530-Ac-Universal-Motor-Food-Mixer-Blender-Parts-Blender-Motor.jpg_300x300.avif",
    inStock: true
  },
  {
    id: 102,
    title: "Jaipan & Universal Blender Jar Lids + Gasket Set",
    category: "cat_blender",
    categoryName: "Blender Parts",
    price: 850,
    oldPrice: 1100,
    rating: 4.8,
    badge: "new",
    badgeText: "NEW",
    image: "Images/Blender and Parts/Jaipan-Mixer-Grinder-Blender-3-in-1-Jar-Lids-Set-Gasket-9cm-11cm-12.5cm-1.jpg",
    inStock: false
  },
  {
    id: 103,
    title: "Commercial 8-Blade Stainless Steel Blender Cutter Assembly",
    category: "cat_blender",
    categoryName: "Blender Parts",
    price: 1650,
    oldPrice: 1950,
    rating: 4.9,
    badge: "popular",
    badgeText: "GENUINE",
    image: "Images/Blender and Parts/Blender-8-Blades-Blade-Accessory-Commercial-Blender-Spare-Parts-Blender-Knives.png_300x300.avif",
    inStock: true
  },
  {
    id: 104,
    title: "Universal Multi-Motor Rubber Coupler (Pack of 2)",
    category: "cat_blender",
    categoryName: "Blender Parts",
    price: 450,
    oldPrice: 600,
    rating: 4.7,
    badge: "bestseller",
    badgeText: "HOT",
    image: "Images/Blender and Parts/Blender-Multi-Motor-Coupler-2.jpg",
    inStock: true
  },
  {
    id: 201,
    title: "Singer & Abans Electric Rice Cooker Heating Plate 1.8L",
    category: "cat_rice_cooker",
    categoryName: "Rice Cooker Spare Parts",
    price: 2450,
    oldPrice: 2900,
    rating: 4.8,
    badge: "bestseller",
    badgeText: "POPULAR",
    image: "Images/Rice Cooker and Parts/Singer-Rice-Cooker-1.8L-SRC-1018HS_2.jpg",
    inStock: true
  },
  {
    id: 202,
    title: "Commercial Rice Cooker Magnetic Thermostat & Switch Combo",
    category: "cat_rice_cooker",
    categoryName: "Rice Cooker Spare Parts",
    price: 950,
    oldPrice: 1200,
    rating: 4.6,
    badge: "new",
    badgeText: "NEW",
    image: "Images/Rice Cooker and Parts/rice-cooker-spare-parts6adaf83c-43aa-4c36-bb4b-5533effb8244.webp",
    inStock: true
  },
  {
    id: 301,
    title: "Pressure Cooker Safety Valve & Handle Set (Universal Combo)",
    category: "cat_pressure_cooker",
    categoryName: "Pressure Cooker Spare Parts",
    price: 1250,
    oldPrice: 1550,
    rating: 4.9,
    badge: "genuine",
    badgeText: "GENUINE",
    image: "Images/Pressure Cooker and Parts/Various-Styles-of-Pressure-Cooker-Spareparts-for-Home-Appliance-Pressure.avif",
    inStock: true
  },
  {
    id: 401,
    title: "Automatic Washing Machine Water Inlet Valve & Drain Motor",
    category: "cat_washing_machine",
    categoryName: "Washing Machine Spare Parts",
    price: 2850,
    oldPrice: 3400,
    rating: 4.8,
    badge: "bestseller",
    badgeText: "TOP QUALITY",
    image: "Images/Washing Machine and Parts/washing-machines-spares-parts.jpg",
    inStock: true
  },
  {
    id: 402,
    title: "Washing Machine Pulsator & Drive Belt Replacement Kit",
    category: "cat_washing_machine",
    categoryName: "Washing Machine Spare Parts",
    price: 1950,
    oldPrice: 2300,
    rating: 4.7,
    badge: "new",
    badgeText: "NEW",
    image: "Images/Washing Machine and Parts/Washing-Machine-Spare-Parts-Shop-in-Parrys-800x800.webp",
    inStock: true
  }
];

// Shopping Cart State
let shoppingCart = [];

// --- APP INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initExpandableCategories();
  initHeroCarousel();
  initNavigationTabs();
  renderNewArrivals();
  initNewArrivalsFilter();
  initProductPage();
  initSearchAutocomplete();
  initCartSystem();
  initFaqAccordions();
  initOrderTracking();
  initAdminLogin();
  initAdminLoginPage();
  initReviewPage();
  initAdminPanel();
});

// --- LANGUAGE SWITCHER ---
function initLanguage() {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLang = btn.dataset.lang;
      applyLanguage(currentLang);
    });
  });
}

function applyLanguage(lang) {
  const dict = i18n[lang] || i18n.en;
  
  // Translate data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Re-render components with translated titles
  renderNewArrivals();
}

// --- EXPANDABLE CATEGORIES DROPDOWN (Positioned below Logo to the left) ---
function initExpandableCategories() {
  const wrapper = document.querySelector('.category-dropdown-wrapper');
  const toggleBtn = document.querySelector('.category-toggle-btn');

  if (toggleBtn && wrapper) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      wrapper.classList.toggle('open');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!wrapper.contains(e.target)) {
        wrapper.classList.remove('open');
      }
    });
  }
}

// --- HERO AUTOMATIC HORIZONTAL POSTER CAROUSEL ---
let heroCurrentIndex = 0;
let heroAutoTimer = null;

function initHeroCarousel() {
  const track = document.getElementById('heroCarouselTrack');
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.getElementById('heroPrevBtn');
  const nextBtn = document.getElementById('heroNextBtn');
  const totalSlides = slides.length;

  if (!track || totalSlides === 0) return;

  function updateSlide(index) {
    heroCurrentIndex = (index + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${heroCurrentIndex * 100}%)`;
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === heroCurrentIndex);
    });
  }

  function startAutoSlide() {
    stopAutoSlide();
    heroAutoTimer = setInterval(() => {
      updateSlide(heroCurrentIndex + 1);
    }, 4500); // 4.5 seconds auto transition
  }

  function stopAutoSlide() {
    if (heroAutoTimer) clearInterval(heroAutoTimer);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      updateSlide(heroCurrentIndex + 1);
      startAutoSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      updateSlide(heroCurrentIndex - 1);
      startAutoSlide();
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      updateSlide(i);
      startAutoSlide();
    });
  });

  // Pause on hover
  const carouselContainer = document.querySelector('.hero-carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopAutoSlide);
    carouselContainer.addEventListener('mouseleave', startAutoSlide);
  }

  startAutoSlide();
}

// --- NAVIGATION TABS ROUTING (Multi-page navigation via href) ---
function initNavigationTabs() {
  // Nav links now navigate to separate HTML pages via href attributes.
  // No SPA tab-switching needed.
}

// --- RENDER NEW ARRIVALS GRID ---
function renderNewArrivals(category = 'all') {
  const grid = document.getElementById('newArrivalsGrid');
  if (!grid) return;

  const dict = i18n[currentLang] || i18n.en;

  const filtered = category === 'all'
    ? productsData
    : productsData.filter(p => p.category === category);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="category-empty">${dict.category_empty}</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const inStock = (p.stockQuantity != null ? p.stockQuantity : (p.inStock ? 1 : 0)) > 0;
    return `
    <div class="product-card${inStock ? '' : ' out-of-stock'}">
      <span class="product-badge ${p.badge}">${p.badgeText}</span>
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        ${!inStock ? `<div class="out-of-stock-overlay"><span>${dict.out_of_stock}</span></div>` : ''}
        <div class="product-actions-overlay">
          <button class="action-icon-btn" onclick="openQuickView(${p.id})" title="${dict.quick_view}">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-icon-btn" onclick="${inStock ? `addToCart(${p.id})` : `showToast('${dict.out_of_stock}')`}" title="${inStock ? dict.add_to_cart : dict.out_of_stock}">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <div class="product-body">
        <span class="product-category-tag">${dict[p.category] || p.categoryName}</span>
        <h3 class="product-title">${p.title}</h3>
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <span>(${p.rating})</span>
        </div>
        ${inStock ? `<div class="purchase-mode-toggle">
          <button class="mode-pill active" onclick="setPurchaseMode(this, 'retail')">${dict.retail}</button>
          <button class="mode-pill" onclick="setPurchaseMode(this, 'wholesale')">${dict.wholesale}</button>
        </div>` : ''}
        <div class="product-price-row">
          <div>
            <span class="product-price">Rs. ${p.price.toLocaleString()}</span>
            ${p.oldPrice ? `<span class="product-price-old">Rs. ${p.oldPrice.toLocaleString()}</span>` : ''}
          </div>
          <div class="product-actions-row">
            <button class="add-to-cart-btn" onclick="${inStock ? `addToCart(${p.id})` : `showToast('${dict.out_of_stock}')`}" ${inStock ? '' : 'disabled'}>
              <i class="fas fa-cart-plus"></i> ${inStock ? dict.add_to_cart : dict.out_of_stock}
            </button>
            ${inStock ? `<button class="buy-now-btn" onclick="buyNow(${p.id})"><i class="fas fa-bolt"></i> ${dict.buy_now}</button>` : ''}
          </div>
          ${inStock ? `<div class="wholesale-btn-wrap">
            <div class="wholesale-notice"><i class="fas fa-info-circle"></i> ${dict.wholesale_min_notice}</div>
            <div class="wholesale-qty-row">
              <label class="wholesale-qty-label">${dict.wholesale_qty}:</label>
              <input type="number" class="wholesale-qty-input" value="10" min="10" step="1">
            </div>
            <button class="wholesale-btn" onclick="wholesaleInquiry(${p.id}, this)"><i class="fab fa-whatsapp"></i> ${dict.wholesale_send}</button>
          </div>` : ''}
        </div>
      </div>
    </div>`;
  }).join('');
}

// --- NEW ARRIVALS FILTER PILLS ---
function initNewArrivalsFilter() {
  const pills = document.querySelectorAll('.product-filter-pills .filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderNewArrivals(pill.dataset.category);
    });
  });
}

// --- SEARCH AUTOCOMPLETE ---
function initSearchAutocomplete() {
  const searchInput = document.getElementById('headerSearchInput');
  const dropdown = document.getElementById('searchResultsDropdown');

  if (!searchInput || !dropdown) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (query.length < 2) {
      dropdown.classList.remove('active');
      return;
    }

    const matches = productsData.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.categoryName.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      dropdown.innerHTML = `<div style="padding:15px; text-align:center; color:#64748B; font-size:0.88rem;">No spare parts found matching "${query}"</div>`;
    } else {
      dropdown.innerHTML = matches.map(m => `
        <div class="search-result-item" onclick="openQuickView(${m.id})">
          <img src="${m.image}" alt="${m.title}">
          <div class="search-result-info">
            <h4>${m.title}</h4>
            <span>Rs. ${m.price.toLocaleString()}</span>
          </div>
        </div>
      `).join('');
    }

    dropdown.classList.add('active');
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
}

// --- SHOPPING CART SYSTEM ---
function initCartSystem() {
  const cartBtn = document.getElementById('headerCartBtn');
  const drawer = document.getElementById('cartDrawer');
  const closeCartBtn = document.getElementById('closeCartBtn');

  if (cartBtn && drawer) {
    cartBtn.addEventListener('click', () => drawer.classList.add('active'));
  }
  if (closeCartBtn && drawer) {
    closeCartBtn.addEventListener('click', () => drawer.classList.remove('active'));
  }
}

function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const qty = product.stockQuantity != null ? product.stockQuantity : (product.inStock ? 1 : 0);
  if (qty <= 0) {
    const dict = i18n[currentLang] || i18n.en;
    showToast(dict.out_of_stock);
    return;
  }

  const existing = shoppingCart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    shoppingCart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  showToast(`Added "${product.title.substring(0, 28)}..." to cart!`);
}

function buyNow(productId) {
  addToCart(productId);
  const drawer = document.getElementById('cartDrawer');
  if (drawer) drawer.classList.add('active');
}

function updateCartUI() {
  const badge = document.getElementById('cartBadge');
  const list = document.getElementById('cartItemsList');
  const totalEl = document.getElementById('cartTotalAmount');

  const totalItems = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = shoppingCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (badge) badge.textContent = totalItems;
  if (totalEl) totalEl.textContent = `Rs. ${totalPrice.toLocaleString()}`;

  if (!list) return;

  if (shoppingCart.length === 0) {
    list.innerHTML = `<div style="text-align:center; padding:40px 10px; color:#64748B;">Your shopping cart is currently empty.</div>`;
    return;
  }

  list.innerHTML = shoppingCart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}">
      <div class="cart-item-details">
        <h4>${item.title}</h4>
        <div class="cart-item-price">Rs. ${item.price.toLocaleString()} x ${item.quantity}</div>
      </div>
      <button onclick="removeFromCart(${item.id})" style="color:#CE1A1B; background:none; font-size:1.1rem;">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  `).join('');
}

function removeFromCart(productId) {
  shoppingCart = shoppingCart.filter(item => item.id !== productId);
  updateCartUI();
}

function setPurchaseMode(btn, mode) {
  const card = btn.closest('.product-card');
  if (!card) return;
  card.querySelectorAll('.mode-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  card.classList.toggle('wholesale-mode', mode === 'wholesale');
}

function wholesaleInquiry(productId, btn) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;
  const card = btn ? btn.closest('.product-card') : null;
  const qtyInput = card ? card.querySelector('.wholesale-qty-input') : null;
  let qty = parseInt(qtyInput ? qtyInput.value : '10', 10) || 10;
  if (qty < 10) qty = 10;
  if (qtyInput) qtyInput.value = qty;
  const msg = encodeURIComponent(`Hi NS Lanka, I'm interested in bulk purchase of:\n\nProduct: ${product.title}\nCategory: ${product.categoryName}\nPrice: Rs. ${product.price.toLocaleString()}\nQuantity: ${qty} units\n\nPlease share wholesale pricing and availability.`);
  window.open(`https://wa.me/94724267905?text=${msg}`, '_blank');
}

function checkoutCart() {
  if (shoppingCart.length === 0) {
    showToast("Your cart is empty!", "error");
    return;
  }
  const dict = i18n[currentLang] || i18n.en;
  const existing = document.getElementById('checkoutModal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'checkoutModal';
  modal.className = 'modal-backdrop active';
  modal.innerHTML = `
    <div class="modal-box checkout-modal-box">
      <div class="modal-header">
        <h3><i class="fas fa-shopping-bag"></i> ${dict.checkout_title}</h3>
        <button class="modal-close-btn" onclick="this.closest('.modal-backdrop').remove()"><i class="fas fa-xmark"></i></button>
      </div>
      <div class="modal-body">
        <div style="margin-bottom:16px;font-size:0.9rem;color:#64748B;">
          ${shoppingCart.map(item => `<div style="display:flex;justify-content:space-between;padding:4px 0;"><span>${item.title} x${item.quantity}</span><span>Rs. ${(item.price * item.quantity).toLocaleString()}</span></div>`).join('')}
          <div style="display:flex;justify-content:space-between;padding:8px 0;margin-top:8px;border-top:1px solid var(--border-light);font-weight:700;color:var(--text-dark);">
            <span>Total</span><span>Rs. ${shoppingCart.reduce((s, i) => s + i.price * i.quantity, 0).toLocaleString()}</span>
          </div>
        </div>
        <form id="checkoutForm" onsubmit="submitOrder(event)">
          <div class="form-group">
            <label>${dict.form_name} *</label>
            <input type="text" class="form-control" required placeholder="John Doe">
          </div>
          <div class="form-group">
            <label>${dict.form_whatsapp} *</label>
            <input type="tel" class="form-control" required placeholder="+94 77 123 4567">
          </div>
          <div class="form-group">
            <label>${dict.form_address} *</label>
            <textarea class="form-control" rows="2" required placeholder="No 123, Main Street"></textarea>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div class="form-group">
              <label>${dict.form_district} *</label>
              <input type="text" class="form-control" required placeholder="Colombo">
            </div>
            <div class="form-group">
              <label>${dict.form_postal} *</label>
              <input type="text" class="form-control" required placeholder="01000">
            </div>
          </div>
          <div class="form-group">
            <label>${dict.form_payment} *</label>
            <select class="form-control" required>
              <option value="">-- Select --</option>
              <option value="cod">${dict.form_cod}</option>
              <option value="bank">${dict.form_bank}</option>
            </select>
          </div>
          <button type="submit" class="btn-primary" style="width:100%;text-align:center;margin-top:8px;">
            <i class="fas fa-check-circle"></i> ${dict.form_place_order}
          </button>
        </form>
      </div>
    </div>`;
  document.body.appendChild(modal);
}

function submitOrder(event) {
  event.preventDefault();
  const dict = i18n[currentLang] || i18n.en;
  const modal = document.getElementById('checkoutModal');
  if (modal) modal.remove();
  showToast("Order placed successfully! We will contact you shortly.");
  setTimeout(() => showToast("Share your feedback — visit review.html to write a review"), 2500);
  shoppingCart = [];
  updateCartUI();
  document.getElementById('cartDrawer').classList.remove('active');
}

// --- ADMIN LOGIN ---
function initAdminLogin() {
  const btn = document.getElementById('adminLoginBtn');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'admin-login.html';
    });
  }
}

function initAdminLoginPage() {
  if (!document.getElementById('adminLoginForm')) return;
  const form = document.getElementById('adminLoginForm');
  const errorEl = document.getElementById('loginError');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    if (username === 'admin' && password === 'admin123') {
      sessionStorage.setItem('adminAuth', 'true');
      window.location.href = 'admin.html';
    } else {
      errorEl.textContent = 'Invalid username or password. Please try again.';
    }
  });
}

// --- USER LOGIN HANDLER ---
function handleUserLogin(event) {
  event.preventDefault();
  showToast("Welcome! You have been logged in successfully.");
  setTimeout(() => { window.location.href = 'index.html'; }, 1500);
}

// --- QUICK VIEW MODAL ---
function openQuickView(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');

  if (!modal || !content) return;

  content.innerHTML = `
    <div style="display:flex; gap:20px; flex-wrap:wrap;">
      <img src="${product.image}" style="width:200px; height:200px; object-fit:contain; background:#F8FAFC; border-radius:12px; padding:10px;">
      <div style="flex:1; min-width:240px;">
        <span style="color:#0084C7; font-weight:700; font-size:0.8rem; text-transform:uppercase;">${product.categoryName}</span>
        <h3 style="font-size:1.2rem; margin:6px 0 10px 0;">${product.title}</h3>
        <p style="font-size:0.88rem; color:#64748B; margin-bottom:15px;">100% Genuine original replacement spare part engineered for high reliability & heat endurance in Sri Lankan operating conditions.</p>
        <div style="font-size:1.4rem; font-weight:800; color:#CE1A1B; margin-bottom:20px;">Rs. ${product.price.toLocaleString()}</div>
        <button class="btn-primary" onclick="addToCart(${product.id}); document.getElementById('quickViewModal').classList.remove('active');">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeQuickView() {
  document.getElementById('quickViewModal').classList.remove('active');
}

// --- ORDER TRACKING SIMULATOR ---
function initOrderTracking() {
  const btn = document.getElementById('trackOrderSubmitBtn');
  const input = document.getElementById('trackOrderInput');
  const result = document.getElementById('trackingResultContainer');

  if (!btn || !input || !result) return;

  btn.addEventListener('click', () => {
    const val = input.value.trim();
    if (!val) {
      showToast("Please enter a valid Order ID (e.g. NS-8842)", "error");
      return;
    }

    result.style.display = 'block';
    result.innerHTML = `
      <div style="text-align:left; background:#F8FAFC; padding:20px; border-radius:12px; border:1px solid #E2E8F0; margin-top:20px;">
        <div style="display:flex; justify-space-between; align-items:center; margin-bottom:15px;">
          <h4 style="font-size:1.1rem; color:#0F172A;">Order Status: <span style="color:#7CB342;">In Transit</span></h4>
          <span style="font-size:0.85rem; color:#64748B;">Tracking Code: <strong>${val.toUpperCase()}</strong></span>
        </div>
        <p style="font-size:0.88rem; color:#64748B; margin-bottom:20px;">Courier Partner: <strong>Courier.lk / Pronto Express Sri Lanka</strong></p>
        <div class="timeline-stepper">
          <div class="step-item active">
            <div class="step-icon"><i class="fas fa-check"></i></div>
            <div class="step-label">Order Placed</div>
          </div>
          <div class="step-item active">
            <div class="step-icon"><i class="fas fa-box-open"></i></div>
            <div class="step-label">Dispatched</div>
          </div>
          <div class="step-item active">
            <div class="step-icon"><i class="fas fa-truck"></i></div>
            <div class="step-label">Out for Delivery</div>
          </div>
          <div class="step-item">
            <div class="step-icon"><i class="fas fa-home"></i></div>
            <div class="step-label">Delivered</div>
          </div>
        </div>
      </div>
    `;
  });
}

// --- FAQ ACCORDION ---
function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    }
  });
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.borderColor = type === 'error' ? '#CE1A1B' : '#7CB342';
  toast.innerHTML = `
    <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}" style="color:${type === 'error' ? '#CE1A1B' : '#7CB342'}; font-size:1.2rem;"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- TAB SWITCHING (cross-page navigation) ---
function switchTab(tabName) {
  var pageMap = {
    home: 'index.html',
    product: 'product.html',
    about: 'about.html',
    rental: 'rental.html',
    wholesale: 'wholesale.html',
    career: 'career.html',
    gallery: 'gallery.html',
    social: 'social.html',
    contact: 'contact.html',
    track: 'track.html',
    faq: 'faq.html',
    review: 'review.html'
  };
  window.location.href = pageMap[tabName] || 'index.html';
}

// --- PRODUCT CATALOG PAGE ---
function renderProductGrid(category = 'all', sort = 'featured') {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const dict = i18n[currentLang] || i18n.en;

  let filtered = category === 'all'
    ? productsData
    : productsData.filter(p => p.category === category);

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="category-empty">${dict.category_empty}</div>`;
    return;
  }

  if (sort === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sort === 'newest') {
    filtered = [...filtered].sort((a, b) => b.id - a.id);
  }

  grid.innerHTML = filtered.map(p => {
    const inStock = (p.stockQuantity != null ? p.stockQuantity : (p.inStock ? 1 : 0)) > 0;
    return `
    <div class="product-card${inStock ? '' : ' out-of-stock'}">
      <span class="product-badge ${p.badge}">${p.badgeText}</span>
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        ${!inStock ? `<div class="out-of-stock-overlay"><span>${dict.out_of_stock}</span></div>` : ''}
        <div class="product-actions-overlay">
          <button class="action-icon-btn" onclick="openQuickView(${p.id})" title="${dict.quick_view}">
            <i class="fas fa-eye"></i>
          </button>
          <button class="action-icon-btn" onclick="${inStock ? `addToCart(${p.id})` : `showToast('${dict.out_of_stock}')`}" title="${inStock ? dict.add_to_cart : dict.out_of_stock}">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <div class="product-body">
        <span class="product-category-tag">${dict[p.category] || p.categoryName}</span>
        <h3 class="product-title">${p.title}</h3>
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <span>(${p.rating})</span>
        </div>
        ${inStock ? `<div class="purchase-mode-toggle">
          <button class="mode-pill active" onclick="setPurchaseMode(this, 'retail')">${dict.retail}</button>
          <button class="mode-pill" onclick="setPurchaseMode(this, 'wholesale')">${dict.wholesale}</button>
        </div>` : ''}
        <div class="product-price-row">
          <div>
            <span class="product-price">Rs. ${p.price.toLocaleString()}</span>
            ${p.oldPrice ? `<span class="product-price-old">Rs. ${p.oldPrice.toLocaleString()}</span>` : ''}
          </div>
          <div class="product-actions-row">
            <button class="add-to-cart-btn" onclick="${inStock ? `addToCart(${p.id})` : `showToast('${dict.out_of_stock}')`}" ${inStock ? '' : 'disabled'}>
              <i class="fas fa-cart-plus"></i> ${inStock ? dict.add_to_cart : dict.out_of_stock}
            </button>
            ${inStock ? `<button class="buy-now-btn" onclick="buyNow(${p.id})"><i class="fas fa-bolt"></i> ${dict.buy_now}</button>` : ''}
          </div>
          ${inStock ? `<div class="wholesale-btn-wrap">
            <div class="wholesale-notice"><i class="fas fa-info-circle"></i> ${dict.wholesale_min_notice}</div>
            <div class="wholesale-qty-row">
              <label class="wholesale-qty-label">${dict.wholesale_qty}:</label>
              <input type="number" class="wholesale-qty-input" value="10" min="10" step="1">
            </div>
            <button class="wholesale-btn" onclick="wholesaleInquiry(${p.id}, this)"><i class="fab fa-whatsapp"></i> ${dict.wholesale_send}</button>
          </div>` : ''}
        </div>
      </div>
    </div>`;
  }).join('');
}

function initProductPage() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const category = params.get('category') || 'all';
  const sortSelect = document.getElementById('sortSelect');

  function reRender() {
    const activeLink = document.querySelector('.category-filter-list .category-filter-link.active');
    const cat = activeLink?.dataset.category || 'all';
    const sort = sortSelect ? sortSelect.value : 'featured';
    renderProductGrid(cat, sort);
  }

  if (category !== 'all') {
    const match = document.querySelector(`.category-filter-link[data-category="${category}"]`);
    if (match) {
      document.querySelectorAll('.category-filter-link').forEach(l => l.classList.remove('active'));
      match.classList.add('active');
    }
  }

  renderProductGrid(category);

  if (sortSelect) {
    sortSelect.addEventListener('change', reRender);
  }

  const sidebarLinks = document.querySelectorAll('.category-filter-list .category-filter-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.dataset.category || 'all';
      sidebarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      reRender();
    });
  });
}

// --- REVIEW PAGE ---
function initReviewPage() {
  const select = document.getElementById('reviewProduct');
  if (!select) return;

  productsData.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.title;
    select.appendChild(opt);
  });

  const stars = document.querySelectorAll('#starRatingInput .fa-star');
  const hidden = document.getElementById('reviewRating');
  if (!stars.length || !hidden) return;

  function setRating(val) {
    hidden.value = val;
    stars.forEach(s => {
      const starVal = parseInt(s.dataset.star, 10);
      s.classList.toggle('active', starVal <= val);
    });
  }

  stars.forEach(s => {
    s.addEventListener('click', () => setRating(parseInt(s.dataset.star, 10)));
    s.addEventListener('mouseenter', () => {
      const val = parseInt(s.dataset.star, 10);
      stars.forEach(ss => {
        ss.classList.toggle('hover', parseInt(ss.dataset.star, 10) <= val);
      });
    });
    s.addEventListener('mouseleave', () => {
      stars.forEach(ss => ss.classList.remove('hover'));
    });
  });
}

function handleReviewSubmit(event) {
  event.preventDefault();
  const dict = i18n[currentLang] || i18n.en;
  showToast(dict.review_success);
  document.getElementById('reviewForm').reset();
  document.getElementById('reviewRating').value = 0;
  document.querySelectorAll('#starRatingInput .fa-star').forEach(s => s.classList.remove('active'));
}

function filterCategory(catKey) {
  window.location.href = 'product.html' + (catKey ? '?category=' + catKey : '');
}

// ==========================================================================
// ADMIN PANEL
// ==========================================================================

function initAdminPanel() {
  const body = document.body;
  if (!body.classList.contains('admin-body')) return;

  // Auth check
  if (sessionStorage.getItem('adminAuth') !== 'true') {
    window.location.href = 'admin-login.html';
    return;
  }

  loadAdminData();

  // Navigation via hash
  function navigateToSection(hash) {
    const section = hash.replace('#', '') || 'dashboard';
    document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.admin-nav-item').forEach(i => i.classList.remove('active'));

    const target = document.getElementById('section-' + section);
    const navItem = document.querySelector(`.admin-nav-item[data-section="${section}"]`);
    if (target) target.classList.add('active');
    if (navItem) navItem.classList.add('active');

    const titles = { dashboard:'Dashboard', 'add-product':'Add Product', products:'Manage Products', orders:'Manage Orders', hero:'Manage Hero', reviews:'Manage Reviews' };
    const titleEl = document.getElementById('adminPageTitle');
    if (titleEl) titleEl.textContent = titles[section] || 'Dashboard';
  }

  window.addEventListener('hashchange', () => navigateToSection(window.location.hash));
  if (window.location.hash) {
    navigateToSection(window.location.hash);
  }

  // Mobile sidebar toggle
  const toggleBtn = document.getElementById('adminMenuToggle');
  const sidebar = document.getElementById('adminSidebar');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
  }

  // Add Product form
  const addForm = document.getElementById('adminAddProductForm');
  if (addForm) {
    addForm.addEventListener('submit', handleAddProduct);
  }

  // Image preview
  const imgInput = document.getElementById('apImage');
  const imgPreview = document.getElementById('apImagePreview');
  if (imgInput && imgPreview) {
    imgInput.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(ev) {
          imgPreview.innerHTML = '<img src="' + ev.target.result + '" alt="Preview">';
          imgPreview.classList.add('has-image');
        };
        reader.readAsDataURL(file);
      } else {
        imgPreview.classList.remove('has-image');
        imgPreview.innerHTML = '';
      }
    });
  }

  // Hero form
  const heroForm = document.getElementById('adminHeroForm');
  if (heroForm) {
    renderHeroSlides();
    heroForm.addEventListener('submit', handleHeroSave);
  }

  // Edit Product form
  const editForm = document.getElementById('editProductForm');
  if (editForm) {
    editForm.addEventListener('submit', handleEditProduct);
  }

  // Edit product image preview
  const epImage = document.getElementById('epImage');
  const epPreview = document.getElementById('epImagePreview');
  if (epImage && epPreview) {
    epImage.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(ev) {
          epPreview.innerHTML = '<img src="' + ev.target.result + '" alt="Preview">';
          epPreview.classList.add('has-image');
        };
        reader.readAsDataURL(file);
      } else {
        epPreview.classList.remove('has-image');
        epPreview.innerHTML = '';
      }
    });
  }

  updateDashboardStats();
  renderAdminProducts();
  renderAdminOrders();
  renderAdminReviews();

  // Close sidebar on nav click (mobile)
  document.querySelectorAll('.admin-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      if (sidebar) sidebar.classList.remove('open');
    });
  });
}

// --- DATA LAYER ---
const ADMIN_STORAGE_KEY = 'nslanka_admin_data';

function getAdminData() {
  try {
    const raw = localStorage.getItem(ADMIN_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return { products: [], orders: [], heroSlides: [], reviews: [] };
}

function saveAdminData(data) {
  localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(data));
}

function loadAdminData() {
  const data = getAdminData();
  // Seed sample products if empty
  if (data.products.length === 0) {
    data.products = [
      { id:1, title:'Blender Blade Assembly', category:'cat_blender', categoryText:'Blender Parts', price:850, oldPrice:950, badge:'', stockQuantity:10, image:'Images/blade-assembly.jpg' },
      { id:2, title:'Rice Cooker Inner Pot (4L)', category:'cat_rice_cooker', categoryText:'Rice Cooker Parts', price:1200, oldPrice:1450, badge:'BEST SELLER', stockQuantity:5, image:'Images/rice-cooker-pot.jpg' },
      { id:3, title:'Motor Capacitor 10µF', category:'cat_capacitor', categoryText:'Motor Capacitor', price:350, oldPrice:'', badge:'NEW', stockQuantity:25, image:'Images/capacitor-10uf.jpg' },
      { id:4, title:'Washing Machine Drain Pump', category:'cat_washing_machine', categoryText:'Washing Machine Parts', price:2200, oldPrice:'', badge:'', stockQuantity:0, image:'Images/drain-pump.jpg' },
    ];
  }
  // Seed sample orders
  if (data.orders.length === 0) {
    data.orders = [
      { id:'ORD-001', customer:'Kamal Perera', items:'Blender Blade x1, Capacitor x2', total:'LKR 1,550', payment:'Bank Transfer', status:'completed' },
      { id:'ORD-002', customer:'Nimal Fernando', items:'Drain Pump x1', total:'LKR 2,200', payment:'Cash on Delivery', status:'out_for_delivery' },
    ];
  }
  // Seed sample hero slides
  if (data.heroSlides.length === 0) {
    data.heroSlides = [
      { image:'Images/slide1.jpg', title:'Premium Appliance Spare Parts', subtitle:'Quality parts for all major brands' },
      { image:'Images/slide2.jpg', title:'Blender Parts & Accessories', subtitle:'Blades, jars, gaskets & more' },
    ];
  }
  // Seed sample reviews
  if (data.reviews.length === 0) {
    data.reviews = [
      { id:1, product:'Blender Blade Assembly', customer:'Saman Wijesinghe', rating:5, review:'Excellent quality blade. Perfect fit for my Philips blender.', status:'approved' },
      { id:2, product:'Rice Cooker Inner Pot', customer:'Dinesh Kumara', rating:4, review:'Good quality pot. Non-stick coating works well.', status:'approved' },
      { id:3, product:'Motor Capacitor 10µF', customer:'Priya Jayawardena', rating:5, review:'Works perfectly. Fast shipping too!', status:'pending' },
    ];
  }
  saveAdminData(data);
}

// --- DASHBOARD ---
function updateDashboardStats() {
  const data = getAdminData();
  document.getElementById('statProducts').textContent = data.products.length;
  document.getElementById('statOrders').textContent = data.orders.length;
  document.getElementById('statReviews').textContent = data.reviews.length;
  document.getElementById('statHero').textContent = data.heroSlides.length;
}

// --- PRODUCT CRUD ---
function getNextProductId(data) {
  return data.products.length > 0 ? Math.max(...data.products.map(p => p.id)) + 1 : 1;
}

function handleAddProduct(e) {
  e.preventDefault();
  const data = getAdminData();
  const catMap = {
    cat_blender:'Blender parts', cat_rice_cooker:'Rice cooker spare parts', cat_kettle:'Electric kettle spare parts',
    cat_pressure_cooker:'Pressure cooker spare parts', cat_fan:'Fan spare parts', cat_gas_cooker:'Gas cooker spare parts',
    cat_oven:'Oven spare parts', cat_washing_machine:'Washing machine spare parts', cat_refrigerator:'Refrigerator spare parts',
    cat_air_conditioner:'Air conditioner spare parts', cat_water_pump:'Water pump spare parts', cat_power_tools:'Power tools spare parts',
    cat_capacitor:'Motor capacitor', cat_gadgets:'Electrical gadgets', cat_power_supplies:'AC DC power supplies',
    cat_av_connectors:'Audio video connectors', cat_av_cables:'Audio video cables', cat_wall_brackets:'LCD/LED wall brackets',
    cat_soldering:'Soldering Accessories', cat_microphones:'Microphones'
  };
  const catVal = document.getElementById('apCategory').value;
  const fileInput = document.getElementById('apImage');
  const file = fileInput.files[0];

  function saveProduct(imageData) {
    const product = {
      id: getNextProductId(data),
      title: document.getElementById('apTitle').value.trim(),
      category: catVal,
      categoryText: catMap[catVal] || catVal,
      price: parseFloat(document.getElementById('apPrice').value) || 0,
      oldPrice: document.getElementById('apOldPrice').value ? parseFloat(document.getElementById('apOldPrice').value) : '',
      badge: document.getElementById('apBadgeText').value.trim(),
      stockQuantity: parseInt(document.getElementById('apStockQty').value, 10) || 0,
      image: imageData,
    };
    data.products.push(product);
    saveAdminData(data);
    showToast('Product "' + product.title + '" added successfully!');
    e.target.reset();
    document.getElementById('apImagePreview').classList.remove('has-image');
    document.getElementById('apImagePreview').innerHTML = '';
    updateDashboardStats();
    renderAdminProducts();
    window.location.hash = 'products';
  }

  if (file) {
    const reader = new FileReader();
    reader.onload = function(ev) {
      saveProduct(ev.target.result);
    };
    reader.readAsDataURL(file);
  } else {
    saveProduct('Images/product-placeholder.jpg');
  }
}

function renderAdminProducts() {
  const tbody = document.getElementById('adminProductsTbody');
  if (!tbody) return;
  const data = getAdminData();
  if (data.products.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:#94A3B8;padding:40px;">No products yet.</td></tr>';
    return;
  }
  tbody.innerHTML = data.products.map(p => {
    const qty = p.stockQuantity != null ? p.stockQuantity : (p.inStock ? 1 : 0);
    const inStock = qty > 0;
    return `
    <tr>
      <td>${p.id}</td>
      <td><strong>${escapeHtml(p.title)}</strong></td>
      <td>${escapeHtml(p.categoryText)}</td>
      <td>LKR ${p.price.toLocaleString()}</td>
      <td><span class="admin-badge ${inStock ? 'in-stock' : 'out-of-stock'}">${qty}</span></td>
      <td>
        <button class="admin-action-btn" style="background:#E3F2FD;color:#1565C0;" onclick="editProduct(${p.id})"><i class="fas fa-edit"></i> Edit</button>
        <button class="admin-action-btn danger" onclick="deleteProduct(${p.id})"><i class="fas fa-trash"></i> Delete</button>
      </td>
    </tr>
  `}).join('');
}

function deleteProduct(id) {
  if (!confirm('Delete this product?')) return;
  const data = getAdminData();
  data.products = data.products.filter(p => p.id !== id);
  saveAdminData(data);
  renderAdminProducts();
  updateDashboardStats();
  showToast('Product deleted.');
}

// --- EDIT PRODUCT ---
function editProduct(id) {
  const data = getAdminData();
  const product = data.products.find(p => p.id === id);
  if (!product) return;

  document.getElementById('epId').value = product.id;
  document.getElementById('epTitle').value = product.title;
  document.getElementById('epCategory').value = product.category;
  document.getElementById('epPrice').value = product.price;
  document.getElementById('epOldPrice').value = product.oldPrice || '';
  document.getElementById('epBadgeText').value = product.badge || '';
  document.getElementById('epStockQty').value = product.stockQuantity != null ? product.stockQuantity : (product.inStock ? 1 : 0);

  const preview = document.getElementById('epImagePreview');
  if (product.image && product.image.startsWith('data:')) {
    preview.innerHTML = '<img src="' + escapeHtml(product.image) + '" alt="Preview">';
    preview.classList.add('has-image');
  } else {
    preview.classList.remove('has-image');
    preview.innerHTML = '';
  }

  document.getElementById('editProductModal').classList.add('active');
}

function closeEditModal() {
  document.getElementById('editProductModal').classList.remove('active');
}

function handleEditProduct(e) {
  e.preventDefault();
  const id = parseInt(document.getElementById('epId').value, 10);
  const data = getAdminData();
  const product = data.products.find(p => p.id === id);
  if (!product) return;

  const catMap = {
    cat_blender:'Blender parts', cat_rice_cooker:'Rice cooker spare parts', cat_kettle:'Electric kettle spare parts',
    cat_pressure_cooker:'Pressure cooker spare parts', cat_fan:'Fan spare parts', cat_gas_cooker:'Gas cooker spare parts',
    cat_oven:'Oven spare parts', cat_washing_machine:'Washing machine spare parts', cat_refrigerator:'Refrigerator spare parts',
    cat_air_conditioner:'Air conditioner spare parts', cat_water_pump:'Water pump spare parts', cat_power_tools:'Power tools spare parts',
    cat_capacitor:'Motor capacitor', cat_gadgets:'Electrical gadgets', cat_power_supplies:'AC DC power supplies',
    cat_av_connectors:'Audio video connectors', cat_av_cables:'Audio video cables', cat_wall_brackets:'LCD/LED wall brackets',
    cat_soldering:'Soldering Accessories', cat_microphones:'Microphones'
  };

  const fileInput = document.getElementById('epImage');
  const file = fileInput.files[0];

  function saveChanges(imageData) {
    product.title = document.getElementById('epTitle').value.trim();
    product.category = document.getElementById('epCategory').value;
    product.categoryText = catMap[product.category] || product.category;
    product.price = parseFloat(document.getElementById('epPrice').value) || 0;
    product.oldPrice = document.getElementById('epOldPrice').value ? parseFloat(document.getElementById('epOldPrice').value) : '';
    product.badge = document.getElementById('epBadgeText').value.trim();
    product.stockQuantity = parseInt(document.getElementById('epStockQty').value, 10) || 0;
    if (imageData) product.image = imageData;

    saveAdminData(data);
    closeEditModal();
    renderAdminProducts();
    updateDashboardStats();
    showToast('Product "' + product.title + '" updated!');
  }

  if (file) {
    const reader = new FileReader();
    reader.onload = function(ev) {
      saveChanges(ev.target.result);
    };
    reader.readAsDataURL(file);
  } else {
    saveChanges(null);
  }
}

// --- ORDERS ---
function renderAdminOrders() {
  const tbody = document.getElementById('adminOrdersTbody');
  if (!tbody) return;
  const data = getAdminData();
  if (data.orders.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:#94A3B8;padding:40px;">No orders yet.</td></tr>';
    return;
  }
  const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'order_placed', label: 'Order Placed' },
    { value: 'dispatched', label: 'Dispatched' },
    { value: 'out_for_delivery', label: 'Out for Delivery' },
    { value: 'delivered', label: 'Delivered' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' }
  ];
  tbody.innerHTML = data.orders.map(o => `
    <tr>
      <td>${escapeHtml(o.id)}</td>
      <td>${escapeHtml(o.customer)}</td>
      <td>${escapeHtml(o.items)}</td>
      <td>${escapeHtml(o.total)}</td>
      <td>${escapeHtml(o.payment)}</td>
      <td><span class="admin-badge ${o.status === 'completed' ? 'completed' : 'pending'}">${o.status}</span></td>
      <td>
        <select class="admin-status-select" onchange="updateOrderStatus('${escapeHtml(o.id)}', this.value)" style="padding:6px 10px;border-radius:6px;border:1px solid #E2E8F0;font-size:0.85rem;">
          ${statusOptions.map(opt => `<option value="${opt.value}" ${o.status === opt.value ? 'selected' : ''}>${opt.label}</option>`).join('')}
        </select>
      </td>
    </tr>
  `).join('');
}

function updateOrderStatus(orderId, newStatus) {
  const data = getAdminData();
  const order = data.orders.find(o => o.id === orderId);
  if (!order) return;
  order.status = newStatus;
  saveAdminData(data);
  renderAdminOrders();
  showToast('Order ' + orderId + ' status updated to ' + newStatus);
}

// --- HERO SLIDES ---
function renderHeroSlides() {
  const container = document.getElementById('heroSlidesContainer');
  if (!container) return;
  const data = getAdminData();
  container.innerHTML = data.heroSlides.map((slide, idx) => `
    <div class="hero-slide-card" data-index="${idx}">
      <div class="form-group">
        <label>Slide Image</label>
        <input type="file" class="form-control hero-img-input" accept="image/*" data-idx="${idx}">
        <div class="admin-image-preview hero-img-preview ${slide.image && slide.image.startsWith('data:') ? 'has-image' : ''}" data-idx="${idx}">
          ${slide.image && slide.image.startsWith('data:') ? '<img src="' + escapeHtml(slide.image) + '" alt="Preview">' : ''}
        </div>
        <input type="hidden" class="hero-img" value="${escapeHtml(slide.image)}" data-idx="${idx}">
      </div>
      <div class="admin-form-row">
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control hero-title" value="${escapeHtml(slide.title)}">
        </div>
        <div class="form-group">
          <label>Subtitle</label>
          <input type="text" class="form-control hero-subtitle" value="${escapeHtml(slide.subtitle)}">
        </div>
      </div>
      <button type="button" class="admin-action-btn danger" onclick="removeHeroSlide(${idx})"><i class="fas fa-trash"></i> Remove</button>
    </div>
  `).join('');

  // Attach preview listeners
  container.querySelectorAll('.hero-img-input').forEach(input => {
    input.addEventListener('change', function() {
      const card = this.closest('.hero-slide-card');
      const preview = card.querySelector('.hero-img-preview');
      const hidden = card.querySelector('.hero-img');
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(ev) {
          if (preview) {
            preview.innerHTML = '<img src="' + ev.target.result + '" alt="Preview">';
            preview.classList.add('has-image');
          }
          if (hidden) hidden.value = ev.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  });
}

function addHeroSlide() {
  const data = getAdminData();
  data.heroSlides.push({ image:'', title:'', subtitle:'' });
  saveAdminData(data);
  renderHeroSlides();
  updateDashboardStats();
}

function removeHeroSlide(idx) {
  const data = getAdminData();
  data.heroSlides.splice(idx, 1);
  saveAdminData(data);
  renderHeroSlides();
  updateDashboardStats();
}

function handleHeroSave(e) {
  e.preventDefault();
  const data = getAdminData();
  const cards = document.querySelectorAll('.hero-slide-card');
  cards.forEach((card, idx) => {
    if (data.heroSlides[idx]) {
      const hidden = card.querySelector('.hero-img');
      data.heroSlides[idx].image = hidden ? hidden.value.trim() : '';
      data.heroSlides[idx].title = card.querySelector('.hero-title').value.trim();
      data.heroSlides[idx].subtitle = card.querySelector('.hero-subtitle').value.trim();
    }
  });
  saveAdminData(data);
  showToast('Hero slides saved!');
  updateDashboardStats();
}

// --- REVIEWS ---
function renderAdminReviews() {
  const tbody = document.getElementById('adminReviewsTbody');
  if (!tbody) return;
  const data = getAdminData();
  if (data.reviews.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;color:#94A3B8;padding:40px;">No reviews yet.</td></tr>';
    return;
  }
  const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected' }
  ];
  tbody.innerHTML = data.reviews.map(r => `
    <tr>
      <td>${r.id}</td>
      <td>${escapeHtml(r.product)}</td>
      <td>${escapeHtml(r.customer)}</td>
      <td>${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</td>
      <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${escapeHtml(r.review)}">${escapeHtml(r.review)}</td>
      <td>
        <select class="admin-status-select" onchange="updateReviewStatus(${r.id}, this.value)" style="padding:6px 10px;border-radius:6px;border:1px solid #E2E8F0;font-size:0.85rem;">
          ${statusOptions.map(opt => `<option value="${opt.value}" ${r.status === opt.value ? 'selected' : ''}>${opt.label}</option>`).join('')}
        </select>
      </td>
      <td>
        <button class="admin-action-btn danger" onclick="deleteReview(${r.id})"><i class="fas fa-trash"></i> Delete</button>
      </td>
    </tr>
  `).join('');
}

function updateReviewStatus(id, newStatus) {
  const data = getAdminData();
  const review = data.reviews.find(r => r.id === id);
  if (!review) return;
  review.status = newStatus;
  saveAdminData(data);
  renderAdminReviews();
  showToast('Review status updated to ' + newStatus);
}

function deleteReview(id) {
  if (!confirm('Delete this review?')) return;
  const data = getAdminData();
  data.reviews = data.reviews.filter(r => r.id !== id);
  saveAdminData(data);
  renderAdminReviews();
  updateDashboardStats();
  showToast('Review deleted.');
}

// --- AUTH ---
function adminLogout() {
  sessionStorage.removeItem('adminAuth');
  window.location.href = 'admin-login.html';
}

// --- HELPERS ---
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
