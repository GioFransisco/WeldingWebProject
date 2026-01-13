import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-slate-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to start your project? Contact us today for a free consultation and quote
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Cards */}
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl text-slate-900 mb-2">Call Us</h3>
            <p className="text-slate-600 mb-3">Mon - Fri: 7:00 AM - 6:00 PM</p>
            <a href="tel:+1234567890" className="text-orange-500 hover:text-orange-600">
              (123) 456-7890
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl text-slate-900 mb-2">Email Us</h3>
            <p className="text-slate-600 mb-3">We respond within 24 hours</p>
            <a href="mailto:info@elitewelding.com" className="text-orange-500 hover:text-orange-600">
              info@elitewelding.com
            </a>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl text-slate-900 mb-2">Visit Us</h3>
            <p className="text-slate-600 mb-3">1234 Industrial Avenue</p>
            <p className="text-orange-500">Los Angeles, CA 90012</p>
          </Card>
        </div>

        {/* Map and Contact Form Row */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="h-[600px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-118.25%2C34.04%2C-118.24%2C34.05&layer=mapnik&marker=34.0522,-118.2437"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 h-full">
              <h3 className="text-2xl text-slate-900 mb-6">Request a Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm text-slate-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Select a service</option>
                      <option value="mig-welding">MIG Welding</option>
                      <option value="tig-welding">TIG Welding</option>
                      <option value="stick-welding">Stick Welding</option>
                      <option value="metal-fabrication">Metal Fabrication</option>
                      <option value="structural-welding">Structural Welding</option>
                      <option value="pipe-welding">Pipe Welding</option>
                      <option value="mobile-welding">Mobile Welding</option>
                      <option value="repair-services">Repair Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-slate-700 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Please provide details about your project..."
                  />
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white" size="lg">
                  Submit Request
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}