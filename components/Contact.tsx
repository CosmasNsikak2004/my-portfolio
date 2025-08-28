'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'cosmasnsikakabasi@gmail.com',
      link: 'mailto:cosmasnsikakabasi@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+234 9046234883',
      link: 'tel:+2349046234883'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Uyo, AKS',
      link: 'https://maps.app.goo.gl/dwevHCywemrqV2no8 Uyo, Aks'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/CosmasNsikak2004',
      handle: '@CosmasNsikak2004'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nsikakabasi-cosmas-a56134381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      handle: '/in/Nsikakabasi Cosmas'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://x.com/nsikakx?s=21',
      handle: '@nsikakx'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9333EA]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E2E8F0] mb-6">
            Get In <span className="bg-gradient-to-r from-[#9333EA] to-[#2563EB] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-[#E2E8F0]/80 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together 
            to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-[#14B8A6] mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#E2E8F0]/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-[#E2E8F0] placeholder-[#E2E8F0]/50 focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#E2E8F0]/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-[#E2E8F0] placeholder-[#E2E8F0]/50 focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#E2E8F0]/80 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-[#E2E8F0] placeholder-[#E2E8F0]/50 focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#E2E8F0]/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-[#E2E8F0] placeholder-[#E2E8F0]/50 focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'bg-gradient-to-r from-[#9333EA] to-[#2563EB] text-white hover:shadow-lg hover:shadow-[#9333EA]/25 transform hover:scale-105'
                } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-[#14B8A6] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={info.title}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700/30 transition-colors group"
                    >
                      <div className="text-[#14B8A6] group-hover:scale-110 transition-transform">
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-[#E2E8F0]/60">{info.title}</p>
                        <p className="text-[#E2E8F0] font-medium">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-[#14B8A6] mb-6">Follow Me</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-700/30 transition-colors group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-[#14B8A6] group-hover:scale-110 transition-transform">
                          <IconComponent size={24} />
                        </div>
                        <div>
                          <p className="text-[#E2E8F0] font-medium">{social.name}</p>
                          <p className="text-sm text-[#E2E8F0]/60">{social.handle}</p>
                        </div>
                      </div>
                      <div className="text-[#E2E8F0]/40 group-hover:text-[#14B8A6] transition-colors">
                        →
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#9333EA]/10 to-[#2563EB]/10 border border-[#14B8A6]/30 rounded-xl p-6 text-center">
              <h4 className="text-lg font-semibold text-[#E2E8F0] mb-3">Response Time</h4>
              <p className="text-[#E2E8F0]/70">
                I typically respond to messages within 24 hours. 
                For urgent matters, feel free to call me directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;