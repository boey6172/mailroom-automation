import qrcode from 'qrcode';


export default class QrCode {


  static createQrcode = (id: string) =>{
    qrcode.toDataURL(id, (err: any, url: any) => {
      console.log(url);
    });
  }

}




