import React from "react";
import { Table } from 'antd';
import { useQuery, useSubscription } from '@apollo/react-hooks';
import { CHECK_INS } from "../../documents/query";
import { FINGERPRINTIN } from "../../documents/subscription";

const PlayGroud = () => {
	const { loading, error, data } = useSubscription(FINGERPRINTIN, {
		onSubscriptionData: (data) => {
			console.log('xxxxx');
			console.log(data);
		}
	});

	// const { loading, error, data } = useQuery(CHECK_INS);
	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;
	return (
		<div>
			<p>
				{loading ? 'Loading...' : data.fingerPrintIn}
			</p>
			{/* <Table
				columns={[
					{
						title: 'Tên',
						dataIndex: 'user.name',
					},
					{
						title: 'Tuổi',
						dataIndex: 'user.age',
					},
					{
						title: 'Phụ huynh',
						dataIndex: 'user.parent',
					},
					{
						title: 'Điện thoại phụ huynh',
						dataIndex: 'user.tel',
					},
					{
						title: 'Trạng Thái',
						dataIndex: 'status',
					},
					{
						title: 'Giờ vào',
						dataIndex: 'timeIn',
					},
					{
						title: 'Giờ ra',
						dataIndex: 'timeOut',
					}
				]}
				dataSource={data.checkIns} /> */}
		</div>
	)
}

export default PlayGroud;