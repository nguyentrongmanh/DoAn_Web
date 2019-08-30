import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { USER } from "../../documents/query";
import { Table } from 'antd';
import './../../styles/home/detail.css';

const Detail = () => {
    const { loading, error, data } = useQuery( USER, {variables :{ id:'5d68da3fc8785b0e70a8cc66' } });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data);
	return (
		<div>
            <div className = 'box'>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                <div style = {{width:"400px",height:'43px'}} container className='container'>
                    <div className='title' component="span" bgcolor="background.paper">
							<div className='label'>Họ và tên:  {data.user.name}</div>
                    </div>
                    
                </div>
                <div style = {{width:"400px",height:'43px'}} container className='container'>
                    <div className='title' component="span" bgcolor="background.paper">
							<div className='label'>Tuổi:  {data.user.age}</div>
					</div>
                    
                </div>
                <div style = {{width:"400px",height:'43px'}} container className='container'>
                    <div className='title' component="span" bgcolor="background.paper">
							<div className='label'>Địa chỉ:  {data.user.address}</div>
                    </div>
                    
                </div>
                <div style = {{width:"400px",height:'43px'}} container className='container'>
                    <div className='title' component="span" bgcolor="background.paper">
							<div className='label'>Phụ Huynh :  {data.user.status} </div>
                    </div>
                    
                </div>
                <div style = {{width:"400px",height:'43px'}} container className='container'>
                    <div className='title' component="span" bgcolor="background.paper">
							<div className='label'>Điện Thoại:  {data.user.Table}</div>
                    </div>
                </div>
                <div style = {{width:"400px",height:'43px'}} container className='container'>
                    <div className='title' component="span"  bgcolor="background.paper">
							<div className='label'>status:  {data.user.status}  </div>
                    </div>
                </div>
                </div>
            </div>
            <Table
				columns={[
					{
						title: 'timeIn',
						dataIndex: 'timeIn',
					},
					{
						title: 'timeOut',
						dataIndex: 'timeOut',
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