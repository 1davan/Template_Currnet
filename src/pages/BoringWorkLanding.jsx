import React from 'react';
import { Bot, Coffee, Calculator, User } from 'lucide-react';
import manImage from '../assets/man.png';
import modiaHealthLogo from '../assets/MODIA_HEALTH_MED-03.png';
import modiaEnhanceLogo from '../assets/Untitled (70 x 70 mm).png';
import redOxLogo from '../assets/Capture.JPG';
import Meta from '../components/seo/Meta';

const BoringWorkLanding = () => {
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
              <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Contact Brese</a>
              <a href="#account" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Account</a>
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
                  <span className="text-gray-900">Hello Smart Work</span>
                </h1>

                <p className="text-lg lg:text-xl text-gray-600 max-w-lg">
                  Tailored AI & Automation Solutions for Your Business
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Schedule a Demo
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
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 shadow-lg mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Swamped with busywork? Can't find time to GROW your business?
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                Let's be honest — success brings more admin than you ever asked for.
              </p>
            </div>
          </div>

          {/* The Problem - Visual Impact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="order-2 lg:order-1">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-orange-100/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>

                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">😫</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">The Daily Grind</h3>
                    <p className="text-orange-600 font-semibold">Sound familiar?</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <span className="font-semibold text-gray-900">Never-ending tasks:</span> emails, data entry, invoicing — rinse and repeat.
                    </p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <span className="font-semibold text-gray-900">Tech overload:</span> juggling tools that don't talk to each other.
                    </p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <span className="font-semibold text-gray-900">You're the bottleneck:</span> you want to lead, but you're buried in the weeds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="bottom -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-12 shadow-2xl border border-orange-100/30">
                  <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    We've been <span className="text-orange-600">there.</span>
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    Most business owners inevitably reach this point. We've been there too and tried every tool on the market.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                      <div className="text-3xl mb-3">😴</div>
                      <p className="text-gray-900 font-semibold">Late nights working</p>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                      <div className="text-3xl mb-3">😤</div>
                      <p className="text-gray-900 font-semibold">Drowning in to-dos</p>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                      <div className="text-3xl mb-3">💸</div>
                      <p className="text-gray-900 font-semibold">Tools that don't pull their weight</p>
                    </div>
                    <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                      <div className="text-3xl mb-3">⏱️</div>
                      <p className="text-gray-900 font-semibold">Missing out on real life</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Solution - Hope & Relief */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-xl rounded-full px-8 py-4 shadow-lg mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-green-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                ✨ Enter: Smart Automation
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-lime-100/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-green-500"></div>

                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Here's what changes</h3>
                    <p className="text-lime-600 font-semibold">when you stop working harder and start working smarter:</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-lime-500 rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <span className="font-semibold text-gray-900">90% less manual work</span> – we automate the repetitive stuff.
                    </p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-lime-500 rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <span className="font-semibold text-gray-900">Everything syncs</span> – finally, your tools play nicely.
                    </p>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-lime-500 rounded-full"></div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <span className="font-semibold text-gray-900">You grow, not grind</span> – more strategy, less scrambling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bottom -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-lime-200/30 to-green-200/30 rounded-full blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-lime-50 to-green-50 rounded-3xl p-12 shadow-2xl border border-lime-100/30">
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Imagine Your <span className="text-lime-600">Perfect</span> Day
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  You wake up to find routine tasks already handled. No emails piled up. No spreadsheets begging for attention. No bouncing between software. Just one cohesive system humming quietly in the background — while you focus on big-picture moves.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                    <div className="text-3xl mb-3">🎯</div>
                    <p className="text-gray-900 font-semibold">Strategic work only</p>
                  </div>
                  <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                    <div className="text-3xl mb-3">💰</div>
                    <p className="text-gray-900 font-semibold">Bigger margins</p>
                  </div>
                  <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                    <div className="text-3xl mb-3">😊</div>
                    <p className="text-gray-900 font-semibold">Less stress</p>
                  </div>
                  <div className="bg-white/80 rounded-2xl p-6 shadow-lg">
                    <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
                    <p className="text-gray-900 font-semibold">Weekends with your family, not your laptop</p>
                  </div>
                </div>

               
              </div>
            </div>
          </div>

          {/* Why Choose Us - Trust Building */}
          <div className="mt-24 text-center">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Why We're Different (And Why That Matters)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl">👨‍💼</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">We Get It</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We're business owners too. We know the hustle — and how to escape it.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Built Just for You</h4>
                  <p className="text-gray-700 leading-relaxed">
                    No plug-and-play templates. Every automation is custom-built to fit your business like a glove.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">It Actually Works</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Time saved. Errors down. Profits up. Our clients don't just feel the difference — they see it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Schedule a Demo
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-sm uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                See Our Success Stories
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What They're Saying
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real businesses. Real results. Real freedom from busywork.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Testimonial Card 1 - Modia Health */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-lime-600"></div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center p-2">
                  <img
                    src={modiaHealthLogo}
                    alt="Modia Health Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 font-medium leading-relaxed text-lg">
                    "BoringWork has literally freed up 80% of our day. The amount of admin required to run a mobile radiology business is staggering and the fact that they automated almost all of it is really quite an achievement. Couldn't be happier and now I can focus on my next big move."
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">Modia Health</p>
                    <p className="text-sm text-gray-600">Mobile Radiology Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 - Modia Enhance */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center p-2">
                  <img
                    src={modiaEnhanceLogo}
                    alt="Modia Enhance Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 font-medium leading-relaxed text-lg">
                    "BoringWork automated our booking flows, CRM management, emailing and postings to social media. They've made it very easy to focus on bringing in clients rather than managing the admin."
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">Modia Enhance</p>
                    <p className="text-sm text-gray-600">Business Enhancement Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 - Red Ox Media */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center p-2">
                  <img
                    src={redOxLogo}
                    alt="Red Ox Media Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 font-medium leading-relaxed text-lg">
                    "These guys really think outside the box. There isn't much they can't do and they work fast."
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">Red Ox Media</p>
                    <p className="text-sm text-gray-600">Creative Marketing Agency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BoringWorkLanding;
