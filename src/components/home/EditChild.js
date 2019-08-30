import React, { useState } from "react";
import { Modal, Form, Input, Select } from "antd";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation, useQuery } from '@apollo/react-hooks';
import { EDIT_USER } from "../../documents/mutation";
import { USER } from "../../documents/query";

const { Option } = Select;

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

const EditChild = ({ id, open, toggle, parentList }) => {
	const [openParentSelector, setOpenParentSelector] = useState(true);
	// const [childrenOrParent, setChildrenOrParent] = useState(false)
	const [editUser] = useMutation(EDIT_USER);
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
								title="Thay Đổi Thông Tin Thành Viên"
								visible={open}
								onCancel={() => toggle(false)}
								onOk={() => handleSubmit()}
							>
								<Form  {...formItemLayout}>
									<Form.Item
										required={true}
										label="Tên"
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
									{/* <Form.Item
										required={true}
										label="Phụ huynh/Trẻ"
									>
										<Select
											showSearch
											placeholder="Select role"
											optionFilterProp="children"
											onChange={(e) => {
												setFieldValue("role", e)
											}}
											onBlur={handleBlur}
											style={{ width: "100%" }}
											name="role"
											value={values.role}
										>
											<Option value="parent" onClick = {() => setOpenParentSelector(false)}>Phụ Huynh</Option>
											<Option value="child" onClick = {() => setOpenParentSelector(true)}>Trẻ</Option>
										</Select>
										</Form.Item> */}
									{
										openParentSelector ? <Form.Item
											required={true}
											label="Tên phụ huynh"
										>
											<Select
												showSearch
												placeholder="Parent"
												optionFilterProp="children"
												onChange={(e) => {
													setFieldValue("parentId", e)
												}}
												onBlur={handleBlur}
												style={{ width: "100%" }}
												name="parentId"
												value={values.parentId}
											>
												{
													parentList.map(parent => (
														<Option value={parent.id}>{parent.name}</Option>
													))
												}
											</Select>
										</Form.Item> : null
									}



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