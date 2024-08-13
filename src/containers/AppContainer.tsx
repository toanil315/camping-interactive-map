import { InteractiveMapProvider } from '@/contexts/InteractiveMapContext';
import { InteractiveMap } from '@/widgets/InteractiveMap';
import { Layout } from '@/widgets/Layout';
import { PropertySidebar } from '@/widgets/PropertySidebar';

export const AppContainer = () => {
  return (
    <InteractiveMapProvider>
      <Layout>
        <InteractiveMap />
        <PropertySidebar />
      </Layout>
    </InteractiveMapProvider>
  );
};
