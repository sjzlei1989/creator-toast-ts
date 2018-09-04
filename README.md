# creator-toast-ts
适用于Cocos Creator的功能脚本, 实现类似Android的toast的功能, 使用TS编写

使用方法:
1. 将toast.ts文件拷贝到项目中
2. 导入Toast类. 路径根据实际情况修改. 如果使用的是vscode, 不需要手动导入, 在需要使用的地方输入Toast按回车会自动导入
```js
import { Toast } from "./toast";
```
3. Toast.instance.showTest('要显示的文字', 1); 只需要两个参数, 具体见代码内注释

效果演示
![长文字显示](https://raw.githubusercontent.com/sjzlei1989/creator-toast-ts/master/img/long.gif)
![短文字显示](https://raw.githubusercontent.com/sjzlei1989/creator-toast-ts/master/img/short.gif)

注意: toast类中加载资源使用了两种方式, 一种是使用uuid加载内置的default_btn_pressed图片, 加载完是cc.SpriteFrame类型, 另一种是从resources文件夹中加载'bg_gray.png'图片, 加载完是cc.Texture2D类型. 因为使用uuid加载的方式不知为何在编辑器下运行没问题, 导出为微信小游戏就会出错, 所以就增加了一个bg_gray图片.
