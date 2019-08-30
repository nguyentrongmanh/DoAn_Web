import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import facephoto from "./1.jpg";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import { useQuery } from '@apollo/react-hooks';
import { CHECK_INS, USER } from "../../documents/query";
import { Table } from 'antd';
import './../../styles/home/detail.css';

const Detail = () => {
    // const { loading, error, data } = useQuery(CHECK_INS);    
    const { loading, error, data } = useQuery( USER, {variables :{ id:'5d655a7583829e0b240a0afb' } });
    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data);
    const checkIn = [];
	checkIn.push(data.user.checkIns);
	return (
		<Card>
            <Box className = 'box'> 
                        <Avatar
                            style = {{width:'200px', height:'200px'}}
                            alt="facephoto"
                            src={facephoto}
                            className='avatar'
                        />
                <Box style={{display:'flex',flexWrap:'wrap'}}>
                <Grid style = {{width:"400px",height:'43px'}} container className='container'>
                    <Box className='title' component="span" display="block" p={1} bgcolor="background.paper">
							<Box className='label'>Họ và tên: </Box>
                    </Box>
                    <Box component="span" display="block" p={1} bgcolor="background.paper">
							<Box>{data.user.name}</Box>
					</Box>
                </Grid>
                <Grid style = {{width:"400px",height:'43px'}} container className='container'>
                    <Box className='title' component="span" display="block" p={1} bgcolor="background.paper">
							<Box className='label'>Tuổi: </Box>
					</Box>
                    <Box component="span" display="block"p={1} bgcolor="background.paper">
                    {data.user.age}
                    </Box>
                </Grid>
                <Grid style = {{width:"400px",height:'43px'}} container className='container'>
                    <Box className='title' component="span" display="block"p={1} bgcolor="background.paper">
							<Box className='label'>Địa chỉ: </Box>
                    </Box>
                    <Box component="span" display="block"p={1} bgcolor="background.paper">
                    {data.user.address}
                    </Box>
                </Grid>
                <Grid style = {{width:"400px",height:'43px'}} container className='container'>
                    <Box className='title' component="span" display="block"p={1} bgcolor="background.paper">
							<Box className='label'>Phụ Huynh : </Box>
                    </Box>
                    <Box component="span" display="block"p={1} bgcolor="background.paper">
                    {data.user.status}
                    </Box>
                </Grid>
                <Grid style = {{width:"400px",height:'43px'}} container className='container'>
                    <Box className='title' component="span" display="block"p={1} bgcolor="background.paper">
							<Box className='label'>Điện Thoại: </Box>
                    </Box>
                    <Box component="span" display="block"p={1} bgcolor="background.paper">
                    {data.user.Table}
                    </Box>
                </Grid>
                <Grid style = {{width:"400px",height:'43px'}} container className='container'>
                    <Box className='title' component="span" display="block" p={1} bgcolor="background.paper">
							<Box className='label'>status:  </Box>
                    </Box>
                    <Box component="span" display="block" p={1} bgcolor="background.paper">
							<Box>{data.user.status}</Box>
					</Box>
                </Grid>
                </Box>
            </Box>
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
				 dataSource={checkIn} />
		</Card>
	);
};

export default Detail;