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
			status
			checkIns{
				id
				timeIn
				timeOut
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