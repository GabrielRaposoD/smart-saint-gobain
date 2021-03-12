// Module Imports
import React from 'react';

// Application Import
import { MainLayout } from '@layout/index';
import { useInfo } from '@store/useInfo';

// Components Import
import { items } from '@mocks/screenComponents';

const IndexPage: React.FC = () => {
  const { video, steps, currentStep } = useInfo();
  const item = items[steps[currentStep] - 1];

  if (steps[currentStep] === 9) {
    return <item.Component />;
  }

  return (
    <MainLayout
      img={item.img}
      isCover={item.isCover}
      hasCard={item.hasCard}
      cardImg={video.thumbnail_url || item.cardImg}
      hasMobileImg={item.hasMobileImg}
      cardWide={item.cardWide}
    >
      <item.Component />
    </MainLayout>
  );
};

export { IndexPage };
