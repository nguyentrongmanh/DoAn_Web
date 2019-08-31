import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const SigninView = () => {
	return (
		<div style={{display:'flex', alignItems:'center', justifyContent:'center',height:'100vh'}}>

		
		<div className="auth-container">
			<div className="auth-header">
				<div className="auth-header__title">ĐĂNG NHẬP HỆ THỐNG</div>
			</div>
			<Form className="auth-form">
				<Form.Item className="auth-form__item">
					<Input
						prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
						placeholder="Email"
						name="email"
					/>
				</Form.Item>
				<Form.Item className="auth-form__item">
					<Input
						prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
						type="password"
						placeholder="Password"
						name="password"
					/>
				</Form.Item >
				<Form.Item className="auth-form__item">
					<Checkbox>Nhớ đăng nhập</Checkbox>
					<div className="auth-form__forgot" >
						Quên mật khẩu
          			</div>
					<Button block type="primary" htmlType="submit" className="auth-form-button">
						Đăng nhập
          			</Button>
				</Form.Item>
				<Form.Item className="auth-form__item">
					<div className="auth-form__action">Đăng ký!</div>
				</Form.Item>
			</Form>
		</div>
		</div>
	);
};

export default SigninView;
