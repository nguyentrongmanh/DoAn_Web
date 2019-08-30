import React from "react";
import { Table, Tag } from 'antd';
import { useQuery, useSubscription } from '@apollo/react-hooks';
import { USERS } from "../../documents/query";
import { FINGERPRINTIN } from "../../documents/subscription"

const PlayGroud = ({ users }) => {
	const inUserList = [];
	useSubscription(FINGERPRINTIN, {
		onSubscriptionData: (data) => {
			const user = data.subscriptionData.data.fingerPrintIn;
			console.log(user);
			users.map(entity => {
				if (entity.id === user.id) {
					return user;
				}
				return entity;
			});
			console.log(users);
		}
	});

	users.map(user => {
		if (user.status === "in") {
			inUserList.push(user);
		}
	});


	return (
		<div>
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
						title: 'Điện thoại',
						dataIndex: 'tel',
					},
					{
						title: 'Phụ huynh/Trẻ',
						dataIndex: 'role'
					},
					{
						title: 'Giờ vào',
						dataIndex: 'timeIn',
						render: timeIn => (<Tag color="green">
							{timeIn}
						</Tag>)
					}
				]}
				dataSource={inUserList} />
		</div>
	)
}

const RealTimePlayGroud = () => {
	const { loading, error, data } = useQuery(USERS);
	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;
	return (data.users ? (<PlayGroud users={data.users}></PlayGroud>) : null)
}

export default RealTimePlayGroud;