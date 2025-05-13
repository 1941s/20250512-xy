// 语言配置
const languages = {
    zh: {
        'nav-home': '首页',
        'nav-about': '关于我们',
        'nav-products': '产品中心',
        'nav-honors': '荣誉资质',
        'nav-contact': '联系我们',
        'btn-lang': 'EN',
        'home-title': '专业精密零件加工与制造',
        'home-subtitle': '精工细作，品质保证',
        'home-service1': 'CNC加工中心',
        'home-service1-desc': '先进的CNC设备，精密加工服务',
        'home-service2': '品质保证',
        'home-service2-desc': '严格的质量管理体系',
        'home-service3': '专业团队',
        'home-service3-desc': '经验丰富的技术团队',
        'footer-contact': '联系方式：',
        'footer-address': '地址：东莞市东城区牛山外经工业园南兴路8号',
        'about-title': '公司简介',
        'about-company': '东莞市祥盈金属制品有限公司',
        'about-desc': '东莞市祥盈金属制品有限公司成立于2009年，拥有多台：CNC加工中心，CNC加工中心，车铣复合加工中心，CNC数控车床，磨床，车床，钻床，线切割等设备，检测设备齐全。',
        'about-products': '公司主营产品：精密零配件，夹具，治具，五金，模具，金属产品，机械设备等加工与制造。',
        'about-industries': '已合作行业：医疗设备，机器人，精密检测设备，激光设备，照明设备，自动化设备，LED设备，汽车行业，物流行业，电子元器件，汽动元器件，外贸机，机械设备等等行业。',
        'about-welcome': '东莞市祥盈金属制品有限公司欢迎各界朋友来考察，参观，指导！',
        'about-cooperation': '诚邀各界广大人士来祥盈公司洽谈工作，洽谈合作！',
        'products-title': '产品中心',
        'products-cat-all': '全部',
        'products-cat-cnc': 'CNC加工系列',
        'products-cat-mold': '车铣件系列',
        'products-cat-precision': '精密零件系列',
        'products-cat-machine': '机械零件系列',
        'products-cat-other': '其他加工',
        'product1-title': 'CNC机床加工',
        'product1-desc': '高精度CNC加工制造的精密零件',
        'product2-title': '专业CNC加工',
        'product2-desc': '专业定制各类精密模具',
        'product3-title': '精密五金零件加工',
        'product3-desc': '高精度机械零部件加工',
        'product4-title': 'CNC加工支架',
        'product5-title': '模具CNC加工',
        'product6-title': 'CNC加工零部件',
        'product7-title': '精密零件加工',
        'product8-title': '精密零件加工',
        'product9-title': '精密零配件加工',
        'honors-title': '荣誉资质',
        'honor1-title': '优秀供应商证书',
        'honor1-year': '2015年度',
        'honor2-title': '优秀供应商证书',
        'honor2-year': '2013年度',
        'honor3-title': '优秀供应商证书',
        'honor3-year': '2011年度',
        'certifications-title': '资质认证',
        'cert1-title': 'ISO 9001质量管理体系认证',
        'cert1-desc': '国际标准质量管理体系认证，确保产品质量符合国际标准。我司严格按照ISO 9001标准进行生产管理，保证产品的一致性和可靠性。',
        'cert2-title': '高新技术企业认证',
        'cert2-desc': '国家级高新技术企业认证，表明我司在技术研发和创新方面达到了较高水平，享受国家相关政策支持。',
        'contact-title': '联系我们',
        'contact-info-title': '联系祥盈',
        'contact-ways-title': '联系方式',
        'contact-address-title': '地 址',
        'contact-address': '东莞市东城区牛山外经工业园南兴路8号',
        'contact-phone-title': '电 话',
        'contact-person-title': '联系人',
        'contact-email-title': '邮 箱',
        'contact-fax-title': '传 真',
        'contact-website-title': '网 址',
        'contact-wechat-title': '微信公众号',
        'contact-form-title': '在线留言',
        'contact-form-name': '姓名',
        'contact-form-email': '邮箱',
        'contact-form-phone': '电话',
        'contact-form-message': '留言内容',
        'contact-form-submit': '提交',
        'contact-map-title': '公司位置'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About Us',
        'nav-products': 'Products',
        'nav-honors': 'Honors',
        'nav-contact': 'Contact',
        'btn-lang': '中文',
        'home-title': 'Professional Precision Parts Processing and Manufacturing',
        'home-subtitle': 'Precision Craftsmanship, Quality Assurance',
        'home-service1': 'CNC Machining Center',
        'home-service1-desc': 'Advanced CNC Equipment, Precision Machining Services',
        'home-service2': 'Quality Assurance',
        'home-service2-desc': 'Strict Quality Management System',
        'home-service3': 'Professional Team',
        'home-service3-desc': 'Experienced Technical Team',
        'footer-contact': 'Contact Information:',
        'footer-address': 'Address: No.8 Nanxing Road, Niushan Foreign Trade Industrial Park, Dongcheng District, Dongguan',
        'about-title': 'Company Profile',
        'about-company': 'Dongguan Xiangying Metal Products Co., Ltd.',
        'about-desc': 'Dongguan Xiangying Metal Products Co., Ltd. was established in 2009, equipped with multiple CNC machining centers, CNC machining centers, turning and milling compound machining centers, CNC lathes, grinding machines, lathes, drilling machines, wire cutting and other equipment, with complete testing equipment.',
        'about-products': 'Main products: Processing and manufacturing of precision parts, fixtures, jigs, hardware, molds, metal products, mechanical equipment, etc.',
        'about-industries': 'Cooperating industries: Medical equipment, robotics, precision testing equipment, laser equipment, lighting equipment, automation equipment, LED equipment, automotive industry, logistics industry, electronic components, pneumatic components, foreign trade machinery, mechanical equipment, and more.',
        'about-welcome': 'Dongguan Xiangying Metal Products Co., Ltd. welcomes friends from all walks of life to visit, tour, and guide!',
        'about-cooperation': 'We sincerely invite people from all walks of life to come to Xiangying company to discuss work and cooperation!',
        'products-title': 'Products',
        'products-cat-all': 'All',
        'products-cat-cnc': 'CNC Processing Series',
        'products-cat-mold': 'Turning & Milling Series',
        'products-cat-precision': 'Precision Parts Series',
        'products-cat-machine': 'Mechanical Parts Series',
        'products-cat-other': 'Other Processing',
        'product1-title': 'CNC Machine Processing',
        'product1-desc': 'High-precision CNC manufactured parts',
        'product2-title': 'Professional CNC Processing',
        'product2-desc': 'Professional custom precision molds',
        'product3-title': 'Precision Hardware Parts Processing',
        'product3-desc': 'High-precision mechanical parts processing',
        'product4-title': 'CNC Processed Brackets',
        'product5-title': 'Mold CNC Processing',
        'product6-title': 'CNC Processed Components',
        'product7-title': 'Precision Parts Processing',
        'product8-title': 'Precision Parts Processing',
        'product9-title': 'Precision Components Processing',
        'honors-title': 'Honors & Certifications',
        'honor1-title': 'Outstanding Supplier Certificate',
        'honor1-year': 'Year 2015',
        'honor2-title': 'Outstanding Supplier Certificate',
        'honor2-year': 'Year 2013',
        'honor3-title': 'Outstanding Supplier Certificate',
        'honor3-year': 'Year 2011',
        'certifications-title': 'Certifications',
        'cert1-title': 'ISO 9001 Quality Management System Certification',
        'cert1-desc': 'International Standard Quality Management System Certification, ensuring that product quality meets international standards. Our company strictly follows ISO 9001 standards for production management to ensure product consistency and reliability.',
        'cert2-title': 'High-Tech Enterprise Certification',
        'cert2-desc': 'National High-Tech Enterprise Certification, indicating that our company has reached a high level in technology development and innovation, enjoying relevant national policy support.',
        'contact-title': 'Contact Us',
        'contact-info-title': 'Contact Xiangying',
        'contact-ways-title': 'Contact Information',
        'contact-address-title': 'Address',
        'contact-address': 'No.8 Nanxing Road, Niushan Foreign Trade Industrial Park, Dongcheng District, Dongguan',
        'contact-phone-title': 'Phone',
        'contact-person-title': 'Contact',
        'contact-email-title': 'Email',
        'contact-fax-title': 'Fax',
        'contact-website-title': 'Website',
        'contact-wechat-title': 'WeChat Official Account',
        'contact-form-title': 'Online Message',
        'contact-form-name': 'Name',
        'contact-form-email': 'Email',
        'contact-form-phone': 'Phone',
        'contact-form-message': 'Message',
        'contact-form-submit': 'Submit',
        'contact-map-title': 'Company Location'
    }
};

// 当前语言
let currentLang = 'zh';

// 切换语言函数
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateLanguage();
}

// 更新页面语言
function updateLanguage() {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (languages[currentLang][key]) {
            element.textContent = languages[currentLang][key];
        }
    });
    
    // 保存语言选择到本地存储
    localStorage.setItem('preferred-language', currentLang);
}

// 页面加载时检查并设置语言
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang) {
        currentLang = savedLang;
        updateLanguage();
    }
}); 