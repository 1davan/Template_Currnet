import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Bot, ChevronLeft, ChevronRight, MessageSquare, Brain, ClipboardCheck, Settings, Rocket, Puzzle, Sparkles, PhoneCall, Workflow, Cpu, Link, BarChart3, Shield } from 'lucide-react';
import manImage from '../assets/man.png';
import busymanImage from '../assets/busyman.png';
import automationsImage from '../assets/Automations.png';
import relievedmanImage from '../assets/relievedman.png';
import modiaHealthLogo from '../assets/MODIA_HEALTH_MED-03.png';
import modiaEnhanceLogo from '../assets/Untitled (70 x 70 mm).png';
import redOxLogo from '../assets/Capture.JPG';
import Meta from '../components/seo/Meta';

const BoringWorkLanding = () => {
  const testimonials = [
    {
      id: 1,
      logo: modiaHealthLogo,
      company: "Modia Health",
      type: "Mobile Radiology Services",
      quote: "BoringWork has literally freed up 80% of our day. The amount of admin required to run a mobile radiology business is staggering and the fact that they automated almost all of it is really quite an achievement. Couldn't be happier and now I can focus on my next big move.",
      color: "from-lime-400 to-lime-600"
    },
    {
      id: 2,
      logo: modiaEnhanceLogo,
      company: "Modia Enhance",
      type: "Business Enhancement Services",
      quote: "BoringWork automated our booking flows, CRM management, emailing and postings to social media. They've made it very easy to focus on bringing in clients rather than managing the admin.",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: 3,
      logo: redOxLogo,
      company: "Red Ox Media",
      type: "Creative Marketing Agency",
      quote: "These guys really think outside the box. There isn't much they can't do and they work fast.",
      color: "from-orange-400 to-orange-600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  // Scroll animation states
  const [dailyGrindSectionExpanded, setDailyGrindSectionExpanded] = useState(false);
  const [weveBeenThereSectionExpanded, setWeveBeenThereSectionExpanded] = useState(false);
  const [heresWhatChangesSectionExpanded, setHeresWhatChangesSectionExpanded] = useState(false);
  const [perfectDaySectionExpanded, setPerfectDaySectionExpanded] = useState(false);
  const [enterBoringWorkScale, setEnterBoringWorkScale] = useState(1);
  const [enterBoringWorkTranslateY, setEnterBoringWorkTranslateY] = useState(50);

  // Refs for the 4 main sections
  const dailyGrindRef = useRef(null);
  const weveBeenThereRef = useRef(null);
  const heresWhatChangesRef = useRef(null);
  const perfectDayRef = useRef(null);
  const enterBoringWorkRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || isDragging) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isDragging]);

  // Infinite scroll logic - reset to beginning when reaching duplicates
  useEffect(() => {
    if (currentIndex >= testimonials.length) {
      // Use setTimeout to reset without animation after the transition completes
      const timer = setTimeout(() => {
        setCurrentIndex(0);
      }, 500); // Match the transition duration

      return () => clearTimeout(timer);
    }
  }, [currentIndex, testimonials.length]);

  // Scroll animation based on viewport middle trigger
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportMiddle = viewportHeight / 2;
      const scrollTop = window.pageYOffset;

      // Check Daily Grind section
      if (dailyGrindRef.current) {
        const element = dailyGrindRef.current;
        const rect = element.getBoundingClientRect();

        // Trigger expansion when section top reaches 60% of viewport height (early trigger)
        const triggerPoint = scrollTop + (viewportHeight * 0.6);
        const shouldExpand = (scrollTop + rect.top) <= triggerPoint;

        // Once expanded, keep it expanded (don't hide when scrolling past)
        if (shouldExpand) {
          setDailyGrindSectionExpanded(true);
        }
      }

      // Check We've Been There section (later trigger - 75%)
      if (weveBeenThereRef.current) {
        const element = weveBeenThereRef.current;
        const rect = element.getBoundingClientRect();
        const elementBottom = scrollTop + rect.bottom;

        // Trigger expansion when section center reaches viewport middle (late trigger)
        const elementCenter = scrollTop + rect.top + (rect.height / 2);
        const shouldExpand = elementCenter <= (scrollTop + viewportMiddle) && elementBottom >= (scrollTop + viewportMiddle);

        setWeveBeenThereSectionExpanded(shouldExpand);
      }

      // Check Here's What Changes section
      if (heresWhatChangesRef.current) {
        const element = heresWhatChangesRef.current;
        const rect = element.getBoundingClientRect();
        const elementBottom = scrollTop + rect.bottom;
        const elementBottomQuarter = elementBottom - (rect.height / 4);

        // Trigger expansion when section top reaches 60% of viewport height (early trigger)
        const triggerPoint = scrollTop + (viewportHeight * 0.6);
        const shouldExpand = (scrollTop + rect.top) <= triggerPoint && elementBottom >= (scrollTop + viewportMiddle);

        setHeresWhatChangesSectionExpanded(shouldExpand);
      }

      // Check Perfect Day section (later trigger - 75%)
      if (perfectDayRef.current) {
        const element = perfectDayRef.current;
        const rect = element.getBoundingClientRect();
        const elementBottom = scrollTop + rect.bottom;

        // Trigger expansion when section center reaches viewport middle (late trigger)
        const elementCenter = scrollTop + rect.top + (rect.height / 2);
        const shouldExpand = elementCenter <= (scrollTop + viewportMiddle) && elementBottom >= (scrollTop + viewportMiddle);

        setPerfectDaySectionExpanded(shouldExpand);
      }

      // Check Enter BoringWork section - expand when scrolled to
      if (enterBoringWorkRef.current) {
        const element = enterBoringWorkRef.current;
        const rect = element.getBoundingClientRect();

        // Trigger expansion when section enters viewport
        const viewportHeight = window.innerHeight;
        const triggerPoint = scrollTop + (viewportHeight * 0.7); // Trigger when 70% down viewport

        const shouldExpand = (scrollTop + rect.top) <= triggerPoint;

        // Once expanded, keep it expanded (don't contract when scrolling past)
        if (shouldExpand) {
          setEnterBoringWorkScale(1.3);
          setEnterBoringWorkTranslateY(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle mouse/touch events for dragging
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartPos(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startPos) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartPos(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startPos) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return testimonials.length - 1;
      }
      return prevIndex - 1;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="min-h-screen">
      <Meta
        title="BoringWork - AI & Automation Solutions for Small Business"
        description="Say goodbye to busywork with tailored AI & automation solutions. Free up 90% of your time from manual tasks and focus on growing your business."
        keywords="business automation, AI solutions, small business, productivity, workflow automation, business efficiency"
      />
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">BoringWork</span>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-8">
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Contact Us</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lime-50 via-yellow-50 to-orange-50 py-20 lg:py-32 overflow-hidden">
        {/* Parallelogram within hero section */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 z-5"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="relative z-30 space-y-8">
              <div className="space-y-6">
                {/* Eyebrow Section */}
                <div className="flex items-center text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  <span>Small to Medium Business Owners</span>
                  <div className="ml-4 h-px bg-gray-500 w-16"></div>
                </div>
                
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
                  Say Goodbye to
                  <br />
                  <span className="text-gray-700">Busywork.</span>
                  <br />
                </h1>

                <p className="text-lg lg:text-2xl text-gray-800 max-w-lg">
                  Tailored AI & Automation Solutions for Your Business
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Schedule a Consult
                </button>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  See Our Success Stories
                </button>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative z-30">
              <img
                src={manImage}
                alt="Professional man using tablet in modern kitchen workspace"
                className="relative z-40 w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="flex items-mid justify-center mt-20 mb-10 text-lg font-semibold text-gray-500 tracking-wide">
          <p className="text-2xl lg:text-3xl font-bold text-gray-900">
                  We help you get your life back.
                </p>
                </div>
          {/* Core Services Cards */}
          <div className="mt-20 relative z-30">
            {/* Section Header */}
           

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Card 1: Custom Workflow Automations */}
              <motion.div 
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-lime-300/60 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-50/50 to-lime-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-lime-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Workflow className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-lime-700 transition-colors duration-300">
                      Custom Workflow Automations
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Smart AI Integrations */}
              <motion.div 
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-yellow-300/60 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-yellow-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">
                      Smart AI Integrations
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Seamless System Integration */}
              <motion.div 
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-orange-300/60 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-orange-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Link className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
                      Seamless System Integration
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Data Transformation & Insights */}
              <motion.div
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-emerald-300/60 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-emerald-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                      Data Transformation & Insights
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Card 5: Data Privacy & Security */}
              <motion.div
                className="group bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-blue-300/60 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                      Data Privacy & Security
                    </h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* PAS Section - High Converting Flow */}
      <section className="relative bg-gray-40 py-24 lg:py-40 overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-lime-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-yellow-200/15 to-orange-200/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-200/10 to-lime-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Introduction - Problem Setup */}
          <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Let's be honest. <br /> <br />  <br />Success brings  <span className="text-orange-600">more admin</span> than you ever asked for.
              </h2>

           
          </div>

          {/* Combined Problem & Understanding - Redesigned Layout */}
          <div ref={dailyGrindRef} className="relative mb-4">
            {/* Top Section - Image Left, List Right */}
            <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
              {/* Image - Flush Left */}
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, x: -50 }}
                animate={dailyGrindSectionExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="w-full max-w-md">
                  <img
                    src={busymanImage}
                    alt="Stressed business owner overwhelmed with paperwork and tasks"
                    className="w-full h-auto object-cover rounded-r-lg"
                  />
                </div>
              </motion.div>

              {/* List - Right Side */}
              <motion.div
                className="flex-1 space-y-8 mt-20"
                initial={{ opacity: 0, x: 50 }}
                animate={dailyGrindSectionExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    <span className="text-gray-900">To-do lists that just get bigger and bigger</span>.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Not delegating things for a fear it won't be done right.
                  </p>
                </motion.div>


                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Your "CRM" is a messy Excel file you're too scared to open.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    You're the CEO, but also the receptionist, bookkeeper, admin assistant.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Wondering if this is really what being your own boss looks like.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  </div>
                  <p className="text-2xl text-gray-700 leading-relaxed font-bold">
                    You want more leads, but you're <span className="underline">stuck in the weeds</span>.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Section - Centered Text */}
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.h3
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                We understand the <span className="text-orange-600">pain.</span>
              </motion.h3>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={dailyGrindSectionExpanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <p className="text-xl text-gray-700 leading-relaxed">
                  <strong>Most business owners eventually hit this wall.</strong>
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  We know the struggle because we've lived it too, <strong>and built solutions that <span className="text-orange-600 underline font-semibold">crush it</span></strong>.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    
      {/* What We Do - Solutions Section */}
      <section className="relative bg-gradient-to-br from-lime-50 via-yellow-50 to-orange-50 py-24 lg:py-20 overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-lime-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-yellow-200/15 to-orange-200/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-200/10 to-lime-200/10 rounded-full blur-3xl"></div>
        </div>
        <div ref={enterBoringWorkRef} className="text-center mb-40 mt-00">
            <h2
              className="text-2xl lg:text-6xl font-bold text-gray-900 transition-transform duration-75 ease-out"
              style={{
                transform: `scale(${enterBoringWorkScale}) translateY(${enterBoringWorkTranslateY}px)`,
                transformOrigin: 'center'
              }}
            >
              Enter Boring<span className="text-blue-500">Work</span>.
            </h2>
          </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            
            <p className="text-xl lg:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-bold">
              We <span className="text-yellow-00 font-bold">untangle the mess</span> and automate the boring stuff.
            </p>
          </div>

          {/* Main Content - Image Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-center lg:text-left mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                
              </motion.div>

              <motion.h3
                className="text-2xl lg:text-3xl font-bold text-gray-900 text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                
              </motion.h3>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                 <div className="flex items-start space-x-4">
                   <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                     <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold text-gray-900 mb-2">
                       Repetitive Tasks → Automated
                     </h4>
                     <p className="text-gray-700 leading-relaxed">
                       Invoices, emails, calendar bookings? Gone from your to-do list.
                     </p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                   <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                     <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold text-gray-900 mb-2">
                       Smart AI → Where It Actually Helps
                     </h4>
                     <p className="text-gray-700 leading-relaxed">
                       We don't just throw AI at your business. We integrate it where it saves time—and skip it where it complicates things.
                     </p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                   <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                     <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold text-gray-900 mb-2">
                       Disconnected Tools → Unified System
                     </h4>
                     <p className="text-gray-700 leading-relaxed">
                       Your apps and platforms finally work together. No more double-handling.
                     </p>
                   </div>
                 </div>

                 <div className="flex items-start space-x-4">
                   <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                     <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                   </div>
                   <div>
                     <h4 className="text-2xl font-bold text-gray-900 mb-2">
                       Messy Data → Instant Insights
                     </h4>
                     <p className="text-gray-700 leading-relaxed">
                       We turn raw info into clear dashboards, summaries, and daily reports.
                     </p>
                   </div>
                 </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
               <div className="relative">
                 <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-lime-200/30 to-yellow-200/30 rounded-full blur-3xl"></div>
                 <img
                   src={automationsImage}
                   alt="3D illustration of automated business processes and integrations"
                   className="relative z-10 w-full h-auto object-contain"
                 />
               </div>
            </motion.div>
          </div>
        </div>
      </section>
   
      {/* Life After BoringWork Section */}
      <section className="relative bg-gradient-to-b from-lime-50 to-green-200 py-24 lg:py-40 overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-lime-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-emerald-200/15 to-green-200/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-200/10 to-emerald-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Introduction */}
          <div ref={enterBoringWorkRef} className="text-center mb-20">
            <h2
              className="text-2xl lg:text-6xl font-bold text-gray-900 transition-transform duration-75 ease-out"
              style={{
                transform: `scale(${enterBoringWorkScale}) translateY(${enterBoringWorkTranslateY}px)`,
                transformOrigin: 'center'
              }}
            >
              Life after Boring<span className="text-blue-500">Work</span>.
            </h2>
          </div>

          {/* Main Content Grid - Image and Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <div className="relative -mt-36">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-lime-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
                <img
                  src={relievedmanImage}
                  alt="Relieved business owner enjoying free time"
                  className="relative z-10 w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                Suddenly you have free time.
              </motion.h3>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    <strong>Comprehensive status reports</strong> magically appear in your inbox overnight.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Those documents <strong>somehow sorted themselves</strong>.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    The invoices have been <strong>automatically filled</strong> and are <strong>awaiting your approval</strong>.
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-2xl text-gray-700 leading-relaxed">
                    <strong>Hours of boring work</strong> - done before you even opened up your laptop.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  The only problem?
                </p>

                <motion.h3
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  How to spend your free time wisely.
                </motion.h3>

                <motion.p
                  className="text-xl text-gray-700 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  This isn't someday. It's the reality of every business owner that chooses to automate.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>

          <div className="text-center mt-20">
            <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Ready to win back your time?
            </h4>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Schedule a Consult
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                See Our Success Stories
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Carousel Section */}
      <section className="py-0 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What They're Saying
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real businesses. Real results. Real freedom from busywork.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 -translate-x-1/2"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 translate-x-1/2"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Carousel Track */}
            <div
              ref={carouselRef}
              className="overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out gap-8"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                  width: `${(testimonials.length * 2 * 100) / 3}%`
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex-shrink-0"
                    style={{ width: '33.333%' }}
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color}`}></div>
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center p-2">
                        <img
                          src={testimonial.logo}
                          alt={`${testimonial.company} Logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-700 font-medium leading-relaxed text-lg">
                          "{testimonial.quote}"
                        </p>
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-sm font-semibold text-gray-900">{testimonial.company}</p>
                          <p className="text-sm text-gray-600">{testimonial.type}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Duplicate testimonials for infinite scroll effect */}
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`duplicate-${testimonial.id}-${index}`}
                    className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex-shrink-0"
                    style={{ width: '33.333%' }}
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color}`}></div>
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center p-2">
                        <img
                          src={testimonial.logo}
                          alt={`${testimonial.company} Logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-700 font-medium leading-relaxed text-lg">
                          "{testimonial.quote}"
                        </p>
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-sm font-semibold text-gray-900">{testimonial.company}</p>
                          <p className="text-sm text-gray-600">{testimonial.type}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Dot Indicators */}
            <div className="flex justify-center mt-14 space-x-2 pb-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex % testimonials.length
                      ? 'bg-lime-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Matching PAS Style */}
      <section id="how-it-works" className="relative bg-gray-50 py-24 lg:py-40 overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-purple-200/15 to-emerald-200/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-200/10 to-blue-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero Introduction */}
          <div className="text-center mb-20">
             
              <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
                How It Works
              </h2>

          
          </div>

          {/* Process Steps - 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
            {/* Step 1: Consultation */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-orange-100/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Free 15-Minute Consultation</h3>
                  <p className="text-orange-600 font-semibold">Step 1: Let's talk</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We start with a quick, no-pressure call to understand what's slowing you down. Can't describe it clearly? That's totally fine.
                </p>
                <div className="bg-orange-50 rounded-2xl p-4 shadow-lg border border-orange-100">
                  <p className="text-gray-800 font-semibold mb-2">What to expect:</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">No sales pitch</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">Just understanding your pain</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">Honest assessment of fit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Audit */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-lime-100/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-green-500"></div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🔍</span>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">In-Depth Systems Audit</h3>
                  <p className="text-lime-600 font-semibold">Step 2: We dig deep</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  If it's a good fit, we come to your site (or Zoom in), dig into your current workflow, and identify what's costing you time, energy, and money.
                </p>
                <div className="bg-lime-50 rounded-2xl p-4 shadow-lg border border-lime-100">
                  <p className="text-gray-800 font-semibold mb-2">We analyze everything:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">Current tools & software</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">Workflow bottlenecks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">Automation opportunities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span className="text-gray-700 text-sm">Cost vs. benefit analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Plan */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-yellow-100/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">📋</span>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Custom Plan & Quote</h3>
                  <p className="text-yellow-600 font-semibold">Step 3: Your blueprint</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  No cookie-cutters here. We'll design a bespoke solution that shows exactly what we'll build.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">What we'll automate</span> – specific tasks and workflows
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">Where we'll use AI</span> – and where we won't
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">What tools we'll keep</span> – and what we'll ditch
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">Custom quote</span> – with no surprise fees
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Build & Results */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-2xl border border-lime-100/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-green-500"></div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Build, Deliver & Results</h3>
                  <p className="text-lime-600 font-semibold">Step 4: We make it happen</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We roll up our sleeves and build the system — fast, securely, and to spec. Once we hit "go," it's game on.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-lime-50 rounded-xl p-3 shadow-sm">
                    <div className="text-lg mb-1">🔧</div>
                    <p className="text-xs font-semibold text-gray-900">Reliable automations</p>
                  </div>
                  <div className="bg-lime-50 rounded-xl p-3 shadow-sm">
                    <div className="text-lg mb-1">🔗</div>
                    <p className="text-xs font-semibold text-gray-900">Seamless integrations</p>
                  </div>
                  <div className="bg-lime-50 rounded-xl p-3 shadow-sm">
                    <div className="text-lg mb-1">🤖</div>
                    <p className="text-xs font-semibold text-gray-900">Smart AI implementation</p>
                  </div>
                  <div className="bg-lime-50 rounded-xl p-3 shadow-sm">
                    <div className="text-lg mb-1">🛡️</div>
                    <p className="text-xs font-semibold text-gray-900">1 year free support</p>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-2xl p-4 shadow-lg border border-lime-100 mt-4">
                  <p className="text-gray-900 font-semibold mb-2">What happens next?</p>
                  <div className="space-y-2 text-gray-700 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-lime-500 rounded-full"></div>
                      <span>Daily operations run smoothly</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-lime-500 rounded-full"></div>
                      <span>You focus on growing your business</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-lime-500 rounded-full"></div>
                      <span>We handle any issues that arise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* CTA Section */}
          <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Don't know where to begin?
              </h3>
            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              That's exactly where most of our clients start. Book a free consult and let's figure it out together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-600 text-white font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                Book Your Free Consult
              </a>
              <a
                href="#testimonials"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                See Success Stories
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BoringWorkLanding;

