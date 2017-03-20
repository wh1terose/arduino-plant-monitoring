module.exports = {
  TEMP_MIN_LIMIT    : 20,
  TEMP_MAX_LIMIT    : 30,
  HUMIDITY_MIN_LIMIT: 40,
  HUMIDITY_MAX_LIMIT: 70,
  EMAIL_FREQ        : 60 * 1000, // 1min
  EMAIL_SERVICE     : 'gmail',
  MEASUREMENT_FREQ  : 1000 // 1sec
};

/**
 * * Temp * *
 * Veg: 20-30C
 * Flower: 18-26C
 *
 * * Humidity * *
 * Veg: 40-70%
 * Flower: 40-50%
 * Final weeks: < 40%
 */
