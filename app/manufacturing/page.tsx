import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ClipboardCheck, Scissors, Layers, Zap, PackageCheck, Cpu, Settings, Play } from "lucide-react"

export default function ManufacturingPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#DE3163] via-[#DE3163]/90 to-[#FF7F50]/80 pb-20 pt-20 sm:pb-32 sm:pt-32 lg:pt-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-secondary text-secondary-foreground text-xs sm:text-sm">Advanced Manufacturing</Badge>
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold text-primary-foreground lg:text-6xl text-balance">
              Our Manufacturing Excellence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              State-of-the-art facilities and processes delivering world-class textile products
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="relative -mt-20 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <h2 className="mb-12 text-center text-4xl font-bold text-foreground lg:text-5xl">
                Our Manufacturing Process
              </h2>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <ClipboardCheck className="h-8 w-8" />
                    </div>
                    <div className="mt-4 hidden h-full w-0.5 bg-border md:block" />
                  </div>
                  <div className="pb-8">
                    <div className="mb-2 text-sm font-semibold text-primary">Step 1</div>
                    <h3 className="mb-3 text-2xl font-bold">Design & Planning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our expert designers work closely with clients to understand requirements and create detailed
                      specifications. We develop comprehensive production plans, select appropriate materials, and
                      establish quality parameters before manufacturing begins.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <Layers className="h-8 w-8" />
                    </div>
                    <div className="mt-4 hidden h-full w-0.5 bg-border md:block" />
                  </div>
                  <div className="pb-8">
                    <div className="mb-2 text-sm font-semibold text-secondary">Step 2</div>
                    <h3 className="mb-3 text-2xl font-bold">Fabric Sourcing & Inspection</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We source high-quality fabrics from certified suppliers, ensuring compliance with international
                      standards. Every fabric batch undergoes rigorous inspection for color consistency, texture, and
                      defects before entering production.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Scissors className="h-8 w-8" />
                    </div>
                    <div className="mt-4 hidden h-full w-0.5 bg-border md:block" />
                  </div>
                  <div className="pb-8">
                    <div className="mb-2 text-sm font-semibold text-primary">Step 3</div>
                    <h3 className="mb-3 text-2xl font-bold">Cutting & Pattern Making</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Using advanced CAD systems and automated cutting machines, we ensure precise cutting with minimal
                      waste. Our pattern-making expertise guarantees perfect fit and consistency across all garment
                      sizes.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <Settings className="h-8 w-8" />
                    </div>
                    <div className="mt-4 hidden h-full w-0.5 bg-border md:block" />
                  </div>
                  <div className="pb-8">
                    <div className="mb-2 text-sm font-semibold text-secondary">Step 4</div>
                    <h3 className="mb-3 text-2xl font-bold">Stitching & Assembly</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our skilled workers operate state-of-the-art sewing machines to assemble garments with precision.
                      Each piece is carefully stitched following strict quality guidelines, ensuring durability and
                      perfect finishing.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Zap className="h-8 w-8" />
                    </div>
                    <div className="mt-4 hidden h-full w-0.5 bg-border md:block" />
                  </div>
                  <div className="pb-8">
                    <div className="mb-2 text-sm font-semibold text-primary">Step 5</div>
                    <h3 className="mb-3 text-2xl font-bold">Finishing & Treatment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Garments undergo various finishing processes including washing, ironing, and specialized
                      treatments. We ensure perfect appearance, softness, and any required special finishes like
                      waterproofing or wrinkle resistance.
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                      <PackageCheck className="h-8 w-8" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 text-sm font-semibold text-secondary">Step 6</div>
                    <h3 className="mb-3 text-2xl font-bold">Quality Check & Packaging</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Every garment passes through multiple quality checkpoints. Our QC team inspects for stitching
                      quality, measurements, and overall appearance. Approved products are carefully folded, tagged, and
                      packaged for safe delivery.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Machines */}
      {/*<section className="bg-muted/30 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">Advanced Machinery</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Equipped with cutting-edge technology to deliver precision and efficiency
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            /* Machine 1
            <Card className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/industrial-sewing-machine.jpg"
                  alt="Industrial Sewing Machine"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3 inline-flex rounded-full bg-primary/10 p-2">
                  <Cpu className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Industrial Sewing Machines</h3>
                <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                  High-speed automatic sewing machines with precision control for various stitching patterns and fabric
                  types.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    100+ Units
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Automated
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Machine 2
            <Card className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/automated-fabric-cutting-machine.jpg"
                  alt="Cutting Machine"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3 inline-flex rounded-full bg-secondary/10 p-2">
                  <Scissors className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Automated Cutting Machines</h3>
                <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                  Computer-controlled cutting systems ensuring precision cuts with minimal fabric waste and maximum
                  efficiency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    15+ Units
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    CAD Integrated
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Machine 3
            <Card className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/embroidery-machine-in-action.jpg"
                  alt="Embroidery Machine"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3 inline-flex rounded-full bg-primary/10 p-2">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Embroidery Machines</h3>
                <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                  Multi-head embroidery machines capable of intricate designs, logos, and custom patterns with
                  precision.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    20+ Units
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Multi-head
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Machine 4 
            <Card className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/industrial-washing-machine.jpg"
                  alt="Washing Machine"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3 inline-flex rounded-full bg-secondary/10 p-2">
                  <Zap className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Industrial Washing Systems</h3>
                <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                  Commercial-grade washing and dyeing machines with water recycling capabilities for sustainable
                  operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    10+ Units
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Eco-friendly
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Machine 5
            <Card className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/pressing-and-finishing-equipment.jpg"
                  alt="Pressing Equipment"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3 inline-flex rounded-full bg-primary/10 p-2">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Pressing & Finishing Equipment</h3>
                <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                  Steam presses and finishing machines ensuring crisp, professional appearance for all garment types.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    30+ Units
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Steam-powered
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Machine 6 
            <Card className="overflow-hidden border-2 transition-all hover:border-primary hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/quality-inspection-equipment.jpg"
                  alt="Quality Inspection"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3 inline-flex rounded-full bg-secondary/10 p-2">
                  <PackageCheck className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Quality Inspection Systems</h3>
                <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                  Advanced inspection equipment with digital measurement tools ensuring every product meets quality
                  standards.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    25+ Units
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Digital
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground lg:text-5xl">See Our Process in Action</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Watch how we transform raw materials into high-quality textile products
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Video 1 */}
            {/*<div className="group relative overflow-hidden rounded-xl bg-muted">
              <div className="aspect-video">
                <img
                  src="/textile-factory-workers-operating-machines.jpg"
                  alt="Factory Tour Video"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all group-hover:bg-black/50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-8 w-8" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Complete Factory Tour</h3>
                <p className="text-sm text-muted-foreground">3:45 mins</p>
              </div>
            </div>

            {/* Video 2 */}
            {/*<div className="group relative overflow-hidden rounded-xl bg-muted">
              <div className="aspect-video">
                <img
                  src="/automated-cutting-process-demonstration.jpg"
                  alt="Cutting Process Video"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all group-hover:bg-black/50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-8 w-8" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Automated Cutting Process</h3>
                <p className="text-sm text-muted-foreground">2:20 mins</p>
              </div>
            </div>

            {/* Video 3 */
            /*<div className="group relative overflow-hidden rounded-xl bg-muted">
              <div className="aspect-video">
                <img
                  src="/quality-control-inspection-process.jpg"
                  alt="Quality Control Video"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all group-hover:bg-black/50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-8 w-8" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Quality Control Process</h3>
                <p className="text-sm text-muted-foreground">4:15 mins</p>
              </div>
            </div>
          </div>
        </div>
      </section>}

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-6 text-4xl font-bold lg:text-5xl">Ready to Start Your Project?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed opacity-90">
            Experience our world-class manufacturing capabilities firsthand
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/contact" className="inline-block">
              <button className="rounded-lg bg-secondary px-8 py-3 font-semibold text-secondary-foreground transition-all hover:bg-secondary/90">
                Request a Quote
              </button>
            </a>
            <a href="/certifications" className="inline-block">
              <button className="rounded-lg border-2 border-primary-foreground px-8 py-3 font-semibold transition-all hover:bg-primary-foreground/10">
                View Certifications
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
