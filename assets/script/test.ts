import { Toast } from "./toast";

const {ccclass, property} = cc._decorator;

@ccclass
export class Test extends cc.Component {
    toast() {
        Toast.instance.showText('队长别开枪, 是我.队长别开枪, 是我.队长别开枪, 是我.队长别开枪, 是我.队长别开枪, 是我.队长别开枪, 是我.队长别开枪, 是我.队长别开枪, 是我.', 1);
    }
}
