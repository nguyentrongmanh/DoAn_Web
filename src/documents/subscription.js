import gql from 'graphql-tag';

export const FINGERPRINTIN = gql`
	subscription Fingerprintin {
    fingerPrintIn {
		id
		name
		age
		address
		tel
		role
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

export const ADDFINPRISTA = gql`
	subscription AddFinPriSta {
    addFinPriSta
  }
`