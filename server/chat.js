module.exports = async function askHR(question) {
  question = question.toLowerCase();

  if (question.includes("pto") || question.includes("vacation")) {
    return "Full-time employees earn 15 days of PTO per year. Submit requests in Workday.";
  }

  if (question.includes("benefits")) {
    return "You can view all benefits in the HR portal under 'Benefits & Enrollment'.";
  }

  if (question.includes("payroll")) {
    return "Payroll is processed bi-weekly on Fridays.";
  }

  return "I'm not sure, but our HR team will get back to you within 24 hours!";
};
