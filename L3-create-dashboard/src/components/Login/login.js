import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {  Switch, Route,NavLink} from 'react-router-dom';
import "./Login.css"


const Login = (props) => {
    console.log('login', props)
    const onFinish = values => {
        console.log('Success:', values);
        props.history.push('/SideBar')

    };

   
    return (
        <div className="login">
            <h1>ورودبه سایت</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="نام کاربری" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="پسورد"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>مرا به خاطربسپار</Checkbox>
                    </Form.Item>

                    <NavLink className="login-form-forgot" to="/forgetPassword">
                        فراموشی رمز عبور
                   </NavLink>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        ورود
                  </Button>
               
                  یا  <NavLink  to="/register" className="Sign-up-now"   >همین حالا ثبت نام کن !</NavLink>
                </Form.Item>
            </Form>


        </div>
    );
};

export default Login;