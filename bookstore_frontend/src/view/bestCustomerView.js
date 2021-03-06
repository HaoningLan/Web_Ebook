import React from 'react';
import '../css/Data.css';
import {BackTop, Layout} from "antd";
import {HeadInfo} from "../components/layout/HeadInfo";
import {SideBar} from "../components/layout/SideBar";
import {BestCustomerTable} from "../components/user/BestCustomerTable";

const { Header, Content} = Layout;
class BestCustomerView extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <HeadInfo/>
                </Header>
                <Layout>
                    <SideBar />
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">
                            <BestCustomerTable/>
                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                        <BackTop />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default BestCustomerView;
