import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '../ui/button';

export function CTA() {
  return (
    <section className="py-32">
      <div className="container max-w-3xl mx-auto px-4 text-center space-y-8">
        <motion.h2 
          className="text-4xl md:text-5xl tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Transform your
          <br />
          <span className="text-muted-foreground">document intelligence</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Join forward-thinking enterprises leveraging <span className="text-3xl font-normal text-muted-foreground">naon</span>'s intelligent platform to unlock actionable insights from their document ecosystem.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button size="lg" className="rounded-full px-8">
              Get started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button size="lg" variant="outline" className="rounded-full px-8">
              See how it works
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
