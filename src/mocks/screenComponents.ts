import { ScreenComponent } from '@typings/index'
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
  Training
} from '@components/Steps'

export const items: ScreenComponent[] = [
  {
    img: '/img/background-main.png',
    Component: Introduction,
    validation: Introduction.validation,
    isCover: true,
    hasMobileImg: true
  },
  {
    img: '/img/background-main-2.png',
    Component: VideoType,
    validation: VideoType.validation,
    isCover: true
  },
  {
    img: '/img/background-main-3.png',
    Component: ProductInfo,
    validation: ProductInfo.validation,
    hasCard: true,
    cardImg: 'img/preview-product.png'
  },
  {
    img: '/img/background-main-3.png',
    Component: Training,
    validation: Training.validation,
    hasCard: true,
    cardWide: true,
    cardImg: 'img/training.png'
  },
  {
    img: '/img/background-main-3.png',
    Component: InfoAddress,
    validation: InfoAddress.validation,
    hasCard: true,
    cardImg: 'img/preview-address.png'
  },
  {
    img: '/img/background-main-3.png',
    Component: LogoUpload,
    validation: LogoUpload.validation,
    hasCard: true,
    cardImg: 'img/preview-address.png'
  },
  {
    img: '/img/background-main-3.png',
    Component: TrackSelect,
    validation: TrackSelect.validation,
    hasCard: true,
    cardImg: 'img/preview-address.png'
  },
  {
    img: '/img/background-main-4.png',
    Component: InfoPersonal,
    validation: InfoPersonal.validation,
    hasCard: false
  },
  {
    img: '/img/background-main-3.png',
    Component: LoadingVideo,
    validation: LoadingVideo.validation
  },
  {
    img: '/img/background-main-3.png',
    Component: VideoDone,
    validation: VideoDone.validation,
    cardImg: 'img/preview-done.png'
  }
]
