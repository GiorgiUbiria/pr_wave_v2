// Internationalization configuration for English and Georgian
export const languages = {
	en: {
		code: 'en',
		name: 'English',
		flag: '🇺🇸'
	},
	ka: {
		code: 'ka',
		name: 'ქართული',
		flag: '🇬🇪'
	}
} as const;

export type Language = keyof typeof languages;

// Default language
export const defaultLanguage: Language = 'en';

// Translations
export const translations = {
	en: {
		// Navigation
		'nav.home': 'Home',
		'nav.about': 'About',
		'nav.blog': 'Blog',
		'nav.courses': 'Courses',
		'nav.contact': 'Contact',
		'nav.services': 'Services',
		'nav.faq': 'FAQ',
		'nav.learning': 'Learning',
		'nav.masterclasses': 'Masterclasses',
		'nav.successStories': 'Success Stories',
		'nav.terms': 'Terms & Conditions',
		'nav.privacy': 'Privacy Policy',
		
		// Hero Section
		'hero.tagline': 'Riding the Wave of Digital Success in Georgia',
		'hero.description': 'Transform your digital presence with our comprehensive social media management, advertising solutions, and expert mentorship. We help Georgian businesses ride the wave of digital success.',
		'hero.getStarted': 'Get Started',
		'hero.learnMore': 'Learn More',
		
		// Services Section
		'services.title': 'Our Services',
		'services.subtitle': 'Comprehensive digital marketing solutions tailored for Georgian businesses',
		'services.basic.title': 'BASIC Service Package',
		'services.basic.price': '1200 GEL',
		'services.basic.description': 'Complete management of your social media presence across all major platforms',
		'services.advertising.title': 'Advertising Services',
		'services.advertising.description': 'Strategic paid advertising campaigns tailored to your budget and requirements',
		'services.technical.title': 'Primary Technical Service',
		'services.technical.price': '1000 GEL',
		'services.technical.description': 'Complete technical setup and optimization of your social media presence',
		
		// Services Comparison
		'services.comparison.title': 'Service Comparison',
		'services.comparison.platform': 'Platform',
		'services.comparison.frequency': 'Frequency',
		'services.comparison.contentType': 'Content Type',
		'services.comparison.additional': 'Additional Services',
		'services.comparison.facebook': 'Facebook',
		'services.comparison.instagram': 'Instagram',
		'services.comparison.tiktok': 'TikTok',
		'services.comparison.fbFreq': '2 posts/week, Stories 5 days/week',
		'services.comparison.igFreq': '2 posts/week, Stories 5 days/week',
		'services.comparison.ttFreq': 'Regular posting',
		'services.comparison.photoVideo': 'Photo/Video content creation',
		'services.comparison.videoParticipation': 'Video content with client participation',
		'services.comparison.campaigns': '2 advertising campaigns/month',
		'services.comparison.shooting': 'Content shooting 1-2 times/month',
		'services.comparison.note': 'Additional services can be arranged based on specific needs.',
		
		// Why Choose Our Services
		'services.why.title': 'Why Choose PR Wave Services?',
		'services.why.georgian.title': 'Georgian Market Focus',
		'services.why.georgian.desc': 'We understand the Georgian market and create content that resonates with local audiences.',
		'services.why.content.title': 'Professional Content Creation',
		'services.why.content.desc': 'Our team visits your location to create authentic, high-quality photo and video content.',
		'services.why.data.title': 'Data-Driven Results',
		'services.why.data.desc': 'Every strategy is backed by analytics and optimized for maximum engagement and ROI.',
		'services.why.collaborative.title': 'Collaborative Approach',
		'services.why.collaborative.desc': 'We work closely with you, involving you in content creation for authentic brand representation.',
		'services.why.trending.title': 'Trending Content',
		'services.why.trending.desc': 'Stay ahead with the latest social media trends and platform-specific optimizations.',
		'services.why.educational.title': 'Educational Support',
		'services.why.educational.desc': 'Learn alongside our services with insights and tips to grow your digital marketing knowledge.',
		
		// Services CTA
		'services.cta.title': 'Ready to Transform Your Digital Presence?',
		'services.cta.subtitle': 'Choose the service that best fits your business needs and start your journey to digital success',
		'services.cta.getStarted': 'Get Started Today',
		'services.cta.exploreCourses': 'Explore Our SMM Course',
		
		// Services What's Included
		'services.whatsIncluded': "What's Included:",
		'services.platformBreakdown': 'Platform Breakdown:',
		'services.facebookInstagram': 'Facebook & Instagram:',
		'services.tiktok': 'TikTok:',
		'services.note': 'Note:',
		'services.perfectFor': 'Perfect for:',
		'services.individualPricing': 'Individual Pricing',
		'services.requestQuote': 'Request Quote',
		'services.bookService': 'Book Service',
		
		// BASIC Package Details
		'services.basic.item1': 'Facebook, Instagram, and TikTok channel management',
		'services.basic.item2': 'Content creation with photo/video material shooting 1-2 times per month',
		'services.basic.item3': 'On-site visits to capture photos and trending videos',
		'services.basic.item4': 'Professional material processing for banners and reels',
		'services.basic.item5': '2 posts per week posting schedule',
		'services.basic.item6': 'Daily stories for 5 days per week (1-3 per day)',
		'services.basic.item7': 'TikTok video content with client participation',
		'services.basic.item8': 'Model services for video content (participation and voiceover)',
		'services.basic.platform1': '2 posts per week',
		'services.basic.platform2': 'Stories 5 days/week',
		'services.basic.platform3': 'Professional photo/video content',
		'services.basic.platform4': 'Regular video posting',
		'services.basic.platform5': 'Client participation required',
		'services.basic.platform6': 'Live engagement support',
		
		// Advertising Package Details
		'services.advertising.item1': 'Campaign planning according to client requirements',
		'services.advertising.item2': 'Appropriate budget allocation',
		'services.advertising.item3': 'Maximum 2 advertising campaigns per month',
		'services.advertising.item4': 'Campaign creation and setup',
		'services.advertising.item5': 'Ongoing monitoring and optimization',
		'services.advertising.item6': 'Performance reporting',
		'services.advertising.note': 'Pricing is determined individually based on your specific requirements and campaign scope.',
		
		// Technical Service Details
		'services.technical.item1': 'Comprehensive analysis of existing social media accounts',
		'services.technical.item2': 'Professional setup and configuration',
		'services.technical.item3': 'Technical optimization for better performance',
		'services.technical.item4': 'Initial strategy development',
		'services.technical.item5': 'Account security and privacy settings',
		'services.technical.item6': 'Integration setup between platforms',
		'services.technical.note': 'New businesses or those looking to optimize their existing social media setup.',
		
		// Course Section
		'course.title': 'SMM PLUS Course',
		'course.price': '1350 GEL',
		'course.sessions': '20 Sessions',
		'course.duration': '7-8 Weeks',
		'course.description': 'Comprehensive social media marketing learning course',
		'course.enroll': 'Enroll Now',
		'course.learnMore': 'Learn More',
		
		// About Section
		'about.title': 'Meet Our Founders',
		'about.description': 'PR Wave is led by two passionate experts: Nino Chkheize (Film Director & Businessman) and Leila Berzenishvili-Qahveji (Financist & Digital Marketer).',
		'about.experience': 'Founded in 2022, our founders bring together unique experience in creative direction and financial strategy to help Georgian businesses establish a strong digital presence.',
		'about.learnMore': 'Learn About Our Team',
		
		// Courses Section
		'courses.title': 'Master Social Media',
		'courses.subtitle': 'Learn the ins and outs of social media platforms with our comprehensive SMM PLUS course',
		'courses.viewCourses': 'View Courses',
		
		// CTA Section
		'cta.title': 'Ready to Ride the Wave?',
		'cta.subtitle': 'Join Georgian businesses that have transformed their digital presence with PR Wave',
		'cta.startJourney': 'Start Your Journey',
		'cta.readBlog': 'Read Our Blog',
		
		// Blog
		'blog.title': 'PR Wave Blog',
		'blog.subtitle': 'Latest insights, tips, and trends in social media marketing',
		'blog.noPosts': 'No Blog Posts Yet',
		'blog.noPostsDesc': "We're working on creating amazing content for you. Check back soon!",
		'blog.contactUs': 'Contact Us',
		'blog.readMore': 'Read More',
		'blog.featured': 'Featured',
		'blog.minRead': 'min read',
		
		// Newsletter
		'newsletter.title': 'Stay Updated',
		'newsletter.subtitle': 'Get the latest social media tips and digital marketing insights delivered to your inbox.',
		'newsletter.placeholder': 'Enter your email address',
		'newsletter.subscribe': 'Subscribe',
		
		// FAQ
		'faq.title': 'Frequently Asked Questions',
		'faq.subtitle': 'Find answers to common questions about our services and courses',
		'faq.q1.question': 'What will I learn in the course?',
		'faq.q1.answer': 'During the course, you will learn identically to an individual course. Your cases will be fully reviewed. You will learn both technical and professional setup of social networks, advertising in Ads Manager and advertising campaigns, photo-video shooting, which is carried out during visits to real clients. Also, photo-video material processing in various applications. Additional online meetings 1-2 times per week in case of additional questions. You will learn copywriting, branding, and various "tricks" for brand popularization.',
		'faq.q2.question': 'How much does social media marketing service cost?',
		'faq.q2.answer': 'The basic package for social media management costs 1200 GEL.',
		'faq.q3.question': 'How much does the course cost?',
		'faq.q3.answer': 'The complete SMM PLUS course costs 1350 GEL.',
		'faq.q4.question': 'What do I need for the course?',
		'faq.q4.answer': 'Essential Requirements: Most important: Dedication and commitment. Weekly commitment: 2 hours online + additional time for exercises. Equipment needed: Computer (laptop/desktop), Mobile phone, Tripod (recommended), Good lighting (recommended), Phone microphone. Language requirement: English knowledge at minimum A1 level.',
		
		// Contact
		'contact.title': 'Get In Touch',
		'contact.subtitle': 'Ready to transform your digital presence? Let\'s start the conversation.',
		'contact.formTitle': 'Send Us a Message',
		'contact.nameLabel': 'Full Name',
		'contact.emailLabel': 'Email Address',
		'contact.companyLabel': 'Company Name',
		'contact.serviceLabel': 'Service Interest',
		'contact.selectService': 'Select a service',
		'contact.socialMedia': 'Social Media Management',
		'contact.advertising': 'Digital Advertising',
		'contact.mentorship': 'Business Mentorship',
		'contact.content': 'Content Creation',
		'contact.strategy': 'Brand Strategy',
		'contact.analytics': 'Analytics & Reporting',
		'contact.courses': 'Courses',
		'contact.other': 'Other',
		'contact.budgetLabel': 'Budget Range',
		'contact.selectBudget': 'Select budget range',
		'contact.under1k': 'Under $1,000/month',
		'contact.1k5k': '$1,000 - $5,000/month',
		'contact.5k10k': '$5,000 - $10,000/month',
		'contact.10kplus': '$10,000+/month',
		'contact.messageLabel': 'Message',
		'contact.messagePlaceholder': 'Tell us about your project and goals...',
		'contact.sendButton': 'Send Message',
		'contact.infoTitle': 'Contact Information',
		'contact.email': 'Email',
		'contact.phone': 'Phone',
		'contact.address': 'Address',
		'contact.hoursTitle': 'Business Hours',
		'contact.weekdays': 'Monday - Friday',
		'contact.weekdayHours': '9:00 AM - 6:00 PM',
		'contact.saturday': 'Saturday',
		'contact.saturdayHours': '10:00 AM - 4:00 PM',
		'contact.sunday': 'Sunday',
		'contact.sundayHours': 'Closed',
		'contact.followTitle': 'Follow Us',
		'contact.facebook': 'Facebook',
		'contact.instagram': 'Instagram',
		'contact.twitter': 'Twitter',
		'contact.linkedin': 'LinkedIn',
		'contact.website': 'Website',
		
		// Footer
		'footer.company': 'PR Wave',
		'footer.description': 'Professional Social Media Management for Georgian Businesses',
		'footer.rights': 'All rights reserved',
		'footer.terms': 'Terms & Conditions',
		'footer.privacy': 'Privacy Policy',
		
		// Common
		'common.loading': 'Loading...',
		'common.error': 'An error occurred',
		'common.success': 'Success!',
		'common.readMore': 'Read More',
		'common.learnMore': 'Learn More',
		'common.getStarted': 'Get Started',
	},
	ka: {
		// Navigation
		'nav.home': 'მთავარი',
		'nav.about': 'ჩვენ შესახებ',
		'nav.blog': 'ბლოგი',
		'nav.courses': 'კურსები',
		'nav.contact': 'კონტაქტი',
		'nav.services': 'სერვისები',
		'nav.faq': 'ხშირად დასმული კითხვები',
		'nav.learning': 'სწავლება',
		'nav.masterclasses': 'მასტერკლასები',
		'nav.successStories': 'წარმატების ისტორიები',
		'nav.terms': 'წესები და პირობები',
		'nav.privacy': 'კონფიდენციალურობის პოლიტიკა',
		
		// Hero Section
		'hero.tagline': 'დაეშვით ციფრული წარმატების ტალღას საქართველოში',
		'hero.description': 'გარდაქმენით თქვენი ციფრული არსებობა ჩვენი ყოვლისმომცველი სოციალური მედიის მართვით, სარეკლამო გადაწყვეტებით და ექსპერტის ხელმძღვანელობით. ჩვენ ვეხმარებით ქართულ ბიზნესებს ციფრული წარმატების ტალღას დაეშვან.',
		'hero.getStarted': 'დაწყება',
		'hero.learnMore': 'მეტის შესწავლა',
		
		// Services Section
		'services.title': 'ჩვენი სერვისები',
		'services.subtitle': 'ყოვლისმომცველი ციფრული მარკეტინგის გადაწყვეტები, რომლებიც მორგებულია ქართული ბიზნესის საჭიროებებზე',
		'services.basic.title': 'BASIC სერვისის პაკეტი',
		'services.basic.price': '1200 ლარი',
		'services.basic.description': 'სოციალური მედიის სრული მართვა ყველა მთავარ პლატფორმაზე',
		'services.advertising.title': 'რეკლამირების სერვისები',
		'services.advertising.description': 'სტრატეგიული ფასიანი სარეკლამო კამპანიები თქვენი ბიუჯეტისა და მოთხოვნების შესაბამისად',
		'services.technical.title': 'პირველადი ტექნიკური სერვისი',
		'services.technical.price': '1000 ლარი',
		'services.technical.description': 'სოციალური მედიის სრული ტექნიკური მოწყობა და ოპტიმიზაცია',
		
		// Services Comparison
		'services.comparison.title': 'სერვისების შედარება',
		'services.comparison.platform': 'პლატფორმა',
		'services.comparison.frequency': 'სიხშირე',
		'services.comparison.contentType': 'კონტენტის ტიპი',
		'services.comparison.additional': 'დამატებითი სერვისები',
		'services.comparison.facebook': 'ფეისბუკი',
		'services.comparison.instagram': 'ინსტაგრამი',
		'services.comparison.tiktok': 'ტიკტოკი',
		'services.comparison.fbFreq': '2 პოსტი/კვირაში, სტორი 5 დღე/კვირაში',
		'services.comparison.igFreq': '2 პოსტი/კვირაში, სტორი 5 დღე/კვირაში',
		'services.comparison.ttFreq': 'რეგულარული პოსტინგი',
		'services.comparison.photoVideo': 'ფოტო/ვიდეო კონტენტის შექმნა',
		'services.comparison.videoParticipation': 'ვიდეო კონტენტი კლიენტის მონაწილეობით',
		'services.comparison.campaigns': '2 სარეკლამო კამპანია/თვეში',
		'services.comparison.shooting': 'კონტენტის გადაღება 1-2-ჯერ/თვეში',
		'services.comparison.note': 'დამატებითი სერვისები შეიძლება მოეწყოს კონკრეტული საჭიროებების მიხედვით.',
		
		// Why Choose Our Services
		'services.why.title': 'რატომ აირჩიოთ PR Wave-ის სერვისები?',
		'services.why.georgian.title': 'ქართული ბაზრის ფოკუსი',
		'services.why.georgian.desc': 'ჩვენ ვიცნობთ ქართულ ბაზარს და ვქმნით კონტენტს, რომელიც რეზონანსს ახდენს ადგილობრივ აუდიტორიასთან.',
		'services.why.content.title': 'პროფესიონალური კონტენტის შექმნა',
		'services.why.content.desc': 'ჩვენი გუნდი სტუმრობს თქვენს ლოკაციას, რათა შექმნას ავთენტური, მაღალი ხარისხის ფოტო და ვიდეო კონტენტი.',
		'services.why.data.title': 'მონაცემებზე დაფუძნებული შედეგები',
		'services.why.data.desc': 'ყველა სტრატეგია მხარდაჭერილია ანალიტიკით და ოპტიმიზებულია მაქსიმალური ჩართულობისა და ROI-სთვის.',
		'services.why.collaborative.title': 'კოლაბორაციული მიდგომა',
		'services.why.collaborative.desc': 'ჩვენ მჭიდროდ ვთანამშრომლობთ თქვენთან, ჩავრთავთ თქვენ კონტენტის შექმნაში ავთენტური ბრენდის წარმოდგენისთვის.',
		'services.why.trending.title': 'ტრენდული კონტენტი',
		'services.why.trending.desc': 'იყავით წინ უახლესი სოციალური მედიის ტრენდებით და პლატფორმა-სპეციფიკური ოპტიმიზაციებით.',
		'services.why.educational.title': 'საგანმანათლებლო მხარდაჭერა',
		'services.why.educational.desc': 'ისწავლეთ ჩვენი სერვისების პარალელურად ინსაიტებითა და რჩევებით, რათა გაზარდოთ თქვენი ციფრული მარკეტინგის ცოდნა.',
		
		// Services CTA
		'services.cta.title': 'მზად ხართ გარდაქმნათ თქვენი ციფრული პრეზენსი?',
		'services.cta.subtitle': 'აირჩიეთ სერვისი, რომელიც ყველაზე კარგად შეესაბამება თქვენი ბიზნესის საჭიროებებს და დაიწყეთ მგზავრობა ციფრული წარმატებისკენ',
		'services.cta.getStarted': 'დაიწყეთ დღესვე',
		'services.cta.exploreCourses': 'გაეცანით ჩვენს SMM კურსს',
		
		// Services What's Included
		'services.whatsIncluded': 'რა შედის:',
		'services.platformBreakdown': 'პლატფორმების დაყოფა:',
		'services.facebookInstagram': 'Facebook და Instagram:',
		'services.tiktok': 'TikTok:',
		'services.note': 'შენიშვნა:',
		'services.perfectFor': 'იდეალურია:',
		'services.individualPricing': 'ინდივიდუალური ფასდაწესება',
		'services.requestQuote': 'ფასის მოთხოვნა',
		'services.bookService': 'სერვისის დაჯავშნა',
		
		// BASIC Package Details
		'services.basic.item1': 'Facebook, Instagram და TikTok არხების მართვა',
		'services.basic.item2': 'კონტენტის შექმნა ფოტო/ვიდეო მასალის გადაღებით თვეში 1-2-ჯერ',
		'services.basic.item3': 'ადგილზე ვიზიტები ფოტოებისა და ტრენდული ვიდეოების გადასაღებად',
		'services.basic.item4': 'მასალის პროფესიონალური დამუშავება ბანერებისა და რილებისთვის',
		'services.basic.item5': 'კვირაში 2 პოსტის განრიგი',
		'services.basic.item6': 'ყოველდღიური სტორები კვირაში 5 დღე (დღეში 1-3)',
		'services.basic.item7': 'TikTok ვიდეო კონტენტი კლიენტის მონაწილეობით',
		'services.basic.item8': 'მოდელის სერვისები ვიდეო კონტენტისთვის (მონაწილეობა და ხმის თანხლება)',
		'services.basic.platform1': 'კვირაში 2 პოსტი',
		'services.basic.platform2': 'სტორები კვირაში 5 დღე',
		'services.basic.platform3': 'პროფესიონალური ფოტო/ვიდეო კონტენტი',
		'services.basic.platform4': 'რეგულარული ვიდეო პოსტინგი',
		'services.basic.platform5': 'კლიენტის მონაწილეობა აუცილებელია',
		'services.basic.platform6': 'ცოცხალი ჩართულობის მხარდაჭერა',
		
		// Advertising Package Details
		'services.advertising.item1': 'კამპანიის დაგეგმვა კლიენტის მოთხოვნების შესაბამისად',
		'services.advertising.item2': 'შესაბამისი ბიუჯეტის განაწილება',
		'services.advertising.item3': 'მაქსიმუმ 2 სარეკლამო კამპანია თვეში',
		'services.advertising.item4': 'კამპანიის შექმნა და მოწყობა',
		'services.advertising.item5': 'მუდმივი მონიტორინგი და ოპტიმიზაცია',
		'services.advertising.item6': 'შესრულების ანგარიშგება',
		'services.advertising.note': 'ფასდაწესება განისაზღვრება ინდივიდუალურად თქვენი კონკრეტული მოთხოვნებისა და კამპანიის მასშტაბის მიხედვით.',
		
		// Technical Service Details
		'services.technical.item1': 'არსებული სოციალური მედიის ანგარიშების ყოვლისმომცველი ანალიზი',
		'services.technical.item2': 'პროფესიონალური მოწყობა და კონფიგურაცია',
		'services.technical.item3': 'ტექნიკური ოპტიმიზაცია უკეთესი შესრულებისთვის',
		'services.technical.item4': 'საწყისი სტრატეგიის შემუშავება',
		'services.technical.item5': 'ანგარიშის უსაფრთხოებისა და კონფიდენციალურობის პარამეტრები',
		'services.technical.item6': 'პლატფორმებს შორის ინტეგრაციის მოწყობა',
		'services.technical.note': 'ახალი ბიზნესები ან ისინი, ვინც სურთ არსებული სოციალური მედიის მოწყობის ოპტიმიზაცია.',
		
		// Course Section
		'course.title': 'SMM PLUS კურსი',
		'course.price': '1350 ლარი',
		'course.sessions': '20 შეხვედრა',
		'course.duration': '7-8 კვირა',
		'course.description': 'სოციალური მედიის მარკეტინგის შემსწავლელი კურსი',
		'course.enroll': 'ჩაწერა',
		'course.learnMore': 'მეტის შესწავლა',
		
		// About Section
		'about.title': 'გაიცანით ჩვენი დამფუძნებლები',
		'about.description': 'PR Wave-ს ხელმძღვანელობს ორი ვნებიანი ექსპერტი: ნინო ჩხეიძე (კინორეჟისორი და ბიზნესმენი) და ლეილა ბერძენიშვილი-ქაჰვეჯი (ფინანსისტი და ციფრული მარკეტერი).',
		'about.experience': '2022 წელს დაარსებული, ჩვენი დამფუძნებლები ერთად აერთიანებენ უნიკალურ გამოცდილებას კრეატიულ მიმართულებასა და ფინანსურ სტრატეგიაში, რათა დაეხმარონ ქართულ ბიზნესებს ძლიერი ციფრული პრეზენსის დამყარებაში.',
		'about.learnMore': 'გაიცანით ჩვენი გუნდი',
		
		// Courses Section
		'courses.title': 'დაეუფლეთ სოციალურ მედიას',
		'courses.subtitle': 'ისწავლეთ სოციალური მედიის პლატფორმების ყველა დეტალი ჩვენი ყოვლისმომცველი SMM PLUS კურსით',
		'courses.viewCourses': 'კურსების ნახვა',
		
		// CTA Section
		'cta.title': 'მზად ხართ ტალღას დაეშვათ?',
		'cta.subtitle': 'შეუერთდით ქართულ ბიზნესებს, რომლებმაც გარდაქმნეს თავიანთი ციფრული პრეზენსი PR Wave-თან ერთად',
		'cta.startJourney': 'დაიწყეთ თქვენი მგზავრობა',
		'cta.readBlog': 'წაიკითხეთ ჩვენი ბლოგი',
		
		// Blog
		'blog.title': 'PR Wave ბლოგი',
		'blog.subtitle': 'უახლესი ინსაიტები, რჩევები და ტენდენციები სოციალური მედიის მარკეტინგში',
		'blog.noPosts': 'ბლოგის პოსტები ჯერ არ არის',
		'blog.noPostsDesc': 'ჩვენ ვმუშაობთ თქვენთვის საოცარი კონტენტის შექმნაზე. მალე შემოირჩიეთ!',
		'blog.contactUs': 'დაგვიკავშირდით',
		'blog.readMore': 'მეტის წაკითხვა',
		'blog.featured': 'რჩეული',
		'blog.minRead': 'წუთიანი კითხვა',
		
		// Newsletter
		'newsletter.title': 'იყავით განახლებული',
		'newsletter.subtitle': 'მიიღეთ უახლესი სოციალური მედიის რჩევები და ციფრული მარკეტინგის ინსაიტები თქვენს ინბოქსში.',
		'newsletter.placeholder': 'შეიყვანეთ თქვენი ელ-ფოსტა',
		'newsletter.subscribe': 'გამოწერა',
		
		// FAQ
		'faq.title': 'ხშირად დასმული კითხვები',
		'faq.subtitle': 'იპოვეთ პასუხები ჩვენი სერვისებისა და კურსების შესახებ ხშირად დასმულ კითხვებზე',
		'faq.q1.question': 'რას ვისწავლი კურსზე?',
		'faq.q1.answer': 'კურსის განმავლობაში სწავლობთ ინდივიდუალური კურსის იდენტურად. სრულად, თქვენი ქეისები განიხილება. ისწავლება როგორც სოც. ქსელების ტექნიკურად პროფესიონალურად გამართვა, რეკლამირება Ads Manager - ში და სარეკლამო კამპანიები, ფოტო-ვიდეო გადაღება, რომელიც უშუალოდ რეალურ დამკვეთებთან ვიზიტისას ხორციელდება. ასევე, ფოტო-ვიდეო მასალის დამუშავება სხვადასხვა აპლიკაციაში. კვირაში 1-2 ჯერ დამატებით ონლაინ შეხვედრები, დამატებითი კითხვების შემთხვევაში. ისწავლება ქოფირაინგი, ბრენდინგი და ბრენდის პოპულარიზაციისთვის სხვადასხვა "ხრიკები" ☺️',
		'faq.q2.question': 'რა ღირს სოც. მედია მარკეტინგული მომსახურება?',
		'faq.q2.answer': 'სოციალური არხების მართვის საბაზისო პაკეტის საფასური 1200 ლარია.',
		'faq.q3.question': 'რა ღირს კურსი?',
		'faq.q3.answer': 'სრულყოფილი კურსის SMM PLUS საფასური 1350 ლარია.',
		'faq.q4.question': 'რა მჭირდება კურსის გასავლელად?',
		'faq.q4.answer': 'აუცილებელი მოთხოვნები: მთავარი: მონდომება და ერთგულება. კვირეული ვალდებულება: 2 საათი ონლაინ + დამატებითი დრო სავარჯიშოებისთვის. საჭირო აღჭურვილობა: კომპიუტერი (ლეპტოპი/პერსონალური), მობილური ტელეფონი, ტრიპოდი (სასურველია), კარგი განათება (სასურველია), ტელეფონის მიკროფონი. ენობრივი მოთხოვნა: ინგლისური ენის ცოდნა მინიმუმ A1 დონეზე.',
		
		// Contact
		'contact.title': 'დაგვიკავშირდით',
		'contact.subtitle': 'მზად ხართ გარდაქმნათ თქვენი ციფრული პრეზენსი? მოდით დავიწყოთ საუბარი.',
		'contact.formTitle': 'გამოგვიგზავნეთ შეტყობინება',
		'contact.nameLabel': 'სრული სახელი',
		'contact.emailLabel': 'ელ-ფოსტის მისამართი',
		'contact.companyLabel': 'კომპანიის სახელი',
		'contact.serviceLabel': 'სერვისის ინტერესი',
		'contact.selectService': 'აირჩიეთ სერვისი',
		'contact.socialMedia': 'სოციალური მედიის მართვა',
		'contact.advertising': 'ციფრული რეკლამა',
		'contact.mentorship': 'ბიზნეს მენტორობა',
		'contact.content': 'კონტენტის შექმნა',
		'contact.strategy': 'ბრენდის სტრატეგია',
		'contact.analytics': 'ანალიტიკა და რეპორტინგი',
		'contact.courses': 'კურსები',
		'contact.other': 'სხვა',
		'contact.budgetLabel': 'ბიუჯეტის დიაპაზონი',
		'contact.selectBudget': 'აირჩიეთ ბიუჯეტის დიაპაზონი',
		'contact.under1k': '$1,000-ზე ნაკლები/თვეში',
		'contact.1k5k': '$1,000 - $5,000/თვეში',
		'contact.5k10k': '$5,000 - $10,000/თვეში',
		'contact.10kplus': '$10,000+/თვეში',
		'contact.messageLabel': 'შეტყობინება',
		'contact.messagePlaceholder': 'მოგვითხარით თქვენი პროექტისა და მიზნების შესახებ...',
		'contact.sendButton': 'შეტყობინების გაგზავნა',
		'contact.infoTitle': 'საკონტაქტო ინფორმაცია',
		'contact.email': 'ელ-ფოსტა',
		'contact.phone': 'ტელეფონი',
		'contact.address': 'მისამართი',
		'contact.hoursTitle': 'სამუშაო საათები',
		'contact.weekdays': 'ორშაბათი - პარასკევი',
		'contact.weekdayHours': '9:00 - 18:00',
		'contact.saturday': 'შაბათი',
		'contact.saturdayHours': '10:00 - 16:00',
		'contact.sunday': 'კვირა',
		'contact.sundayHours': 'დახურულია',
		'contact.followTitle': 'გამოგვყევით',
		'contact.facebook': 'ფეისბუკი',
		'contact.instagram': 'ინსტაგრამი',
		'contact.twitter': 'ტვიტერი',
		'contact.linkedin': 'ლინკდინი',
		'contact.website': 'ვებსაიტი',
		
		// Footer
		'footer.company': 'პიარ ტალღა',
		'footer.description': 'პროფესიონალური სოციალური მედიის მართვა ქართული ბიზნესებისთვის',
		'footer.rights': 'ყველა უფლება დაცულია',
		'footer.terms': 'წესები და პირობები',
		'footer.privacy': 'კონფიდენციალურობის პოლიტიკა',
		
		// Common
		'common.loading': 'იტვირთება...',
		'common.error': 'მოხდა შეცდომა',
		'common.success': 'წარმატება!',
		'common.readMore': 'მეტის წაკითხვა',
		'common.learnMore': 'მეტის შესწავლა',
		'common.getStarted': 'დაწყება',
	}
} as const;

// Helper function to get translation
export function getTranslation(language: Language, key: string): string {
	const keys = key.split('.');
	let value: any = translations[language];
	
	for (const k of keys) {
		value = value?.[k];
	}
	
	return value || key;
}

// Helper function to get current language from browser
export function getCurrentLanguage(): Language {
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem('language') as Language;
		if (stored && languages[stored]) {
			return stored;
		}
		
		// Check browser language
		const browserLang = navigator.language.split('-')[0] as Language;
		if (languages[browserLang]) {
			return browserLang;
		}
	}
	
	return defaultLanguage;
} 