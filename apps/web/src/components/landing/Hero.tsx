import { motion } from 'framer-motion';
import {
  ArrowRight,
  Database,
  Brain,
  Shield,
} from 'lucide-react';

import { Button } from '../ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.03)_1px,_transparent_0)] bg-[length:24px_24px]" />

      <div className="container max-w-4xl mx-auto px-4 text-center space-y-12 relative z-10">
        {/* Main heading */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight">
            Next level
            <br />
            <span className="text-muted-foreground">
              Document Intelligence
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transform documents into actionable intelligence
            with AI agents that extract, analyze, and research
            at enterprise scale.
          </motion.p>
        </motion.div>

        {/* Simple action */}
        <motion.div
          className="pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            ease: "easeOut",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button size="lg" className="rounded-full px-8">
              Request access
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Minimal feature indicators */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 pt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: "easeOut",
          }}
        >
          {[
            { icon: Brain, text: "Intelligent Extraction" },
            { icon: Database, text: "Deep Analysis" },
            { icon: Shield, text: "Secure & Scalable" },
          ].map((item, index) => (
            <motion.div
              key={`${item.text}-${item.icon}`}
              className="flex items-center gap-3 text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.9 + index * 0.1,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
