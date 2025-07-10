"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  github: string
  demo: string
  category: string[]
  technologies: string[]
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Network File System",
      description:
        "A CLI based distributed file system consisting of Naming Server,Clients and Storage Servers,using TCP sockets with multithreadings,trie based path loockups and file caching.",
      image: "NFS.png",
      github: "https://github.com/ViratGarg2/NFS_final.git",
      demo: "https://github.com/ViratGarg2/NFS_final.git",
      category: ["web", "frontend"],
      technologies: ["C", "TCP Sockets"],
    },
    {
      id: 2,
      title: "Buy Sell@IIIT-H",
      description:
        "A MERN stack application for buying and selling items within the IIIT-H community with chatbot support and order management",
      image: "Buy-Sell.png",
      github: "https://github.com/ViratGarg2/Buy-Sell-IIIT",
      demo: "https://buy-sell-iiith-ten.vercel.app/",
      category: ["api", "backend"],
      technologies: ["MERN", "Firebase", "Gemini"],
    },
    {
      id: 3,
      title: "Computer Graphics Sandbox",
      description:
        "Implemented fundamental graphics algorithm including ray tracing in C++.Developed modules for ray tracing with reflections, mesh slicing, and scan-line polygon filling.",
      image: "Sandbox.png",
      github: "https://github.com/ViratGarg2/Computer_Graphics_Sandbox",
      demo: "https://github.com/ViratGarg2/Computer_Graphics_Sandbox",
      category: ["security", "backend"],
      technologies: ["C++", "OpenGL", "Ray Tracing"],
    },
    {
      id: 4,
      title: "ClearClause",
      description: "Fine tuned an encoder decoder model to extract risks from legal documents and summarise them",
      image: "ClearClause.png",
      github: "https://github.com/gvarun01/clause-clarity.git",
      demo: "https://github.com/gvarun01/clause-clarity.git",
      category: ["web", "fullstack"],
      technologies: ["Encoder-Decoder", "LangChain"],
    },
    {
      id: 5,
      title: "Angry Birds Stage",
      description: "A Demo of Angry Birds game stage using Canvas,JS and play.js",
      image: "Angry_Birds.png",
      github: "https://github.com/ViratGarg2/Angry_birds_public",
      demo: "https://angry-birds-seven.vercel.app/",
      category: ["web", "frontend"],
      technologies: ["JS", "Physics Engine"],
    },
    {
      id: 6,
      title: "PokeGuide",
      description: "A pokemon data manager using PyMySQL and streamlit",
      image: "PokeGuide.png",
      github: "https://github.com/ViratGarg2/PokeGuide",
      demo: "https://youtu.be/xz5PQb0MNc8",
      category: ["web", "fullstack"],
      technologies: ["SQL", "Streamlit"],
    },
    {
      id: 7,
      title: "Slide Craft",
      description: "Helped user create videos using images and customisations for transitions",
      image: "SlideCraft.png",
      github: "https://github.com/ViratGarg2/ISS_slide_craft",
      demo: "https://iiithydstudents-my.sharepoint.com/:v:/g/personal/virat_garg_students_iiit_ac_in/EXRGWzG6InVMnukfDIlKYi4BBPgK2OxT8IxchGdA4r-lrw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=qwQ6E9",
      category: ["web", "api"],
      technologies: ["Flask", "FFmpeg","JS"],
    },
    {
      id: 8,
      title: "Aqua Sense",
      description:
        "A real-time monitoring solution that tracks key water parameters—pH, turbidity, TDS, and temperature—using IoT sensors. Data is visualized through the Blynk IoT dashboard,",
      image: "AquaSense.jpg",
      github: "https://github.com/gvarun01/Water-Quality-Monitoring-System.git",
      demo: "https://github.com/gvarun01/Water-Quality-Monitoring-System.git",
      category: ["web", "productivity"],
      technologies: ["ESP32", "Blynk", "IoT"],
    },
  ]

  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Auto-play functionality
  useEffect(() => {
    if (!api || !isAutoPlay) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 4000)

    return () => clearInterval(interval)
  }, [api, isAutoPlay])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!api) return

      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault()
          api.scrollPrev()
          break
        case "ArrowRight":
          event.preventDefault()
          api.scrollNext()
          break
        case " ":
          event.preventDefault()
          setIsAutoPlay(!isAutoPlay)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [api, isAutoPlay])

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index)
    },
    [api],
  )

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  return (
    <section
      id="portfolio"
      className="relative py-20 px-6 bg-portfolio-dark-blue before:content-[''] before:absolute before:inset-0 before:z-0 before:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20fill%3D%27none%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Crect%20width%3D%2760%27%20height%3D%2760%27%20fill%3D%27%231A1F2C%27%2F%3E%3Ccircle%20cx%3D%2730%27%20cy%3D%2730%27%20r%3D%275%27%20fill%3D%27%2339A7FF%27%20fill-opacity%3D%270.4%27%2F%3E%3Ccircle%20cx%3D%2710%27%20cy%3D%2710%27%20r%3D%273%27%20fill%3D%27%2339A7FF%27%20fill-opacity%3D%270.3%27%2F%3E%3Ccircle%20cx%3D%2750%27%20cy%3D%2750%27%20r%3D%272%27%20fill%3D%27%2387C4FF%27%20fill-opacity%3D%270.2%27%2F%3E%3C%2Fsvg%3E')] before:bg-repeat"
      tabIndex={0}
    >
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-lg font-semibold text-primary mb-2">My Recent Work</h2>
          <h1 className="text-4xl font-bold mb-4 text-portfolio-blue">Portfolio</h1>
          <div className="mx-auto w-24 h-1 bg-portfolio-blue rounded"></div>
        </div>

        <div className="relative">
          {/* Enhanced Navigation Controls */}
          <div className="flex items-center justify-between mb-8">
            {/* Left Controls */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleAutoPlay}
                className="border-portfolio-blue/30 text-portfolio-blue hover:bg-portfolio-blue/10 hover:border-portfolio-blue transition-all duration-200 bg-transparent"
              >
                {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span className="ml-2 hidden sm:inline">{isAutoPlay ? "Pause" : "Play"}</span>
              </Button>

              {/* Project Counter */}
              <div className="text-sm text-gray-400 bg-portfolio-navy/50 px-3 py-1 rounded-full backdrop-blur-sm border border-portfolio-blue/20">
                <span className="text-portfolio-blue font-semibold">{current}</span>
                <span className="mx-1">/</span>
                <span>{count}</span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => api?.scrollPrev()}
                className="border-portfolio-blue/30 text-portfolio-blue hover:bg-portfolio-blue/10 hover:border-portfolio-blue transition-all duration-200 hover:scale-105"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => api?.scrollNext()}
                className="border-portfolio-blue/30 text-portfolio-blue hover:bg-portfolio-blue/10 hover:border-portfolio-blue transition-all duration-200 hover:scale-105"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Carousel */}
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 pl-4 sm:pl-6">
                  <Card
                    className="portfolio-card overflow-hidden h-full border-portfolio-blue/30 bg-portfolio-navy/90 backdrop-blur-sm transition-all duration-500 hover:border-portfolio-blue/50 hover:shadow-2xl hover:shadow-portfolio-blue/20 hover:-translate-y-2"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Animation Elements */}
                    <div className="shine"></div>
                    <div className="background">
                      <div className="tiles">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className={`tile tile-${i + 1}`}></div>
                        ))}
                      </div>
                      <div className="line line-1"></div>
                      <div className="line line-2"></div>
                      <div className="line line-3"></div>
                    </div>

                    <div className="relative h-48 overflow-hidden z-10">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          hoveredProject === project.id ? "scale-110 brightness-110" : "scale-100"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-portfolio-navy/80 to-transparent"></div>

                      {/* Hover Overlay */}
                      <div
                        className={`absolute inset-0 bg-portfolio-blue/20 transition-opacity duration-300 ${
                          hoveredProject === project.id ? "opacity-100" : "opacity-0"
                        }`}
                      ></div>
                    </div>

                    <CardHeader className="relative z-10">
                      <CardTitle className="text-xl text-white group-hover:text-portfolio-blue transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs bg-portfolio-navy border-portfolio-blue/40 text-portfolio-blue hover:bg-portfolio-blue/20 transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs bg-portfolio-navy border-portfolio-blue/40 text-portfolio-blue"
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10">
                      <CardDescription className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardContent>

                    <CardFooter className="flex gap-4 relative z-10">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-portfolio-blue/30 text-portfolio-blue hover:bg-portfolio-blue hover:text-white hover:border-portfolio-blue transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-blue/25 bg-transparent"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          Code
                        </Button>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="w-full bg-portfolio-blue text-white hover:bg-portfolio-blue/80 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-blue/25">
                          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          Demo
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Enhanced Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index * 3)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor((current - 1) / 3) === index
                    ? "bg-portfolio-blue shadow-lg shadow-portfolio-blue/50 scale-125"
                    : "bg-portfolio-blue/30 hover:bg-portfolio-blue/60 hover:scale-110"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
