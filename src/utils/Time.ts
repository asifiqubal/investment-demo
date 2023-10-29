export const daysLeftUntil = (targetDate: Date) => {
  const currentDate = new Date();
  const targetDateTime = new Date(targetDate).getTime();
  const currentDateTime = currentDate.getTime();
  const timeDifference = targetDateTime - currentDateTime;
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Calculate days

  return daysLeft;
};
