import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import CTA from './components/sections/CTA';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>WorkBuddy - Your AI-Powered Work Companion</title>
        <meta name="description" content="WorkBuddy is your AI-powered work companion for seamless task management, team collaboration, and productivity. Transform how you work today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="WorkBuddy - Your AI-Powered Work Companion" />
        <meta property="og:description" content="Transform your work experience with WorkBuddy's AI-powered tools for task management and team collaboration." />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <Navigation />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} WorkBuddy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
