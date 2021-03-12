import { ScreenComponent } from '@typings/index';
import {
  Introduction,
  VideoType,
  ProductInfo,
  InfoAddress,
  LogoUpload,
  InfoPersonal,
  VideoDone,
  TrackSelect,
  LoadingVideo,
  Training,
} from '@components/Steps';

export const items: ScreenComponent[] = [
  {
    img: '/img/background-main.png',
    Component: Introduction,
    isCover: true,
    hasMobileImg: true,
  },
  {
    img: '/img/background-main-2.png',
    Component: VideoType,
    isCover: true,
  },
  {
    img: '/img/background-main-3.png',
    Component: ProductInfo,
    hasCard: true,
    cardImg: 'img/preview-product.png',
  },
  {
    img: '/img/background-main-3.png',
    Component: Training,
    hasCard: true,
    cardWide: true,
    cardImg: 'img/training.png',
  },
  {
    img: '/img/background-main-3.png',
    Component: InfoAddress,
    hasCard: true,
    cardImg: 'img/preview-address.png',
  },
  {
    img: '/img/background-main-3.png',
    Component: LogoUpload,
    hasCard: true,
    cardImg: 'img/preview-address.png',
  },
  {
    img: '/img/background-main-3.png',
    Component: TrackSelect,
    hasCard: true,
    cardImg: 'img/preview-address.png',
  },
  {
    img: '/img/background-main-4.png',
    Component: InfoPersonal,
    hasCard: false,
  },
  {
    img: '/img/background-main-3.png',
    Component: LoadingVideo,
  },
  {
    img: '/img/background-main-3.png',
    Component: VideoDone,
    cardImg: 'img/preview-done.png',
  },
];
