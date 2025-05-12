"use client";


export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 overflow-hidden">
      <div className="container relative px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 reveal active">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4">How It Works</h2>
          <p className="text-sm sm:text-base text-muted-foreground px-2 sm:px-0">Getting started with Lunexa is easy. Follow these simple steps to begin your AI-powered crypto trading journey.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="rounded-xl text-card-foreground shadow bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors hover-lift reveal group active" style={{transitionDelay: "0ms"}}>
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="rounded-full w-16 h-16 bg-primary/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-wallet h-12 w-12 text-primary"
                >
                  <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                </svg>
              </div>
              <div className="font-semibold tracking-tight mt-4 text-xl">Connect Your Wallet</div>
            </div>
            <div className="p-6 pt-0 px-6 pb-6">
              <p className="text-muted-foreground">Securely connect your existing crypto wallets or exchanges to Lunexa with our advanced API integration system.</p>
            </div>
          </div>
          
          <div className="rounded-xl text-card-foreground shadow bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors hover-lift reveal group active" style={{transitionDelay: "150ms"}}>
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="rounded-full w-16 h-16 bg-primary/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-bot h-12 w-12 text-primary"
                >
                  <path d="M12 8V4H8"></path>
                  <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
              </div>
              <div className="font-semibold tracking-tight mt-4 text-xl">Set Up Your AI Assistant</div>
            </div>
            <div className="p-6 pt-0 px-6 pb-6">
              <p className="text-muted-foreground">Configure your AI assistant with your trading preferences, risk tolerance, and investment goals.</p>
            </div>
          </div>
          
          <div className="rounded-xl text-card-foreground shadow bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors hover-lift reveal group active" style={{transitionDelay: "300ms"}}>
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="rounded-full w-16 h-16 bg-primary/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-zap h-12 w-12 text-primary"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <div className="font-semibold tracking-tight mt-4 text-xl">Automate Your Trading</div>
            </div>
            <div className="p-6 pt-0 px-6 pb-6">
              <p className="text-muted-foreground">Let Lunexa analyze market trends and execute trades on your behalf based on sophisticated AI algorithms.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center reveal active" style={{transitionDelay: "450ms"}}>
          <div className="relative w-full max-w-lg h-80 rounded-2xl border border-border/50 overflow-hidden hover:border-primary/60 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20">
            <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
            <iframe 
              src="https://my.spline.design/claritystream-gtdht9CHvMl04NwjLNlb6yW3/" 
              frameBorder="0" 
              width="100%" 
              height="100%" 
              title="Clarity Stream 3D Visualization"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
