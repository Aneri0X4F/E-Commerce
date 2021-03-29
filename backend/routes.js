const express = require('express');
const router = express.Router();
const productList = require('./utils/productList')
const employeeList = require('./utils/employeeList');
const buyerList = require('./utils/buyerList');
const getBuyer = require('./utils/getBuyer');
const sellerList = require('./utils/sellerList');
const getEmployee = require('./utils/getEmployee');
const addBuyer = require('./utils/addBuyer');
const getProductCategory = require('./utils/getProdCategory');
const getProductSubCategory = require('./utils/getProdSubCategory');
const getProductBrand = require('./utils/getProdBrand');
const shippingList = require('./utils/shippingList')
const getShippingDetail = require('./utils/getShippingDetail');
const pendingShipping = require('./utils/pendingShipping');
const successfulShipping = require('./utils/successfulShipping');
const transactionList = require('./utils/transactionList')
const getTransaction = require('./utils/getTransaction');
const pendingTransaction = require('./utils/pendingTransaction');
const successfulTransaction = require('./utils/successfulTransaction');
const cartList = require('./utils/getCartDetail');
const getCartDetail = require('./utils/getCartDetail');
const sellerList = require('./utils/sellerList');
const getSeller = require('./utils/getSeller');
const addSeller = require('./utils/addSeller');
const deleteSeller = require('./utils/deleteSeller');
const updateSeller = require('./utils/updateSeller');

router.get('/', (req, res) => {res.send('Server Running')});

//EMPLOYEE APIs
router.get('/employeeList', employeeList.employeeList);
router.get('/getEmployee', getEmployee.getEmployee);

//PRODUCT APIs
router.get('/productlist', productList.productList);
router.get('/getProductCategory', getProductCategory);
router.get('/getProductSubCategory', getProductSubCategory);
router.get('/getProductBrand', getProductBrand);

//BUYER APIs
router.get('/buyerList', buyerList.buyerList);
router.get('/getBuyer', getBuyer.getBuyer);
router.post('/addBuyer', addBuyer.addBuyer);

//SELLER APIs
router.get('/sellerList', sellerList.sellerList);

//SHIPPING APIs
router.get('/shippingList', shippingList.shippingList);
router.get('/getShippingDetail', getShippingDetail.getShippingDetail);
router.get('/successfulShipping', successfulShipping.successfulShipping);
router.get('/pendingShipping', pendingShipping.pendingShipping);

//TRANSACTION APIs
router.get('/transactionList', transactionList.transactionList);
router.get('/getTransaction', getTransaction.getTransaction);
router.get('/successfulTransaction', successfulTransaction.successfulTransaction);
router.get('/pendingTransaction', pendingTransaction.pendingTransaction);

//CART APIs
router.get('/cartList', cartList.cartList);
router.get('/getCartDetail', getCartDetail.getCartDetail);

//SELLER APIs
router.get('/sellerList', sellerList.sellerList);
router.get('/getSeller', getSeller.getSeller);
router.post('/addSeller', addSeller.addSeller);
router.get('/deleteSeller', deleteSeller.deleteSeller);
router.post('/updateSeller', updateSeller.updateSeller)

module.exports = router;