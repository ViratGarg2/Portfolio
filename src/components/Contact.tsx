
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
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
    
    // In a real app, you would send the form data to a backend
    console.log({ name, email, subject, message });
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message, I'll get back to you soon.",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 px-6 bg-portfolio-dark-blue/50">
      <div className="container mx-auto">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <h1>Contact Me</h1>
        </div>
        
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="portfolio-card">
              <div className="flex items-center">
                <Mail className="text-portfolio-blue w-6 h-6 mr-4" />
                <div>
                  <h4 className="text-lg font-bold">Email</h4>
                  <p className="text-gray-400">your.email@example.com</p>
                </div>
              </div>
              <a 
                href="mailto:your.email@example.com" 
                className="text-portfolio-blue hover:text-portfolio-light-blue mt-4 block"
              >
                Send a message
              </a>
            </div>
            
            <div className="portfolio-card">
              <div className="flex items-center">
                <MessageSquare className="text-portfolio-blue w-6 h-6 mr-4" />
                <div>
                  <h4 className="text-lg font-bold">Messenger</h4>
                  <p className="text-gray-400">Your Name</p>
                </div>
              </div>
              <a 
                href="https://m.me/your.profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-blue hover:text-portfolio-light-blue mt-4 block"
              >
                Send a message
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="portfolio-card space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-portfolio-dark-blue border-gray-700 focus:border-portfolio-blue"
              />
              
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-portfolio-dark-blue border-gray-700 focus:border-portfolio-blue"
              />
              
              <Input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-portfolio-dark-blue border-gray-700 focus:border-portfolio-blue"
              />
              
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-portfolio-dark-blue border-gray-700 focus:border-portfolio-blue min-h-[200px]"
              />
              
              <Button type="submit" className="btn-secondary flex items-center gap-2">
                <span>Send Message</span>
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
