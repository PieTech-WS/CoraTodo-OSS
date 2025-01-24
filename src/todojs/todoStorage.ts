import { file, prompt } from "../ts/exports";
import { getTodoList_obj } from "./todoStorage.interface";
import { todoStorage } from "./interface";

export default class todoStorageUtil{
    storageUri: Text;
    todoStorageContent: todoStorage
    debugMode: Boolean;
    constructor(storageUri: Text, debugmode: Boolean){
        this.storageUri = storageUri
        this.debugMode = debugmode
    };
    async getTodoList(obj:getTodoList_obj):Promise<todoStorage> {
       file.readText({
            uri: 'internal://files/cora-todolist.json.txt',
            success: (text) => {
                this.todoStorageContent = JSON.parse(text);
                if (this.debugMode){
                    prompt.showToast({
                        message: '获取待办存储内容成功'
                    });
                }
                
            },
            fail: (err) => {
                prompt.showToast({
                    message: '获取失败, 错误代码'+err
                })
            }
        });
        return this.todoStorageContent;
    }
}

