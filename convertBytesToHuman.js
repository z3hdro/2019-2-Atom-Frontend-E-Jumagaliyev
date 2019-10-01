/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  let arr = ['B','KB','MB','GB','TB','PB'];
  let k = 0;
  if (typeof(bytes) == 'number' && bytes > 0 && (bytes % 1 === 0)){
      while(bytes >= 1024){
          bytes = bytes / 1024;
          k++;
    }
      if (k > 5){
          return "Too large number or data.Sorry("
      }
      else{
          bytes = bytes.toFixed(2);
          return bytes + ' ' + arr[k]; 
      }
  }
  else{
      return false;
  }
}
