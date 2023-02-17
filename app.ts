import qrcode from './tools/qrCode';
import FileMonitor from './tools/foldermonitor';



const directory = './test';


const createQrcode = (id: string) =>{
  // let id = 'test put id her when neet to generate';
  qrcode.createQrcode(id);
  
}

const fileMonitor = (directory: string) =>{
 
  FileMonitor.monitor(directory);
  
}
// get qrcode 
const app = () => {
  // let id = 'test';
  // createQrcode(id);
// fileMonitor(directory);
}


export default app();