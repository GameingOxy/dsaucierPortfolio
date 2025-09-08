import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Linkedin,
  Mail,
  ExternalLink,
  GraduationCap,
  Gamepad2,
  FlaskConical,
  Languages,
  MapPin,
  Phone,
} from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-card-foreground">David Saucier</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/about">About</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/projects">Projects</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <img
              src="public/DavyPortrait.png"
              alt="David Saucier Profile"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-primary/20"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">David Saucier</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              Aspiring Software Developer with expertise in IoT, game development, Web Development and Databases.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <GraduationCap className="w-4 h-4 mr-2" />
                BS Computer Science
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Languages className="w-4 h-4 mr-2" />
                Japanese Studies
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Gamepad2 className="w-4 h-4 mr-2" />
                Unreal Engine
              </Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <FlaskConical className="w-4 h-4 mr-2" />
                IoT Research
              </Badge>
            </div>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Academic & Professional Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm pursuing my Bachelor's Degree in Computer Science at Oregon State University (graduating June 2025),
                where I've maintained Honor Roll status. My passion for Japanese culture led me to extensive language
                studies from high school through university, completing coursework from Second-Year through Third-Year
                Japanese plus cultural studies. I combine technical expertise with cross-cultural understanding to
                create innovative solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="font-medium">BS Computer Science, Oregon State University (2020-2025)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Languages className="w-5 h-5 text-primary" />
                  <span className="font-medium">Extensive Japanese Language & Culture Studies</span>
                </div>
                <div className="flex items-center gap-3">
                  <FlaskConical className="w-5 h-5 text-primary" />
                  <span className="font-medium">Research Developer at OPEnS Lab</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5" />
                    Game Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I focus on creating games that combine storytelling, mechanics, and art into cohesive experiences. I
                    work with C++ and Unreal Engine for programming and design, while also bringing visual skills
                    through 3D modeling in Blender and 2D pixel art. I practice rapid prototyping through game jams,
                    where I experiment with new ideas, refine my workflow, and push myself to build engaging interactive
                    worlds under tight deadlines.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Languages className="w-5 h-5" />
                    Japanese Language & Cultural Studies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    My interest in Japanese language and culture began at Sheridan Japanese School, where I built a
                    strong foundation in communication and cultural understanding. I continued this journey at Oregon
                    State University, earning a Minor in Japanese through advanced language courses and cultural
                    studies. These experiences not only deepened my appreciation for Japanese culture but also
                    strengthened my adaptability, cross-cultural communication, and dedication to lifelong learning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* LOOM Project */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FlaskConical className="w-5 h-5" />
                    LOOM Arduino Library
                  </CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href="https://github.com/OPEnSLab-OSU/Loom-V4"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                <CardDescription>OPEnS Lab Research Project (Sep 2024 - Jun 2025)</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="public/LoomPicture.jpg" alt="LOOM Project" className="w-full h-48 object-cover rounded-md mb-4" />
                <p className="text-muted-foreground mb-4">
                  Collaborated with a multidisciplinary team to develop LOOM, a modular and extensible Arduino library
                  for IoT sensor and actuator systems in environmental research. Contributed to system architecture
                  using C++, emphasizing modularity, low-power operation, and cross-device compatibility.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">C++</Badge>
                  <Badge variant="outline">Arduino</Badge>
                  <Badge variant="outline">IoT</Badge>
                  <Badge variant="outline">Git/GitHub</Badge>
                  <Badge variant="outline">Environmental Research</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Indie Game Project */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5" />
                    Indie Game Development
                  </CardTitle>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href="https://www.youtube.com/watch?v=5RenHAticXo"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                <CardDescription>Personal Project (2022 - Present)</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="public/BehindTree_InGameScreenShot.png"
                  alt="Indie Game Project"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-muted-foreground mb-4">
                  Designed and developed an original narrative adventure game with a 9-chapter structure centered on
                  emotional themes. Features a unique cast of party members with distinct gameplay mechanics, hybrid 2D
                  pixel art with 3D world design, and comprehensive game design documentation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Unreal Engine</Badge>
                  <Badge variant="outline">Game Design</Badge>
                  <Badge variant="outline">2D/3D Art</Badge>
                  <Badge variant="outline">Narrative Design</Badge>
                  <Badge variant="outline">Prototype Development</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Academic Achievements */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Academic Excellence
                </CardTitle>
                <CardDescription>Oregon State University (2020-2025)</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="public/OsuImage.jpg"
                  alt="OSU Campus"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-muted-foreground mb-4">
                  Bachelor of Science in Computer Science with Honor Roll achievement. Comprehensive coursework
                  including Data Structures, Algorithms, Software Engineering, Operating Systems, Database Management
                  and Japanese language and Culture Minor from Second-Year through Third-Year levels.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Honor Roll</Badge>
                  <Badge variant="outline">Software Engineering</Badge>
                  <Badge variant="outline">Database Systems</Badge>
                  <Badge variant="outline">Japanese Language</Badge>
                  <Badge variant="outline">Japanese Cultural</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Skills & Technologies */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
                <CardDescription>Technologies & Languages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">C++</Badge>
                      <Badge variant="outline">C</Badge>
                      <Badge variant="outline">JavaScript</Badge>
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">HTML/CSS</Badge>
                      <Badge variant="outline">MYSQL</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Unreal Engine</Badge>
                      <Badge variant="outline">Arduino</Badge>
                      <Badge variant="outline">Blender</Badge>
                      <Badge variant="outline">Visual Studio Code</Badge>
                      <Badge variant="outline">Git/GitHub</Badge>
                      <Badge variant="outline">IoT Development</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Strengths & Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Game Development</Badge>
                      <Badge variant="outline">Internet of Things</Badge>
                      <Badge variant="outline">Web Development</Badge>
                      <Badge variant="outline">Information technology</Badge>
                      <Badge variant="outline">Databases</Badge>
                      <Badge variant="outline">Software Engineering</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">English (Native)</Badge>
                      <Badge variant="outline">Japanese (Limited Working)</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            I'm eager to leverage my technical skills and creativity to contribute to innovative projects. Let's discuss
            opportunities in game development, IoT, or cross-cultural technology solutions.
          </p>
          <div className="flex justify-center items-center gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Sheridan, OR</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(503) 437-1080</span>
            </div>
          </div>
          <div className="flex justify-center gap-6 mb-12">
            <Button size="lg" asChild>
              <a href="mailto:Davyjsaucier@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.linkedin.com/in/david-saucier-72b714339/" className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 David Saucier. Built with passion and attention to detail.</p>
        </div>
      </footer>
    </div>
  )
}
