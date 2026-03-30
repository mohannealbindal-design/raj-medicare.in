import { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Pill, 
  Stethoscope, 
  Heart, 
  FileText, 
  ChevronRight, 
  Menu, 
  X, 
  Star, 
  ShieldCheck, 
  ArrowRight,
  ShoppingBag,
  PlusCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const RAJ_PHONE = "+91 76220 14403";
const WHATSAPP_LINK = "https://wa.me/91 76220 14403";
const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.143894451044!2d72.8103!3d23.1683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e799899387998%3A0x0!2zMjPCsDEwJzA1LjkiTiA3MsKwNDgnMzcuMSJF!5e0!3m2!1sen!2sin!4v1711780000000!5m2!1sen!2sin";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Inquiry', href: '#inquiry' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-medical-blue p-2 rounded-lg">
              <PlusCircle className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className={`text-xl font-display font-bold leading-none ${scrolled ? 'text-medical-blue' : 'text-white'}`}>
                RAJ MEDICAL
              </h1>
              <p className={`text-[10px] font-medium tracking-widest uppercase ${scrolled ? 'text-gray-500' : 'text-blue-100'}`}>
                & Provision Store
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`font-medium transition-colors hover:text-trust-green ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${RAJ_PHONE}`}
              className="bg-trust-green text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-opacity-90 transition-all"
            >
              <Phone size={18} /> Call Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white bg-medical-blue p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-display font-bold text-gray-800"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={`tel:${RAJ_PHONE}`}
                className="bg-medical-blue text-white py-4 rounded-xl font-bold text-xl flex justify-center items-center gap-3"
              >
                <Phone /> Call Now
              </a>
              <a 
                href={WHATSAPP_LINK}
                className="bg-trust-green text-white py-4 rounded-xl font-bold text-xl flex justify-center items-center gap-3"
              >
                <MessageCircle /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-gradient pt-32 pb-20 md:pt-48 md:pb-32 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold mb-6 inline-block">
                  📍 Near Dr. Kothari Hospital, Dahegam
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                  Your Health, Our Responsibility — <span className="text-trust-green italic">Since Day One</span>
                </h2>
                <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl">
                  Providing affordable generic and branded medicines to Dahegam families for over 15 years. Open early at 7:30 AM to serve you better.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`tel:${RAJ_PHONE}`}
                    className="bg-white text-medical-blue px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-50 transition-all shadow-lg"
                  >
                    <Phone /> Call Now
                  </a>
                  <a 
                    href={WHATSAPP_LINK}
                    className="bg-trust-green text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-lg"
                  >
                    <MessageCircle /> WhatsApp Inquiry
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <ShieldCheck className="text-medical-blue" />, title: "15+ Years", desc: "Trusted Service" },
                { icon: <Pill className="text-medical-blue" />, title: "Generic & Branded", desc: "All Medicines" },
                { icon: <Clock className="text-medical-blue" />, title: "7:30 AM Open", desc: "Early Morning Service" },
                { icon: <Heart className="text-medical-blue" />, title: "Hospital Adjacent", desc: "Near Dr. Kothari" },
              ].map((badge, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-blue-50 p-4 rounded-2xl mb-3">
                    {badge.icon}
                  </div>
                  <h4 className="font-bold text-gray-900">{badge.title}</h4>
                  <p className="text-xs text-gray-500">{badge.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-light-grey">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative">
                  <img 
                    src="https://picsum.photos/seed/pharmacy-store/800/1000" 
                    alt="RAJ Medical Store Interior" 
                    className="rounded-3xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                    <div className="flex items-center gap-4">
                      <div className="bg-trust-green p-3 rounded-full text-white">
                        <Star fill="currentColor" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900">4.8★</p>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Google Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <span className="text-medical-blue font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
                  A Legacy of Care in Dahegam
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Located right near Dr. Kothari Hospital on the Ahmedabad-Modasa Highway, RAJ Medical & Provision Store has been a pillar of the community for over 15 years. 
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our owner is known for his kind and polite nature, always ready to help patients and their families find the right medicines at the right prices. Whether you need affordable generic alternatives or specific branded medicines, we ensure availability when you need it most.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <ChevronRight size={16} className="text-medical-blue" />
                    </div>
                    <p className="font-medium text-gray-700 italic">"Medicines for Every Need, Prices for Every Pocket"</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <ChevronRight size={16} className="text-medical-blue" />
                    </div>
                    <p className="font-medium text-gray-700 italic">"તમારું સ્વાસ્થ્ય, અમારી જવાબદારી"</p>
                  </div>
                </div>
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 text-medical-blue font-bold hover:gap-4 transition-all"
                >
                  Visit our store today <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-medical-blue font-bold tracking-widest uppercase text-sm mb-4 block">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Comprehensive Healthcare Solutions</h2>
              <p className="text-gray-500">From life-saving medicines to daily household provisions, we have everything under one roof.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Pill size={32} />, 
                  title: "Generic Medicines", 
                  desc: "High-quality, affordable alternatives that work just as effectively as branded versions." 
                },
                { 
                  icon: <Stethoscope size={32} />, 
                  title: "Branded Medicines", 
                  desc: "All major pharmaceutical brands stocked and ready for your prescriptions." 
                },
                { 
                  icon: <ShoppingBag size={32} />, 
                  title: "Provision Store", 
                  desc: "Daily essentials, toiletries, and household items for your convenience." 
                },
                { 
                  icon: <FileText size={32} />, 
                  title: "Prescription Filling", 
                  desc: "Quick and accurate medicine dispensing by our experienced staff." 
                },
                { 
                  icon: <Heart size={32} />, 
                  title: "First-Aid Supplies", 
                  desc: "Bandages, antiseptics, and emergency healthcare kits always in stock." 
                },
                { 
                  icon: <Clock size={32} />, 
                  title: "Home Delivery", 
                  desc: "Local delivery available for senior citizens and emergency needs in Dahegam." 
                },
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl bg-light-grey hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100 group"
                >
                  <div className="text-medical-blue mb-6 group-hover:scale-110 transition-transform inline-block">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 bg-medical-blue rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Need a specific medicine?</h3>
                <p className="text-blue-100">WhatsApp us your prescription and we'll confirm availability.</p>
              </div>
              <a 
                href={WHATSAPP_LINK}
                className="bg-trust-green text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:bg-opacity-90 transition-all whitespace-nowrap"
              >
                <MessageCircle /> WhatsApp Now
              </a>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section id="inquiry" className="py-20 bg-light-grey">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-medical-blue p-10 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Medicine Inquiry</h3>
                  <p className="text-blue-100 mb-8">
                    Fill out this simple form to check if we have your medicine in stock. We usually respond within 30 minutes!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-2 rounded-lg"><Clock size={20} /></div>
                      <p>Quick Confirmation</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-2 rounded-lg"><ShieldCheck size={20} /></div>
                      <p>Genuine Medicines</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <p className="text-xs text-blue-200 uppercase tracking-widest mb-2">Direct Contact</p>
                  <p className="text-xl font-bold">+91 76220 14403</p>
                </div>
              </div>
              <div className="md:w-3/5 p-10">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name');
                    const medicine = formData.get('medicine');
                    const qty = formData.get('qty');
                    const message = `Hello RAJ Medical, I am ${name}. I want to inquire about: ${medicine} (Qty: ${qty}). Please confirm availability.`;
                    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="Your mobile number"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Medicine Name</label>
                      <input 
                        type="text" 
                        name="medicine"
                        required
                        placeholder="e.g. Paracetamol"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-bold text-gray-700 mb-2">Quantity</label>
                      <input 
                        type="text" 
                        name="qty"
                        required
                        placeholder="e.g. 1 Strip"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-medical-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-3"
                  >
                    Send to WhatsApp <MessageCircle />
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    By clicking, you will be redirected to WhatsApp to chat with us.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold mb-4">What Our Customers Say</h2>
              <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: "Rajesh Patel", text: "The owner is very polite. Since it's right next to Kothari Hospital, it's very convenient for patients. They always have the medicines I need.", date: "2 months ago" },
                { name: "Meena Shah", text: "Best medical store in Dahegam. They explain generic medicines clearly which saves us a lot of money. Highly recommended!", date: "1 month ago" },
                { name: "Suresh Prajapati", text: "Opens early at 7:30 AM which is a lifesaver. Very professional service and genuine medicines.", date: "3 weeks ago" },
              ].map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-light-grey p-8 rounded-3xl max-w-sm flex-1 min-w-[300px]"
                >
                  <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Map */}
        <section id="contact" className="py-20 bg-light-grey">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-display font-bold mb-8">Visit Our Store</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="bg-medical-blue text-white p-4 rounded-2xl h-fit">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Location</h4>
                      <p className="text-gray-600">Near Dr. Kothari Hospital, Ahmedabad–Modasa Highway, Dahegam, Gujarat 382305</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="bg-medical-blue text-white p-4 rounded-2xl h-fit">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone</h4>
                      <a href={`tel:${RAJ_PHONE}`} className="text-gray-600 hover:text-medical-blue transition-colors">+91 80001 25170</a>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="bg-medical-blue text-white p-4 rounded-2xl h-fit">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-gray-600">
                        <span>Mon - Sat:</span>
                        <span className="font-medium">7:30 AM - 7:30 PM</span>
                        <span>Sunday:</span>
                        <span className="font-medium">7:30 AM - 1:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 flex gap-4">
                  <a 
                    href={`tel:${RAJ_PHONE}`}
                    className="flex-1 bg-medical-blue text-white py-4 rounded-xl font-bold flex justify-center items-center gap-3 hover:bg-blue-700 transition-all"
                  >
                    <Phone /> Call Now
                  </a>
                  <a 
                    href={WHATSAPP_LINK}
                    className="flex-1 bg-trust-green text-white py-4 rounded-xl font-bold flex justify-center items-center gap-3 hover:bg-opacity-90 transition-all"
                  >
                    <MessageCircle /> WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-auto border-4 border-white">
                <iframe 
                  src={MAP_EMBED_URL}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RAJ Medical Store Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-800 pb-12 mb-12">
            <div className="flex items-center gap-2">
              <div className="bg-medical-blue p-2 rounded-lg">
                <PlusCircle className="text-white w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold leading-none">RAJ MEDICAL</h2>
                <p className="text-[10px] font-medium tracking-widest uppercase text-gray-400">Store & Provision</p>
              </div>
            </div>
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2026 RAJ Medical & Provision Store. All rights reserved.</p>
            <p>Designed for Dahegam's Health & Wellness</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 bg-trust-green text-white p-4 rounded-full whatsapp-float hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 z-50 flex h-16">
        <a 
          href={`tel:${RAJ_PHONE}`}
          className="flex-1 flex flex-col items-center justify-center text-medical-blue font-bold gap-1"
        >
          <Phone size={20} />
          <span className="text-[10px] uppercase">Call Now</span>
        </a>
        <div className="w-px bg-gray-100 my-3"></div>
        <a 
          href="#inquiry"
          className="flex-1 flex flex-col items-center justify-center text-gray-600 font-bold gap-1"
        >
          <FileText size={20} />
          <span className="text-[10px] uppercase">Inquiry</span>
        </a>
        <div className="w-px bg-gray-100 my-3"></div>
        <a 
          href={WHATSAPP_LINK}
          className="flex-1 flex flex-col items-center justify-center text-trust-green font-bold gap-1"
        >
          <MessageCircle size={20} />
          <span className="text-[10px] uppercase">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
