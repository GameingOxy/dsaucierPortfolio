import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  ExternalLink,
  ArrowLeft,
  FlaskConical,
  Gamepad2,
  GraduationCap,
  Briefcase,
  Calendar,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-2xl font-bold text-card-foreground">Projects</h1>
            <div className="w-24"></div>
          </nav>
        </div>
      </header>

      {/* Projects Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              A showcase of my work in IoT development, game design, and academic achievements
            </p>
          </div>

          <div className="grid gap-8">
            {/* LOOM Project - Featured */}
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <FlaskConical className="w-6 h-6" />
                      LOOM Arduino Library
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      Modular IoT sensor and actuator systems for environmental research
                    </CardDescription>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>September 2024 - June 2025</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>OPEnS Lab, Oregon State University</span>
                      </div>
                    </div>
                  </div>
                  <Button asChild>
                    <a href="https://github.com/OPEnSLab-OSU/Loom-V4" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  src="LoomPicture.jpg"
                  alt="LOOM Project Research Equipment"
                  className="w-full h-64 object-cover rounded-md mb-6"
                />
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Collaborated with a multidisciplinary team to develop LOOM, a modular and extensible Arduino library
                    designed for IoT sensor and actuator systems in environmental research. This project emphasizes
                    modularity, low-power operation, and cross-device compatibility for field research applications.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Contributions:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Contributed to system architecture and codebase using C++</li>
                      <li>Utilized Git and GitHub for version control, managing branches and pull requests</li>
                      <li>Gained hands-on experience with Arduino-based microcontrollers</li>
                      <li>Implemented sensor integration, I2C communication, and interrupt handling</li>
                      <li>Participated in sprint planning and feature discussions</li>
                      <li>Contributed well-tested Arduino code under tight deadlines</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>C++</Badge>
                    <Badge>Arduino</Badge>
                    <Badge>IoT Development</Badge>
                    <Badge>Git/GitHub</Badge>
                    <Badge>Environmental Research</Badge>
                    <Badge>Sensor Integration</Badge>
                    <Badge>Low-Power Systems</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Indie Game Project - Featured */}
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Gamepad2 className="w-6 h-6" />
                      Narrative Adventure Game
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      Original 9-chapter narrative adventure with unique party mechanics
                    </CardDescription>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2022 - Present</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>Personal Project</span>
                      </div>
                    </div>
                  </div>
                  <Button asChild>
                    <a href="https://youtu.be/5RenHAticXo" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Watch Demo
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  src="BehindTree_InGameScreenShot.png"
                  alt="Indie Game Development Screenshot"
                  className="w-full h-64 object-cover rounded-md mb-6"
                />
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Designed and developed an original narrative adventure game with a 9-chapter structure centered on
                    emotional themes and character-driven progression. The game features a unique cast of party members,
                    each offering distinct gameplay mechanics for exploration, puzzle-solving, and combat.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Hybrid art style combining 2D pixel art characters with 3D world environments</li>
                      <li>Comprehensive game design document outlining worldbuilding and core mechanics</li>
                      <li>Functional prototype showcasing level design, combat, and NPC interactions</li>
                      <li>Party-based mechanics with unique abilities affecting traversal and puzzle-solving</li>
                      <li>Character-driven narrative with emotional themes and progression systems</li>
                      <li>Original story beats, economy design, and side content planning</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Unreal Engine</Badge>
                    <Badge>Game Design</Badge>
                    <Badge>2D/3D Art</Badge>
                    <Badge>Narrative Design</Badge>
                    <Badge>Prototype Development</Badge>
                    <Badge>Character Design</Badge>
                    <Badge>Level Design</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Student Maintenance Worker
                </CardTitle>
                <CardDescription>Oregon State University • November 2021 - Augest 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Applied problem-solving and technical skills in a dynamic campus maintenance environment, developing
                    transferable skills in troubleshooting, process optimization, and team collaboration.
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Key Responsibilities & Skills Developed:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Problem solving & troubleshooting across multiple campus buildings</li>
                      <li>Process optimization to enhance response times and service quality</li>
                      <li>Team collaboration and clear communication of technical issues</li>
                      <li>Adaptability and quick learning for various repair tasks</li>
                      <li>Time management and task prioritization with multiple work orders</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Problem Solving</Badge>
                    <Badge variant="outline">Process Optimization</Badge>
                    <Badge variant="outline">Team Collaboration</Badge>
                    <Badge variant="outline">Time Management</Badge>
                    <Badge variant="outline">Adaptability</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Achievement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Academic Excellence at Oregon State University
                </CardTitle>
                <CardDescription>Bachelor of Science in Computer Science • 2020-2025</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="OsuImage.jpg"
                  alt="Oregon State University Campus"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Pursuing comprehensive computer science education with Honor Roll achievement, combining technical
                    coursework with extensive Japanese language and cultural studies.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Academic Highlights:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                        <li>Honor Roll Winter 2025</li>
                        <li>Comprehensive CS curriculum completion</li>
                        <li>Japanese language studies (Second through Third-Year)</li>
                        <li>Cultural studies integration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Coursework:</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          Data Structures
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Algorithms
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Software Engineering
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Operating Systems
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Database Systems
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Computer Networks
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
