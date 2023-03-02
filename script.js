const ctx = document.getElementById("chart");

const timeSteps = [
  0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12,
  0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.2, 0.21, 0.21955, 0.22802, 0.2357,
  0.24282, 0.24952, 0.25957, 0.27071, 0.28157, 0.29237, 0.30326, 0.3144,
  0.32598, 0.33826, 0.35163, 0.36681, 0.38515, 0.41138, 0.45072, 0.48135,
  0.49622, 0.50847, 0.51941, 0.52955, 0.53918, 0.54847, 0.55755, 0.56637,
  0.57501, 0.58355, 0.59211, 0.60079, 0.60973, 0.61939, 0.63018, 0.64287,
  0.65955, 0.68456, 0.72209, 0.73733, 0.74972, 0.76087, 0.77134, 0.78146,
  0.79144, 0.80147, 0.81171, 0.82241, 0.83384, 0.84643, 0.86097, 0.87874,
  0.90391, 0.94166, 0.9751, 0.99386, 1.0104, 1.0257, 1.0405, 1.0552, 1.0702,
  1.086, 1.1032, 1.1232, 1.1512, 1.1932, 1.2432, 1.2679, 1.2901, 1.3117, 1.3346,
  1.3608, 1.3957, 1.4457, 1.4957, 1.5457, 1.5957, 1.6366, 1.6836, 1.7336,
  1.7836, 1.8336, 1.8836, 1.9336, 1.9836, 2.0336, 2.0836, 2.1336, 2.1836,
  2.2336, 2.2836, 2.3336, 2.3836, 2.4336, 2.4836, 2.5336, 2.5836, 2.6336,
  2.6836, 2.7336, 2.7836, 2.8336, 2.8836, 2.9336, 2.9836, 3.0336, 3.0836,
  3.1336, 3.1836, 3.2336, 3.2836, 3.3336, 3.3836, 3.4336, 3.4836, 3.5336,
  3.5836, 3.6336, 3.6836, 3.7336, 3.7373, 3.8053, 3.8835, 3.9767, 4.0866,
  4.2547, 4.5847, 5.018, 5.518, 6.018, 6.518, 6.8715, 7.3715, 7.8509, 8.2538,
  8.6418, 9.1343, 9.4627, 9.8533, 10.353, 10.853, 11.353, 11.733, 12.215,
  12.597, 13.097, 13.491, 13.854, 14.354, 14.697, 15.197, 15.66, 16.064,
];

const altitude = [
  0, 0, 0, 0, 0, 2.4e-5, 3.85e-4, 0.0016608, 0.0044321, 0.0092998, 0.016972,
  0.028255, 0.043963, 0.064916, 0.091996, 0.12616, 0.16841, 0.21971, 0.28111,
  0.3537, 0.43853, 0.5365, 0.64287, 0.74798, 0.85198, 0.95506, 1.0574, 1.2189,
  1.4068, 1.5967, 1.7913, 1.9928, 2.2039, 2.4285, 2.6722, 2.9439, 3.26, 3.6521,
  4.2308, 5.1358, 5.8695, 6.2347, 6.5396, 6.8151, 7.0734, 7.3208, 7.5617,
  7.7994, 8.0321, 8.2619, 8.4912, 8.7227, 8.9593, 9.205, 9.473, 9.7749, 10.134,
  10.612, 11.338, 12.431, 12.872, 13.229, 13.548, 13.847, 14.134, 14.416,
  14.699, 14.986, 15.284, 15.601, 15.949, 16.348, 16.833, 17.512, 18.517,
  19.392, 19.878, 20.302, 20.692, 21.065, 21.434, 21.809, 22.199, 22.621,
  23.108, 23.781, 24.775, 25.93, 26.49, 26.987, 27.467, 27.967, 28.535, 29.278,
  30.319, 31.332, 32.317, 33.275, 34.038, 34.892, 35.774, 36.629, 37.458, 38.26,
  39.035, 39.784, 40.507, 41.204, 41.875, 42.521, 43.14, 43.734, 44.302, 44.845,
  45.362, 45.854, 46.32, 46.761, 47.177, 47.568, 47.934, 48.274, 48.591, 48.882,
  49.149, 49.391, 49.608, 49.801, 49.97, 50.114, 50.234, 50.33, 50.402, 50.45,
  50.475, 50.475, 50.451, 50.402, 50.33, 50.234, 50.113, 50.104, 49.912, 49.672,
  49.36, 48.965, 48.318, 46.962, 45.162, 43.07, 40.998, 38.904, 37.424, 35.328,
  33.346, 31.677, 30.057, 27.993, 26.61, 24.995, 22.924, 20.83, 18.769, 17.204,
  15.214, 13.638, 11.577, 9.9486, 8.4314, 6.3375, 4.8989, 2.8058, 0.89009,
];

new Chart(ctx, {
  type: "line",
  data: {
    labels: timeSteps,
    datasets: [
      {
        label: "Altitude",
        data: altitude,
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  },
});
