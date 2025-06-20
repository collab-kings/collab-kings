
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      
      {/* Current Focus Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            🎯 Current Focus
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <img 
                src="https://user-images.githubusercontent.com/74038190/212257454-16e3712e-945a-4ca2-b238-408ad0bf87e6.gif" 
                alt="AI Integration" 
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">🤖 AI Integration</h3>
              <p className="text-muted-foreground">Building intelligent applications with machine learning and neural networks</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <img 
                src="https://user-images.githubusercontent.com/74038190/212257472-08e52665-c503-4bd9-aa20-f5a4dae769b5.gif" 
                alt="Web3 Development" 
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">🌐 Web3 Development</h3>
              <p className="text-muted-foreground">Creating decentralized solutions and blockchain applications</p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <img 
                src="/placeholder.svg" 
                alt="Cloud Architecture" 
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">☁️ Cloud Architecture</h3>
              <p className="text-muted-foreground">Designing scalable and resilient cloud infrastructures</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Up To Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
            🚀 What I'm Up To
          </h2>
          
          <div className="space-y-4 text-lg">
            <p><strong>🔭 Currently working on:</strong> AI-powered web applications</p>
            <p><strong>🌱 Learning:</strong> Machine Learning & Blockchain Technologies</p>
            <p><strong>👯 Open to collaborate on:</strong> Innovative and impactful projects</p>
            <p><strong>💬 Ask me about:</strong> React, Node.js, Python, and Cloud Architecture</p>
            <p><strong>⚡ Fun fact:</strong> I debug with console.log() and I'm proud of it!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">❤️ Thanks for visiting!</h3>
          <img 
            src="https://user-images.githubusercontent.com/74038190/213910845-af37a709-8995-40d6-be59-724526e3c3d7.gif" 
            alt="Thank you animation" 
            className="w-16 mx-auto mb-6"
          />
          <p className="text-xl mb-4">⭐ Star my repositories if you find them helpful!</p>
          <img 
            src="https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif" 
            alt="Coding animation" 
            className="w-48 mx-auto"
          />
        </div>
      </footer>
    </div>
  );
};

export default Index;
