import React from "react";
import { Table, Tag, Button, Icon } from 'antd';
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import { OPEN_DOOR, CLOSE_DOOR } from "../../documents/mutation";

const ButtonGroup = Button.Group;

const PlayGroud = ({ users }) => {
	const [openDoor] = useMutation(OPEN_DOOR);
	const [closeDoor] = useMutation(CLOSE_DOOR);
	return (
		<div>
			<ButtonGroup style={{ width: "100%", margin: "20px" }}>
				<Button onClick={() => openDoor()} type="primary" style={{ background: "#44dbab", minWidth: "140px" }}>
					<Icon type="up" />
					Mở cửa
				</Button>
				<Button onClick={() => closeDoor()} type="danger" style={{ minWidth: "140px" }}>
					Đóng cửa
       				<Icon type="down" />
				</Button>
			</ButtonGroup>
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
			<div style={{ marginTop: "25px" }}>
				<Button type="primary" style={{ minWidth: "175px", margin: "10px" }}>
					<Link to="/parent">Danh sách phụ huynh</Link>
				</Button>
				<Button type="primary" style={{ minWidth: "175px", margin: "10px" }}>
					<Link to="/children">Danh sách trẻ</Link>
				</Button>
			</div>

		</div >
	)
}

export default PlayGroud;