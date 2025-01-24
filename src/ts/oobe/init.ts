import { file, prompt, storage, router } from '../exports'
// import appvalue from '../Values';
export function init() {
    file.writeText({
        uri: 'internal://files/cora-todolist.json.txt',
        text: '{usedID:[],todo:{}}',
        success: () => {
          console.log('保存成功');
        },
        fail: (data, code) => {
          console.log(`handling fail, code = ${code}`);
          prompt.showToast({
            message: `初始化错误, 错误码${code}`,
            duration: 1500
          })
        }
      });
      storage.set({
        key: 'app_version',
        value: '2.0.1'
      });
      storage.set({
        key: 'todojs_version',
        value: '0.1.0-quickjs-vela-quickapp',
        success: () => {
          nextpage()
        }
      });
      storage.set({
        key: 'inited',
        value: 'inited'
      })
}

function nextpage() {
    router.replace({
      uri: "/pages/index"
    })
  }