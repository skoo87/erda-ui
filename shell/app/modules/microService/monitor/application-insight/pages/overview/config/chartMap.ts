// Copyright (c) 2021 Terminus, Inc.
//
// This program is free software: you can use, redistribute, and/or modify
// it under the terms of the GNU Affero General Public License, version 3
// or later ("AGPL"), as published by the Free Software Foundation.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

import { merge } from 'lodash';
import { sortRender, chartRender } from 'application-insight/common/components/aiRenderFactory';
import { ApiMap } from './apiConfig';
import i18n from 'i18n';

export const commonAttr = {
  moduleName: 'AIOverview',
  groupId: 'AIOverview',
};
const chartMap = merge({
  sortList: {
    type: 'sortList',
    ...commonAttr,
    chartName: 'overviewSort',
    viewProps: {
      onClickItem: null,
    },
  },
  overviewWeb: {
    titleText: i18n.t('microService:web transaction'),
    ...commonAttr,
    chartName: 'overviewWeb',
    viewProps: {
      unitType: 'TIME',
    },
  },
  overviewCpm: {
    titleText: i18n.t('microService:throughput'),
    ...commonAttr,
    chartName: 'overviewCpm',
    viewProps: {
      unitType: 'CPM',
    },
  },
}, ApiMap);

export default {
  sortList: sortRender(chartMap.sortList) as any,
  overviewWeb: chartRender(chartMap.overviewWeb) as any,
  overviewCpm: chartRender(chartMap.overviewCpm) as any,
};

