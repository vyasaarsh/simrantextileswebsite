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
