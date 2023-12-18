import React, { useEffect, useState } from "react";
import config from "../../config.json";
import Select from "react-select";
import CustomDateRange from "./customDateRange/Index";
import { getTimestampByRangeTab } from "../../utils";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "30px", // Adjust the height of the control
    borderRadius: "12px",
    maxHeight: "35px",
    border: state.isFocused ? "1px solid #00bcd4" : "1px solid #ced4da",
    boxShadow: state.isFocused ? "0 0 0 1px #00bcd4" : "none",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "4px", // Adjust the padding of the dropdown indicator
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    margin: "4px", // Adjust the margin of the indicator separator
  }),
};

export default function TimeRangeTabs({
  handleFilterOptionsChange,
  masterParamValue,
  defaultStartTime,
  defaultEndTime,
}) {
  const [selectedTab, setSelectedTab] = useState("today");
  const [timeRange, setTimeRange] = useState({
    startTime: defaultStartTime,
    endTime: defaultEndTime,
  });
  const [customDateRange, setCustomDateRange] = useState({
    startDate: new Date(defaultStartTime),
    endDate: new Date(defaultEndTime),
  });

  const [selectedMasterValue, setSelectedMasterValue] = useState({
    label: "A",
    value: 76768,
  });
  const [showCustomDateRange, setShowCustomDateRange] = useState(false);

  function handleTabChange(tabOption) {
    setSelectedTab(tabOption);
    if (tabOption === "custom") {
      setShowCustomDateRange(true);
      setTimeRange({
        startTime: customDateRange.startDate,
        endTime: customDateRange.endDate,
      });
    } else {
      setShowCustomDateRange(false);
      const timeRangeResponse = getTimestampByRangeTab(tabOption);
      const { startTime, endTime } = timeRangeResponse;
      setTimeRange({
        startTime,
        endTime,
      });
    }
  }

  useEffect(() => {
    setTimeRange({
      startTime: customDateRange.startDate,
      endTime: customDateRange.endDate,
    });
  }, [customDateRange.startDate, customDateRange.endDate]);

  useEffect(() => {
    const filterPayload = {
      startTime: timeRange.startTime,
      endTime: timeRange.endTime,
      selectedMasterValue: selectedMasterValue?.value,
    };
    handleFilterOptionsChange(filterPayload);
  }, [selectedTab, selectedMasterValue, timeRange]);

  const masterOptions = [
    { label: "A", value: 76768 },
    { label: "B", value: 43547 },
    { label: "C", value: 98989 },
  ];

  function handleMasterValueChange(selectedValue) {
    setSelectedMasterValue(selectedValue);
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-4">
          <Select
            styles={customStyles}
            placeholder={masterParamValue.toLocaleUpperCase()}
            options={masterOptions}
            value={selectedMasterValue}
            onChange={handleMasterValueChange}
            isDisabled={false}
          />
        </div>
        <div className="col-sm-8">
          <div className="sort-tabs">
            {config.timeRangeTabOption.map((opt) => {
              return (
                <div
                  key={opt}
                  className={`sort-tab ${selectedTab === opt ? "active" : ""}`}
                  onClick={() => handleTabChange(opt)}
                >
                  {opt.toLocaleUpperCase()}
                </div>
              );
            })}
          </div>
          {showCustomDateRange && (
            <CustomDateRange
              customDateRange={customDateRange}
              setCustomDateRange={setCustomDateRange}
              setShowCustomDateRange={setShowCustomDateRange}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
