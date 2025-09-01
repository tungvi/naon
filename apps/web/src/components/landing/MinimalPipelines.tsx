import { motion } from "framer-motion";
import { ArrowRight, Workflow, MessageSquare } from "lucide-react";

import { Button } from "../ui/button";

export function MinimalPipelines() {
  return (
    <section className="py-32 bg-muted/30">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
                <Workflow className="w-8 h-8 text-primary" />
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl tracking-tight">
              Enterprise customization
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tailored AI workflows designed for your specific industry and use case. From financial services to legal operations, we build intelligence that fits your business.
            </p>
          </motion.div>

          <motion.div 
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button size="lg" className="rounded-full px-8">
                <MessageSquare className="mr-2 w-4 h-4" />
                Discuss your requirements
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}