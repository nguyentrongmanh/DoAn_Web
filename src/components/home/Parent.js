import React, { useState } from "react";
import AddChild from "./AddChild";
import EditChild from "./EditChild";
import { Table, Button, Tag } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { USERS } from "../../documents/query";
import { Link } from "react-router-dom";

const Parent = () => {
	const { loading, error, data } = useQuery(USERS);
	const [userId, setUserId] = useState("");
	const [isEdit, setIsEdit] = useState(false);
	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;
	const parentList = [];
	data.users.map(user => {
		if (user.role === "parent") {
			parentList.push(user);
		}

		return user;
	});
	let newFinPriId = 1;
	for (let i = 1; i < 126; i++) {
		let exsis = data.users.some(user => parseInt(user.fingerprint) === i);
		if (exsis) continue;
		newFinPriId = i;
		break;
	}
	return (
		<div>
			<h1 style={{ textAlign: "center", padding: "25px 0px" }}>DANH SÁCH PHỤ HUYNH</h1>
			<EditChild parentList={parentList} id={userId} open={isEdit} toggle={setIsEdit} ></EditChild>
			<AddChild parentList={parentList} newFinPriId={newFinPriId}></AddChild>
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
						title: 'Trẻ',
						dataIndex: 'childrens',
						render: childrens => (
							<span>
								{childrens.map(child => {
									return (<div>
										<Tag color="geekblue">
											{child.name.toUpperCase()}
										</Tag>
									</div>)
								})}
							</span>
						),
					},
					{
						title: 'Điện thoại',
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
							<Button><Link to={`/detail/${record.id}`}>Chi tiết</Link></Button>
						</div>)
					},
				]}
				dataSource={parentList} />
			<Button>
				<Link to="/play">Quay về trang chủ</Link>
			</Button>
		</div>
	)
}
export default Parent;