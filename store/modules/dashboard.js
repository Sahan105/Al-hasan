const state = {
    title1: 'MY DASHBOARD',
    title2: 'Account Informations',
    title3: 'My Orders',
    title4: 'Order Informations',
    name: 'Siam Mahmud',
    email: 'siam@123.com',
    phone: '018325245',
    address: 'House: 99, Road: 9, Sector: 1, Uttara, Dhaka',
    dashboard_details: 'From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.',
    order_details: 'From your Orders you have the ability to view your all orders and status of order.',
    subtitle1: 'Contact Information',
    subtitle2: 'Address Details',
    subtitle3: 'Order List',
    orders: [
        {
            orderNo: 1,
            productName: 'Antique 1'
        },
        {
            orderNo: 2,
            productName: 'Bracelet 3'
        },
        {
            orderNo: 3,
            productName: 'Diamond Set 2'
        }
    ]
}

// getters
const getters = {
}

// mutations
const mutations = {
 
}

// actions
const actions = {
 
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
