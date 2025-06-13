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
		
		// Hero Section
		'hero.tagline': 'Ride the Digital Wave',
		'hero.description': 'Transform your digital presence with our comprehensive social media management, advertising solutions, and expert mentorship. We help businesses ride the wave of digital success.',
		'hero.getStarted': 'Get Started',
		'hero.learnMore': 'Learn More',
		
		// Services Section
		'services.title': 'Our Services',
		'services.subtitle': 'Comprehensive digital marketing solutions tailored to your business needs',
		
		// About Section
		'about.title': 'Meet Our Leaders',
		'about.description': 'PR Wave is led by two passionate digital marketing experts with years of experience in social media management, advertising, and business growth strategies.',
		'about.experience': 'Our founders bring together decades of combined experience in helping businesses establish a strong digital presence and achieve their marketing goals.',
		'about.learnMore': 'Learn About Our Team',
		
		// Courses Section
		'courses.title': 'Master Social Media',
		'courses.subtitle': 'Learn the ins and outs of social media platforms with our comprehensive courses',
		'courses.viewCourses': 'View Courses',
		
		// CTA Section
		'cta.title': 'Ready to Ride the Wave?',
		'cta.subtitle': 'Join hundreds of businesses that have transformed their digital presence with PR Wave',
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
		
		// Common
		'common.loading': 'Loading...',
		'common.error': 'An error occurred',
		'common.success': 'Success!',
	},
	ka: {
		// Navigation
		'nav.home': 'მთავარი',
		'nav.about': 'ჩვენ შესახებ',
		'nav.blog': 'ბლოგი',
		'nav.courses': 'კურსები',
		'nav.contact': 'კონტაქტი',
		
		// Hero Section
		'hero.tagline': 'დაეშვით ციფრულ ტალღას',
		'hero.description': 'გარდაქმენით თქვენი ციფრული არსებობა ჩვენი ყოვლისმომცველი სოციალური მედიის მართვით, სარეკლამო გადაწყვეტებით და ექსპერტის ხელმძღვანელობით. ჩვენ ვეხმარებით ბიზნესებს ციფრული წარმატების ტალღას დაეშვან.',
		'hero.getStarted': 'დაწყება',
		'hero.learnMore': 'მეტის შესწავლა',
		
		// Services Section
		'services.title': 'ჩვენი სერვისები',
		'services.subtitle': 'ყოვლისმომცველი ციფრული მარკეტინგის გადაწყვეტები, რომლებიც მორგებულია თქვენი ბიზნესის საჭიროებებზე',
		
		// About Section
		'about.title': 'გაიცანით ჩვენი ლიდერები',
		'about.description': 'PR Wave-ს ხელმძღვანელობს ორი ვნებიანი ციფრული მარკეტინგის ექსპერტი, რომლებსაც წლების გამოცდილება აქვთ სოციალური მედიის მართვაში, რეკლამასა და ბიზნეს-ზრდის სტრატეგიებში.',
		'about.experience': 'ჩვენი დამფუძნებლები ერთად აერთიანებენ ათწლეულების გამოცდილებას ბიზნესების დახმარებაში ძლიერი ციფრული პრეზენსის დამყარებისა და მარკეტინგული მიზნების მიღწევისთვის.',
		'about.learnMore': 'გაიცანით ჩვენი გუნდი',
		
		// Courses Section
		'courses.title': 'დაეუფლეთ სოციალურ მედიას',
		'courses.subtitle': 'ისწავლეთ სოციალური მედიის პლატფორმების ყველა დეტალი ჩვენი ყოვლისმომცველი კურსებით',
		'courses.viewCourses': 'კურსების ნახვა',
		
		// CTA Section
		'cta.title': 'მზად ხართ ტალღას დაეშვათ?',
		'cta.subtitle': 'შეუერთდით ასობით ბიზნესს, რომლებმაც გარდაქმნეს თავიანთი ციფრული პრეზენსი PR Wave-თან ერთად',
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
		
		// Common
		'common.loading': 'იტვირთება...',
		'common.error': 'მოხდა შეცდომა',
		'common.success': 'წარმატება!',
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