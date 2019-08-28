import React, { useState } from "react";
import AddChild from "./AddChild";
import EditChild from "./EditChild";
import { Table, Button } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { USERS } from "../../documents/query";


const Children = () => {
	const { loading, error, data } = useQuery(USERS);
	const [userId, setUserId] = useState("1");
	const [isEdit, setIsEdit] = useState(false);
	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	const parentList = [];
	data.users.map(user => {
		if (user.role === "parent") {
			parentList.push(user);
		}
	});

	return (
		<div>
			<EditChild id={userId} open={isEdit} toggle={setIsEdit} ></EditChild>
			<AddChild parentList={parentList}></AddChild>
			<Table
				columns={[
					{
						title: 'Tên',
						dataIndex: 'name',
					},
					{
						title: 'Tuổi',
						dataIndex: 'age',
					},
					{
						title: 'Địa chỉ',
						dataIndex: 'address',
					},
					{
						title: 'phụ huynh',
						dataIndex: 'parent.name',
					},
					{
						title: 'Điện thoại phụ huynh',
						dataIndex: 'tel',
					},
					{
						title: 'Action',
						key: 'operation',
						fixed: 'right',
						width: 100,
						render: (text, record) => (<div>
							<Button onClick={() => {
								setUserId(record.id);
								setIsEdit(true);
							}}>Sửa</Button>
							<Button>Xóa</Button>
						</div>)
					},
				]}
				dataSource={data.users} />
		</div>
	)
}

export default Children;