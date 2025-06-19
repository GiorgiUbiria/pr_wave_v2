# PR Wave Website - Implementation TODO List

## Project Overview
This document outlines all missing elements, required updates, and enhancements needed to align the PR Wave website with the actual company information from `general_info.md`.

---

## Phase 1: Critical Information Updates (MUST DO FIRST)
*Fix core information mismatches before any other changes*

### 1.1 Update Constants & Configuration
- [ ] **File: `src/consts.ts`**
  - [ ] Update contact information:
    - [ ] Email: `prwave.info@gmail.com` and `foryou@prwave.com`
    - [ ] Phone: `+995555182198` and `+995555003141`
    - [ ] Website: `www.prwave.net`
    - [ ] Remove generic US address, add Georgian location if needed
  - [ ] Update company tagline to match Georgian focus
  - [ ] Update services list to match actual offerings

### 1.2 Update Social Media Links
- [ ] **File: `src/consts.ts` or new social config**
  - [ ] Facebook: `https://www.facebook.com/socialmediagencyprwave`
  - [ ] Instagram: `https://www.instagram.com/pr_wave_`
  - [ ] LinkedIn: `https://www.linkedin.com/company/pr-wave/`
  - [ ] TikTok: `https://www.tiktok.com/@pr_marketing_agency`
  - [ ] YouTube: `https://www.youtube.com/@PRWAVE_smmagency`
  - [ ] Telegram: `t.me/pr_wave`

### 1.3 Update About Page Founder Information
- [ ] **File: `src/pages/about.astro`**
  - [ ] Replace Sarah Johnson with **Nino Chkheize** (Film Director & Businessman)
  - [ ] Replace Michael Chen with **Leila Berzenishvili-Qahveji** (Financist & Digital Marketer)
  - [ ] Update founding year to **2022**
  - [ ] Add Georgian business focus
  - [ ] Update company story to match actual background

---

## Phase 2: Georgian Language Implementation
*Complete translations before adding new content*

### 2.1 Expand Georgian Translations
- [ ] **File: `src/i18n.ts`**
  - [ ] Add comprehensive service descriptions in Georgian
  - [ ] Add course-related translations
  - [ ] Add FAQ translations
  - [ ] Add terms and conditions translations
  - [ ] Add testimonials translations
  - [ ] Add pricing-related translations

### 2.2 Update Existing Pages with Better Georgian Content
- [ ] **File: `src/pages/index.astro`**
  - [ ] Review and improve Georgian hero section
  - [ ] Add Georgian-specific service descriptions
- [ ] **File: `src/pages/about.astro`**
  - [ ] Add Georgian company story
  - [ ] Add Georgian founder descriptions
- [ ] **File: `src/pages/contact.astro`**
  - [ ] Update contact form with Georgian options
  - [ ] Add Georgian business hours

---

## Phase 3: Core Service Pages
*Create essential business pages*

### 3.1 Create Services Overview Page
- [ ] **File: `src/pages/services.astro`**
  - [ ] BASIC Service Package section (1200 GEL)
    - [ ] Facebook, Instagram, TikTok management details
    - [ ] Posting frequency specifications
    - [ ] Content creation details
    - [ ] Photo/video shooting included
  - [ ] Advertising Services section
    - [ ] Campaign planning and monitoring
    - [ ] Maximum 2 campaigns per month
    - [ ] Individual pricing
  - [ ] Primary Technical Service section (1000 GEL)
    - [ ] Social media analysis and setup
    - [ ] Technical optimization details
  - [ ] Service comparison table
  - [ ] Pricing summary

### 3.2 Update Navigation
- [ ] **File: `src/components/Header.astro`**
  - [ ] Add "Services" link to navigation
  - [ ] Ensure proper Georgian translation

---

## Phase 4: Course System Overhaul
*Replace generic courses with actual SMM PLUS program*

### 4.1 Create SMM PLUS Course Page
- [ ] **File: `src/pages/courses/smm-plus.astro`**
  - [ ] Course overview (1350 GEL, 20 sessions, 7-8 weeks)
  - [ ] Detailed 20-session curriculum
  - [ ] Session breakdown (Online/Offline sessions)
  - [ ] Real client work integration details
  - [ ] Prerequisites and requirements
  - [ ] Enrollment form/contact

### 4.2 Update Main Courses Page
- [ ] **File: `src/pages/courses.astro`**
  - [ ] Replace generic courses with SMM PLUS
  - [ ] Add course comparison if multiple courses exist
  - [ ] Add testimonials from course graduates
  - [ ] Link to detailed SMM PLUS page

### 4.3 Create Course Components
- [ ] **File: `src/components/CourseSession.astro`**
  - [ ] Expandable session details component
- [ ] **File: `src/components/CourseRequirements.astro`**
  - [ ] Equipment and knowledge requirements
- [ ] **File: `src/components/CourseEnrollment.astro`**
  - [ ] Enrollment form component

---

## Phase 5: Legal & Compliance Pages
*Add required legal documentation*

### 5.1 Create Terms and Conditions Page
- [ ] **File: `src/pages/terms.astro`**
  - [ ] Complete terms from general_info.md
  - [ ] Copyright protection section
  - [ ] User-generated content policies
  - [ ] Personal data handling
  - [ ] Liability limitations
  - [ ] Governing law (Georgian legislation)

### 5.2 Create Privacy Policy Page
- [ ] **File: `src/pages/privacy.astro`**
  - [ ] Data collection practices
  - [ ] Cookie usage
  - [ ] Third-party services
  - [ ] User rights
  - [ ] Contact for privacy concerns

### 5.3 Update Footer
- [ ] **File: `src/components/Footer.astro`**
  - [ ] Add links to Terms and Privacy pages
  - [ ] Add copyright notice
  - [ ] Update with correct company information

---

## Phase 6: Interactive Components
*Add functionality and engagement features*

### 6.1 Create FAQ Component
- [ ] **File: `src/components/FAQ.astro`**
  - [ ] Expandable Q&A sections
  - [ ] Course-related questions
  - [ ] Service-related questions
  - [ ] Pricing questions
  - [ ] Technical requirements questions

### 6.2 Create FAQ Page
- [ ] **File: `src/pages/faq.astro`**
  - [ ] Use FAQ component
  - [ ] Add all questions from general_info.md
  - [ ] Organize by category

### 6.3 Create Newsletter Component
- [ ] **File: `src/components/Newsletter.astro`**
  - [ ] Email signup form
  - [ ] Masterclass announcements signup
  - [ ] Integration placeholder for email service

### 6.4 Create Testimonials Component
- [ ] **File: `src/components/Testimonials.astro`**
  - [ ] Client testimonials display
  - [ ] Course graduate testimonials
  - [ ] Star ratings
  - [ ] Carousel/slider functionality

---

## Phase 7: Content Enhancement
*Improve existing pages with authentic content*

### 7.1 Enhance Homepage
- [ ] **File: `src/pages/index.astro`**
  - [ ] Add testimonials section
  - [ ] Add course promotion section
  - [ ] Remove our leaders section fully
  - [ ] Add free masterclass signup
  - [ ] Add success metrics/stats
  - [ ] Update hero with authentic messaging

### 7.2 Create Masterclasses Page
- [ ] **File: `src/pages/masterclasses.astro`**
  - [ ] Free seasonal masterclass information
  - [ ] Upcoming events calendar
  - [ ] Registration form
  - [ ] Past masterclass recordings/materials

### 7.3 Create Success Stories Page
- [ ] **File: `src/pages/success-stories.astro`**
  - [ ] Client case studies
  - [ ] Before/after social media transformations
  - [ ] Course graduate success stories
  - [ ] Metrics and results

---

## Phase 8: Technical Enhancements
*Improve functionality and performance*

### 8.1 Contact Form Integration
- [ ] **File: `src/pages/contact.astro`**
  - [ ] Connect form to actual email addresses
  - [ ] Add form validation
  - [ ] Add success/error messaging
  - [ ] Add service-specific contact options

### 8.2 SEO Optimization
- [ ] **Files: All pages**
  - [ ] Add Georgian language meta tags
  - [ ] Improve meta descriptions
  - [ ] Add structured data for local business
  - [ ] Optimize for Georgian search terms

### 8.3 Language Switcher Improvements
- [ ] **File: `src/components/LanguageToggle.astro`**
  - [ ] Persist language choice
  - [ ] Improve UX for language switching
  - [ ] Add Georgian flag/text indicators

---

## Phase 9: Design & UX Improvements
*Polish visual elements and user experience*

### 9.1 Visual Design Updates
- [ ] **File: `src/styles/global.css`**
  - [ ] Add Georgian typography support
  - [ ] Improve mobile responsiveness for Georgian text
  - [ ] Add course-specific styling
  - [ ] Add service package styling

### 9.2 Component Styling
- [ ] Style new FAQ component
- [ ] Style new testimonials component
- [ ] Style new course components
- [ ] Style new service pages

### 9.3 Mobile Optimization
- [ ] Test all new pages on mobile
- [ ] Optimize forms for mobile input
- [ ] Ensure Georgian text displays properly on mobile
- [ ] Test language switching on mobile

---

## Phase 10: Content Creation & Final Polish
*Add authentic content and final touches*

### 10.1 Content Creation
- [ ] Write authentic company blog posts in Georgian
- [ ] Create course preview materials
- [ ] Develop case studies and testimonials
- [ ] Create masterclass promotional materials

### 10.2 Testing & Quality Assurance
- [ ] Test all forms and functionality
- [ ] Verify all links work correctly
- [ ] Test language switching throughout site
- [ ] Verify contact information is correct everywhere
- [ ] Test responsive design on various devices

### 10.3 Launch Preparation
- [ ] Set up analytics tracking
- [ ] Set up email integration for forms
- [ ] Configure domain and hosting
- [ ] Set up social media integration
- [ ] Create sitemap and robots.txt

---

## Implementation Notes

### Dependencies
- Complete Phase 1 entirely before moving to Phase 2
- Complete Phase 2 before adding new content in later phases
- Test each phase thoroughly before proceeding
- Keep backup of working version before major changes

### Testing Checklist for Each Phase
- [ ] All existing functionality still works
- [ ] New functionality works as expected
- [ ] Georgian translations display correctly
- [ ] Mobile responsiveness maintained
- [ ] No broken links or missing assets
- [ ] Contact forms work properly

### Priority Indicators
- 🔴 **Critical**: Must be completed for basic functionality
- 🟡 **Important**: Needed for full feature set
- 🟢 **Enhancement**: Nice to have, can be done later

---

*Last Updated: [Current Date]*
*Total Estimated Tasks: 100+*
*Estimated Completion Time: 4-6 weeks (depending on team size)* 