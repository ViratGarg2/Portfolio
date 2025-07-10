import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate the form
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send form data to the backend API
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
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
        <div className="section-title text-center mb-12">
          <h2>Get In Touch</h2>
          <h1>Contact Me</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col gap-6">
            <div className="portfolio-card h-full flex flex-col justify-between p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-portfolio-navy/50 rounded-lg">
                  <Mail className="text-portfolio-blue w-8 h-8" />
                  <div>
                    <h4 className="text-xl font-bold text-portfolio-blue">Email</h4>
                    <p className="text-gray-400">gargvirat5@gmail.com</p>
                  </div>
                </div>
                
                <div className="text-center p-6 border border-portfolio-blue/20 rounded-lg">
                  <p className="text-gray-300 mb-4">Feel free to reach out! I'll get back to you as soon as possible.</p>
                  <a 
                    href="mailto:gargvirat5@gmail.com" 
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="portfolio-card p-8 space-y-6">
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
                onChange={(e) => setMessage(e.target.value)}
                className="bg-portfolio-navy/50 border-gray-700 focus:border-portfolio-blue min-h-[100px]"
                required
              />
              
              <Button 
                type="submit" 
                className="btn-secondary w-full flex items-center justify-center gap-2"
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
