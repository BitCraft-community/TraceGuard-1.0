import api from '../api/axios';

export const authService = {
  // Step 1: Login or Register request (triggers backend controller & OTP email)
  login: async (credentials) => {
    return await api.post('/auth/login', credentials);
  },

  register: async (userData) => {
    return await api.post('/auth/register', userData);
  },

  // Step 2: Verify OTP and finalize session token
  verifyOtp: async (otpData) => {
    return await api.post('/auth/verify-otp', otpData);
  }
};