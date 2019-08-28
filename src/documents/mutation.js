import gql from 'graphql-tag';

export const ADD_USER = gql`
  mutation AddUser($data: UserInput!) {
    addUser(data: $data) {
		id
		name
		age
		address
		tel
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
		status
		checkIns{
			id
			timeIn
			timeOut
		}
    }
  }
`;

export const EDIT_USER = gql`
  mutation EddUser($id: ID!, $data: UserInput!) {
    editUser(id: $id,data: $data) {
		id
		name
		age
		address
		tel
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
		status
		checkIns{
			id
			timeIn
			timeOut
		}
    }
  }
`;

export const ADD_CHECK_IN = gql`
  mutation AddCheckIn($data: CheckInInput!) {
    addCheckIn(data: $data) {
		timeIn
		timeOut 
		user{
			name
		}
    }
  }
`;