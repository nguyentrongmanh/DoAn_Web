import React from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from "react-router-dom"

const SigninView = () => {
	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
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
						<Link to="/login" className="auth-form__forgot" >
							Quên mật khẩu
          				</ Link>
						<Button block type="primary" htmlType="submit" className="auth-form-button">
							Đăng nhập
          				</Button>
					</Form.Item>
					<Form.Item className="auth-form__item">
						<Link to="/register" className="auth-form__action">Đăng ký!</Link>
					</Form.Item>
				</Form>
			</div>
		</div >
	);
};

export default SigninView;
