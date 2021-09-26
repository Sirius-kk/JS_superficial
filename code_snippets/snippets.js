
/**
 * @description: 检查对象是否为空
 * @param obj Object
 * @return Boolean
 */
const isEmptyObj = obj => obj.constructor === Object && Reflect.ownKeys(obj).length === 0;

/**
 * @description: 
 * @param milliseconds number
 * @return viod 
 */
const wait = async milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
/* 
  示例：
    const test = async () => {
      await wait(1000);
      console.log('1秒钟之后执行打印');
    }
*/