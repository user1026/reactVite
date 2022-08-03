import { Layout } from 'antd';

export default function Index(){
    const { Header, Sider, Content } = Layout;
    return (
        <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
        </Layout>
      </Layout>
    )
}