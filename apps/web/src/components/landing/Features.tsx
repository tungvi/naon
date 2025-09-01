import { motion } from 'framer-motion';
import { Upload, Zap, Search, Download } from 'lucide-react';

const features = [
  {
    icon: Upload,
    title: "Ingest",
    description: "Secure document ingestion with enterprise-grade processing"
  },
  {
    icon: Zap,
    title: "Extract",
    description: "AI agents identify and extract critical business data"
  },
  {
    icon: Search,
    title: "Analyze",
    description: "Deep analysis and research across your document corpus"
  },
  {
    icon: Download,
    title: "Deploy",
    description: "Actionable intelligence delivered to your workflows"
  }
];

export function Features() {
  return (
    <section className="py-32" id="features">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl tracking-tight">Enterprise-ready workflow</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Deploy intelligent document processing that scales with your business needs
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title} 
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: "easeOut" 
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center"
                  whileHover={{ scale: 1.1, backgroundColor: "var(--accent)" }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="w-6 h-6" />
                </motion.div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
