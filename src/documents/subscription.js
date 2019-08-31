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
		checkInType
		checkOutType
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

export const ADDFINPRISTA = gql`
	subscription AddFinPriSta {
    addFinPriSta
  }
`

export const RFIDIN = gql`
	subscription Rfidin {
    rfidIn {
		id
		name
		age
		address
		tel
		role
		timeIn
		checkInType
		checkOutType
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