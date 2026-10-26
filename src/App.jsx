import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Input,
  Accordion,
  AccordionItem,
} from "@heroui/react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [clientEmail, setClientEmail] = useState("");

  const categories = ["All", "Orbital & Space", "Deep Ocean", "Goa Coastal & Heritage", "Cyber-Cities"];

  const destinations = [
    {
      id: 1,
      title: "Low-Earth Orbit Station Alpha",
      category: "Orbital & Space",
      price: "₹12,00,000",
      duration: "3 Days / 2 Nights",
      rating: "4.98",
      tag: "Zero-G Experience",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      desc: "Experience 16 sunrises a day from the orbital viewing cupola with full luxury microgravity suites.",
    },
    {
      id: 2,
      title: "Mandovi Estuary Floating Glass Villa",
      category: "Goa Coastal & Heritage",
      price: "₹1,50,000",
      duration: "4 Days / 3 Nights",
      rating: "4.96",
      tag: "Eco-Luxury Retreat",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800&auto=format&fit=crop",
      desc: "Managed directly from our Margao HQ. Experience private backwater yacht cruises, Portuguese colonial heritage architecture, and sunset fine dining.",
    },
    {
      id: 3,
      title: "Neo-Tokyo Cyber Sanctuary",
      category: "Cyber-Cities",
      price: "₹2,65,000",
      duration: "5 Days / 4 Nights",
      rating: "4.92",
      tag: "Holographic Nightlife",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop",
      desc: "Private high-rise sky suites, automated tea ceremonies, and VIP access to subterranean audio lounges.",
    },
    {
      id: 4,
      title: "Mariana Trench Abyssal Base",
      category: "Deep Ocean",
      price: "₹7,35,000",
      duration: "4 Days / 3 Nights",
      rating: "4.95",
      tag: "Bioluminescent Safari",
      image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=800&auto=format&fit=crop",
      desc: "Submerge 11,000 meters into titanium luxury domes surrounded by glowing deep-sea ecosystems.",
    },
  ];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesCategory = activeCategory === "All" || dest.category === activeCategory;
    const matchesSearch = dest.title.toLowerCase().includes(searchQuery.toLowerCase()) || dest.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (clientEmail) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Background Ambient Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl"></div>
      </div>

      {/* 1. Navigation Bar */}
      <Navbar isBordered className="bg-slate-900/70 backdrop-blur-md border-slate-800 sticky top-0 z-50">
        <NavbarBrand className="gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-black text-white shadow-lg shadow-cyan-500/25">
            S
          </div>
          <div>
            <p className="font-bold text-slate-100 tracking-wider text-base">STELLARIS <span className="text-cyan-400 font-light">VOYAGES</span></p>
            <p className="text-[10px] text-slate-400 tracking-widest uppercase">Global HQ: Margao, Goa</p>
          </div>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem><a href="#expeditions" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Expeditions</a></NavbarItem>
          <NavbarItem><a href="#features" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Why Stellaris</a></NavbarItem>
          <NavbarItem><a href="#hq" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">Headquarters</a></NavbarItem>
          <NavbarItem><a href="#faq" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">FAQ</a></NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button as="a" href="#hq" className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-md hover:shadow-cyan-500/25 border-none">
              Contact Desk
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* 2. Hero Section */}
      <header className="relative z-10 pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
        <Chip variant="dot" color="primary" className="mb-6 bg-slate-900/90 text-cyan-300 border-slate-700 px-4 py-1">
          Authorized Autonomous Travel Concierge • Margao, Goa
        </Chip>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Redefine where human <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            curiosity can take you.
          </span>
        </h1>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Headquartered in the cultural heart of Goa, we curate high-end subterranean, coastal, and orbital expeditions with flawless human-led oversight.
        </p>

        {/* Dynamic Search Bar */}
        <div className="max-w-xl mx-auto bg-slate-900/80 p-2.5 rounded-2xl border border-slate-800 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row gap-2">
          <Input
            placeholder="Search destination, orbital station, or Goan villa..."
            value={searchQuery}
            onValueChange={setSearchQuery}
            variant="flat"
            className="text-white"
            classNames={{ inputWrapper: "bg-slate-950/70 border-slate-800 text-white" }}
          />
          <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6">
            Filter
          </Button>
        </div>
      </header>

      {/* 3. Filter Categories & Destinations Grid */}
      <section id="expeditions" className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <Chip
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer transition-all px-3 py-2 ${
                activeCategory === cat
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {cat}
            </Chip>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredDestinations.map((dest) => (
            <Card key={dest.id} className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="relative h-60 overflow-hidden">
                <img src={dest.image} alt={dest.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-3 left-3">
                  <Chip size="sm" className="bg-slate-950/80 text-cyan-300 backdrop-blur-md border border-slate-700">{dest.tag}</Chip>
                </div>
                <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700 text-xs text-amber-400 font-semibold">
                  ★ {dest.rating}
                </div>
              </div>

              <CardBody className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">{dest.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{dest.desc}</p>
                <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-800/80 pt-4">
                  <span>Duration: <strong className="text-slate-300">{dest.duration}</strong></span>
                  <span>Hub: <strong className="text-slate-300">Margao Desk</strong></span>
                </div>
              </CardBody>

              <CardFooter className="px-6 pb-6 pt-0 flex justify-between items-center">
                <div>
                  <span className="text-xs text-slate-500 block">Package Rate</span>
                  <span className="text-2xl font-black text-cyan-400">{dest.price}</span>
                </div>
                <Button size="sm" className="bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 font-semibold transition-all">
                  Request Itinerary
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-16 text-slate-500">
            No expeditions found matching "{searchQuery}". Try selecting "All" or exploring our Goa coastal routes.
          </div>
        )}
      </section>

      {/* 4. Why Choose Us / Features Section */}
      <section id="features" className="relative z-10 max-w-6xl mx-auto px-6 py-16 border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Engineered for Absolute Peace of Mind</h2>
          <p className="text-slate-400 text-sm">Every booking is backed by 24/7 dedicated dispatch teams operating out of our primary Goa control hub.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold mb-4 text-lg">01</div>
            <h4 className="font-bold text-white mb-2">Margao Control Hub</h4>
            <p className="text-slate-400 text-sm">Centralized coordination ensures rapid response times, local ticketing support, and personalized concierge check-ins.</p>
          </div>
          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold mb-4 text-lg">02</div>
            <h4 className="font-bold text-white mb-2">Zero-Carbon Transit</h4>
            <p className="text-slate-400 text-sm">All local Goan coastal and global orbital transfers utilize closed-loop hydrogen and electric transport fleets.</p>
          </div>
          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold mb-4 text-lg">03</div>
            <h4 className="font-bold text-white mb-2">Verified Security</h4>
            <p className="text-slate-400 text-sm">Encrypted passenger manifests and biometric clearance protocols managed in compliance with international travel standards.</p>
          </div>
        </div>
      </section>

      {/* 5. Headquarters & Interactive Map Section */}
      <section id="hq" className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-slate-900 to-slate-900/90 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Office Info & Form */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <Chip size="sm" className="bg-cyan-500/10 text-cyan-400 mb-4 border border-cyan-500/20">Global Command Center</Chip>
                <h3 className="text-2xl font-bold text-white mb-3">Margao Headquarters</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Visit our primary operational desk or contact our concierge team directly for custom itineraries and group charters.
                </p>
                
                <div className="space-y-4 text-sm text-slate-300 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block uppercase font-semibold">Address</span>
                      <span>4th Floor, City Centre, Municipal Garden Square, Margao, Goa 403601</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block uppercase font-semibold">Direct Desk Hotline</span>
                      <span className="text-cyan-400 font-mono">+91 (0832) 271-9988</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block uppercase font-semibold">Concierge Email</span>
                      <span>concierge@stellarisvoyages.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800">
                <h4 className="font-bold text-white text-sm mb-1">Receive 2026 Catalog</h4>
                <p className="text-xs text-slate-400 mb-3">Instant dispatch to your email.</p>
                
                {formSubmitted ? (
                  <div className="bg-cyan-500/10 border border-cyan-500/30 p-3 rounded-xl text-center text-cyan-300 text-xs">
                    ✓ Expeditions catalog sent to <strong>{clientEmail}</strong>.
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter email address..."
                      value={clientEmail}
                      onValueChange={setClientEmail}
                      isRequired
                      size="sm"
                      classNames={{ inputWrapper: "bg-slate-900 border-slate-800 text-white" }}
                    />
                    <Button type="submit" size="sm" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-4">
                      Send
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Google Map Embed */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 relative min-h-[380px] bg-slate-950 flex flex-col">
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex justify-between items-center text-xs">
                <span className="text-slate-300 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Margao Office Live GPS
                </span>
                <span className="text-slate-500">Coordinates: 15.2736° N, 73.9581° E</span>
              </div>
              <iframe
                title="Stellaris Voyages Margao Headquarters Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.42398273641!2d73.95551937512845!3d15.273600984166205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb3e1f2b60001%3A0x8e8eb43e4cfcf30!2sMargao%2C%20Goa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full flex-grow border-0 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions Section */}
      <section id="faq" className="relative z-10 max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-sm">Everything you need to know about our Goan command hub and expedition bookings.</p>
        </div>

        <Accordion variant="splitted" className="gap-3">
          <AccordionItem
            key="1"
            aria-label="Headquarters booking"
            title="Can I visit the Margao headquarters to discuss custom travel itineraries?"
            className="bg-slate-900/90 border border-slate-800 text-slate-100"
            classNames={{
              title: "text-slate-100 font-semibold text-base",
              content: "text-slate-300 text-sm leading-relaxed",
            }}
          >
            Yes, our Margao office is open Monday through Saturday from 10:00 AM to 6:00 PM IST. Walk-in guests can consult directly with senior trip planners for private aerospace, abyssal, or coastal villa arrangements.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Orbital safety"
            title="What medical clearance and preparation are required for Low-Earth Orbit Station Alpha?"
            className="bg-slate-900/90 border border-slate-800 text-slate-100"
            classNames={{
              title: "text-slate-100 font-semibold text-base",
              content: "text-slate-300 text-sm leading-relaxed",
            }}
          >
            All spacefarers complete a mandatory 48-hour biometric calibration protocol. Standard cardiovascular health screening is required, and initial zero-G orientation is handled by our launch team prior to takeoff.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Goa coastal retreats"
            title="How are the Mandovi Estuary Floating Glass Villa retreats managed?"
            className="bg-slate-900/90 border border-slate-800 text-slate-100"
            classNames={{
              title: "text-slate-100 font-semibold text-base",
              content: "text-slate-300 text-sm leading-relaxed",
            }}
          >
            Goan coastal tours are coordinated directly out of our Margao desk. Each villa comes with a private electric yacht, personal chef, and guided access to heritage sites across Old Goa.
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Cancellation and transfer"
            title="Are booking passes transferable or refundable?"
            className="bg-slate-900/90 border border-slate-800 text-slate-100"
            classNames={{
              title: "text-slate-100 font-semibold text-base",
              content: "text-slate-300 text-sm leading-relaxed",
            }}
          >
            Passes can be transferred to another verified passenger up to 14 days prior to embarkation via your authenticated guest vault or by contacting our Margao hotline.
          </AccordionItem>
        </Accordion>
      </section>

      {/* 7. Footer */}
      <footer className="relative z-10 border-t border-slate-900 bg-slate-950 py-10 px-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Stellaris Voyages Inc. Global HQ: Margao, Goa, India. All rights reserved.</p>
          <div className="flex gap-6 text-slate-400">
            <a href="#hq" className="hover:text-cyan-400">Margao Command Desk</a>
            <a href="#" className="hover:text-cyan-400">Privacy Protocol</a>
            <a href="#" className="hover:text-cyan-400">Security Clearance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}