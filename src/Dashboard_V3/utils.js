export function getTimestampByRangeTab(type) {
  const today = new Date();
  let startTime, endTime;

  switch (type) {
    case "today":
      startTime = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        0,
        0,
        0,
        0
      );
      endTime = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        23,
        59,
        59,
        999
      );
      break;

    case "week":
      const weekStartDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 6
      );
      startTime = new Date(
        weekStartDate.getFullYear(),
        weekStartDate.getMonth(),
        weekStartDate.getDate(),
        0,
        0,
        0,
        0
      );
      endTime = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        23,
        59,
        59,
        999
      );
      break;

    case "month":
      const monthStartDate = new Date(
        today.getFullYear(),
        today.getMonth() - 1,
        today.getDate()
      );
      startTime = new Date(
        monthStartDate.getFullYear(),
        monthStartDate.getMonth(),
        monthStartDate.getDate(),
        0,
        0,
        0,
        0
      );
      endTime = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        23,
        59,
        59,
        999
      );
      break;

    default:
      throw new Error(
        "Invalid date range type. Supported values are: today, week, month."
      );
  }

  return {
    startTime,
    endTime,
  };
}

// function formatDate(date) {
//   const options = {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//   };
//   return new Intl.DateTimeFormat("en-US", options).format(date);
// }

// export const getTimestampByRangeTab = (tabValue) => {
//   if (tabValue === "week") {
//     const currentDate = new Date();
//     const oneWeekAgo = new Date(
//       currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
//     );
//     return Math.floor(oneWeekAgo.getTime() / 1000);
//   } else if (tabValue === "month") {
//     const currentDate = new Date();
//     const oneMonthAgo = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth() - 1,
//       currentDate.getDate()
//     );
//     return Math.floor(oneMonthAgo.getTime() / 1000);
//   }
// };

// export function getTimestampByRangeTab(type) {
//   const today = new Date();
//   let startTime, endTime;

//   switch (type) {
//     case "today":
//       startTime = new Date(
//         today.getFullYear(),
//         today.getMonth(),
//         today.getDate(),
//         0,
//         0,
//         0,
//         0
//       );
//       endTime = new Date(
//         today.getFullYear(),
//         today.getMonth(),
//         today.getDate(),
//         23,
//         59,
//         59,
//         999
//       );
//       break;

//     case "week":
//       const firstDayOfWeek = new Date(
//         today.getFullYear(),
//         today.getMonth(),
//         today.getDate() - today.getDay()
//       );
//       startTime = new Date(
//         firstDayOfWeek.getFullYear(),
//         firstDayOfWeek.getMonth(),
//         firstDayOfWeek.getDate(),
//         0,
//         0,
//         0,
//         0
//       );
//       endTime = new Date(
//         today.getFullYear(),
//         today.getMonth(),
//         today.getDate(),
//         23,
//         59,
//         59,
//         999
//       );
//       break;

//     case "month":
//       const firstDayOfMonth = new Date(
//         today.getFullYear(),
//         today.getMonth(),
//         1
//       );
//       const lastDayOfMonth = new Date(
//         today.getFullYear(),
//         today.getMonth() + 1,
//         0
//       );
//       startTime = new Date(
//         firstDayOfMonth.getFullYear(),
//         firstDayOfMonth.getMonth(),
//         firstDayOfMonth.getDate(),
//         0,
//         0,
//         0,
//         0
//       );
//       endTime = new Date(
//         lastDayOfMonth.getFullYear(),
//         lastDayOfMonth.getMonth(),
//         lastDayOfMonth.getDate(),
//         23,
//         59,
//         59,
//         999
//       );
//       break;

//     default:
//       throw new Error(
//         "Invalid date range type. Supported values are: today, week, month."
//       );
//   }

//   return {
//     startTime,
//     endTime,
//   };
// }
