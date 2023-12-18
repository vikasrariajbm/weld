import React from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function CustomDateRange({
  customDateRange,
  setCustomDateRange,
  setShowCustomDateRange,
}) {
  const dateRange = [customDateRange.startDate, customDateRange.endDate];
  const { combine, allowedMaxDays, afterToday } = DateRangePicker;

  const handleDateRangeChange = (dates) => {
    if (Array.isArray(dates)) {
      setCustomDateRange({
        startDate: dates[0],
        endDate: dates[1],
      });
    }
    setShowCustomDateRange(false);
  };

  return (
    <React.Fragment>
      <DateRangePicker
        onChange={(date) => handleDateRangeChange(date)}
        value={dateRange}
        editable={false}
        shouldDisableDate={combine(allowedMaxDays(30), afterToday())}
        showOneCalendar
      />
    </React.Fragment>
  );
}
