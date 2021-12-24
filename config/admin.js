module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aa6ec8385c133f92fa6c0724347e67f0'),
  },
});
