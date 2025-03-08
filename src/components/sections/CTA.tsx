import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShimmerButton } from '../ui/ShimmerButton';

const CTA = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work Smarter?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join thousands of professionals who are boosting productivity with WorkBuddy. Start your free trial today!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* <ShimmerButton className="w-full sm:w-auto">
              Try WorkBuddy for Free
            </ShimmerButton> */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Request a Demo
            </motion.button>
          </div>

          <p className="text-blue-100 mt-12 max-w-2xl mx-auto text-center italic">
            WorkBuddy isn't just a tool—it's your partner in productivity, engagement, and success. Let's make work better, together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA; 