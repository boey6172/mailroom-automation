const fs = require('fs');
const path = require('path');

export default class FileMonitor {


  static monitor = (directory: string) =>{
    fs.watch(directory, (eventType: string, filename: any) => {
      if (eventType === 'rename') {
        const file = path.join(directory, filename);
        fs.stat(file, (err: any, stats: { isFile: () => any; }) => {
          if (err) {
            console.error(err);
            return;
          }
          if (stats.isFile()) {
            console.log(`A new file has been added: ${file}`);
          }
        });
      }
    });
  }

}




