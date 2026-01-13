import { ImageWithFallback } from './figma/ImageWithFallback';
import { Wrench, Shield, Clock, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1564182999070-744933bbe318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHNwYXJrc3xlbnwxfHx8fDE3Njc3MzI2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Industrial welding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Expert Welding Solutions for Your Industrial Needs
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            With over 25 years of experience, we deliver precision welding services for commercial, industrial, and residential projects. Your trusted partner in metal fabrication.
          </p>
          {/* <div className="flex flex-wrap gap-4">
            <Button onClick={() => scrollToSection('contact')} size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Request a Quote
            </Button>
            <Button onClick={() => scrollToSection('services')} size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Our Services
            </Button>
          </div> */}

          {/* Feature Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl text-orange-500 mb-2">25+</div>
              <div className="text-white text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-orange-500 mb-2">1000+</div>
              <div className="text-white text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-orange-500 mb-2">100%</div>
              <div className="text-white text-sm">Satisfaction Rate</div>
            </div>
            {/* <div className="text-center">
              <div className="text-4xl text-orange-500 mb-2">24/7</div>
              <div className="text-white text-sm">Emergency Service</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl text-slate-900 mb-6">About Elite Welding Co.</h2>
            <p className="text-slate-600 mb-6">
              Founded in 1998, Elite Welding Co. has been at the forefront of precision welding and metal fabrication. Our team of certified welders brings decades of combined experience to every project, ensuring the highest quality results.
            </p>
            <p className="text-slate-600 mb-6">
              We specialize in a wide range of welding techniques including MIG, TIG, stick welding, and more. From small repairs to large-scale industrial projects, we have the expertise and equipment to handle any challenge.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex gap-3">
                <div className="text-orange-500">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-1">Certified Professionals</h3>
                  <p className="text-sm text-slate-600">All welders are AWS certified</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-orange-500">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-1">Award Winning</h3>
                  <p className="text-sm text-slate-600">Industry recognized quality</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-orange-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-1">On-Time Delivery</h3>
                  <p className="text-sm text-slate-600">We respect your deadlines</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="text-orange-500">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-1">Modern Equipment</h3>
                  <p className="text-sm text-slate-600">State-of-the-art technology</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1611633002310-d8a3211ddfdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwcHJvZmVzc2lvbmFsJTIwd29ya3xlbnwxfHx8fDE3Njc3MzI2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional welding work"
              className="rounded-lg shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-xl">
              <div className="text-3xl mb-1">25+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    {
      title: "MIG Welding",
      description: "Metal Inert Gas welding for clean, efficient welds on various materials including steel, stainless steel, and aluminum.",
      icon: "🔧"
    },
    {
      title: "TIG Welding",
      description: "Tungsten Inert Gas welding for precision work requiring high-quality, clean welds on thin materials.",
      icon: "⚡"
    },
    {
      title: "Stick Welding",
      description: "Shielded Metal Arc Welding for outdoor projects and heavy-duty industrial applications.",
      icon: "🛠️"
    },
    {
      title: "Metal Fabrication",
      description: "Custom metal fabrication services including cutting, bending, forming, and assembly.",
      icon: "🏗️"
    },
    {
      title: "Structural Welding",
      description: "Certified structural welding for buildings, bridges, and other load-bearing structures.",
      icon: "🏢"
    },
    {
      title: "Pipe Welding",
      description: "Specialized pipe welding for plumbing, HVAC, and industrial pipeline systems.",
      icon: "🔩"
    },
    {
      title: "Mobile Welding",
      description: "On-site welding services bringing our expertise directly to your location.",
      icon: "🚚"
    },
    {
      title: "Repair Services",
      description: "Expert repair and restoration of damaged metal structures and equipment.",
      icon: "🔨"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-slate-900 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive welding and fabrication solutions tailored to meet your specific requirements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects({ onViewAll }: { onViewAll: () => void }) {
  const projects = [
    {
      title: "Industrial Plant Expansion",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1745449562896-71ba57d1e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY3NzEwNDI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Steel Structure Construction",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1623489254637-a2dd8375243d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY3NzMyNjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Custom Metal Work",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1564182999070-744933bbe318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHNwYXJrc3xlbnwxfHx8fDE3Njc3MzI2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Pipeline Installation",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1611633002310-d8a3211ddfdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwcHJvZmVzc2lvbmFsJTIwd29ya3xlbnwxfHx8fDE3Njc3MzI2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Take a look at some of our recent successful projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex flex-col justify-end p-6">
                <span className="text-orange-400 text-sm mb-2">{project.category}</span>
                <h3 className="text-white text-xl">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            onClick={onViewAll}
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Every project undergoes rigorous quality control to ensure it meets our high standards."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your peace of mind."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Turnaround",
      description: "We understand deadlines and work efficiently to complete projects on time."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Competitive Pricing",
      description: "Quality service at fair prices with transparent, detailed quotes."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Why Choose Elite Welding Co.?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We stand out in the industry through our commitment to excellence and customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="text-orange-500 flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl mb-3">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}