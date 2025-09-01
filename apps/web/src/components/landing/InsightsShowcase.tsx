import { motion } from "framer-motion";
import { FileText, Brain, Search } from "lucide-react";

import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

const insightTypes = [
  {
    icon: FileText,
    category: "Document Processing",
    title: "Structured Data Extraction",
    description: "Transform unstructured documents into structured business data with enterprise accuracy",
    badge: "Precise"
  },
  {
    icon: Brain,
    category: "Intelligence Layer",
    title: "Contextual Understanding",
    description: "AI agents that comprehend document context and business relationships at scale",
    badge: "Advanced"
  },
  {
    icon: Search,
    category: "Deep Research",
    title: "Strategic Research",
    description: "Comprehensive analysis and research capabilities across your entire document ecosystem",
    badge: "Comprehensive"
  }
];

export function InsightsShowcase() {
  return (
    <section className="py-32 bg-muted/20">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl tracking-tight">Built for business transformation</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Purpose-built AI capabilities that unlock the value hidden in your documents
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {insightTypes.map((insight, index) => (
            <motion.div
              key={`${insight.title}-${insight.icon}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15, 
                ease: "easeOut" 
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 space-y-6 border-0 shadow-sm h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <insight.icon className="w-5 h-5" />
                      <span className="text-sm text-muted-foreground">{insight.category}</span>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge variant="secondary" className="text-xs">
                        {insight.badge}
                      </Badge>
                    </motion.div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">{insight.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}