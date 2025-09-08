import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Languages, FlaskConical, Gamepad2, ArrowLeft, MapPin, Calendar, Award } from "lucide-react"
import Link from "next/link"

export default function About() {
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
            <h1 className="text-2xl font-bold text-card-foreground">About David Saucier</h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </nav>
        </div>
      </header>

      {/* About Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <img
              src="public/DavyPortrait.png"
              alt="David Saucier Profile"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-primary/20"
            />
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Aspiring Software Developer with a passion for IoT, game development, and cross-cultural technology
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-muted-foreground">Oregon State University</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>September 2020 - June 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="font-medium">Honor Roll Winter 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="font-medium">Honor Roll Spring 2025</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Japanese Language Studies</h3>
                  <p className="text-muted-foreground">Extensive coursework from high school through university</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <Badge variant="outline" className="text-xs">
                      Second-Year Japanese I-III
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Third-Year Japanese I-III
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Japanese Culture I-III
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  I'm an aspiring software developer with hands-on experience in IoT projects, including developing an
                  Arduino library for environmental research. Skilled in C++, Unreal Engine, and problem-solving, with a
                  strong ability to learn quickly and adapt to new technologies. I'm eager to leverage my technical
                  skills and creativity to contribute to innovative game development projects and cross-cultural
                  technology solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Key Coursework</CardTitle>
              <CardDescription>Comprehensive computer science curriculum</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Core Computer Science</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Data Structures</Badge>
                    <Badge variant="outline">Analysis of Algorithms</Badge>
                    <Badge variant="outline">Software Engineering I & II</Badge>
                    <Badge variant="outline">Operating Systems I & II</Badge>
                    <Badge variant="outline">Database Management Systems</Badge>
                    <Badge variant="outline">Computer Networks</Badge>
                    <Badge variant="outline">Computer Architecture</Badge>
                    <Badge variant="outline">Digital Logic Design</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-3">Specialized Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Web Development</Badge>
                    <Badge variant="outline">Introduction to Security</Badge>
                    <Badge variant="outline">Usability Engineering</Badge>
                    <Badge variant="outline">Open Source Software</Badge>
                    <Badge variant="outline">Theory of Computation</Badge>
                    <Badge variant="outline">Programming Language Fundamentals</Badge>
                    <Badge variant="outline">Senior Capstone</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FlaskConical className="w-5 h-5" />
                  Research Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Environmental IoT systems and sensor networks through my work with the OPEnS Lab at Oregon State
                  University.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5" />
                  Creative Passion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Game development with focus on narrative design, character-driven mechanics, and immersive
                  storytelling experiences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Languages className="w-5 h-5" />
                  Cultural Bridge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Combining technical expertise with Japanese language skills to create cross-cultural technology
                  solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
