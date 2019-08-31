import React from "react";
import { useQuery, useSubscription } from '@apollo/react-hooks';
import { USERS } from "./documents/query";
import { FINGERPRINTIN, RFIDIN } from "./documents/subscription";
import Routers from "./Routers";
import { notification } from "antd";

const WithFingerPrintCheck = ({ users }) => {
	const userCheckInList = [];
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
			if (user.status === "in") {
				notification.success({
					message: user.name + " đã vào"
				})
			} else {
				notification.warning({
					message: user.name + " đã ra"
				})
			}
		}
	});
	users.map(user => {
		if (user.status === "in") {
			userCheckInList.push(user);
		}
		return user;
	});
	return (
		<Routers users={userCheckInList}></Routers>
	)
}

const WithCardCheck = ({ users }) => {
	const userCheckInList = [];
	useSubscription(RFIDIN, {
		onSubscriptionData: (data) => {
			const user_rf = data.subscriptionData.data.rfidIn;
			console.log(user_rf);
			if (user_rf.id == null) {
				notification.error({
					message: "Thẻ chưa được đăng ký"
				})
			} else {
				users.map(entity => {
					if (entity.id === user_rf.id) {
						return user_rf;
					}
					return entity;
				});

				if (user_rf.status === "in") {
					notification.success({
						message: user_rf.name + " đã vào"
					})
				} else {
					notification.warning({
						message: user_rf.name + " đã ra"
					})
				}
			}
		}
	});

	users.map(user => {
		if (user.status === "in") {
			userCheckInList.push(user);
		}
		return user;
	});
	return (
		<WithFingerPrintCheck users={userCheckInList}></WithFingerPrintCheck>
	)
}

const WithSubscription = () => {
	const { loading, error, data } = useQuery(USERS);
	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;
	return (data.users ? (<WithCardCheck users={data.users}></WithCardCheck>) : null)
}

export default WithSubscription;
