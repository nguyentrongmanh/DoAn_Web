import React from "react";
import { Form, Icon, Input, Button } from 'antd';
import { Link } from "react-router-dom"

const SignUpView = () => {
	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>

			<div className="auth-container">
				<div className="auth-header">
					<div className="auth-header__title">Đăng ký tài khoản</div>
				</div>
				<div className="auth-content">
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
							<Input
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder="Confirm Password"
								name="confirmPassword"
							/>
						</Form.Item >
						<Form.Item className="auth-form__item">
							<Input
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="fullName"
								name="fullName"
							/>
						</Form.Item>
						<div className="auth-form__action">
							<Button block type="primary" htmlType="submit" className="auth-form-button">
								Register
							</Button>
							<Link to="/login" className="auth-form__action">Về trang login</Link>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default SignUpView;
