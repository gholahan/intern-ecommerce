import {checkoutApi} from './checkoutApi'

export const verifyPayment = async (reference: string) => {
  const res = await checkoutApi.get(`/api/verify-payment?reference=${reference}`);
  return res.data;
};
