import config from './config';

let stripeSecretKey;

if (process.env.NODE_ENV === 'production') {
  stripeSecretKey = config.stripe.live.secretKey;
} else {
  stripeSecretKey = config.stripe.test.secretKey;
}

const stripe = require('../packages/stripe-node')(stripeSecretKey);

export default stripe;
