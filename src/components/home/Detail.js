import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { USER } from "../../documents/query";
import { Table } from 'antd';
import './../../styles/home/detail.css';
import { Icon, Tag } from 'antd';

const Detail = ({ match }) => {
	const { loading, error, data } = useQuery(USER, { variables: { id: match.params.id } });
	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;
	console.log(data);
	return (
		<div>
			<div className='box'>
				<div style={{ display: 'flex', flexWrap: 'wrap' }}>
					<div style={{ width: "400px", height: '43px' }} container className='container'>
						<div className='title' component="span" bgcolor="background.paper">
							<div className='label'>Họ và tên:  {data.user.name}</div>
						</div>

					</div>
					<div style={{ width: "400px", height: '43px' }} container className='container'>
						<div className='title' component="span" bgcolor="background.paper">
							<div className='label'>Tuổi:  {data.user.age}</div>
						</div>

					</div>
					<div style={{ width: "400px", height: '43px' }} container className='container'>
						<div className='title' component="span" bgcolor="background.paper">
							<div className='label'>Địa chỉ:  {data.user.address}</div>
						</div>

					</div>
					{data.user.role == "child" ?
						(<div style={{ width: "400px", height: '43px' }} container className='container'>
							<div className='title' component="span" bgcolor="background.paper">
								<div className='label'>Phụ Huynh :  {data.user.parent.name} </div>
							</div>
						</div>) : (
							<div style={{ width: "400px", height: '43px' }} container className='container'>
								<div className='title' component="span" bgcolor="background.paper">
									<div className='label'>Trẻ :  {data.user.childrens.map(child => (
										<Tag>{child.name}</Tag>
									))} </div>
								</div>
							</div>
						)

					}
					<div style={{ width: "400px", height: '43px' }} container className='container'>
						<div className='title' component="span" bgcolor="background.paper">
							<div className='label'>Điện Thoại:  {data.user.Table}</div>
						</div>
					</div>
					<div style={{ width: "400px", height: '43px' }} container className='container'>
						<div className='title' component="span" bgcolor="background.paper">
							<div className='label'>status:  {data.user.status}  </div>
						</div>
					</div>
				</div>
			</div>
			<Table
				columns={[
					{
						title: 'giờ vào',
						dataIndex: 'timeIn',
						render: timeOut => (<div>
							<Icon type="clock-circle-o" style={{ fontSize: '16px', color: "green", marginRight: "5px" }} />
							{timeOut}
						</div>)
					},
					{
						title: 'thẻ/vânTay',
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
						title: 'giờ ra',
						dataIndex: 'timeOut',
						render: timeOut => (<div>
							<Icon type="clock-circle-o" style={{ fontSize: '16px', color: "orange", marginRight: "5px" }} />
							{timeOut}
						</div>)
					},
					{
						title: 'thẻ/vânTay',
						dataIndex: 'checkOutType',
						render: checkOutType => {
							if (checkOutType === "card") {
								return (<Tag color="geekblue">Thẻ từ</Tag>)
							}
							if (checkOutType === "fingerPrint") {
								return (<Tag color="purple">Vân Tay</Tag>)
							}
						}
					},
					{
						title: 'địa điểm',
						dataIndex: 'status',
					}
				]}
				dataSource={data.user.checkIns} />
		</div>
	);
};

export default Detail;