import { emailTemplate } from './../mocks/email';
import axios from 'axios';

export const createVideo = async ({
  template,
  product,
  valueReal,
  valueCents,
  track,
  address,
  phone,
  fullname,
  email,
  shopName,
  logo,
  training,
}) => {
  const myHeaders = new Headers();
  const photo1 = await uploadImage(logo);
  myHeaders.append('external-id', 'c1ca2a24-737a-44ce-8210-5881de5d74cf');
  myHeaders.append('token', '21c4c6cb615135aa325f21df9818f5dd');

  var formdata = new FormData();
  formdata.append('[video]name', fullname);
  formdata.append('[video]email', fullname);
  formdata.append('video[email]', email);
  formdata.append('[video]track_id', track);
  formdata.append('[video]template_id', template.id);
  formdata.append('[video][data]text_preco_01', valueReal);
  formdata.append('[video][data]text_preco_02', valueCents);
  formdata.append('[video][data]text_telefone_01', phone);
  formdata.append('[video][data]text_endereco_01', address);
  formdata.append('[video][data]image_logo_01', photo1.url);

  if (product) {
    formdata.append('[video][data]text_descricao_01', product?.description);
    formdata.append('[video][data]image_produto_01', product?.photoUri);
  }

  if (training) {
    formdata.append('[video][data]text_titulo_01', training.name);
    formdata.append('[video][data]text_descricao_01', training.description);

    formdata.append('[video][data]image_foto_01', training.phhotoUri);
  }

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow' as RequestRedirect,
  };

  const data = await fetch(
    'https://api.chiligumvideos.com/api/videos',
    requestOptions
  ).then((response) => response.json());

  return data;
};

export const uploadImage = (photo) => {
  var myHeaders = new Headers();
  myHeaders.append('external-id', 'e5e16966-0218-46ad-a042-04241db0a9de');
  myHeaders.append('token', 'fe96c4647e55a2496cc3fade6e95b873');

  var formdata = new FormData();
  formdata.append('[asset]name', photo.name);
  formdata.append('[asset]attachment', photo, photo.name);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow' as RequestRedirect,
  };

  const data = fetch(
    'https://api.chiligumvideos.com/api/assets',
    requestOptions
  ).then((response) => response.json());

  return data;
};

export const sendVideoEmail = (url, userEmail, name) => {
  const email = emailTemplate(url, name);

  const data = {
    from: { name: 'Chiligum Creatives', email: 'admin@chiligumvideos.com' },
    to: userEmail,
    message_title: 'Seu vídeo está pronto',
    html: email,
  };

  axios.post(
    'https://ybgviasmge.execute-api.us-east-1.amazonaws.com/prod/send_email',
    //@ts-ignore
    data,
    {
      headers: {
        Authorization: 'Basic Y2hpbGlndW06Y2hpbGlndW1fYWRtaW5pc3RyYXRvcg==',
        'Content-Type': 'application/json',
      },
    }
  );
};
