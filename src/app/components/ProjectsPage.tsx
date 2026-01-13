import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useNavigate } from 'react-router-dom';

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  year: string;
}

const projects: Project[] = [
  // Commercial Projects
  {
    title: "Industrial Plant Expansion",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1745449562896-71ba57d1e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY3NzEwNDI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Complete structural steel fabrication and installation for a 50,000 sq ft industrial facility expansion.",
    client: "ABC Manufacturing",
    year: "2023"
  },
  {
    title: "Office Building Framework",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1564182999070-744933bbe318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHNwYXJrc3xlbnwxfHx8fDE3Njc3MzI2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Precision welding of steel framework for a modern 8-story office complex in downtown area.",
    client: "City Development Corp",
    year: "2024"
  },
  {
    title: "Shopping Mall Construction",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1623489254637-a2dd8375243d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY3NzMyNjY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Structural steel work and decorative metal features for a large retail shopping center.",
    client: "Retail Ventures LLC",
    year: "2023"
  },
  {
    title: "Warehouse Facility",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1611633002310-d8a3211ddfdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwcHJvZmVzc2lvbmFsJTIwd29ya3xlbnwxfHx8fDE3Njc3MzI2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Complete welding services for a 100,000 sq ft distribution warehouse with heavy-duty racking systems.",
    client: "Logistics Pro",
    year: "2024"
  },

  // Industrial Projects
  {
    title: "Steel Structure Construction",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1623489254637-a2dd8375243d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY3NzMyNjY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Heavy industrial steel structure fabrication for a power generation facility.",
    client: "Energy Solutions Inc",
    year: "2023"
  },
  {
    title: "Pipeline Installation",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1611633002310-d8a3211ddfdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwcHJvZmVzc2lvbmFsJTIwd29ya3xlbnwxfHx8fDE3Njc3MzI2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "High-pressure pipeline welding and installation for chemical processing plant.",
    client: "ChemTech Industries",
    year: "2024"
  },
  {
    title: "Manufacturing Equipment",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1745449562896-71ba57d1e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY3NzEwNDI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Custom fabrication and welding of specialized manufacturing equipment and conveyors.",
    client: "Auto Parts Manufacturing",
    year: "2023"
  },
  {
    title: "Refinery Expansion",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1564182999070-744933bbe318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHNwYXJrc3xlbnwxfHx8fDE3Njc3MzI2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Structural and piping welding services for oil refinery expansion project.",
    client: "Petroleum Corp",
    year: "2024"
  },

  // Residential Projects
  {
    title: "Custom Metal Work",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1564182999070-744933bbe318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHNwYXJrc3xlbnwxfHx8fDE3Njc3MzI2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Custom metal railings, gates, and decorative elements for luxury home.",
    client: "Private Residence",
    year: "2024"
  },
  {
    title: "Residential Staircase",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1611633002310-d8a3211ddfdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwcHJvZmVzc2lvbmFsJTIwd29ya3xlbnwxfHx8fDE3Njc3MzI2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Modern floating staircase with steel structure and glass railings.",
    client: "Smith Family",
    year: "2023"
  },
  {
    title: "Garden Structures",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1623489254637-a2dd8375243d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY3NzMyNjY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Custom metal pergolas, arbors, and decorative garden features.",
    client: "Johnson Estate",
    year: "2024"
  },
  {
    title: "Home Security Gates",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1745449562896-71ba57d1e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY3NzEwNDI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Custom designed and fabricated security gates and fencing for residential property.",
    client: "Williams Residence",
    year: "2023"
  },

  // Infrastructure Projects
  {
    title: "Bridge Repair",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1623489254637-a2dd8375243d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGNvbnN0cnVjdGlvbiUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY3NzMyNjY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Structural steel repair and reinforcement of highway overpass bridge.",
    client: "State DOT",
    year: "2024"
  },
  {
    title: "Pedestrian Walkway",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1564182999070-744933bbe318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2VsZGluZyUyMHNwYXJrc3xlbnwxfHx8fDE3Njc3MzI2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Fabrication and installation of modern steel pedestrian bridge in city park.",
    client: "City Parks Department",
    year: "2023"
  },
  {
    title: "Water Treatment Plant",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1611633002310-d8a3211ddfdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwcHJvZmVzc2lvbmFsJTIwd29ya3xlbnwxfHx8fDE3Njc3MzI2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Piping and structural welding for municipal water treatment facility upgrade.",
    client: "City Utilities",
    year: "2024"
  },
  {
    title: "Transit Station",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1745449562896-71ba57d1e2b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGZhYnJpY2F0aW9uJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY3NzEwNDI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Steel structure and canopy fabrication for new metro transit station.",
    client: "Metro Transit Authority",
    year: "2023"
  }
];

// export function ProjectsPage({ onBack }: { onBack: () => void })
export function ProjectsPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Commercial', 'Industrial', 'Residential', 'Infrastructure'];
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button 
          onClick={() => navigate('/')}
          variant="outline"
          className="mb-8"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl text-slate-900 mb-4">Our Projects</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our portfolio of completed welding and fabrication projects across various sectors
          </p>
        </div>

        {/* Category Filter Tabs */}
        <Tabs defaultValue="all" className="mb-12" onValueChange={setSelectedCategory}>
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-5">
            {categories.map(category => (
              <TabsTrigger key={category} value={category} className="capitalize">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Projects Count */}
        <div className="mb-8 text-center">
          <p className="text-slate-600">
            Showing <span className="text-orange-500">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                  <div>
                    <p className="text-sm text-slate-500">Client</p>
                    <p className="text-slate-900">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Year</p>
                    <p className="text-slate-900">{project.year}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-slate-900 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our expertise can bring your vision to life
          </p>
          <Button 
            onClick={() => {
              setTimeout(() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white"
            size="lg"
          >
            Get a Free Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
