import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, User, ArrowRight } from "lucide-react";

// Sample blog posts
const blogPosts = [
  {
    id: "ai-crypto-trading-strategies",
    title: "Top 5 AI-Powered Crypto Trading Strategies for 2025",
    excerpt: "Discover the most effective algorithmic trading strategies that leverage artificial intelligence to maximize returns in volatile markets.",
    author: "Alex Morgan",
    date: "April 15, 2025",
    readTime: "8 min read",
    category: "Trading Strategies",
    image: "https://ext.same-assets.com/4269615189/2376341775.png"
  },
  {
    id: "market-sentiment-analysis",
    title: "How Market Sentiment Analysis Predicts Crypto Price Movements",
    excerpt: "Learn how advanced NLP algorithms can analyze social media, news, and market data to predict price movements before they happen.",
    author: "Sarah Johnson",
    date: "March 28, 2025",
    readTime: "6 min read",
    category: "Market Analysis",
    image: "https://ext.same-assets.com/4269615189/2018733539.svg"
  },
  {
    id: "risk-management-ai",
    title: "Risk Management in Algorithmic Trading: The AI Advantage",
    excerpt: "Explore how artificial intelligence is revolutionizing risk management for crypto traders through adaptive position sizing and drawdown protection.",
    author: "Michael Chen",
    date: "March 10, 2025",
    readTime: "7 min read",
    category: "Risk Management",
    image: "https://ext.same-assets.com/4269615189/1091138897.jpeg"
  },
  {
    id: "backtesting-trading-bots",
    title: "Backtesting Your AI Trading Bot: Common Pitfalls to Avoid",
    excerpt: "Improve your trading bot's performance by learning the most common backtesting errors and how to implement robust validation techniques.",
    author: "Emma Patel",
    date: "February 22, 2025",
    readTime: "9 min read",
    category: "Trading Bots",
    image: "https://ext.same-assets.com/4269615189/1998606599.svg"
  },
  {
    id: "crypto-market-trends-2025",
    title: "Crypto Market Trends to Watch in 2025",
    excerpt: "An in-depth analysis of emerging patterns in cryptocurrency markets and how AI-powered tools can help you capitalize on these trends.",
    author: "Alex Morgan",
    date: "February 14, 2025",
    readTime: "5 min read",
    category: "Market Trends",
    image: "https://ext.same-assets.com/4269615189/2507653374.png"
  },
  {
    id: "behavioral-finance-trading",
    title: "Behavioral Finance: How Psychology Affects Crypto Trading",
    excerpt: "Understanding the psychological aspects of trading and how AI can help overcome emotional biases for more rational investment decisions.",
    author: "Sarah Johnson",
    date: "January 30, 2025",
    readTime: "8 min read",
    category: "Psychology",
    image: "https://ext.same-assets.com/4269615189/1481089598.jpeg"
  }
];

// Article categories with count
const categories = [
  { name: "Trading Strategies", count: 12 },
  { name: "Market Analysis", count: 9 },
  { name: "Risk Management", count: 7 },
  { name: "Trading Bots", count: 11 },
  { name: "Market Trends", count: 14 },
  { name: "Psychology", count: 5 },
  { name: "Technology", count: 8 },
  { name: "Regulation", count: 6 }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <div className="container px-4 md:px-8">
          {/* Hero section */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Lunexa Blog</h1>
            <p className="text-muted-foreground md:text-lg">
              Insights, strategies, and updates from the world of AI-powered crypto trading
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main content - blog posts */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="hover-lift overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50">
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary/90 text-white text-xs font-medium px-2.5 py-1 rounded">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <CardHeader className="p-5 pb-0">
                      <CardTitle className="text-xl mb-2">
                        <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                          {post.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-5 pt-2">
                      <CardDescription className="text-sm mb-4">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <User className="h-3 w-3 mr-1" /> {post.author}
                        <span className="mx-2">•</span>
                        <Clock className="h-3 w-3 mr-1" /> {post.readTime}
                        <span className="mx-2">•</span>
                        {post.date}
                      </div>
                    </CardContent>
                    <CardFooter className="p-5 pt-0">
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="link" className="px-0 text-primary group">
                          Read more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Button variant="outline" className="border-primary/40 hover:border-primary transition-all">
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Search */}
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
                  <CardHeader>
                    <CardTitle>Search</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <input
                        type="search"
                        placeholder="Search articles..."
                        className="w-full rounded-md border border-border bg-background pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted-foreground">
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </svg>
                      </button>
                    </div>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category.name}>
                          <Link href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex justify-between items-center text-sm hover:text-primary transition-colors">
                            <span>{category.name}</span>
                            <span className="bg-secondary/50 text-muted-foreground px-2 py-0.5 rounded-full text-xs">
                              {category.count}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
                  <CardHeader>
                    <CardTitle>Newsletter</CardTitle>
                    <CardDescription>
                      Subscribe to our newsletter for the latest updates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        required
                      />
                      <Button className="w-full btn-gradient">Subscribe</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
