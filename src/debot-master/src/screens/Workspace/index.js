import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
  Box,
  Button, Tab, Tabs, Typography,
} from '@mui/material';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  AutoComplete, BOD, News, Structure, TabPanel, WorkingSchedule,
} from '../../components';
import { CATALOGS, INFORMATION } from '../../redux/actions/constants';

function tabProps(index) {
  return {
    id: index,
  };
}

export default function Workspace() {
  const {
    cities, allProvinceInfo,
  } = useSelector(({
    catalogs, information,
  }) => ({
    cities: catalogs.cities.data,
    allProvinceInfo: information.data,
  }));
  const dispatch = useDispatch();
  const handleFetchCities = useCallback(() => dispatch({
    type: CATALOGS.handlers.getCities,
  }), [dispatch]);
  const handleFetchInfo = useCallback((id) => dispatch({
    type: INFORMATION.handlers.fetchInfo,
    id,
  }), [dispatch]);

  const [selected, selectedSet] = useState();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (!_.size(cities)) {
      handleFetchCities();
    }
  }, []);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const citieOptions = _.map(cities, (city, key) => ({ text: city.name, key }));
  const provinceInfo = allProvinceInfo?.[selected];

  return (
    <Box style={{ padding: 20 }}>
      <Box>
        <Box>
          <Typography style={{ fontWeight: 'bold' }}>Chọn Sở giáo dục</Typography>
          <AutoComplete
            options={citieOptions}
            value={selected}
            onChange={(value) => selectedSet(value)}
          />
        </Box>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          style={{ float: 'right', marginTop: 10 }}
          onClick={() => handleFetchInfo(selected)}
        >
          <KeyboardArrowRightIcon fontSize="small" />
          Tra cứu
        </Button>
      </Box>
      {_.size(provinceInfo)
        ? (
          <Box
            style={{
              marginTop: 50, minHeight: 200, backgroundColor: '#fff', borderRadius: 20,
            }}
            elevation={3}
          >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={activeTab} onChange={handleChange}>
                <Tab label="Sơ đồ tổ chức" {...tabProps(0)} />
                <Tab label="Ban giám đốc" {...tabProps(1)} />
                <Tab label="Lịch công tác" {...tabProps(2)} />
                <Tab label="Tin tức - Sự kiện" {...tabProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={activeTab} index={0}>
              <Structure />
            </TabPanel>
            <TabPanel value={activeTab} index={1}>
              <BOD data={provinceInfo?.bod} />
            </TabPanel>
            <TabPanel value={activeTab} index={2}>
              <WorkingSchedule />
            </TabPanel>
            <TabPanel value={activeTab} index={3}>
              <News />
            </TabPanel>
          </Box>
        ) : null}
    </Box>
  );
}

Workspace.defaultProps = {
  cities: undefined,
  provinceInfo: undefined,
};

Workspace.propTypes = {
  cities: PropTypes.shape({}),
  provinceInfo: PropTypes.shape({}),
};
