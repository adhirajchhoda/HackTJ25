import Link from "next/link"
import { ArrowRight, Search, Shield, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FeaturedItems from "@/components/featured-items"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-2xl">
              Circa
            </Link>
            <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">Beta</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/explore" className="text-sm font-medium">
              Explore
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium">
              How It Works
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button>Dashboard</Button>
            </Link>
            <Link href="/auth/login">
              <Button variant="outline">Login</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Borrow, Lend, Barter. Securely.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Circa is a blockchain-powered P2P platform that makes lending and borrowing items safe, fair, and
                    simple.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/explore">
                    <Button size="lg" className="gap-1.5">
                      Start Exploring
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/list-item">
                    <Button size="lg" variant="outline">
                      List an Item
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden">
                  <img
                    src="/placeholder.svg?height=500&width=800"
                    alt="Circa platform preview"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Circa Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our blockchain-powered platform makes peer-to-peer lending and borrowing secure and trustworthy.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <Search className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Find What You Need</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Search for items to borrow or list your own items for others to use. Our AI matching algorithm finds
                    the perfect match.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Shield className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Secure Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Secure Platform Blockchain-powered security and smart contracts protect every transaction
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Users className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Build Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Every successful transaction builds your trust score, making future exchanges easier and opening up
                    premium opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Items</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse some of the most popular items available on our platform.
                </p>
              </div>
            </div>
            <FeaturedItems />
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Circa. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

