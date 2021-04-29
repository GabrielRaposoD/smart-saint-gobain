import cs from 'clsx';
import { useFormikContext } from 'formik';

interface MainLayoutProps {
  children: React.ReactNode;
  img: string;
  isCover?: boolean;
  hasCard?: boolean;
  cardWide?: boolean;
  cardImg?: string;
  hasMobileImg?: boolean;
  currentStep?: number;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  img,
  isCover = false,
  hasCard = false,
  cardWide,
  cardImg,
  hasMobileImg = false,
  currentStep,
}: MainLayoutProps) => {
  const formik = useFormikContext<any>();
  const preview =
    currentStep === 3
      ? formik.values.template?.productPreview
        ? formik.values.template.productPreview
        : cardImg
      : currentStep === 4
      ? formik.values.template?.trainingPreview
        ? formik.values.template.trainingPreview
        : cardImg
      : currentStep === 5
      ? formik.values.template?.infoPreview
        ? formik.values.template.infoPreview
        : cardImg
      : currentStep === 6
      ? formik.values.template?.infoPreview
        ? formik.values.template.infoPreview
        : cardImg
      : cardImg;
  return (
    <div className='md:flex-row md:justify-between md:max-h-screen flex flex-col-reverse justify-end w-full min-h-screen'>
      <div
        className={cs(
          'md:w-1/2 md:min-h-screen 2xl:px-40 md:px-20 md:py-20 flex flex-col'
        )}
      >
        {children}
      </div>
      <div
        className={cs(
          'md:w-1/2 md:min-h-full relative md:flex flex-col items-center',
          {
            flex: hasMobileImg,
            hidden: !hasMobileImg,
          }
        )}
      >
        {hasCard && (
          <>
            {currentStep !== 8 && (
              <div className='bg-snow 2xl:mt-28 2xl:w-6/12 relative z-10 w-8/12 py-2 mt-16 text-center rounded-lg'>
                <p>o material abaixo é apenas um modelo para visualização</p>
              </div>
            )}
            <img
              src={preview}
              alt=''
              className={cs('z-10 rounded-lg shadow-2xl', {
                'mt-4': hasCard && !cardWide,
                'mt-20': hasCard && cardWide,
                'mt-40 pt-2 !w-9/12': !hasCard,
                'w-9/12 max-h-96': cardWide && currentStep !== 8,
                'max-h-[32rem]': !cardWide,
                'xl:max-h-[45rem] md:max-h-[32rem]': currentStep === 8,
              })}
            />
          </>
        )}
        <img
          src={img}
          alt='Background'
          className={cs(
            'md:w-full md:max-h-screen md:absolute md:block object-cover object-top min-w-full md:min-h-full h-80',
            {
              'md:object-cover md:object-top': isCover,
              'md:object-fill md:object-center': !isCover,
            }
          )}
        />
      </div>
    </div>
  );
};

export { MainLayout };
