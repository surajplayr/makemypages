import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  ArrowLeft, 
  Check, 
  Sparkles, 
  PhoneCall, 
  Calendar, 
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import { servicesData } from '../data/services';

interface QuickOption {
  id: string;
  label: string;
  serviceSlug?: string;
  icon: string;
  action?: 'service' | 'pricing' | 'consultation' | 'expert';
}

const quickOptions: QuickOption[] = [
  { id: 'web-dev', label: 'Website Development', serviceSlug: 'website-development', icon: '🌐', action: 'service' },
  { id: 'seo', label: 'SEO Optimization', serviceSlug: 'seo-optimization', icon: '📈', action: 'service' },
  { id: 'google-ads', label: 'Google Ads', serviceSlug: 'google-ads-management', icon: '📢', action: 'service' },
  { id: 'meta-ads', label: 'Meta Ads', serviceSlug: 'meta-ads-management', icon: '📱', action: 'service' },
  { id: 'gbp', label: 'Google Business Profile', serviceSlug: 'google-business-profile-management', icon: '⭐', action: 'service' },
  { id: 'influencer', label: 'Influencer Marketing', serviceSlug: 'influencer-marketing', icon: '🎯', action: 'service' },
  { id: 'photo-video', label: 'Photography & Videography', serviceSlug: 'photography-videography', icon: '📸', action: 'service' },
  { id: 'ai-photo', label: 'AI Product Photography', serviceSlug: 'ai-product-photography', icon: '🤖', action: 'service' },
  { id: 'graphic-design', label: 'Graphic Design', serviceSlug: 'graphic-design', icon: '🎨', action: 'service' },
  { id: 'content-writing', label: 'Content Writing', serviceSlug: 'content-writing', icon: '✍️', action: 'service' },
  { id: 'pricing', label: 'Get Pricing', icon: '💰', action: 'pricing' },
  { id: 'consultation', label: 'Book Free Consultation', icon: '📅', action: 'consultation' },
  { id: 'expert', label: 'Talk to an Expert', icon: '💬', action: 'expert' },
];

export default function WhatsAppChatbot() {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [currentStep, setCurrentStep] = useState<'menu' | 'service-detail' | 'lead-form' | 'submitted'>('menu');
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

  // Lead Form Data
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    city: '',
    serviceRequired: '',
    budget: '₹8,000 - ₹20,000/mo',
    projectDetails: ''
  });

  const [formStep, setFormStep] = useState<number>(1);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Show floating widget after 3 seconds on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Auto scroll down chat view when messages or steps update
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, currentStep, isTyping, selectedService, formStep]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setUnreadCount(0);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const handleResetChat = () => {
    setCurrentStep('menu');
    setSelectedService(null);
    setFormStep(1);
    setIsTyping(false);
  };

  const simulateBotResponse = (callback: () => void) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, 600);
  };

  const handleSelectOption = (option: QuickOption) => {
    if (option.action === 'service' && option.serviceSlug) {
      const matched = servicesData.find(s => s.slug === option.serviceSlug);
      if (matched) {
        setSelectedService(matched);
        setFormData(prev => ({ ...prev, serviceRequired: matched.title }));
        simulateBotResponse(() => {
          setCurrentStep('service-detail');
        });
      }
    } else if (option.action === 'pricing') {
      simulateBotResponse(() => {
        setSelectedService(null);
        setFormData(prev => ({ ...prev, serviceRequired: 'All Services / Custom Quote' }));
        setCurrentStep('lead-form');
        setFormStep(1);
      });
    } else if (option.action === 'consultation' || option.action === 'expert') {
      simulateBotResponse(() => {
        setSelectedService(null);
        setFormData(prev => ({ ...prev, serviceRequired: 'Free Strategy Consultation' }));
        setCurrentStep('lead-form');
        setFormStep(1);
      });
    }
  };

  const handleStartConsultation = () => {
    simulateBotResponse(() => {
      setCurrentStep('lead-form');
      setFormStep(1);
    });
  };

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = 
`Hello MakeMyPages,

I would like to enquire about:

Service: ${formData.serviceRequired || selectedService?.title || 'General Enquiry'}
Business: ${formData.businessName || 'N/A'}
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
City: ${formData.city || 'N/A'}
Budget: ${formData.budget}
Project Details: ${formData.projectDetails || 'Interested in getting started.'}

Please contact me.`;

    const whatsappUrl = `https://wa.me/919709143253?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');

    setCurrentStep('submitted');
  };

  if (!visible) return null;

  return (
    <>
      {/* Floating Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            className="fixed bottom-5 right-5 z-50 flex items-center gap-3"
          >
            {/* Tooltip Badge */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              onClick={handleOpenChat}
              className="hidden sm:flex items-center gap-2 bg-slate-900/95 text-white text-xs font-bold px-3.5 py-2 rounded-2xl shadow-xl border border-slate-800 cursor-pointer hover:bg-slate-800 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Need help? Chat with us</span>
            </motion.div>

            {/* Circular Trigger */}
            <button
              onClick={handleOpenChat}
              aria-label="Open MakeMyPages WhatsApp Chatbot"
              className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            >
              {/* Outer Pulse Effect */}
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-30"></span>

              {/* WhatsApp Icon */}
              <svg 
                className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10" 
                viewBox="0 0 24 24"
              >
                <path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.459 3.487 1.332 5.006l-1.417 5.176 5.297-1.389c1.463.798 3.111 1.217 4.781 1.217 5.517 0 9.993-4.476 9.993-9.993s-4.476-9.993-9.993-9.993zm5.836 14.184c-.244.688-1.201 1.312-1.954 1.482-.516.115-1.19.18-3.453-.756-2.894-1.199-4.755-4.148-4.899-4.341-.144-.193-1.171-1.562-1.171-2.979 0-1.417.734-2.115 1.022-2.403.288-.288.632-.36.842-.36.21 0 .42.002.602.011.193.009.452-.074.707.538.259.623.882 2.152.959 2.309.077.157.129.34.026.546-.103.206-.155.334-.309.516-.154.182-.324.407-.463.546-.154.154-.314.322-.135.63.18.309.798 1.317 1.71 2.129 1.171 1.042 2.158 1.365 2.467 1.519.309.154.489.129.669-.077.18-.206.772-.901.977-1.21.206-.309.412-.257.695-.154.283.103 1.799.848 2.108 1.002.309.154.515.231.592.36.077.129.077.747-.167 1.435z" />
              </svg>

              {/* Unread Badge */}
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-md">
                  {unreadCount}
                </span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[92vw] sm:w-[410px] h-[580px] max-h-[85vh] bg-slate-900/95 text-white rounded-3xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-slate-900 p-4 sm:p-4.5 flex items-center justify-between border-b border-emerald-500/20 shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-extrabold shadow-inner">
                    <Bot size={22} className="text-emerald-300" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-900 rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>👋 Welcome to MakeMyPages</span>
                  </h3>
                  <p className="text-[11px] text-emerald-200/90 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>MakeMyPages Assistant • Online</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {currentStep !== 'menu' && (
                  <button 
                    onClick={handleResetChat}
                    title="Reset Conversation"
                    className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                  >
                    <RotateCcw size={16} />
                  </button>
                )}
                <button 
                  onClick={handleCloseChat}
                  title="Close Assistant"
                  className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Scrollable Message Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm custom-scrollbar bg-slate-950/60">
              
              {/* Welcome Bot Message */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                  <Bot size={15} />
                </div>
                <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-2xl rounded-tl-xs max-w-[85%] text-slate-200 leading-relaxed space-y-1.5 shadow-md">
                  <p className="font-bold text-white">Hi! I'm the MakeMyPages Assistant. 👋</p>
                  <p className="text-slate-300">How can we help you expand your business today?</p>
                </div>
              </div>

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2.5 text-slate-400 text-xs italic pl-9">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                  <span>MakeMyPages Assistant is typing...</span>
                </div>
              )}

              {/* MENU STEP */}
              {!isTyping && currentStep === 'menu' && (
                <div className="space-y-3 pt-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
                    Select a service or action:
                  </p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {quickOptions.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(opt)}
                        className="w-full text-left bg-slate-900/90 hover:bg-emerald-950/40 border border-slate-800 hover:border-emerald-500/50 p-2.5 rounded-xl transition-all duration-200 flex items-center justify-between group active:scale-[0.99]"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">{opt.icon}</span>
                          <span className="font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                            {opt.label}
                          </span>
                        </div>
                        <span className="text-slate-500 group-hover:text-emerald-400 text-xs transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* SERVICE DETAIL STEP */}
              {!isTyping && currentStep === 'service-detail' && selectedService && (
                <div className="space-y-3 pt-1">
                  {/* User Bubble */}
                  <div className="flex justify-end">
                    <div className="bg-emerald-600 text-white p-3 rounded-2xl rounded-tr-xs max-w-[80%] font-semibold shadow-md">
                      Selected: {selectedService.title}
                    </div>
                  </div>

                  {/* Bot Detail Bubble */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                      <Bot size={15} />
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl rounded-tl-xs max-w-[88%] space-y-3 shadow-md">
                      <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
                        <h4 className="font-bold text-white text-sm">{selectedService.title}</h4>
                        {selectedService.startingPrice && (
                          <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                            {selectedService.startingPrice}
                          </span>
                        )}
                      </div>

                      <p className="text-slate-300 text-xs leading-relaxed">
                        {selectedService.shortDescription}
                      </p>

                      <p className="font-bold text-white text-xs pt-1">
                        Would you like to get a free consultation & custom proposal for this service?
                      </p>

                      <div className="pt-2 flex flex-col gap-2">
                        <button
                          onClick={handleStartConsultation}
                          className="w-full py-2.5 px-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5"
                        >
                          <Check size={16} />
                          <span>Yes, Get Free Consultation</span>
                        </button>
                        <button
                          onClick={handleResetChat}
                          className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 text-xs"
                        >
                          <ArrowLeft size={14} />
                          <span>Back to All Services</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LEAD FORM STEP */}
              {!isTyping && currentStep === 'lead-form' && (
                <div className="space-y-3 pt-1">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                      <Bot size={15} />
                    </div>
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl rounded-tl-xs w-full space-y-3 shadow-md">
                      <p className="font-bold text-white text-xs">
                        Awesome! Please share a few quick details so our team can prepare a custom project proposal:
                      </p>

                      <form onSubmit={handleSubmitLead} className="space-y-2.5 pt-1">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                            Your Name <span className="text-emerald-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                              Business Name
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Acme Corp"
                              value={formData.businessName}
                              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                              City
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Mumbai / Delhi"
                              value={formData.city}
                              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                              Mobile Number <span className="text-emerald-400">*</span>
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="e.g. +91 9876543210"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                              Email Address
                            </label>
                            <input
                              type="email"
                              placeholder="e.g. name@company.com"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                            Service Required
                          </label>
                          <select
                            value={formData.serviceRequired}
                            onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                          >
                            <option value="Website Development">Website Development</option>
                            <option value="SEO Optimization">SEO Optimization</option>
                            <option value="Google Ads Management">Google Ads Management</option>
                            <option value="Meta Ads Management">Meta Ads Management</option>
                            <option value="Google Business Profile">Google Business Profile</option>
                            <option value="Influencer Marketing">Influencer Marketing</option>
                            <option value="Photography & Videography">Photography & Videography</option>
                            <option value="AI Product Photography">AI Product Photography</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Content Writing">Content Writing</option>
                            <option value="Free Consultation">Free Strategy Consultation</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                            Monthly Budget
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500"
                          >
                            <option value="Under ₹10,000">Under ₹10,000</option>
                            <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                            <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                            <option value="₹50,000+">₹50,000+</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                            Project Details / Notes
                          </label>
                          <textarea
                            rows={2}
                            placeholder="Briefly describe your goals..."
                            value={formData.projectDetails}
                            onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 resize-none"
                          />
                        </div>

                        <div className="pt-2 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={handleResetChat}
                            className="w-1/3 py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl text-xs transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="w-2/3 py-2.5 px-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5"
                          >
                            <Send size={15} />
                            <span>Connect on WhatsApp</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}

              {/* SUBMITTED STEP */}
              {!isTyping && currentStep === 'submitted' && (
                <div className="space-y-3 pt-2 text-center">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto">
                    <Check size={24} />
                  </div>
                  <h4 className="font-extrabold text-white text-base">WhatsApp Launched!</h4>
                  <p className="text-slate-300 text-xs max-w-xs mx-auto leading-relaxed">
                    If WhatsApp didn't open automatically, click the button below to continue chatting with our team:
                  </p>
                  <button
                    onClick={handleSubmitLead}
                    className="mt-2 py-2.5 px-5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl shadow-lg text-xs transition-all inline-flex items-center gap-2"
                  >
                    <Send size={15} />
                    <span>Re-open WhatsApp</span>
                  </button>
                  <div className="pt-3">
                    <button
                      onClick={handleResetChat}
                      className="text-xs text-slate-400 hover:text-white underline"
                    >
                      Start New Enquiry
                    </button>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Footer Attribution */}
            <div className="bg-slate-950 p-2.5 text-center border-t border-slate-800/80">
              <span className="text-[10px] text-slate-500 font-medium">
                ⚡ Powered by MakeMyPages Assistant • Direct WhatsApp Response
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
