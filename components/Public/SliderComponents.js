import React, {Component} from 'react';
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

class SliderComponents extends Component {

    state = {
        loadings: [],
    };

    enterLoading = index => {
        this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true;

            return {
                loadings: newLoadings,
            };
        });
        setTimeout(() => {
            this.setState(({ loadings }) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;

                return {
                    loadings: newLoadings,
                };
            });
        }, 6000);
    };


    changeSlide=()=>{

    }

    componentDidUpdate(prevProps) {

    }

    componentDidMount() {

    }

    render() {
        const { loadings } = this.state;
        return (
            <>
                <h1>Slider</h1>
                <Button type="primary" loading>
                    Loading
                </Button>
                <Button type="primary" size="small" loading>
                    Loading
                </Button>
                <Button type="primary" icon={<PoweroffOutlined />} loading />
                <br />
                <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                    Click me!
                </Button>
                <Button
                    type="primary"
                    icon={<PoweroffOutlined />}
                    loading={loadings[1]}
                    onClick={() => this.enterLoading(1)}
                >
                    Click me!
                </Button>
                <Button
                    type="primary"
                    icon={<PoweroffOutlined />}
                    loading={loadings[2]}
                    onClick={() => this.enterLoading(2)}
                />

            </>
        );
    }
}

export default SliderComponents;