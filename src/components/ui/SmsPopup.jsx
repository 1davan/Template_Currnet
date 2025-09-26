import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, X, Send } from 'lucide-react';

const SmsPopup = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create query string with form data
      const queryParams = new URLSearchParams({
        name: formData.name,
        mobile: formData.mobile,
        message: formData.message,
        source: 'sms_popup'
      });

      // Make GET request with query parameters
      // Use proxy in development, direct URL in production
      const isDevelopment = import.meta.env.DEV;
      const baseUrl = isDevelopment 
        ? '/api/webhook/54fd7e70-6966-47cd-86ad-ff620f212585'
        : 'https://n8n-boringwork-u57538.vm.elestio.app/webhook/54fd7e70-6966-47cd-86ad-ff620f212585';
      
      const webhookUrl = `${baseUrl}?${queryParams}`;
      console.log('Sending webhook request to:', webhookUrl);
      
      const response = await fetch(webhookUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      console.log('Webhook response status:', response.status);
      console.log('Webhook response ok:', response.ok);

      if (response.ok) {
        console.log('Webhook submission successful!');
        setIsSubmitted(true);
        // Reset form after 3 seconds and close popup
        setTimeout(() => {
          setIsSubmitted(false);
          setIsExpanded(false);
          setFormData({ name: '', mobile: '', message: '' });
        }, 3000);
      } else {
        console.error('Webhook response not ok:', response.status, response.statusText);
        const responseText = await response.text();
        console.error('Response body:', responseText);
        throw new Error(`Submission failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggle = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
      // Reset form when closing
      setFormData({ name: '', mobile: '', message: '' });
      setIsSubmitted(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
            style={{ width: '380px', maxWidth: '90vw' }}
          >
            {/* Header */}
            <div 
              className="px-6 py-4 text-white relative"
              style={{ backgroundColor: '#1a6388' }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5" />
                  <h3 className="font-semibold text-lg text-white">Get a quick response via text</h3>
                </div>
                <button
                  onClick={handleToggle}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-4">
              {!isSubmitted ? (
                <>
                  <p className="text-gray-600 mb-6 text-sm">
                    Enter your information, and our team will text you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Phone"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    <div className="text-xs text-gray-500 leading-relaxed">
                      By submitting, you authorize BoringWork to text/call the number above about our services, offers & other information, possibly using automated means &/or AI-generated calls/content. Msg/data rates apply. Msg frequency varies. Consent is not a condition of purchase. See{' '}
                      <span className="text-blue-600 underline">Terms</span>. Text STOP to unsubscribe.
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      style={{
                        backgroundColor: isSubmitting ? '#94a3b8' : '#1a6388',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        if (!isSubmitting) {
                          e.target.style.backgroundColor = '#145066';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSubmitting) {
                          e.target.style.backgroundColor = '#1a6388';
                        }
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-sm">
                    Thanks for reaching out. We'll text you back shortly!
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={handleToggle}
        className="text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
        style={{ backgroundColor: '#ea7a2c' }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#d16a1f'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#ea7a2c'}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={isExpanded ? { rotate: 180 } : { rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isExpanded ? (
          <X className="w-5 h-5" />
        ) : (
          <>
            <Phone className="w-5 h-5" />
            <span>Text us</span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default SmsPopup;
