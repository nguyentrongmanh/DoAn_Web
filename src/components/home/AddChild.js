import React, { useState } from "react";
import { Modal, Form, Button, Input, Select } from "antd";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from "../../documents/mutation";
import { USERS } from "../../documents/query";

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

const AddChild = ({ parentList }) => {
	const [openModal, setOpenModal] = useState(false);
	const [addUser] = useMutation(ADD_USER,
		{
			update(cache, { data }) {
				const { users } = cache.readQuery({ query: USERS });
				cache.writeQuery({
					query: USERS,
					data: { users: users.concat([data.addUser]) },
				});
			}
		}
	);

	return (
		<div>
			<Button onClick={() => setOpenModal(true)}>Thêm mới</Button>
			<Formik
				validationSchema={formValidateSchema}
				initialValues={{
					name: "",
					age: 0,
					address: "",
					tel: "",
					role: "child",
					parentId: ""
				}}
				onSubmit={({ ...data }) => {
					addUser({ variables: { data: { ...data } } });
					setOpenModal(false);
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
								title="THÊM TRẺ"
								visible={openModal}
								onCancel={() => setOpenModal(false)}
								onOk={() => handleSubmit()}
							>
								<Form  {...formItemLayout}>
									<Form.Item
										required={true}
										label="Tên"
									>
										<Input
											placeholder="Nhập tên"
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
											<Option value="parent">Phụ Huynh</Option>
											<Option value="child">Trẻ</Option>
										</Select>
									</Form.Item>
									<Form.Item
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

export default AddChild