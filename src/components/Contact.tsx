import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import useScrollAnimation from '@/hooks/useScrollAnimation';

// API endpoint configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const Contact: React.FC = () => {
  // Animation hooks with different effects
  const titleAnimation = useScrollAnimation('fade-up', { threshold: 0.1 });
  const contactCardAnimation = useScrollAnimation('fade-right', { threshold: 0.1 });
  const formAnimation = useScrollAnimation('fade-left', { threshold: 0.1 });
  const emailAnimation = useScrollAnimation('fade-up', { threshold: 0.1, animationDelay: 200 });
  const messageAnimation = useScrollAnimation('zoom-in', { threshold: 0.1, animationDelay: 400 });
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Handler for message field to ensure spaces are preserved
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate the form
    if (!name || !email || !message.trim()) {
      toast({
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send form data to the backend API using the configured API_URL
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message: message.replace(/\r\n/g, '\n'), // Normalize line breaks
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message, I'll get back to you soon.",
        });
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-portfolio-dark-blue/50">
      <div className="container mx-auto max-w-5xl">
        <div 
          ref={titleAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`section-title text-center mb-12 ${titleAnimation.className}`}
        >
          <h2 className="text-lg font-semibold uppercase tracking-widest mb-2 text-portfolio-blue">Get In Touch</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Me</h1>
          <div className="w-20 h-1 bg-portfolio-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div 
            ref={contactCardAnimation.ref as React.RefObject<HTMLDivElement>}
            className={contactCardAnimation.className}
          >
            <div className="flex flex-col gap-6">
              <div className="portfolio-card h-full flex flex-col justify-between p-8 border border-portfolio-blue/30 bg-portfolio-navy/20 rounded-xl shadow-lg">
                <div className="space-y-6">
                  <div 
                    ref={emailAnimation.ref as React.RefObject<HTMLDivElement>}
                    className={`flex items-center gap-4 p-4 bg-portfolio-navy/50 rounded-lg border border-portfolio-blue/20 ${emailAnimation.className}`}
                  >
                    <Mail className="text-portfolio-blue w-8 h-8" />
                    <div>
                      <h4 className="text-xl font-bold text-portfolio-blue">Email</h4>
                      <p className="text-gray-400">gargvirat5@gmail.com</p>
                    </div>
                  </div>
                  
                  <div 
                    ref={messageAnimation.ref as React.RefObject<HTMLDivElement>}
                    className={`text-center p-6 border border-portfolio-blue/20 rounded-lg bg-portfolio-navy/30 ${messageAnimation.className}`}
                  >
                    <p className="text-gray-300 mb-4">Feel free to reach out! I'll get back to you as soon as possible.</p>
                    <a 
                      href="mailto:gargvirat5@gmail.com" 
                      className="btn-primary inline-flex items-center gap-2 bg-portfolio-blue hover:bg-portfolio-blue/80 text-white px-4 py-2 rounded-md transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={formAnimation.ref as React.RefObject<HTMLDivElement>}
            className={formAnimation.className}
          >
            <form 
              onSubmit={handleSubmit} 
              className="portfolio-card p-8 space-y-6 border border-portfolio-blue/30 bg-portfolio-navy/20 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-portfolio-blue mb-2">Send Message</h3>
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-portfolio-navy/50 border-gray-700 focus:border-portfolio-blue"
                required
              />
              
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-portfolio-navy/50 border-gray-700 focus:border-portfolio-blue"
                required
              />
              
              <Input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-portfolio-navy/50 border-gray-700 focus:border-portfolio-blue"
              />
              
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={handleMessageChange}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Spacebar') {
                    e.stopPropagation(); // Prevent default space key behavior if any
                  }
                }}
                className="bg-portfolio-navy/50 border-gray-700 focus:border-portfolio-blue min-h-[100px] whitespace-pre-wrap"
                required
                spellCheck="true"
                wrap="soft"
              />
              
              <Button 
                type="submit" 
                className="btn-secondary w-full flex items-center justify-center gap-2 bg-portfolio-blue hover:bg-portfolio-blue/80 text-white transition-all duration-300"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
