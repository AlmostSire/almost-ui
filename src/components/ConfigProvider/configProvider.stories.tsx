import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ConfigProvider from './index';
import { useIntl } from 'react-intl'
import {
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Popconfirm,
    Table,
    Modal,
    Button,
    Select,
    Transfer,
    Radio,
} from 'antd';
import moment from 'moment';
import enUS from 'antd/lib/locale/en_US';
import zhCN from 'antd/lib/locale/zh_CN';

const { Option } = Select;
const { RangePicker } = DatePicker;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        filters: [
            {
                text: 'filter1',
                value: 'filter1',
            },
        ],
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
];

class Page extends React.Component {
    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    hideModal = () => {
        this.setState({ visible: false });
    };

    render() {
        const info = () => {
            Modal.info({
                title: 'some info',
                content: 'some info',
            });
        };
        const confirm = () => {
            Modal.confirm({
                title: 'some info',
                content: 'some info',
            });
        };
        return (
            <div className="locale-components">
                <div className="example">
                    <Pagination defaultCurrent={1} total={50} showSizeChanger />
                </div>
                <div className="example">
                    <Select showSearch style={{ width: 200 }}>
                        <Option value="jack">jack</Option>
                        <Option value="lucy">lucy</Option>
                    </Select>
                    <DatePicker />
                    <TimePicker />
                    <RangePicker style={{ width: 200 }} />
                </div>
                <div className="example">
                    <Button type="primary" onClick={this.showModal}>
                        Show Modal
                    </Button>
                    <Button onClick={info}>Show info</Button>
                    <Button onClick={confirm}>Show confirm</Button>
                    <Popconfirm title="Question?">
                        <span>Click to confirm</span>
                    </Popconfirm>
                </div>
                <div className="example">
                    <Transfer dataSource={[]} showSearch targetKeys={[]} render={item => item.title} />
                </div>
                <div className="site-config-provider-calendar-wrapper">
                    <Calendar fullscreen={false} value={moment()} />
                </div>
                <div className="example">
                    <Table dataSource={[]} columns={columns} />
                </div>
                <Modal title="Locale Modal" visible={this.state.visible} onCancel={this.hideModal}>
                    <p>Locale Modal</p>
                </Modal>
            </div>
        );
    }
}

const { useLocale } = ConfigProvider

// 国际化配置
const localeConfig = [
    {
        key: 'zh',
        lang: '中文',
        antdLocale: zhCN,
        momentLocale: 'zh-ch',
        intlLocale: "zh-Hans-CN",
        intlMessage: {
            hello: '你好世界'
        }
    },
    {
        key: 'en',
        lang: 'English',
        antdLocale: enUS,
        momentLocale: 'en',
        intlLocale: "en",
        intlMessage: {
            hello: 'hello world'
        }
    }
];

const App = () => {
    const intl = useIntl();
    const {locale, setLocale} = useLocale()
    
    return (
        <div>
            <div className="change-locale">
                <span style={{ marginRight: 16 }}>Change locale of components: </span>
                <Radio.Group value={locale} onChange={e => setLocale(e.target.value)}>
                    
                    {localeConfig.map(locale => (
                        <Radio.Button key={locale.key} value={locale.key}>
                            {locale.lang}
                        </Radio.Button>
                    ))}
                   
                </Radio.Group>
            </div>
            
            <Page />
            {intl.formatMessage({ id: 'hello' })}
          
        </div>
    );
    
}



export default {
    title: '全局/Config 全局配置',
    component: ConfigProvider,
    argTypes: {},
} as ComponentMeta<typeof ConfigProvider>;

const Template: ComponentStory<typeof ConfigProvider> = () => {

    return (
        <ConfigProvider
            defaultLocale={'zh'}
            localeConfig={localeConfig}
        >

            <App />
        </ConfigProvider>
    )
}

export const Basic = Template.bind({})

