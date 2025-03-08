import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GradientCard } from '../ui/GradientCard';

const featureCards = [
  {
    title: "Starting a New Job? WorkBuddy Has Your Back",
    description: "Makes onboarding smooth and helps new hires feel at home faster",
    features: [
      "Onboarding Tasks Management",
      "Team Connection Builder",
      "Interactive Icebreakers"
    ],
    icon: "👋"
  },
  {
    title: "Deadlines Piling Up? WorkBuddy to the Rescue",
    description: "Saves time and keeps you on top of tasks effortlessly",
    features: [
      "Smart Task Tracking",
      "Email Summary Generator",
      "AI-Powered Quick Replies"
    ],
    icon: "⏰"
  },
  {
    title: "Upskilling Made Easy",
    description: "Empowers employees to grow and stay ahead in their careers",
    features: [
      "AI Training Recommendations",
      "Manager-Team Collaboration Tools"
    ],
    icon: "📚"
  },
  {
    title: "Showcase Your Progress",
    description: "Simplifies performance reviews and helps employees shine",
    features: [
      "Automated Performance Reports",
      "One-Click Review Sharing"
    ],
    icon: "📈"
  }
];

const FeatureCard = ({ title, description, features, icon, index }: any) => {
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
    >
      <GradientCard
        title={title}
        description={description}
        features={features}
        icon={icon}
        withArrow={false}
        circleSize={300}
      />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureCards.map((card, index) => (
            <FeatureCard key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 