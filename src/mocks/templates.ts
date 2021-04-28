import { Template } from '@typings/index'

export const templates: Template[] = [
  {
    id: 833,
    type: 'Vídeo - produto com preço (horizontal)',
    steps: [1, 2, 3, 5, 6, 7, 8, 9, 10],
    isHorizontalTemplate: true,
    extension: 'mp4',
    hasPrice: true,
    mediaType: 'video',
    productPreview: '/img/833-product.png',
    infoPreview: '/img/833-info.png'
  },
  {
    id: 832,
    type: 'Vídeo - produto com preço (vertical)',
    steps: [1, 2, 3, 5, 6, 7, 8, 9, 10],
    extension: 'mp4',
    hasPrice: true,
    mediaType: 'video',
    productPreview: '/img/832-product.png',
    infoPreview: '/img/832-info.png'
  },
  {
    id: 828,
    type: 'Vídeo - produto sem preço (horizontal)',
    steps: [1, 2, 3, 5, 6, 7, 8, 9, 10],
    isHorizontalTemplate: true,
    extension: 'mp4',
    hasPrice: false,
    mediaType: 'video',
    productPreview: '/img/828-product.png',
    infoPreview: '/img/828-info.png'
  },
  {
    id: 865,
    type: 'Vídeo de treinamento',
    steps: [1, 2, 4, 6, 7, 8, 9, 10],
    isHorizontalTemplate: true,
    extension: 'mp4',
    mediaType: 'video',
    trainingPreview: '/img/865-training.png',
    infoPreview: '/img/865-training.png'
  },
  {
    id: 835,
    type: 'Imagem - produto com preço (quadrado)',
    steps: [1, 2, 3, 5, 6, 8, 9, 10],
    extension: 'png',
    hasPrice: true,
    mediaType: 'image',
    productPreview: '/img/835-product.png',
    infoPreview: '/img/835-product.png'
  },
  {
    id: 831,
    type: 'Imagem - produto sem preço (quadrado)',
    steps: [1, 2, 3, 5, 6, 8, 9, 10],
    extension: 'png',
    hasPrice: false,
    mediaType: 'image',
    productPreview: '/img/831-product.png',
    infoPreview: '/img/831-product.png'
  },
  {
    id: 841,
    type: 'Imagem - treinamento (quadrado)',
    steps: [1, 2, 4, 6, 8, 9, 10],
    extension: 'png',
    mediaType: 'image',
    trainingPreview: '/img/841-training.png',
    infoPreview: '/img/841-training.png'
  }
]
