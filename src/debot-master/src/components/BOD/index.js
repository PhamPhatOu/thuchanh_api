import {
  Box, Grid, Typography,
} from '@mui/material';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

export default function BOD({
  data,
}) {
  return (
    <Box>
      {_.map(data, (item, index) => (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingBottom: 10 }} key={index}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img
                src={item.avatar}
                alt={`${index}`}
                loading="lazy"
                style={{ width: 200 }}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography style={{ whiteSpace: 'pre-wrap' }}>{item?.info}</Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

BOD.propTypes = {
  data: PropTypes.shape().isRequired,
};
