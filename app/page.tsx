"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Globe, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {

  const clientLogos = [
    { name: "Vedic", logo: "/clientlogos/vedic.jpg" },
    { name: "Max", logo: "/clientlogos/max.jpg" },
    { name: "Baazar Kolkata", logo: "/clientlogos/bazarkolkota.jpg" },
    { name: "EasyBuy", logo: "/clientlogos/easybuy.jpg" },
    { name: "Melange", logo: "/clientlogos/melange.jpg" },
    { name: "Style Baazar", logo: "/clientlogos/stylebaazar.jpg" },
    { name: "VMart", logo: "/clientlogos/vmart.jpg" },
  ]

  const [count, setCount] = useState({
    capacity: 0,
    sewing: 0,
    embroidery: 0,
  })

  useEffect(() => {

    let capacity = 0
    let sewing = 0
    let embroidery = 0

    const interval = setInterval(() => {

      capacity = Math.min(capacity + 50000, 150000)
      sewing = Math.min(sewing + 10, 300)
      embroidery = Math.min(embroidery + 1, 12)

      setCount({
        capacity,
        sewing,
        embroidery,
      })

      if (capacity === 150000 && sewing === 300 && embroidery === 12) {
        clearInterval(interval)
      }

    }, 20)

    return () => clearInterval(interval)

  }, [])

  return (
    <>
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[90vh] w-full">
        <div className="absolute inset-0">
          <img
            src="/hero.png"
            alt="Simran Textiles Manufacturing"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 flex h-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[90vh] items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl text-white">

              <h1 className="mb-6 text-3xl sm:text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Simran Textiles: Your Trusted Manufacturing Partner
              </h1>

              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">

                <Link href="/manufacturing" className="w-full sm:w-auto">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <span>
                      Our Manufacturing Process
                      <ArrowRight className="ml-2" size={20} />
                    </span>
                  </Button>
                </Link>

                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  >
                    <span>Get in Touch</span>
                  </Button>
                </Link>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* TRUST BADGES */}
      <section className="border-b bg-white py-10">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="grid grid-cols-2 gap-6 text-center text-sm font-semibold text-muted-foreground md:grid-cols-5">
            <div>SEDEX Certified</div>
            <div>Factory Licensed</div>
            <div>300+ Machines</div>
            <div>1.5L Monthly Capacity</div>
            <div>25+ Years Experience</div>
          </div>

        </div>
      </section>


      {/* ANIMATED STATS */}
      <section className="bg-[#F5F2EE] py-20">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="grid gap-12 text-center md:grid-cols-3">

            <div>
              <div className="text-6xl font-bold text-[#6B5E53]">
                {(count.capacity / 100000).toFixed(1)}L
              </div>
              <div className="mt-4 text-2xl font-semibold text-[#6B5E53]">
                Pieces / Month
              </div>
              <div className="text-lg text-[#6B5E53]/80">
                Production Capacity
              </div>
            </div>

            <div>
              <div className="text-6xl font-bold text-[#6B5E53]">
                {count.sewing}
              </div>
              <div className="mt-4 text-2xl font-semibold text-[#6B5E53]">
                Sewing
              </div>
              <div className="text-lg text-[#6B5E53]/80">
                Machines
              </div>
            </div>

            <div>
              <div className="text-6xl font-bold text-[#6B5E53]">
                {count.embroidery}
              </div>
              <div className="mt-4 text-2xl font-semibold text-[#6B5E53]">
                Embroidery
              </div>
              <div className="text-lg text-[#6B5E53]/80">
                Machines
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* FACTORY INFRASTRUCTURE */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
                Our Manufacturing Infrastructure
              </h2>

              <p className="mb-8 text-lg text-muted-foreground">
                Our state-of-the-art facility is equipped with advanced machinery
                and operated by skilled professionals, ensuring high quality,
                efficiency, and scalability for global apparel brands.
              </p>

              <ul className="space-y-4 text-muted-foreground">
                <li>✔ 300 High-Speed Sewing Machines</li>
                <li>✔ 12 Advanced Embroidery Machines</li>
                <li>✔ 1.5L Pieces Monthly Production Capacity</li>
                <li>✔ Skilled Workforce & Quality Control Team</li>
              </ul>
            </div>

            <div className="relative h-[650px] overflow-hidden rounded-2xl">
              <img
                src="/home1.png"
                alt="Simran Textiles Factory"
                className="h-full w-full object-cover"
              />
            </div>

          </div>

        </div>
      </section>


      {/* KEY STRENGTHS */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
              Our Strengths & Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Delivering excellence through innovation and quality manufacturing
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <Card className="border-2 transition hover:shadow-lg">
              <CardContent className="p-8">
                <Award className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-3 text-xl font-semibold">Quality Excellence</h3>
                <p className="text-muted-foreground">
                  Rigorous quality checks ensuring global manufacturing standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition hover:shadow-lg">
              <CardContent className="p-8">
                <TrendingUp className="mb-4 h-8 w-8 text-secondary" />
                <h3 className="mb-3 text-xl font-semibold">Advanced Technology</h3>
                <p className="text-muted-foreground">
                  Modern machinery enabling efficient high-volume production.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition hover:shadow-lg">
              <CardContent className="p-8">
                <Users className="mb-4 h-8 w-8 text-secondary" />
                <h3 className="mb-3 text-xl font-semibold">Expert Team</h3>
                <p className="text-muted-foreground">
                  Skilled professionals with decades of textile expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition hover:shadow-lg">
              <CardContent className="p-8">
                <Globe className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-3 text-xl font-semibold">Global Reach</h3>
                <p className="text-muted-foreground">
                  Supplying garments to clients across international markets.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>


      {/* CONTINUOUS CLIENT LOGO SLIDER */}
      {/* CONTINUOUS CLIENT LOGO SLIDER */}
<section className="py-20 lg:py-28 overflow-hidden">

  <div className="container mx-auto px-4 lg:px-8">

    <div className="mb-16 text-center">
      <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
        Trusted by Global Brands
      </h2>
    </div>

    <style>{`
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .scroll-track {
        display: flex;
        width: max-content;
        animation: scroll 25s linear infinite;
      }
    `}</style>

    <div className="relative w-full overflow-hidden">

      <div className="scroll-track flex-nowrap gap-12">

        {[...clientLogos, ...clientLogos].map((client, index) => (

          <div
            key={index}
            className="flex h-32 w-[220px] items-center justify-center rounded-2xl border bg-white p-6 shadow-sm flex-shrink-0"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-20 object-contain"
            />
          </div>

        ))}

      </div>

    </div>

    <div className="mt-14 text-center">
      <Link href="/clients" scroll={true}>
        <Button variant="outline" size="lg">
          View All Our Clients
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </Link>
    </div>

  </div>

</section>


      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">

          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
            Ready to Work With Us?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
            Let's discuss how we can bring your textile manufacturing vision to life
          </p>

          <Link href="/contact" scroll={true}>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <span>
                Contact Us Today
                <ArrowRight className="ml-2" size={20} />
              </span>
            </Button>
          </Link>

        </div>
      </section>

      <Footer />
    </>
  )
}
