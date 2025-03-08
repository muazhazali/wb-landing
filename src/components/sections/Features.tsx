import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const featureCards = [
  {
    title: "Starting a New Job? WorkBuddy Has Your Back",
    features: [
      "Onboarding Tasks Management",
      "Team Connection Builder",
      "Interactive Icebreakers"
    ],
    benefit: "Makes onboarding smooth and helps new hires feel at home faster",
    icon: "👋"
  },
  {
    title: "Deadlines Piling Up? WorkBuddy to the Rescue",
    features: [
      "Smart Task Tracking",
      "Email Summary Generator",
      "AI-Powered Quick Replies"
    ],
    benefit: "Saves time and keeps you on top of tasks effortlessly",
    icon: "⏰"
  },
  {
    title: "Upskilling Made Easy",
    features: [
      "AI Training Recommendations",
      "Manager-Team Collaboration Tools"
    ],
    benefit: "Empowers employees to grow and stay ahead in their careers",
    icon: "📚"
  },
  {
    title: "Showcase Your Progress",
    features: [
      "Automated Performance Reports",
      "One-Click Review Sharing"
    ],
    benefit: "Simplifies performance reviews and helps employees shine",
    icon: "📈"
  }
];

const FeatureCard = ({ title, features, benefit, icon, index }: any) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 mb-4">
        {features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center text-gray-700">
            <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <p className="text-gray-600 italic">{benefit}</p>
    </motion.div>
  );
};

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Features That Make Work Better
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how WorkBuddy transforms your work experience with powerful features designed for modern professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featureCards.map((card, index) => (
            <FeatureCard key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 