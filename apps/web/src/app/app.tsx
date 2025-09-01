import { InsightsShowcase } from '../components/landing/InsightsShowcase';
import { MinimalCTA } from '../components/landing/MinimalCTA';
import { MinimalFeatures } from '../components/landing/MinimalFeatures';
import { MinimalFooter } from '../components/landing/MinimalFooter';
import { MinimalHeader } from '../components/landing/MinimalHeader';
import { MinimalHero } from '../components/landing/MinimalHero';
import { MinimalPipelines } from '../components/landing/MinimalPipelines';

export function App() {
  return (
    <div className="min-h-screen bg-background">
      <MinimalHeader />
      <main>
        <MinimalHero />
        <MinimalFeatures />
        <InsightsShowcase />
        <MinimalPipelines />
        <MinimalCTA />
      </main>
      <MinimalFooter />
    </div>
  );
}

export default App;
