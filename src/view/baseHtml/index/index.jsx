import { Layout } from "antd";
import store from "@/mobx/user.js";
import { useState } from "react";
import { useObserver, useLocalStore, Observer } from "mobx-react";
import { toJS } from "mobx";
import { Button, Tooltip, Alert, message } from "antd";
export default function Index() {
    const { Header, Sider, Content, Footer } = Layout;
    const userStore = useLocalStore(() => store);
    let [count, setCount] = useState(1);
    const { userInfo, getUserInfo, changeUserInfo } = toJS(userStore);
    const change = () => {
        setCount(++count);
        console.log(count);
    };
    const show = () => {
        console.log(123);
        message.warning("******");
    };
    return useObserver(() => (
        <Layout>
            <Sider>Sider</Sider>
            <Layout>
                <Header>Header</Header>
                <Content>{userInfo}</Content>
                <Footer>
                    <Button
                        onClick={() => change()}
                        type="primary"
                        shape="circle"
                    >
                        {count}
                    </Button>
                    <Button
                        onClick={() => show()}
                        type="primary"
                        shape="circle"
                    >
                        show alert
                    </Button>
                    <Button
                        onClick={() =>
                            userStore.changeUserInfo(count) && setCount(++count)
                        }
                        type="primary"
                        shape="circle"
                    >
                        {count}
                    </Button>
                </Footer>
            </Layout>
        </Layout>
    ));
}
