import gql from 'graphql-tag';

export const USERS = gql`
	{
		users{
			id
			name
			age
			address
			tel
			role
			checkInType
			checkOutType
			fingerprint
			timeIn
			parent{
				name
				age 
				status
			}
			childrens{
				name
				age
				status
			}
			status
			checkIns{
				id
				timeIn
				timeOut
				checkInType
				checkOutType
			}
		}
	}
`

export const USER = gql`
	query User($id: ID!) {
		user(id: $id) {
			id
			name
			age
			address
			tel
			checkInType
			checkOutType
			status
			checkIns{
				id
				timeIn
				timeOut
				checkInType
				checkOutType
			}
			role
			parent{
				name
				age 
				status
			}
			childrens{
				name
				age
				status
			}
		}
	}
`

export const CHECK_INS = gql`
	{
		checkIns{
			timeIn
			timeOut
			status
			checkInType
			checkOutType
			user{
				id
				name
				age
				address
				tel
				status
			}
		}
	}
`

// export const getCheckInByUserId = gql`

// `