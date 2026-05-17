import { Metadata } from 'next';
import Link from 'next/link';
import { locations, subjects, formatSlug } from '@/lib/seo-data';

const BookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
);

interface Props {
  params: Promise<{ location: string; subject: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location, subject } = await params;
  const formattedLocation = formatSlug(location);
  const formattedSubject = formatSlug(subject);

  return {
    title: `Elite ${formattedSubject} Tutors in ${formattedLocation} | Delta Home Tuitions`,
    description: `Find the best personalized ${formattedSubject} home tutors in ${formattedLocation}. Guaranteed academic excellence and improved confidence with Delta Home Tuitions.`,
    openGraph: {
      title: `Elite ${formattedSubject} Tutors in ${formattedLocation}`,
      description: `Top-rated ${formattedSubject} tutoring services in ${formattedLocation}. Book a free demo today!`,
      url: `https://www.deltahometuitions.com/tutors/${location}/${subject}`,
    }
  };
}

export async function generateStaticParams() {
  const params = [];
  for (const loc of locations) {
    for (const sub of subjects) {
      params.push({ location: loc, subject: sub });
    }
  }
  return params;
}

export default async function ProgrammaticTutorPage({ params }: Props) {
  const { location, subject } = await params;
  const formattedLocation = formatSlug(location);
  const formattedSubject = formatSlug(subject);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0A192F] font-sans selection:bg-[#1ABC9C] selection:text-white">
      {/* Main Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 text-[#1ABC9C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3L22 20H2L12 3Z" />
          </svg>
          <Link href="/" className="text-2xl font-black tracking-tight text-[#0A192F]">
            Delta<span className="text-[#1ABC9C]">Home Tuitions</span>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/book" className="px-6 py-2.5 bg-[#1ABC9C] text-white rounded-full font-bold shadow-lg shadow-[#1ABC9C]/30 hover:bg-[#16a085] transition-all transform hover:scale-105">
            Book a Free Demo
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-[1400px] mx-auto overflow-hidden">
        <div className="lg:w-1/2 z-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-extrabold text-[#0A192F] leading-[1.1] mb-6 tracking-tight">
            Unlock Your Child's Potential with Elite <span className="text-[#1ABC9C]">{formattedSubject}</span> Tutors in <span className="text-[#1ABC9C]">{formattedLocation}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 bg-white/40 p-5 rounded-2xl border border-white/60 shadow-sm">
            We provide verified, top-rated {formattedSubject} home tutors directly to your doorstep in {formattedLocation}. Watch your child's academic confidence soar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/book" className="w-full sm:w-auto px-10 py-4 bg-[#1ABC9C] text-white rounded-full font-bold shadow-lg hover:shadow-[#1ABC9C]/40 hover:-translate-y-1 hover:bg-[#16a085] transition-all text-lg text-center">
              Book Your Free Demo
            </Link>
            <Link href="/" className="w-full sm:w-auto px-10 py-4 bg-white border border-gray-200 text-[#0A192F] rounded-full font-bold hover:border-[#0A192F] transition-all text-lg text-center">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Graphic */}
        <div className="lg:w-1/2 relative w-full max-w-lg h-[400px] lg:h-[500px] mt-12 lg:mt-0 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1ABC9C]/20 to-[#0A192F]/10 rounded-[3rem] transform rotate-3 scale-105 -z-10" />
          <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-[#0A192F] flex flex-col items-center justify-center p-8">
             <BookIcon className="w-24 h-24 text-[#1ABC9C] mb-6" />
             <h2 className="text-3xl font-bold text-white text-center">{formattedSubject} Mastery</h2>
             <p className="text-gray-400 mt-4 text-center">Customized lesson plans tailored for students in {formattedLocation}</p>
          </div>
        </div>
      </section>
      
      {/* Minimal Footer */}
      <footer className="bg-[#0A192F] text-gray-400 py-10 px-6 border-t border-gray-800 text-center">
        <p>&copy; {new Date().getFullYear()} Delta Home Tuitions. Serving {formattedLocation} and all of Delhi NCR.</p>
      </footer>
    </div>
  );
}
