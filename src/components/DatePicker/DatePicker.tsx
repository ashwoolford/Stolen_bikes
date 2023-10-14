import React from 'react';
import { ReactDatePicker } from './DatePicker.styles';

type Props = {
    placeholder?: string,
    onChange?: any,
    selected?: Date,
    maxDate?: Date
};

const DatePicker: React.FC<Props> = ({ placeholder, onChange, selected, maxDate }) => {
    return (
        <ReactDatePicker
            data-testid="react-date-picker"
            placeholderText={placeholder}
            onChange={onChange}
            selected={selected}
            maxDate={maxDate}
            className="date_picker input"
            wrapperClassName="date_picker margin-lr"
        />

    );
};

export default DatePicker;
