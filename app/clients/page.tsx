import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ClientsPage() {
  const clients = [
    { name: "Vedic", country: "India", logo: "/clientlogos/vedic.jpg" },
    { name: "Max", country: "India", logo: "/clientlogos/max.jpg" },
    { name: "Baazar Kolkata", country: "India", logo: "/clientlogos/bazarkolkota.jpg" },
    { name: "EasyBuy", country: "India", logo: "/clientlogos/easybuy.jpg" },
    { name: "Melange", country: "India", logo: "/clientlogos/melange.jpg" },
    { name: "Style Baazar", country: "India", logo: "/clientlogos/stylebaazar.jpg" },
    { name: "VMart", country: "India", logo: "/clientlogos/vmart.jpg" },
  ]

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#DE3163] via-[#DE3163]/90 to-[#FF7F50]/80 pb-20 pt-20 sm:pb-32 sm:pt-32 lg:pt-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-secondary text-secondary-foreground text-xs sm:text-sm">
              Trusted Worldwide
            </Badge>

            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold text-primary-foreground lg:text-6xl text-balance">
              Our Valued Clients
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Proud partners of leading brands across the globe
            </p>
          </div>
        </div>
      </section>

      {/* Client Portfolio Section (Overlapping Hero) */}
      <section className="relative -mt-20 pb-20">
        <div className="container mx-auto px-4 lg:px-8">

          <Card className="border-2 shadow-xl">
            <CardContent className="p-8 lg:p-12">

              {/* Section Heading */}
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">
                  Our Client Portfolio
                </h2>

                <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
                  We are privileged to work with renowned brands and companies worldwide
                </p>
              </div>

              {/* Clients Grid */}
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
                {clients.map((client, index) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden border transition-all hover:border-primary hover:shadow-lg"
                  >
                    <CardContent className="flex aspect-square flex-col items-center justify-center p-6">

                      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="h-16 w-16 object-contain transition-all"
                        />
                      </div>

                      <h3 className="mb-1 text-center text-sm font-semibold leading-tight">
                        {client.name}
                      </h3>

                      <Badge variant="outline" className="text-xs">
                        {client.country}
                      </Badge>

                    </CardContent>
                  </Card>
                ))}
              </div>

            </CardContent>
          </Card>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="rounded-2xl bg-secondary p-12 text-center text-secondary-foreground lg:p-16">

            <h2 className="mb-6 text-4xl font-bold lg:text-5xl">
              Join Our Growing Client Family
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed opacity-90">
              Experience the quality and reliability that has made us a trusted partner for leading brands
            </p>

            <a href="/contact" className="inline-block">
              <button className="rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90">
                Partner With Us
              </button>
            </a>

          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
