import React from "react";
import { Table, Tag, Button, Icon } from 'antd';
import { Link } from "react-router-dom";

const PlayGroud = ({ users }) => {
	return (
		<div>
			<div style={{ marginTop: "25px" }}>
				<Button type="primary" style={{ minWidth: "175px", margin: "10px" }}>
					<Link to="/parent">Danh sách phụ huynh</Link>
				</Button>
				<Button type="primary" style={{ minWidth: "175px", margin: "10px" }}>
					<Link to="/children">Danh sách trẻ</Link>
				</Button>
			</div>
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
						title: 'Thẻ/Vân Tay',
						dataIndex: 'checkInType',
						render: checkInType => {
							if (checkInType === "card") {
								return (<Tag color="geekblue">Thẻ từ</Tag>)
							}
							if (checkInType === "fingerPrint") {
								return (<Tag color="purple">Vân Tay</Tag>)
							}
						}
					},
					{
						title: 'Giờ vào',
						dataIndex: 'timeIn',
						render: timeIn => (<div>
							<Icon type="clock-circle-o" style={{ fontSize: '16px', color: "green", marginRight: "5px" }} />
							{timeIn}
						</div>)
					}
				]}
				dataSource={users} />
		</div >
	)
}

export default PlayGroud;