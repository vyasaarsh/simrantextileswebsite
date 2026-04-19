import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Users, Lightbulb, Shield, Heart, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#DE3163] via-[#DE3163]/90 to-[#FF7F50]/80 pb-20 pt-20 sm:pb-32 sm:pt-32 lg:pt-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold text-primary-foreground lg:text-6xl text-balance">
              About Simran Textiles
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Pioneering excellence in textile manufacturing since 1998
            </p>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="relative -mt-20 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div>
                  <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">Who We Are</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We specialize in creating exquisite women’s ethnic wear, blending traditional craftsmanship with contemporary design. With expertise in the garment manufacturing industry, we have built a strong reputation for delivering high-quality fashion to some of the most trusted brands in India. We have access to the finest materials and cutting-edge technology to create garments that stand out in quality and style
                    </p>
                    <p>
                      We Simran Textiles are established in Narol, Ahmedabad, India specializing in garment manufacturing. We take pride in delivering high-quality garments and serving clients across PAN India
                    </p>
                    <p>
                      We offer diverse fabric solutions, specializing in woven fabrics. We work with cotton, polyester, linen, and blends. Custom fabric development is available to meet your unique needs.
                    </p>
                    <p>
                      With a deep-rooted passion for embroidery, we specialize in crafting exquisite women’s ethnic wear. Our end-to-end manufacturing process, from design to final stitching, ensures exceptional quality. Our rigorous quality control systems have successfully reduced defect rates by 2%
                    </p>
                  </div>
                </div>
                <div className="relative h-[400px] overflow-hidden rounded-xl lg:h-full">
                  <img
                    src="/textile-factory-interior-with-machinery.jpg"
                    alt="Our Manufacturing Facility"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Mission & Vision</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Guiding principles that drive our commitment to excellence
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Mission */}
            <Card className="border-2 border-primary/20 bg-card shadow-lg">
              <CardContent className="p-8 lg:p-10">
                <div className="mb-6 inline-flex rounded-full bg-primary/10 p-4">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To deliver world-class textile manufacturing solutions that combine superior quality, innovative
                  design, and sustainable practices, while fostering long-term partnerships built on trust, reliability,
                  and mutual growth.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-2 border-secondary/20 bg-card shadow-lg">
              <CardContent className="p-8 lg:p-10">
                <div className="mb-6 inline-flex rounded-full bg-secondary/10 p-4">
                  <Eye className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a leading name in women's ethnic wear, blending traditional craftsmanship with modern design to set new benchmarks in quality and innovation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 5 C's / Principles */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Our 5 Core Principles</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              The values that define our commitment to excellence and drive our success
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Principle 1: Commitment */}
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Commitment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dedicated to delivering on our promises and maintaining the highest standards in everything we do.
                </p>
              </CardContent>
            </Card>

            {/* Principle 2: Consistency */}
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-secondary hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex rounded-full bg-secondary/10 p-4 transition-all group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Consistency</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ensuring uniformly excellent quality and service across all our products and interactions.
                </p>
              </CardContent>
            </Card>

            {/* Principle 3: Creativity */}
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Creativity</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Innovating continuously to develop unique solutions that meet evolving market demands.
                </p>
              </CardContent>
            </Card>

            {/* Principle 4: Care */}
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-secondary hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex rounded-full bg-secondary/10 p-4 transition-all group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Care</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Prioritizing the well-being of our employees, clients, and the environment in all decisions.
                </p>
              </CardContent>
            </Card>

            {/* Principle 5: Collaboration */}
            <Card className="group relative overflow-hidden border-2 transition-all hover:border-primary hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4 transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Collaboration</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Working together with clients and partners to achieve shared goals and mutual success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
