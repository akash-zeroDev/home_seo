'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);
const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
);
const MedalIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
);
const BookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
);
const BuildingIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1v1H9V7zm5 0h1v1h-1V7zm-5 4h1v1H9v-1zm5 0h1v1h-1v-1zm-5 4h1v1H4v-1zm5 0h1v1H9v-1zm5 0h1v1h-1v-1z" /></svg>
);

export default function LandingPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0A192F] font-sans selection:bg-[#1ABC9C] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "name": "Delta Home Tuitions",
                "areaServed": ["Noida", "East Delhi", "Delhi NCR"],
                "priceRange": "$$",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "500"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Do you provide free demo classes?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, we offer personalized free demo classes so you can ensure the tutor is the perfect fit for your child's learning style."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are your tutors verified?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Absolutely. 100% of our educators go through a rigorous vetting process, background checks, and subject-matter accreditation."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      {/* Section 1: Trust Header & Localized Info Bar */}
      <div className="bg-[#0A192F] text-white py-2 px-6 text-xs md:text-sm flex flex-col md:flex-row justify-between items-center z-50 relative">
        <span className="hidden md:block">Established Academic Mentorship in Delhi NCR since 2012</span>
        <div className="flex items-center gap-2 py-1 md:py-0">
          <StarIcon className="w-4 h-4 text-[#D4AF37]" />
          <span className="font-medium">Founded in 2012, Trusted by 500+ Local Families.</span>
        </div>
        <div className="flex gap-4 font-medium text-gray-300">
          <span>📞 +91 98765 43210</span>
          <span className="hidden sm:block">✉️ info@deltahometuitions.in</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 text-[#1ABC9C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3L22 20H2L12 3Z" />
          </svg>
          <div className="text-2xl font-black tracking-tight text-[#0A192F]">
            Delta<span className="text-[#1ABC9C]">Home Tuitions</span>
          </div>
        </div>
        <div className="hidden lg:flex gap-8 font-medium text-gray-600">
          <Link href="#how-it-works" className="hover:text-[#1ABC9C] transition">How It Works</Link>
          <Link href="#subjects" className="hover:text-[#1ABC9C] transition">Subjects</Link>
          <Link href="#testimonials" className="hover:text-[#1ABC9C] transition">Testimonials</Link>
          <Link href="#" className="hover:text-[#1ABC9C] transition">Pricing</Link>
        </div>
        <div className="flex items-center gap-6">
          <button className="hidden md:block font-semibold text-[#0A192F] hover:text-[#1ABC9C] transition">Student Login</button>
          <Link href="/book" className="px-6 py-2.5 bg-[#1ABC9C] text-white rounded-full font-bold shadow-lg shadow-[#1ABC9C]/30 hover:bg-[#16a085] transition-all transform hover:scale-105">
            Book Your Demo
          </Link>
        </div>
      </nav>

      {/* Section 2: Hero */}
      <section className="relative pt-20 pb-32 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-[1400px] mx-auto overflow-hidden">
        {/* Left Content */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="lg:w-1/2 z-10">
          <motion.h1 variants={fadeUp} className="text-5xl lg:text-[4.5rem] font-extrabold text-[#0A192F] leading-[1.1] mb-4 tracking-tight">
            Unlock Their Potential,<br/>
            <span className="text-[#1ABC9C]">Elevate Their Future.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl font-medium text-gray-500 italic mb-6">
            "A subtle promise that you will change their academic trajectory."
          </motion.p>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg backdrop-blur-sm bg-white/40 p-5 rounded-2xl border border-white/60 shadow-sm">
            Personalized, elite home and online tutoring that builds academic confidence and releases core potential.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-2 bg-white p-2 rounded-full shadow-xl border border-gray-100 w-full max-w-xl">
            <div className="hidden sm:block pl-4 text-gray-400">
              <SearchIcon className="w-6 h-6" />
            </div>
            <input type="text" placeholder="Find My Tutor: Enter a subject..." className="w-full bg-transparent outline-none text-[#0A192F] placeholder-gray-400 px-4 py-3 sm:py-0 text-lg" />
            <Link href="/book" className="w-full sm:w-auto whitespace-nowrap px-8 py-4 bg-[#1ABC9C] text-white rounded-full font-bold shadow-md hover:bg-[#16a085] transition-colors text-center">
              Get Personalized Match
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Floating Elements */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="lg:w-1/2 relative w-full max-w-lg h-[500px] lg:h-[600px] mt-12 lg:mt-0">
          {/* Subtle Geometric Graphic */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1ABC9C]/20 to-[#0A192F]/10 rounded-[3rem] transform rotate-3 scale-105 -z-10" />
          
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <div className="absolute inset-0 bg-[#0A192F] opacity-95 flex items-center justify-center p-8">
              <p className="text-white/40 font-bold text-3xl text-center leading-snug">
                [ High-Quality Image Placeholder: Students in modern study environment ]
              </p>
            </div>
          </div>

          {/* Floating Data Cards */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -left-4 lg:-left-12 top-24 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4">
            <div className="bg-[#D4AF37]/10 p-3 rounded-xl text-[#D4AF37]">
              <StarIcon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Elite Verified Tutors</p>
              <p className="text-2xl font-black text-[#0A192F]">200+</p>
            </div>
          </motion.div>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute -right-4 lg:-right-8 bottom-24 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4">
            <div className="bg-[#1ABC9C]/10 p-3 rounded-xl text-[#1ABC9C]">
              <BookIcon className="w-8 h-8" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Subject Specializations</p>
              <p className="text-2xl font-black text-[#0A192F]">45+</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Section 3: Trust Bar */}
      <section className="bg-white border-y border-gray-200 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-x-0 lg:divide-x divide-gray-100">
          <div className="flex flex-col items-center">
            <MedalIcon className="w-12 h-12 text-[#1ABC9C] mb-4" />
            <h3 className="text-2xl font-black text-[#0A192F] mb-1">100%</h3>
            <p className="text-gray-500 font-medium">Verified Tutors & Mentors</p>
          </div>
          <div className="flex flex-col items-center">
            <BookIcon className="w-12 h-12 text-[#1ABC9C] mb-4" />
            <h3 className="text-2xl font-black text-[#0A192F] mb-1">200+</h3>
            <p className="text-gray-500 font-medium">Accredited Subject Experts</p>
          </div>
          <div className="flex flex-col items-center">
            <BuildingIcon className="w-12 h-12 text-[#1ABC9C] mb-4" />
            <h3 className="text-2xl font-black text-[#0A192F] mb-1">50+</h3>
            <p className="text-gray-500 font-medium">Partnering Schools in NCR</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-1 text-[#D4AF37] mb-4">
              {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-7 h-7" />)}
            </div>
            <h3 className="text-2xl font-black text-[#0A192F] mb-1">4.9/5</h3>
            <p className="text-gray-500 font-medium">Top-Rated on Google</p>
          </div>
        </div>
      </section>

      {/* Section 4: Proven Success & Values */}
      <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#0A192F] mb-6 tracking-tight">How We Guarantee Success</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">A seamless, proven 3-step pathway to matching your child with the perfect educational mentor.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-[#0A192F] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <span className="text-3xl font-black text-white">1</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0A192F] mb-4">Discover Your Goals</h3>
            <p className="text-gray-600 leading-relaxed">Tell us about your child's academic needs, learning style, and specific goals through our simple consultation process.</p>
          </div>
          <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-[#1ABC9C] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <span className="text-3xl font-black text-white">2</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0A192F] mb-4">Find the Perfect Match</h3>
            <p className="text-gray-600 leading-relaxed">Our experts handpick a verified, specialized tutor in Delhi NCR that perfectly aligns with your schedule and requirements.</p>
          </div>
          <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 text-center relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-[#D4AF37] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <span className="text-3xl font-black text-white">3</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0A192F] mb-4">Unlock Confidence</h3>
            <p className="text-gray-600 leading-relaxed">Watch your child thrive with personalized one-on-one attention, measurable progress tracking, and academic mentorship.</p>
          </div>
        </div>

        {/* Subject Picker */}
        <div id="subjects" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0A192F] mb-6 tracking-tight">Master Any Subject</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">From core foundational concepts to advanced competitive board prep.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Lit.', 'Computer Science', 'Economics', 'Accountancy'].map((subject) => (
            <div key={subject} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-[#1ABC9C] hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer flex flex-col items-center justify-center text-center group">
              <h4 className="font-bold text-lg text-[#0A192F] group-hover:text-[#1ABC9C] transition-colors">{subject}</h4>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-32">
          <Link href="/book" className="px-10 py-4 bg-white border-2 border-[#0A192F] text-[#0A192F] font-bold rounded-full hover:bg-[#0A192F] hover:text-white transition-colors text-lg">
            View All Subjects
          </Link>
        </div>

        {/* Program Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0A192F] text-white p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
            <h3 className="text-3xl font-bold mb-6 leading-tight">Primary & Middle School Excellence</h3>
            <p className="text-gray-400 mb-10 text-base leading-relaxed">Build strong foundational habits, curiosity, and core concept clarity during crucial developmental years.</p>
            <Link href="/book" className="inline-block px-6 py-3 bg-white/10 rounded-full text-white font-semibold hover:bg-[#1ABC9C] transition-colors">
              Explore Program &rarr;
            </Link>
          </div>
          <div className="bg-white p-12 rounded-[2.5rem] border border-gray-200 shadow-xl relative overflow-hidden">
            <h3 className="text-3xl font-bold text-[#0A192F] mb-6 leading-tight">High School & Board Prep</h3>
            <p className="text-gray-600 mb-10 text-base leading-relaxed">Targeted syllabus completion, rigorous revision, and strategic test-taking skills for CBSE, ICSE, and IB boards.</p>
            <Link href="/book" className="inline-block px-6 py-3 bg-[#0A192F]/5 rounded-full text-[#0A192F] font-semibold hover:bg-[#1ABC9C] hover:text-white transition-colors">
              Explore Program &rarr;
            </Link>
          </div>
          <div className="bg-white p-12 rounded-[2.5rem] border border-gray-200 shadow-xl relative overflow-hidden">
            <h3 className="text-3xl font-bold text-[#0A192F] mb-6 leading-tight">Specialized & Language Mastery</h3>
            <p className="text-gray-600 mb-10 text-base leading-relaxed">Fluency programs, Olympiad preparation, and extracurricular academic enrichment tailored to advanced learners.</p>
            <Link href="/book" className="inline-block px-6 py-3 bg-[#0A192F]/5 rounded-full text-[#0A192F] font-semibold hover:bg-[#1ABC9C] hover:text-white transition-colors">
              Explore Program &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Tutors & Testimonials */}
      <section id="testimonials" className="bg-[#0A192F] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Meet Our Elite Educators</h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">Rigorous vetting ensures only the top 3% of applicants make it to your home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Tutor 1 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col">
              <div className="h-64 bg-gray-100 w-full relative">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium bg-gradient-to-br from-gray-100 to-gray-200">
                   [ Professional Headshot ]
                 </div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#0A192F] mb-1">Anjali Sharma</h3>
                    <p className="text-[#1ABC9C] font-bold text-sm tracking-wide">M.Sc. Mathematics, Delhi University</p>
                  </div>
                  <div className="flex items-center gap-1 bg-[#D4AF37]/10 px-3 py-1.5 rounded-lg text-[#D4AF37] text-sm font-black">
                    <StarIcon className="w-4 h-4" /> 5.0
                  </div>
                </div>
                <div className="flex gap-4 mb-8">
                  <div className="bg-gray-50 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 border border-gray-100">8 Years Exp.</div>
                  <div className="bg-gray-50 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 border border-gray-100">450+ Lessons</div>
                </div>
                <div className="border-t border-gray-100 pt-6 mt-auto">
                  <p className="text-gray-600 text-base italic leading-relaxed mb-4">"Anjali completely transformed my son's fear of Math into genuine interest. His scores improved by 40% in just one term."</p>
                  <p className="text-[#0A192F] font-bold">— Mrs. Gupta, Preet Vihar</p>
                </div>
              </div>
            </div>

            {/* Tutor 2 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col">
              <div className="h-64 bg-gray-100 w-full relative">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium bg-gradient-to-br from-gray-100 to-gray-200">
                   [ Professional Headshot ]
                 </div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#0A192F] mb-1">Rahul Verma</h3>
                    <p className="text-[#1ABC9C] font-bold text-sm tracking-wide">B.Tech IIT Delhi, Physics Expert</p>
                  </div>
                  <div className="flex items-center gap-1 bg-[#D4AF37]/10 px-3 py-1.5 rounded-lg text-[#D4AF37] text-sm font-black">
                    <StarIcon className="w-4 h-4" /> 4.9
                  </div>
                </div>
                <div className="flex gap-4 mb-8">
                  <div className="bg-gray-50 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 border border-gray-100">5 Years Exp.</div>
                  <div className="bg-gray-50 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 border border-gray-100">300+ Lessons</div>
                </div>
                <div className="border-t border-gray-100 pt-6 mt-auto">
                  <p className="text-gray-600 text-base italic leading-relaxed mb-4">"Rahul's ability to simplify complex Physics concepts for the JEE is unmatched. Highly recommended for competitive prep."</p>
                  <p className="text-[#0A192F] font-bold">— Mr. Singh, Noida Sector 50</p>
                </div>
              </div>
            </div>

            {/* Tutor 3 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col">
              <div className="h-64 bg-gray-100 w-full relative">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium bg-gradient-to-br from-gray-100 to-gray-200">
                   [ Professional Headshot ]
                 </div>
              </div>
              <div className="p-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-[#0A192F] mb-1">Priya Desai</h3>
                    <p className="text-[#1ABC9C] font-bold text-sm tracking-wide">M.A. English, IELTS Trainer</p>
                  </div>
                  <div className="flex items-center gap-1 bg-[#D4AF37]/10 px-3 py-1.5 rounded-lg text-[#D4AF37] text-sm font-black">
                    <StarIcon className="w-4 h-4" /> 5.0
                  </div>
                </div>
                <div className="flex gap-4 mb-8">
                  <div className="bg-gray-50 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 border border-gray-100">10 Years Exp.</div>
                  <div className="bg-gray-50 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 border border-gray-100">600+ Lessons</div>
                </div>
                <div className="border-t border-gray-100 pt-6 mt-auto">
                  <p className="text-gray-600 text-base italic leading-relaxed mb-4">"My daughter's creative writing skills have flourished under Priya's guidance. She is patient, engaging, and deeply knowledgeable."</p>
                  <p className="text-[#0A192F] font-bold">— Dr. Malhotra, South Ex</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#1ABC9C] to-[#16a085] rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A192F]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <h2 className="text-5xl md:text-6xl font-black mb-8 relative z-10 tracking-tight">Empowerment Starts Here.</h2>
          <p className="text-xl md:text-2xl font-medium mb-12 max-w-3xl mx-auto relative z-10 opacity-90 leading-relaxed">
            Find the personalized academic plan that fits. Take the first step towards your child's academic confidence today.
          </p>
          <Link href="/book" className="inline-block px-12 py-5 bg-[#0A192F] text-white rounded-full font-bold text-xl hover:shadow-[0_10px_40px_rgba(10,25,47,0.4)] hover:-translate-y-1 transition-all relative z-10">
            Explore Tutoring Options
          </Link>
        </div>
      </section>

      {/* Section 7: Footer */}
      <footer className="bg-[#0A192F] text-gray-400 py-20 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-8 h-8 text-[#1ABC9C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3L22 20H2L12 3Z" />
              </svg>
              <div className="text-3xl font-black tracking-tight text-white">
                Delta<span className="text-[#1ABC9C]">Home Tuitions</span>
              </div>
            </div>
            <p className="text-base leading-relaxed mb-6">
              Delhi NCR's premier localized tutoring agency. We curate perfect educational matches to inspire lifelong learning and academic confidence.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Programs</h4>
            <ul className="space-y-4 text-base">
              <li><Link href="#" className="hover:text-[#1ABC9C] transition">Primary School Excellence</Link></li>
              <li><Link href="#" className="hover:text-[#1ABC9C] transition">Middle School Foundation</Link></li>
              <li><Link href="#" className="hover:text-[#1ABC9C] transition">High School & Board Prep</Link></li>
              <li><Link href="#" className="hover:text-[#1ABC9C] transition">Language Mastery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-4 text-base">
              <li><Link href="#" className="hover:text-[#1ABC9C] transition">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#1ABC9C] transition">Become a Tutor</Link></li>
              <li><Link href="#" className="hover:text-[#1ABC9C] transition">Success Stories</Link></li>
              <li><Link href="#" className="hover:text-[#1ABC9C] transition">Contact Support</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact Us</h4>
             <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <span className="text-[#1ABC9C]">📍</span> 
                <span>Head Office: East Delhi<br/>Serving all of Delhi NCR & Noida</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#1ABC9C]">📞</span> 
                <a href="tel:+919876543210" className="hover:text-white transition">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#1ABC9C]">✉️</span> 
                <a href="mailto:hello@deltahometuitions.in" className="hover:text-white transition">hello@deltahometuitions.in</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Delta Home Tuitions, Delhi NCR. All rights reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Icon */}
      <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all z-50">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>
    </div>
  );
}
