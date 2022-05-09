import { Autocomplete, TextField } from '@mui/material';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

export default function AutoComplete({
  options, value, disabled, style, onChange,
}) {
  const getActiveValue = () => _.find(options, (option) => option.key === value) || [];
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option?.text || ''}
      getOptionSelected={(option) => option.key === value}
      value={getActiveValue()}
      style={style}
      renderInput={(params) => <TextField {...params} placeholder="Chọn..." />}
      disabled={disabled}
      onChange={(e, target) => onChange(target?.key || '')}
      freeSolo
      fullWidth
    />
  );
}

AutoComplete.defaultProps = {
  value: '',
  disabled: false,
  style: {},
  onChange: undefined,
};

AutoComplete.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.shape({}),
  onChange: PropTypes.func,
};
