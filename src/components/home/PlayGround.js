import React from "react";
import { Table } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { CHECK_INS } from "../../documents/query";

const PlayGroud = () => {
	const { loading, error, data } = useQuery(CHECK_INS);
	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;
	return (
		<div>
			<Table
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
				dataSource={data.checkIns} />
		</div>
	)
}

export default PlayGroud;