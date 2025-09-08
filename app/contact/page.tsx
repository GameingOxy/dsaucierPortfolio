import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github, ArrowLeft, MessageSquare, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Contact() {
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
            <h1 className="text-2xl font-bold text-card-foreground">Contact</h1>
            <div className="w-24"></div>
          </nav>
        </div>
      </header>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              I'm eager to leverage my technical skills and creativity to contribute to innovative projects. Let's
              discuss opportunities in game development, IoT, or cross-cultural technology solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Get In Touch
                </CardTitle>
                <CardDescription>Ready to discuss opportunities and collaborate on exciting projects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:Davyjsaucier@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Davyjsaucier@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+15034371080" className="text-muted-foreground hover:text-primary transition-colors">
                      (503) 437-1080
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Sheridan, Oregon</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Links */}
            <Card>
              <CardHeader>
                <CardTitle>Professional Profiles</CardTitle>
                <CardDescription>Connect with me on professional platforms and view my work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button size="lg" className="w-full justify-start" asChild>
                  <a href="mailto:DavyJSaucier@gmail.com" className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">Send Email</div>
                      <div className="text-sm opacity-70">Direct communication</div>
                    </div>
                  </a>
                </Button>

                <Button variant="outline" size="lg" className="w-full justify-start bg-transparent" asChild>
                  <a href="https://www.linkedin.com/in/david-saucier-72b714339/"
                  className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5" />
                    <div className="text-left">
                      <div className="font-medium">LinkedIn Profile</div>
                      <div className="text-sm opacity-70">Professional network</div>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Areas of Interest */}
          <Card>
            <CardHeader>
              <CardTitle>Areas of Interest</CardTitle>
              <CardDescription>
                I'm particularly interested in opportunities involving these technologies and domains
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Game Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Unreal Engine, narrative design, character-driven mechanics, and immersive storytelling
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Software Engineering</h3>
                  <p className="text-sm text-muted-foreground">
                    designing reliable systems, writing clean code, and solving complex problems through structured development.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Information technology</h3>
                  <p className="text-sm text-muted-foreground">
                    information technology, particularly in how infrastructure, security, and connectivity support effective software solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
