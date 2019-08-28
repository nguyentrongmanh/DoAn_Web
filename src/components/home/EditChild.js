import React from "react";
import { Modal, Form, Input } from "antd";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation, useQuery } from '@apollo/react-hooks';
import { EDIT_USER } from "../../documents/mutation";
import { USER } from "../../documents/query";

const formValidateSchema = Yup.object().shape({
	name: Yup.string()
		.required("không được để trống")
});

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		md: { span: 6 },
	},
	wrapperCol: {
		xs: { span: 24 },
		md: { span: 18 },
	},
};

const EditChild = ({ id, open, toggle }) => {
	const [editUser] = useMutation(EDIT_USER);

	console.log(id);

	const { loading, error, data } = useQuery(USER, {
		variables: { id: id },
	});
	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	const user = data.user;
	return (
		<div>
			<Formik
				validationSchema={formValidateSchema}
				initialValues={{
					name: user.name ? user.name : "",
					age: user.age ? user.age : 0,
					address: user.address ? user.address : "",
					tel: user.tel ? user.tel : "",
					role: user.role ? user.role : ""
				}}
				onSubmit={({ ...data }) => {
					console.log(id);
					console.log({ ...data });
					editUser({ variables: { id: id, data: { ...data } } });
					toggle(false);
				}}
				render={
					({
						values,
						handleChange,
						handleBlur,
						handleSubmit,
						errors,
						touched,
						setFieldValue
					}) => {
						return (
							<Modal
								title="Thay Đổi Thông Tin Trẻ"
								visible={open}
								onCancel={() => toggle(false)}
								onOk={() => handleSubmit()}
							>
								<Form  {...formItemLayout}>
									<Form.Item
										required={true}
										label="Tên trẻ"
									>
										<Input
											placeholder="Nhập tên trẻ"
											value={values.name}
											onChange={handleChange}
											onBlur={handleBlur}
											name="name"
										/>
									</Form.Item>
									<Form.Item
										required={true}
										label="Tuổi"
									>
										<Input
											placeholder="Nhập tuổi của trẻ"
											value={values.age}
											onChange={handleChange}
											onBlur={handleBlur}
											name="age"
											type="number"
										/>
									</Form.Item>
									<Form.Item
										required={true}
										label="Tên phụ huynh"
									>

									</Form.Item>
									<Form.Item
										label="Số điện thoại"
									>
										<Input
											placeholder="số điện thoại phụ huynh"
											value={values.tel}
											onChange={handleChange}
											onBlur={handleBlur}
											name="tel"
										/>
									</Form.Item>
									<Form.Item
										label="Địa chỉ"
									>
										<Input
											placeholder="Nhập địa chỉ"
											value={values.address}
											onChange={handleChange}
											onBlur={handleBlur}
											name="address"
										/>
									</Form.Item>
								</Form>
							</Modal>
						)
					}
				}
			>
			</Formik>

		</div>
	)
}

export default EditChild